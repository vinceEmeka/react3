import React from "react";
import { User } from "../app/UsersSlice"; 

interface UserCardProps {
  users: User[];
}

const UserCard: React.FC<UserCardProps> = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
