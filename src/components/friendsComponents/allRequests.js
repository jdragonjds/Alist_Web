import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../axios";
import { acceptRequest, cancelRequest } from "./handleRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faXmark } from "@fortawesome/free-solid-svg-icons";

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
    overflow:hidden; 
    overflow-y:scroll;
    height:700px;
    div { 
      font-size: 25px; 
      height:50px; 
      box-sizing: border-box; 
      display:grid; 
      grid-template-columns:auto auto;
      justify-content:space-between;
      padding-top:11px; 
    }
    div:nth-child(odd) {
      background: rgba(255, 99, 71, 0.2);
    }
    div:nth-child(even) {
      rgba(255, 99, 71, 0.3)
    }
  }
  .item{
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-between;
    padding:10px; 
  }
  .space{
    display:grid;
    grid-gap:10px;
    grid-template-columns:auto auto;
  }
`;
export default AllRequests;
