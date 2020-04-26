const initialState = {
  data: [],
};
const Library = (state = initialState, action) => {
  switch (action.type) {
    case "LIBRARY_ADD":
      return { ...state, data: [...state.data, action.payload] };

    case "LIBRARY_GET_DATA":
      return { ...state, data: action.payload };

    case "LIBRARY_EDIT":
      data = state.map((item) => {
        console.log(state);
        if (item.id === payload.id) {
          return payload;
        } else {
          return item;
        }
      });
      return { ...state, data: data };
    case "LIBRARY_HIDE_EDIT":
      return { ...state, showEdit: false };
    case "LIBRARY_SHOW_EDIT":
      return { ...state, showEdit: true, dataEdit: payload };

    default:
      return state;
  }
};

export default Library;
