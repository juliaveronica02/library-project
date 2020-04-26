import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "./../../ActionsCreators/library";

const Main = (props) => {
  useEffect(() => {
    if (!props.data.length) props.getData();
  }, []);

  return (
    <div className="text-center mt-5">
      <table className="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Year</td>
            <td>Number</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <tr key={index}>
              <td>{item._id}</td>
              <td>{item.bookTitle}</td>
              <td>{item.years}</td>
              <td>{item.bookNumber}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.library.data);
  return {
    data: state.library.data,
  };
};
const mapDispatchToProps = { getData };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
