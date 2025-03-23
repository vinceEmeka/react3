import React from "react";
import { User } from "../app/UsersSlice"; 
import { useAppDispatch } from "../hooks";
import { deleteUser } from "../app/UsersSlice";

interface UserCardProps {
  users: User[];
  onEdit: (user: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ users, onEdit }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
           <div className="actions">
            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default UserCard;
