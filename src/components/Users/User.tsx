import React from "react";

const User = () => {
  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">User name <span className="card-text fs-6">(User email)</span></h5>
            <p className="card-text">User role</p>
            <p className="card-text">User status</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;