import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { addUser, updateUser } from "../app/UsersSlice";
import { User } from "../app/UsersSlice";

interface UserFormProps {
  selectedUser: User | null;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ selectedUser, onCancel }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    email: "",
    phone: 0,
  });

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    } else {
      setFormData({
        id: Date.now(),
        name: "",
        email: "",
        phone: 0,
      });
    }
  }, [selectedUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "phone" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedUser) {
      dispatch(updateUser(formData));
    } else {
      dispatch(addUser({ ...formData, id: Date.now() }));
    }
    onCancel(); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" type="number" required />

      <button type="submit">{selectedUser ? "Update" : "Add"} User</button>
      {selectedUser && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default UserForm;
