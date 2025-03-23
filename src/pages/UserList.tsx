import { useAppSelector } from "../hooks";
import { Link } from "react-router-dom";

const UserList: React.FC = () => {
  const users = useAppSelector(state => state.users.users);

  return (
    <div className="user-list">
      {users.map(user => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <Link to={`/users/${user.id}`}>Details</Link>
          <Link to={`/edit-user/${user.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};
export default UserList;
