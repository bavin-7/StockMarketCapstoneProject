// // AboutUsPage.js
// import React from 'react';
// import './AboutUs.css'; // Create a new CSS file for styling if needed
// import team from './team.jpg'; // Import the image for Team
// import mission from './mission.jpg'; // Import the image for Mission
// import contact from './contact.jpg'; // Import the image for Contact
// import thankyoujpg from './thankyoujpg.jpg'; // Import the image for Thank You
// import welcome from './welcome.jpeg'; // Import the image for Welcome

// const AboutUsPage = () => {
//   return (
//     <div className="container about-us-container">
//       {/* About Us Heading */}
//       <div className="row">
//         <div className="col-md-12 text-center">
//           <h2 className="about-us-heading" style={{ color: "purple" }}>
//             About Us
//           </h2>
//         </div>
//       </div>

//       {/* Welcome Section */}
//       <div className="row welcome-section">
//         <div className="col-md-6">
//           <div className="welcome-content">
//             <p className="welcome-text">
//               Welcome to our Customer Support System! We are a passionate team
//               dedicated to providing exceptional support to our valued customers.
//             </p>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <img src={welcome} className="img-fluid" alt="Welcome" />
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="row justify-content-center">
//         {/* Team Card */}
//         <div className="col-md-6 mb-4">
//           <div className="card mx-auto">
//             <img src={team} className="card-img-top" alt="Team" />
//             <div className="card-body">
//               <h5 className="card-title">Our Team</h5>
//               <p className="card-text">
//                 Meet the faces behind the scenes, working tirelessly to assist
//                 you. We believe in building strong relationships with our
//                 customers.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Mission Card */}
//         <div className="col-md-6 mb-4">
//           <div className="card mx-auto">
//             <img src={mission} className="card-img-top" alt="Mission" />
//             <div className="card-body">
//               <h5 className="card-title">Our Mission</h5>
//               <p className="card-text">
//                 Ensuring a seamless experience for you with our products and
//                 services. Your satisfaction is our priority, and we are
//                 committed to resolving any issues you may encounter.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="row justify-content-center">
//         {/* Contact Card */}
//         <div className="col-md-6 mb-4">
//           <div className="card mx-auto">
//             <img src={contact} className="card-img-top" alt="Contact" />
//             <div className="card-body">
//               <h5 className="card-title">Contact Us</h5>
//               <p className="card-text">
//                 Whether you have questions, concerns, or feedback, our support
//                 team is here for you. Reach out via email, phone, or through our
//                 support portal. We are available 24/7 to address your inquiries.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Thank You Card */}
//         <div className="col-md-6 mb-4">
//           <div className="card mx-auto">
//             <img
//               src={thankyoujpg}
//               className="card-img-top"
//               alt="Thank You"
//             />
//             <div className="card-body">
//               <h5 className="card-title">Thank You</h5>
//               <p className="card-text">
//                 Thank you for choosing us. Your trust is highly appreciated, and
//                 we look forward to serving you with excellence.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;


// // AboutUsPage.js
// import React from 'react';
// import './AboutUs.css'; // Create a new CSS file for styling if needed
// import team from './team.jpg'; // Import the image for Team
// import mission from './mission.jpg'; // Import the image for Mission
// import contact from './contact.jpg'; // Import the image for Contact
// import thankyoujpg from './thankyoujpg.jpg'; // Import the image for Thank You
// import welcome from './welcome.jpeg'; // Import the image for Welcome

// const AboutUsPage = () => {
//   return (
//     <div className="container about-us-container">
//       {/* About Us Heading */}
//       <div className="row">
//         <div className="col-md-12 text-center">
//           <h2 className="about-us-heading" style={{ color: "purple" }}>
//             About Us
//           </h2>
//         </div>
//       </div>

//       {/* Welcome Section */}
//       <div className="row welcome-section">
//         <div className="col-md-6">
//           <div className="welcome-content">
//             <p className="welcome-text">
//               Welcome to our Customer Support System! We are a passionate team
//               dedicated to providing exceptional support to our valued customers.
//             </p>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <img src={welcome} className="img-fluid" alt="Welcome" />
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="row justify-content-center">
//         {/* Team and Mission Cards */}
//         <div className="row mb-4">
//           {/* Team Card */}
//           <div className="col-md-6">
//             <div className="card h-100">
//               <img src={team} className="card-img-top img-fluid" style={{ height: "300px" }} alt="Team" />
//               <div className="card-body">
//                 <h5 className="card-title">Our Team</h5>
//                 <p className="card-text">
//                   Meet the faces behind the scenes, working tirelessly to assist
//                   you. We believe in building strong relationships with our
//                   customers.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Mission Card */}
//           <div className="col-md-6">
//             <div className="card h-100">
//               <img src={mission} className="card-img-top img-fluid" alt="Mission" />
//               <div className="card-body">
//                 <h5 className="card-title">Our Mission</h5>
//                 <p className="card-text">
//                   Ensuring a seamless experience for you with our products and
//                   services. Your satisfaction is our priority, and we are
//                   committed to resolving any issues you may encounter.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact and Thank You Cards */}
//         <div className="row mb-4">
//           {/* Contact Card */}
//           <div className="col-md-6">
//             <div className="card h-100">
//               <img src={contact} className="card-img-top img-fluid" alt="Contact" />
//               <div className="card-body">
//                 <h5 className="card-title">Contact Us</h5>
//                 <p className="card-text">
//                   Whether you have questions, concerns, or feedback, our support
//                   team is here for you. Reach out via email, phone, or through our
//                   support portal. We are available 24/7 to address your inquiries.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Thank You Card */}
//           <div className="col-md-6">
//             <div className="card h-100">
//               <img
//                 src={thankyoujpg}
//                 className="card-img-top img-fluid"
//                 alt="Thank You"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">Thank You</h5>
//                 <p className="card-text">
//                   Thank you for choosing us. Your trust is highly appreciated, and
//                   we look forward to serving you with excellence.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;
// AboutUsPage.js
import React from 'react';
import './AboutUs.css'; // Create a new CSS file for styling if needed
import team from './team.jpg'; // Import the image for Team
import mission from './mission.jpg'; // Import the image for Mission
import contact from './contact.jpg'; // Import the image for Contact
import thankyoujpg from './thankyoujpg.jpg'; // Import the image for Thank You
import welcome from './welcome.jpeg'; // Import the image for Welcome

const AboutUsPage = () => {
  return (
    <div className="container about-us-container">
      {/* About Us Heading */}
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="about-us-heading" style={{ color: "purple" , fontWeight:"bolder", fontFamily:"Times New Roman, Times, serif"}}>
            About Us
          </h1>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="row welcome-section">
        <div className="col-md-6">
          <div className="welcome-content">
            <h4 className="welcome-text"style={{ color: "purple" , fontWeight:"bold",fontFamily:"Times New Roman, Times, serif"}} >
              Welcome to our Customer Support System! We are a passionate team
              dedicated to providing exceptional support to our valued customers.
            </h4>
          </div>
        </div>
        <div className="col-md-6">
          <img src={welcome} className="img-fluid" alt="Welcome" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="row justify-content-center">
        {/* Team and Mission Cards */}
        <div className="row mb-4">
          {/* Team Card */}
          <div className="col-md-6">
            <div className="card h-100 mx-auto"> {/* Add mx-auto class here */}
              <img src={team} className="card-img-top img-fluid" style={{ height: "150vh" }} alt="Team" />
              <div className="card-body">
                <h5 className="card-title">Our Team</h5>
                <p className="card-text">
                  Meet the faces behind the scenes, working tirelessly to assist
                  you. We believe in building strong relationships with our
                  customers.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="col-md-6">
            <div className="card h-100 mx-auto"> {/* Add mx-auto class here */}
              <img src={mission} className="card-img-top img-fluid" style={{ height: "300px" }} alt="Mission" />
              <div className="card-body">
                <h5 className="card-title">Our Mission</h5>
                <p className="card-text">
                  Ensuring a seamless experience for you with our products and
                  services. Your satisfaction is our priority, and we are
                  committed to resolving any issues you may encounter.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact and Thank You Cards */}
        <div className="row mb-4">
          {/* Contact Card */}
          <div className="col-md-6">
            <div className="card h-100 mx-auto"> {/* Add mx-auto class here */}
              <img src={contact} className="card-img-top img-fluid" style={{ height: "300px" }} alt="Contact" />
              <div className="card-body">
                <h5 className="card-title">Contact Us</h5>
                <p className="card-text">
                  Whether you have questions, concerns, or feedback, our support
                  team is here for you. Reach out via email, phone, or through our
                  support portal. We are available 24/7 to address your inquiries.
                </p>
              </div>
            </div>
          </div>

          {/* Thank You Card */}
          <div className="col-md-6">
            <div className="card h-100 mx-auto"> {/* Add mx-auto class here */}
              <img
                src={thankyoujpg}
                className="card-img-top img-fluid"
                style={{ height: "300px" }}
                alt="Thank You"
              />
              <div className="card-body">
                <h5 className="card-title">Thank You</h5>
                <p className="card-text">
                  Thank you for choosing us. Your trust is highly appreciated, and
                  we look forward to serving you with excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

