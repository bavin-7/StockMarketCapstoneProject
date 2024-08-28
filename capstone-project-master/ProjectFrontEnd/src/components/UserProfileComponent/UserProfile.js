
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UserProfile = () => {
//   //   const [user, setUser] = useState(null);
//   const Id = localStorage.getItem("userId");
//   let user;

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         // Replace the following line with your actual API endpoint for fetching user data

//         const response = await axios.get(
//           `http://localhost:9090/users?userId=${Id}`
//         );
//         console.log(response);
//         user = response.data;
//         // setUser(response.data); // Assuming the API response contains user data
//       } catch (error) {
//         console.error("Error fetching user data:", error);

//     };

//     fetchUserData();
//   }, []);


//   return (
//     // <div className="container">
//     //   <div className="row">
//     //     <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//     //       <h2 className="text-center" style={{ color: "purple" }}>
//     //         User Profile
//     //       </h2>
//     //       {/* {user ? ( */}
//     //       <div>
//     //         <div className="mb-3">
//     //           <label className="form-label text-left">Full Name:</label>
//     //           <div>{user.fullName}</div>
//     //         </div>
//     //         <div className="mb-3">
//     //           <label className="form-label text-left">Email:</label>
//     //           <div>{user.email}</div>
//     //         </div>
//     //         <div className="mb-3">
//     //           <label className="form-label text-left">Contact Number:</label>
//     //           <div>{user.contactNumber}</div>
//     //         </div>
//     //         <div className="mb-3">
//     //           <label className="form-label text-left">Address:</label>
//     //           <div>{user.address}</div>
//     //         </div>
//     //         <div className="mb-3">
//     //           <label className="form-label text-left">Date of Birth:</label>
//     //           <div>{user.dob}</div>
//     //         </div>
//     //         <div className="mb-3">
//     //           <label className="form-label text-left">Employment Status:</label>
//     //           <div>{user.employmentStatus}</div>
//     //         </div>
//     //         <div className="mb-3">
//     //           <label className="form-label text-left">Employer Details:</label>
//     //           <div>{user.employerDetails}</div>
//     //         </div>
//     //         <div className="mb-3">
//     //           <label className="form-label text-left">PAN Card:</label>
//     //           <div>{user.panCard}</div>
//     //         </div>
//     //       </div>

//     //       {/* ) : (
//     //         <p>Loading user data...</p>
//     //       )} */}
//     //     </div>
//     //   </div>
//     // </div>


//     <div>{console.log(user)}</div>
//   );
// };

// export default UserProfile;


