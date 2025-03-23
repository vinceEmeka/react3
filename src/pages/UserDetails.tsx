import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";

const UserDetails = () => {
  const { id } = useParams();
  const user = useAppSelector(state =>
    state.users.users.find(u => u.id === Number(id))
  );

  if (!user) return <p>User not found</p>;

  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
};

export default UserDetails;
