import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../axios";
import acceptRequest from "./acceptRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const AllRequests = () => {
  const [requests, setRequests] = useState([]);
  const getAllRequests = async () => {
    const { data } = await axios.get("/friend/request");
    setRequests(data);
    console.log("rerender");
  };
  useEffect(() => {
    getAllRequests();
  }, []);
  return (
    <Wrapper>
      <ul className="tabs-req">
        {requests.map((request) => {
          return (
            <div requestid={request.id}>
              {request.name}
              <FontAwesomeIcon
                icon={faCheckCircle}
                onClick={() => acceptRequest(request.id)}
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
  .tabs-req { 
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
export default AllRequests;
