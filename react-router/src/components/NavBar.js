import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <div className="App">
      <StyledNavBar>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="products"
          end
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          Index
        </NavLink>
        <NavLink
          to="products/new"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
        >
          New
        </NavLink>
      </StyledNavBar>
      <Outlet />
    </div>
  );
};

const StyledNavBar = styled.nav`
  width: 50%;
  min-width: 200px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export default NavBar;
