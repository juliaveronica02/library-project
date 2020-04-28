const initialState = {
  data: [],
  dataEdit: {},
};
const Library = (state = initialState, action) => {
  switch (action.type) {
    case "LIBRARY_ADD":
      return { ...state, data: [...state.data, action.payload] };

    case "LIBRARY_GET_DATA":
      return { ...state, data: action.payload };
    case "LIBRARY_EDIT":
      return {};
    case "LIBRARY_DATA_EDIT":
      console.log("halo");
      return { ...state, dataEdit: action.payload };

    default:
      return state;
  }
};

export default Library;
