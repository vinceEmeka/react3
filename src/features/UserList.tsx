
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchUsers, deleteUser } from '../app/UsersSlice';


export default function UsersList() {
  const dispatch = useAppDispatch();
  const { users, status, error } = useAppSelector(state => state.users);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchUsers());
  }, [dispatch, status]);

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <h2>User List</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} — {user.email}</p>

          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
