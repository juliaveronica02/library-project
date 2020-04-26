import axios from "axios";

const url = "https://library-jv.herokuapp.com/library";

export const add = (data) => {
  return (dispatch) => {
    axios.post(`${url}/post`, data);
    window.location
      .reload()
      .then((res) => {
        dispatch({
          type: "LIBRARY_ADD",
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
export const getData = (data) => {
  return (dispatch) => {
    axios.get(`${url}/get`, data).then((res) => {
      dispatch({
        type: "LIBRARY_GET_DATA",
        payload: res.data,
      });
    });
  };
};
export const edit = (data) => {
  return (dispatch) => {
    axios.put(`${url}/edit/${data._id}`, data).then((res) => {
      dispatch({
        type: "LIBRARY_EDIT_DATA",
        payload: res.data,
      });
    });
  };
};
export const hideEdit = () => {
  return { type: `LIBRARY_HIDE_EDIT` };
};
export const showEdit = (data) => {
  return { type: `LIBRARY_SHOW_EDIT`, payload: data };
};
