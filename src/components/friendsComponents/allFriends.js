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

const AllFriends = () => {
  const [friends, setFriends] = useState([]);
  const { setCurrentId } = useGlobalContext();
  const getAllFriends = async () => {
    const { data } = await axios.get("/friend/");
    setFriends(data);
  };
  useEffect(() => {
    getAllFriends();
  }, []);
  const handle = (e) => {
    const id = e.target.getAttribute("data-id");
    setCurrentId(id);
  };
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
export default AllFriends;
