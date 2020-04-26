const Library = (state = initialState, action) => {
  let data;
  switch (action.type) {
    case "LIBRARY_ADD":
      return { ...state, data: [...state.data, action.payload] };

    case "LIBRARY_GET_DATA":
      return { ...state, data: action.payload };

    case "LIBRARY_EDIT":
      data = state.map((item) => {
        console.log(state);
        if (item._id === action.payload._id) {
          return action.payload;
        } else {
          return item;
        }
      });
      return { ...state, data: data };
    case "LIBRARY_HIDE_EDIT":
      return { ...state, showEdit: false };
    case "LIBRARY_SHOW_EDIT":
      return { ...state, showEdit: true, dataEdit: action.payload };

    default:
      return state;
  }
};

export default Library;
