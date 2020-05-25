import React from "react";

import { connect } from "react-redux";

import {
  deleteData,
  showDelete,
  showEdit,
} from "./../../ActionsCreators/library";
const Item = (props) => {
  const handleClick = () => {
    props.showDelete(props.data);
  };

  const handleClickUbah = () => {
    props.showEdit(props.data);
  };

  return (
    <tr>
      <td>{props.data.bookTitle}</td>
      <td>{props.data.year}</td>
      <td>{props.data.bookNumber}</td>
      <td>{props.data.status ? "di pinjam" : "ada"}</td>
      <td>
        <button className="btn btn-outline-warning" onClick={handleClickUbah}>
          ubah
        </button>
        <button className="btn btn-outline-danger" onClick={handleClick}>
          hapus
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = { deleteData, showDelete, showEdit };

export default connect(null, mapDispatchToProps)(Item);
