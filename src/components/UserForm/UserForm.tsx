import React, { useState } from "react";
import { User, UserMutation } from "../../types";

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({ onSubmit }) => {
  const [user, setUser] = useState<UserMutation>({
    name: "",
    email: "",
    role: "",
    status: false,
  });

  const onUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setUser((prev) => ({ ...prev, [name]: checked }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Date.now(),
      ...user,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={user.name}
          onChange={onUserChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={onUserChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          className="form-control"
          value={user.role}
          onChange={onUserChange}
        >
          <option disabled value="">
            Please select a value!
          </option>
          <option>User</option>
          <option>Editor</option>
          <option>Admin</option>
        </select>
      </div>
      <div className="form-check mb-3">
        <label htmlFor="status" className="form-check-label">
          Status
        </label>
        <input
          type="checkbox"
          name="status"
          id="status"
          className="form-check-input"
          onChange={onCheckboxChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default UserForm;