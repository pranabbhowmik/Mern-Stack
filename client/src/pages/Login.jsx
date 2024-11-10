import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const URL = "http://localhost:3000/api/auth/login";
import { useAuth } from "../store/auth";
export const Login = () => {
  const { storedtoken } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handelInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      if (response.ok) {
        // After logging in, store the token in local storage
        storedtoken(res_data.token);

        setUser({
          email: "",
          password: "",
        });
        toast.success("Login Successfully");
        navigate("/about");
      } else {
        // Show the exact message from the server in the toast
        toast.error(res_data.message);
      }
    } catch (error) {
      console.log("Login Error", error);
      toast.error(
        "An error occurred while logging in. Please try again later."
      );
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="../../public/images/login.png"
                  alt="Registion pictrure"
                  width="300"
                  height="300"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">User login from </h1>
                <br />
                <form onSubmit={handelSubmit}>
                  <div>
                    {/* Entering the enail */}
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Email id"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handelInput}
                    />
                    {/* Enter Password */}
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password "
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handelInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Log in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
