import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import React, { useState } from "react";
import { AllFriends, AllRequests } from "./friendsComponents";
import User from "./User";
const Friends = () => {
  const { openUserTab } = useGlobalContext();
  const [sideTab, setSideTab] = useState("friends");
  const [mainTab, setMainTab] = useState("friend");
  const handleSide = (e) => {
    setSideTab(e.target.innerHTML);
  };
  const handleMain = (e) => {
    setMainTab(e.target.innerHTML);
  };
  console.log(openUserTab);
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
            <li onClick={handleMain} name="friend">
              friend
            </li>
            <li> / </li>
            <li onClick={handleMain} name="recomendations">
              recomendations
            </li>
          </ul>
          <div className="scroll">{openUserTab && <User />}</div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  * {
    box-sizing: border-box;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .side {
    flex: 20%;
    padding: 20px;
  }
  .main {
    flex: 80%;
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
  .scroll {
    overflow: hidden;
    overflow-y: scroll;
    max-height: 750px;
  }
  @media only screen and (max-width: 600px) {
    width: 100vw;
    .row {
      flex-direction: column;
      flex-wrap: wrap;
    }
    .side {
      flex: 1;
      padding: 4px;
      margin: 0;
    }
    .main {
      flex: 1;
      padding: 4px;
    }
  }
`;
export default Friends;
