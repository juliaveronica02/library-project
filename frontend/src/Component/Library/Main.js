import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Table } from "react-bootstrap";

import { getData } from "./../../ActionsCreators/library";

import Add from "./Add";
import Delete from "./Delete";
import Edit from "./Edit";
import Item from "./Item";

const Main = (props) => {
  useEffect(() => {
    if (!props.data.length) props.getData();
  }, []);

  return (
    <div>
      <Add />
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Title</td>
            <td>year</td>
            <td>Number</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <Item key={index} data={item} />
          ))}
        </tbody>
      </Table>
      <Delete />
      <Edit />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.library.data,
  };
};
const mapDispatchToProps = { getData };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
