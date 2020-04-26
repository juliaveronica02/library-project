const initialState = {
  data: [],
};
const Library = (state = initialState, action) => {
  switch (action.type) {
    case "LIBRARY_ADD":
      return { ...state, data: [...state.data, action.payload] };

    case "LIBRARY_GET_DATA":
      return { ...state, data: action.payload };

  
    default:
      return state;
  }
};

export default Library;
