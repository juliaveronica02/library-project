// import React, { useState } from "react";

// import { connect } from "react-redux";
// import { getData } from "./../../ActionsCreators/library";

// const Index = (props) => {
//   const handleKeyUp = (event) => {
//     if (event.keyCode === 13) {
//       props.search(event.currentTarget.value);
//     }
//   };
//   //   const [data, setData] = useState({ getData });
//   //   const [search, setSearch] = useState("");
//   //   const handleSearch = () => {
//   //     setData([...data.filter((item) => item.bookTitle === search)]);
//   //   };
//   return (
//     <div>
//       <h2>Library-Project</h2>
//       {/* <div className="input-group mb-3 mx-auto" style={{ width: "30%" }}>
//         <input
//           className="form-control mr-sm-2"
//           type="text"
//           placeholder="Search"
//           onKeyUp={handleKeyUp}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button onClick={() => handleSearch()}>Filter</button>
//       </div> */}
//     </div>
//   );
// };
// const mapDispatchToProps = {
//   search: getData,
// };
// export default connect(null, mapDispatchToProps)(Index);
