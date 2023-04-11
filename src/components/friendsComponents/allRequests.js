import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../axios";
import { acceptRequest, cancelRequest } from "./handleRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../../context";
import { connect } from "react-redux";
import { fetchFriendRequests } from "../../alist-server-calls/fetchFriendRequests";
import {
  faCheckCircle,
  faMinusSquare,
  faXmark,
  faUserPlus,
  faUserCheck,
  faBriefcaseClock,
} from "@fortawesome/free-solid-svg-icons";

const AllRequests = ({ requests, loading, error, fetchFriendRequests }) => {
  const [user2, setUser2] = useState(null);
  const [userList, setUserList] = useState([]);
  const refContainer = useRef(null);
  const userContainer = useRef(null);
  const { setCurrentId } = useGlobalContext();

  useEffect(() => {
    fetchFriendRequests();
  }, [fetchFriendRequests]);

  const sendRequest = async (id) => {
    try {
      const { data } = await axios.post("/friend/request", {
        user2: id,
      });
      refContainer.current.innerHTML = "sent";
    } catch (error) {
      if (error.response.data.status === "requeste already sent") {
        refContainer.current.innerHTML = "sent";
      }
    }
  };
  const selectUser = (id) => {
    setCurrentId(id);
  };
  const findUser = async () => {
    const { data } = await axios.post("/friend/", {
      user2,
    });
    setUserList(data);
  };
  useEffect(() => {
    findUser();
  }, [user2]);
  const handleUserInput = (e) => {
    if (e.keyCode === 13) {
      userContainer.current.style.display = "block";
      setUser2(e.target.value);
    }
  };

  return (
    <Wrapper>
      <input
        type="name"
        name="name"
        className="finduser"
        placeholder="find user..."
        onKeyDown={handleUserInput}
      />
      <ul className="top-users" ref={userContainer}>
        {userList.map((users) => {
          return (
            <div
              requestid={users._id}
              className="item"
              onClick={() => selectUser(users._id)}
            >
              {users.name}
              <span className="space" ref={refContainer}>
                <FontAwesomeIcon
                  icon={faUserPlus}
                  onClick={() => sendRequest(users._id)}
                />
              </span>
            </div>
          );
        })}
      </ul>
      <ul className="tabs-req">
        {loading && <p>loading...</p>}
        {!loading &&
          requests.map((request) => {
            return (
              <div requestid={request.id} className="item">
                {request.name}
                <span className="space">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    onClick={() => acceptRequest(request.id)}
                  />
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => cancelRequest(request.id)}
                  />
                </span>
              </div>
            );
          })}
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 1rem;
  .tabs-req {
    display: grid;
    grid-direction: column;
    grid-gap: 5px;
    list-style-type: none;
    color: white;
    overflow: hidden;
    overflow-y: scroll;
    height: 700px;
    div {
      font-size: 25px;
      height: 50px;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: auto auto;
      justify-content: space-between;
      padding-top: 11px;
    }
    div:nth-child(odd) {
      background: rgba(255, 99, 71, 0.2);
    }
    div:nth-child(even) {
      background: rgba(255, 99, 71, 0.3);
    }
  }
  .item {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
  }
  .space {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto auto;
  }
  .finduser {
    height: 3rem;
    width: 100%;
    margin-right: 1rem;
    font-size: 17px;
    font-family: "Inconsolata", monospace;
    color: white;
    background: rgba(0, 0, 0, 0.6);
  }
  .top-users {
    z-index: 2;
    width: 100%;
    margin-right: 1rem;
    font-size: 17px;
    font-family: "Inconsolata", monospace;
    color: white;
    background: rgb(27, 29, 39);
    display: none;
  }
  .show {
    display: block;
  }
  @media only screen and (max-width: 600px) {
    .finduser {
      margin: 5px;
      width: 95%;
    }
  }
`;
const mapStateToProps = (state) => {
  console.log(state);
  return {
    requests: state.friend.requests,
    loading: state.friend.loading,
    error: state.friend.requestsError,
  };
};

export default connect(mapStateToProps, { fetchFriendRequests })(AllRequests);
