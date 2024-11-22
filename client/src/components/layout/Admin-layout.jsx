import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { FaHome } from "react-icons/fa";
export const Adminlayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <FaUserAlt />
                <NavLink to="users"> Admin</NavLink>
              </li>
              <li>
                <MdContactPhone />
                <NavLink to="contacts">Contacts</NavLink>
              </li>
              <li>
                <MdHomeRepairService />
                <NavLink to="services">services</NavLink>
              </li>
              <li>
                <FaHome />
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
