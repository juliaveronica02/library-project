import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { getData } from "./../../ActionsCreators/library";

import Add from "./Add";

const Main = (props) => {
  useEffect(() => {
    if (!props.data.length) props.getData;
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>Title</td>
            <td>Year</td>
            <td>Number</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <item key={index} data={item} />
          ))}
        </tbody>
        <Add />
      </Table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.libraries.data,
  };
};
const mapDispatchToProps = { getData };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
