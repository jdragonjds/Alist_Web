import React from "react";
import styled from "styled-components";
import logo from "../img/ALIST-logos_transparent.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { user, logoutUser } = useGlobalContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/" className="home-link">
          <img src={logo} alt="jobs app" className="logo" />
        </Link>
        {user && (
          <div className="nav-links">
            <div className="form-label">
              hello,
              <Link to="/usertab">{user}</Link>
            </div>
            <button
              className="btn btn-small"
              onClick={() => {
                logoutUser();
              }}
            >
              logout
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 6rem;
  font-family: "Inconsolata", monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: var(--fluid-width);
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .form-label {
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    text-align: center;
    margin-right: 10px;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    color: white;
    a {
      text-decoration: none;
      color: white;
    }
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .home-link {
    display: flex;
    align-items: flex-end;
  }
  .logo {
    max-width: 200px;
  }
  .btn {
    text-align: center;
    box-sizing: inherit;
    font-family: "Roboto", "Open Sans", sans-serif;
    font-weight: 20px;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.7rem 1rem;
    border-color: #f8f9fa;
    cursor: pointer;
    text-decoration: none;
    color: white;
    margin-bottom: 5px;
    width: 60px;
    height: 25px;
    border-radius: 8px;
    background: none;
  }
  .btn:hover {
    color: black;
    background: white;
  }
  @media (min-width: 776px) {
  } ;
`;

export default Navbar;
