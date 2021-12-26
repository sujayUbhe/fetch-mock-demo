import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "email",
    text: "email",
    sort: true,
  },
  {
    dataField: "first_name",
    text: "first_name",
    sort: true,
  },
  {
    dataField: "last_name",
    text: "last_name",
    sort: true,
  },
];

export const UserList = ({ userData, ...props }) => {
  return userData ? (
    <BootstrapTable
      keyField="id"
      data={userData.data}
      columns={columns}
      striped
      hover
    />
  ) : (
    <div className="d-flex justify-content-center align-items-center h-75">
    <div className="spinner-border text-secondary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    </div>
  );
};
