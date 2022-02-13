import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import React, { useState } from "react";
import { AllFriends, AllRequests } from "./friendsComponents";

const Friends = () => {
  const [sideTab, setSideTab] = useState("friends");
  const [mainTab, setMainTab] = useState("friend");
  const handleSide = (e) => {
    setSideTab(e.target.innerHTML);
  };
  const handleMain = (e) => {
    setMainTab(e.target.innerHTML);
  };
  return (
    <Wrapper>
      <div className="row">
        <div class="side">
          <ul class="tabs">
            <li onClick={handleSide}>requests</li>
            <li> / </li>
            <li onClick={handleSide}>friends</li>
          </ul>
          {sideTab === "requests" && <AllRequests />}
          {sideTab === "friends" && <AllFriends />}
        </div>
        <div class="main">
          <ul class="tabs">
            <li onClick={handleSide} name="friend">
              friend
            </li>
            <li> / </li>
            <li onClick={handleSide} name="recomendations">
              recomendations
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .side {
    flex: 30%;
    padding: 20px;
  }
  .main {
    flex: 70%;
    padding: 20px;
  }
  font-family: "Inconsolata", monospace;
  .tabs {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    flex-gap: 20px;
    list-style-type: none;
    color: white;
    li {
      font-size: 20px;
      margin: 5px;
    }
  }
`;
export default Friends;
