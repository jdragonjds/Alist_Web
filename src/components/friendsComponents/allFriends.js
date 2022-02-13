import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "../../axios";

const AllFriends = () => {
  const getAllFriends = async () => {
    const { data } = await axios.get("/friend/");
    return data;
  };
  const friends = getAllFriends();
  return (
    <Wrapper>
      <ul className="tabs">
        {friends.map((friend) => {
          return <li friendId={friend.id}>{friend.name}</li>;
        })}
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 1rem;
  .tabs {
    height: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
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
export default AllFriends;
