import React from "react";
import { Link } from "react-router-dom";
import { useRole } from "../common/RoleContext.js";
import { ROLES } from "../../utils/Consts";
import styled from "styled-components"; // Import the styled-components library

const StyledNavbar = styled.nav`
  background-color: #f1c40f;
  padding: 10px 0;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  margin: 0 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #34495e;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #e74c3c;
  }
`;

const Navbar = ({ isLoggedIn }) => {
  const { userRole } = useRole();

  const handleLogout = () => {
    console.log("logging out");
    localStorage.setItem("token", null);
    localStorage.setItem("role", null);
  };

  return (
    <StyledNavbar>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/">Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/settings">Settings</StyledLink>
        </StyledLi>
        {userRole === ROLES.customer && (
          <StyledLi>
            <StyledLink to="/mytrips">My Trips</StyledLink>
          </StyledLi>
        )}
        <StyledLi>
          <StyledLink to="/flights">All Flights</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNavbar>
  );
};

export default Navbar;
