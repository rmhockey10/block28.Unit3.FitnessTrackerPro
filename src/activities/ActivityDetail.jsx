import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function ActivityDetails() {
  const parms = useParams();

  const { data, loading, error } = useQuery(`/activities/${parms.id}`);

  const { token } = useAuth();
  const {
    mutate: deleteActivity,
    loading: deleteLoading,
    error: deleteError,
  } = useMutation("DELETE", `/activities/${parms.id}`, ["activities"]);

  if (data && token && !error && !loading) {
    return (
      <>
        <p>{data.name}</p>
        <p>{data.description}</p>
        <p>{data.creatorName}</p>
        {token && (
          <button onClick={() => deleteActivity()}>
            {deleteLoading ? "Deleting" : deleteError ? deleteError : "Delete"}
          </button>
        )}
      </>
    );
  }
}
