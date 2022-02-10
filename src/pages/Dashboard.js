import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import useLocalState from "../utils/localState";
import { useGlobalContext } from "../context";
import logo from "../img/ALIST-logos_transparent.png";
import { TabBar, Alist, Explore, Friends } from "../components";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Dashboard = () => {
  let navigate = useNavigate();
  const { alert, showAlert, loading, setLoading, success, setSuccess } =
    useLocalState();

  let tab = useQuery().get("tab");
  if (!tab) tab = "alist";

  return (
    <>
      <Wrapper className="page">
        <TabBar />
        {tab === "alist" && <Alist />}
        {tab === "friends" && <Friends />}
        {tab === "explore" && <Explore />}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  .bottombar {
    height: 30px;
  }
`;

export default Dashboard;
