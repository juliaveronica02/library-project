import React, { useState } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";

import { add, hideAdd } from "./../../ActionsCreators/library";

const Add = (props) => {
  // const [data, setData] = useState({
  //   number: 0,
  //   status: false,
  //   title: "",
  //   year: 1990,
  // });year

  const onSubmit = (data) => {
    props.add(data);
  };

  // const handleChange = (event) => {
  //   let { name, value, type, checked } = event.currentTarget;
  //   if (type == "checkbox") {
  //     setData({
  //       ...data,
  //       [name]: checked,
  //     });
  //     console.log(checked);
  //   } else {
  //     setData({
  //       ...data,
  //       [name]: value,
  //     });
  //   }
  // };

  return (
    <Formik
      initialValues={{
        bookTitle: "",
        years: "",
        bookNumber: "",
        status: "",
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="card">
              <div className="card-body">
                <Form>
                  <h4 className="heading">Input Book</h4>
                  <Field
                    type="text"
                    name="bookTitle"
                    placeholder="Book Title"
                  />
                  {errors.bookTitle && touched.bookTitle && errors.bookTitle}
                  <p />
                  <Field type="number" name="years" placeholder="Years" />
                  {errors.years && touched.years && errors.years}
                  <p />
                  <Field
                    type="number"
                    name="bookNumber"
                    placeholder="Book Number"
                  />
                  {errors.bookNumber && touched.bookNumber && errors.bookNumber}
                  <p />
                  <Field type="text" name="status" placeholder="status" />
                  {errors.status && touched.status && errors.status}
                  <p />
                  <div className="text-center">
                    <button type="submit" className="btn btn-outline-primary">
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => {
  return {
    isShowAdd: state.libraries.isShowAdd,
  };
};

const mapDispatchToProps = {
  add,
  hideAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
