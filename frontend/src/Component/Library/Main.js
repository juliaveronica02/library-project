import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getData } from "./../../ActionsCreators/library";
import "./style.css";
// import Edit from "./Edit";

const Main = (props) => {
  useEffect(() => {
    if (!props.data.length) props.getData();
  }, []);
  const [data, setData] = useState({ getData: [] });
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    setData([...data.filter((item) => item.bookTitle === search)]);
  };

  return (
    <div>
      <div className="input-group mb-3 mx-auto" style={{ width: "30%" }}>
        <input
          className="form-control mr-sm-2"
          type="text"
          name="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Filter</button>
      </div>
      <div>
        <table
          className="table table-dark table-striped table-hover justify-content-center"
          style={{ width: "70%" }}
        >
          <thead>
            <tr>
              <td>Title</td>
              <td>Year</td>
              <td>Number</td>
              <td>Status</td>
              <td>Button</td>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <tr key={index}>
                <td>{item.bookTitle}</td>
                <td>{item.years}</td>
                <td>{item.bookNumber}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <Edit /> */}
      </div>
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
