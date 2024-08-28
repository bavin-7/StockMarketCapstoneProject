import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Auth/auth";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "email is required";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    setErrors(errors);

    // Check if there are no errors in the form
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      console.log(formData);
      try {
        // Make an API request to get user data based on email and full name
        const response = await axios.get(
          `http://localhost:9001/users/login?email=${formData.email}&password=${formData.password}`
        );

        // Check if a user with the provided email and full name exists
        if (response.data.userId != null) {
          console.log(typeof response.data.userId);
          alert("Login Successful");
          const user = response.data;
          auth.login(user);
          navigate("/dash", { replace: true });
        } else {
          setLoginError("User not found. Please check your credentials.");
        }
      } catch (error) {
        console.error("Error:", error);
        setLoginError(
          "An error occurred while attempting to log in. Please try again later."
        );
      }
    }
  };

  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center " style={{ color: "purple" }}>
            LOGIN
          </h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            {/* <div className="mb-3">
                            <label htmlFor="CustomerID" className="form-label">CustomerID</label>
                            <input
                                type="text"
                                id="CustomerID"
                                placeholder='enter your CustomerID'
                                name="CustomerID"
                                value={formData.CustomerID}
                                onChange={(e) => handleInputChange(e)}
                                className={`form-control ${errors.CustomerID ? 'is-invalid' : ''}`}
                            />
                            {errors.CustomerID && <div className="invalid-feedback">{errors.CustomerID}</div>}
                        </div> */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="enter your email"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="enter your Password"
                name="password"
                value={formData.password}
                onChange={(e) => handleInputChange(e)}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            {loginError && (
              <div className="alert alert-danger">{loginError}</div>
            )}
            <button
              type="submit"
              className="btn btn-primary "
              style={{ backgroundColor: "purple",color:"white" }}
            >
              Login
            </button>
            {/* <Link className='btn btn-danger mx-2' to="/">Cancel</Link> */}
            <p className="mt-2">
              First time user?{" "}
              <Link to="/register" style={{ color: "purple" }}>
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
