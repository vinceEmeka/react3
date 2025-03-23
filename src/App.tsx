import React, { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "./hooks"; 
import { fetchUsers } from "../src/app/UsersSlice";
import UserCard from './components/UserCard';
import { User } from "../src/app/UsersSlice";
import UserForm from "./pages/UserForm";


// import AddUserForm from './features/users/AddUserForm';
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const status = useAppSelector((state) => state.users.status);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showForm, setShowForm] = useState(false);


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
   return (

   <div className="container">
    <h1 className="header">User Management System</h1>
  <button className="addnew" onClick={() => {
  setEditingUser(null); 
  setShowForm(true);
}}>New User</button>


    {showForm && (
        <>
          <h2>{editingUser ? "Edit User" : "Add New User"}</h2>
          <UserForm
            selectedUser={editingUser}
            onCancel={() => {
              setEditingUser(null);
              setShowForm(false);
            }}
          />
          <hr />
        </>
      )}

      
   <UserCard
        users={users}
        onEdit={(user) => {
          setEditingUser(user);
          setShowForm(true);
        }}
      />

   </div>
  );
}


export default App

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import UserList from "./pages/UserList"
// import UserDetails from "./pages/UserDetails";
// import UserForm from "./pages/UserForm";
// import Layout from "./components/Layout";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Navigate to="/users" />} />
//           <Route path="/users" element={<UserList />} />
//           <Route path="/users/:id" element={<UserDetails />} />
//           <Route path="/add-user" element={<UserForm  />} />
//           <Route path="/edit-user/:id" element={<UserForm />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;

