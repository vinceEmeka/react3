import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { addUser } from '../app/UsersSlice';

let nextId = 11; // assuming 10 users from API

export default function AddUserForm() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addUser({ id: nextId++, name, email, phone }));
    setName('');
    setEmail('');
    setPhone('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Add</button>
    </form>
  );
}
