import React from "react";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { add } from "./../../ActionsCreators/library";

const Add = (props) => {
  //const [data] = useState([]);
  const onSubmit = (data) => {
    props.add(data);
  };

  // const onSubmit = (values) => {
  //   console.log(values);
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

const mapDispatchToProps = {
  add,
};

export default connect(null, mapDispatchToProps)(Add);
// function validateBookTitle(value) {
//     let error;

//     if (value === "") {
//       error = "Required";
//     }

//     return error;
//   }
//   function validateYears(value) {
//     let error;

//     if (value === "") {
//       error = "Required";
//     }

//     return error;
//   }
//   function validateBookNumber(value) {
//     let error;

//     if (value === "") {
//       error = "Required";
//     }

//     return error;
//   }
//   function validateBookStatus(value) {
//     let error;

//     if (value === "") {
//       error = "Required";
//     }

//     return error;
//   }
