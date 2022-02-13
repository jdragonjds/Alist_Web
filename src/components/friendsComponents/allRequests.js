import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "../../axios";

const AllRequests = () => {
  const getAllFriends = async () => {
    const { data } = await axios.get("/friend/request");
    return data;
  };
  const requests = getAllFriends();
  return (
    <Wrapper>
      <ul className="tabs">
        {requests.map((request) => {
          return <li requestId={request.id}>{request.name}</li>;
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
export default AllRequests;
