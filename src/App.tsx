import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./hooks"; 
import { fetchUsers } from "../src/app/UsersSlice";
// import UserCard from "./UserCard";
import UserCard from './components/UserCard';
// import UsersList from './features/UserList';


// import AddUserForm from './features/users/AddUserForm';
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const status = useAppSelector((state) => state.users.status);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading users...</p>
      </div>
    );
  }
   return <UserCard users={users} />;
}


export default App
