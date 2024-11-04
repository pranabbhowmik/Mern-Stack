import React, { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    username: "",
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

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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
                  width="500"
                  height="500"
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
