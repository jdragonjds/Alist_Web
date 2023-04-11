import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../../axios";
import { removeFriend } from "./handleRequest";
import { useGlobalContext } from "../../context";
import { connect } from "react-redux";
import { fetchFriends } from "../../alist-server-calls/fetchFriends";

const AllFriends = ({ friends, loading, error, fetchFriends }) => {
  const { setCurrentId } = useGlobalContext();
  const handle = (e) => {
    const id = e.target.getAttribute("data-id");
    setCurrentId(id);
  };

  useEffect(() => {
    fetchFriends();
  }, [fetchFriends]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Wrapper>
      <ul className="tabs-fr">
        {friends.map((friend) => {
          return (
            <div data-id={friend.id} onClick={handle}>
              {friend.name}
              <FontAwesomeIcon
                icon={faMinusCircle}
                onClick={() => removeFriend(friend.id)}
              />
            </div>
          );
        })}
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 1rem;
  text-align: center;
  .tabs-fr {
    display: grid;
    grid-direction: column;
    grid-gap: 5px;
    list-style-type: none;
    color: white;
    overflow: hidden;
    overflow-y: scroll;
    max-height: 700px;
    div {
      font-size: 25px;
      height: 50px;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: auto auto;
      justify-content: space-between;
      padding: 11px;
    }
    div:nth-child(odd) {
      background: rgba(255, 99, 71, 0.2);
    }
    div:nth-child(even) {
      background: rgba(255, 99, 71, 0.35);
    }
  }
`;

const mapStateToProps = (state) => {
  console.log(state);
  return {
    friends: state.friend.friends,
    loading: state.friend.loading,
    error: state.friend.error,
  };
};

export default connect(mapStateToProps, { fetchFriends })(AllFriends);
