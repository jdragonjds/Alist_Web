import React from "react";
import styled from "styled-components";
import logo from "../img/ALIST-logos_transparent.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faClapperboard,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const TabBar = () => {
  return (
    <Wrapper>
      <ul class="tabs" id="footer-tabs">
        <li>
          <Link to="/dashboard?tab=explore" className="btn">
            <FontAwesomeIcon icon={faCoffee} />
            <span>Explore</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard?tab=friends" className="btn">
            <FontAwesomeIcon icon={faUsers} />
            <span>Friends</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard?tab=alist" className="btn">
            <FontAwesomeIcon icon={faClapperboard} />
            <span>Alist</span>
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1rem;
  font-family: "Inconsolata", monospace;
  .tabs {
    height: 50px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: space-between;
    flex-wrap: wrap;
    flex-gap: 20px;
    list-style-type: none;
    color: white;
  }
  .tabs li {
    display: inline-block;
    padding: 5px 10px;
    font-size: 1.4rem;
    color: white;
    text-align: center;
    border: 2px solid white;
    margin: 0 10px 10px 10px;
    border-radius: 34px;
    transition: 0.3s;
    cursor: pointer;
    min-width: 150px;
  }
  .tabs li a {
    color: white;
    text-decoration: none;
  }
  @media only screen and (max-width: 800px) {
    .tabs {
      height: auto;
    }
  }
`;

export default TabBar;
