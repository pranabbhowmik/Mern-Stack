import React, { useState } from "react";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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
  // handel Submit form
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
                  src="../../public/images/register.png"
                  alt="Registion pictrure"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form </h1>
                <br />
                <form onSubmit={handelSubmit}>
                  <div>
                    {/* Entering username */}
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handelInput}
                    />
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
                    {/* Entering Phone Number */}
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter phone Number"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
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
                    Register Now
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
