import React from "react";

const UserForm = () => {
  return (
    <form>
      <h4>Add new user</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select name="role" id="role" className="form-control">
          <option value="user"></option>
          <option value="editor"></option>
          <option value="admin"></option>
        </select>
      </div>

      <div className="form-check mb-3">
        <label htmlFor="status" className="form-check-label">Status</label>
        <input
          type="checkbox"
          name="status"
          id="status"
          className="form-check-input"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default UserForm;
