import React from "react";
import { User } from "../../types";

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({ user }) => {
  const email = `mailto:${user.email}`;
  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">
              {user.name}{" "}
              <span className="card-text fs-6">
                (<a href={email}>{user.email}</a>)
              </span>
            </h5>
            <p className="card-text">{user.role}</p>
            <p className="card-text">{user.status ? "Active" : "Inactive"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;