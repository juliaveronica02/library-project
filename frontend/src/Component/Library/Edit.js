import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { edit, hideEdit } from "./../../ActionsCreators/library";

const Edit = (props) => {
  const [data, setData] = useState({
    bookTitle: props.data.bookTitle,
    years: props.data.years,
    bookNumber: props.data.bookNumber,
    status: props.data.status,
  });
  useEffect(() => {
    setData(props.data);
    console.log(props.data);
  }, [props.data]);
};

const mapStateToProps = (state) => {
  return {
    data: state.library.dataEdit,
    isShowEdit: state.library.isShowEdit,
  };
};

const mapDispatchToProps = {
  edit,
  hideEdit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
