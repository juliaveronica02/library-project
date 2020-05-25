import axios from "axios";

// const url = "https://library-jv.herokuapp.com/library";
const url = `${process.env.REACT_APP_URL_SERVER}/library`;

export const add = (data) => {
  return (dispatch) => {
    axios.post(`${url}/post`, data).then((response) => {
      window.location.reload();
      dispatch({
        type: "LIBRARY_ADD",
        payload: response.data,
      });
    });
  };
  //   return async (dispatch) => {
  //     const response = await axios.post(url, data);
  //     dispatch({
  //       type: "LIBRARY_ADD",
  //       payload: response.data,
  //     });

  //     dispatch({
  //       type: "LIBRARY_HIDE_ADD",
  // });
  //   };
};

export const deleteData = (id) => {
  return async (dispatch) => {
    await axios.delete(`${url}/${id}`);

    dispatch({
      type: "LIBRARY_DELETE_DATA",
      payload: id,
    });

    dispatch({
      type: "LIBRARY_HIDE_DELETE",
    });
  };
};

export const edit = (data) => {
  return async (dispatch) => {
    const response = await axios.put(`${url}/${data._id}`, data);
    dispatch({
      type: "LIBRARY_EDIT_DATA",
      payload: response.data,
    });

    dispatch({
      type: "LIBRARY_HIDE_EDIT",
    });
  };
};

// export const getData = (query) => {
//   let pertanyaan;
//   if (query) {
//     pertanyaan = { params: { title: query } };
//   }
//   return async (dispatch) => {
//     const response = await axios.get(url, pertanyaan);
//     dispatch({
//       type: "LIBRARY_GET_DATA",
//       payload: response.data,
//     });
//   };
// };
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

export const hideAdd = () => {
  return {
    type: "LIBRARY_HIDE_ADD",
  };
};

export const hideDelete = () => {
  return {
    type: "LIBRARY_HIDE_DELETE",
  };
};

export const hideEdit = () => {
  return {
    type: "LIBRARY_HIDE_EDIT",
  };
};

// export const search = (query) => {
//     return async(dispatch) => {
//         const response = await axios.get(url, {
//             params: {
//                 title: query
//             }
//         });
//         dispatch({
//             type: 'LIBRARY_GET_DATA',
//             payload: response.data
//         })
//     }
// }

export const showAdd = () => {
  return {
    type: "LIBRARY_SHOW_ADD",
  };
};

export const showDelete = (data) => {
  return {
    type: "LIBRARY_SHOW_DELETE",
    payload: data,
  };
};

export const showEdit = (data) => {
  return {
    type: "LIBRARY_SHOW_EDIT",
    payload: data,
  };
};
