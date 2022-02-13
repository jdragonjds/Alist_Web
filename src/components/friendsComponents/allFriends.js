import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../axios";

const AllFriends = () => {
  const [friends, setFriends] = useState([]);
  const getAllFriends = async () => {
    const { data } = await axios.get("/friend/");
    setFriends(data);
  };
  useEffect(() => {
    getAllFriends();
  }, []);
  return (
    <Wrapper>
      <ul className="tabs-fr">
        {friends.map((friend) => {
          return <div friendid={friend.id}>{friend.name}</div>;
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
    overflow:hidden; 
    overflow-y:scroll;
    height:700px;
    div { 
      font-size: 25px; 
      height:50px;
      box-sizing: border-box; 
      padding-top:10px;
    }
    div:nth-child(odd) {
      background: rgba(255, 99, 71, 0.2);
    }
    div:nth-child(even) {
      rgba(255, 99, 71, 0.3)
    }
  }
 
`;
export default AllFriends;
