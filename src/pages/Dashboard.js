import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import useLocalState from "../utils/localState";
import { useGlobalContext } from "../context";
import { Provider } from "react-redux";
import store from "../redux/store";
import { TabBar, Alist, Explore, Friends } from "../components";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Dashboard = () => {
  let navigate = useNavigate();
  const { alert, showAlert, loading, setLoading, success, setSuccess } =
    useLocalState();
  const { user } = useGlobalContext();
  const tab = useQuery().get("tab");
  if (!user) {
    navigate("/");
  }
  return (
    <>
      <Wrapper className="page">
        <Provider store={store}>
          <TabBar />
          {(tab === "alist" || !tab) && <Alist />}
          {tab === "friends" && <Friends />}
          {tab === "explore" && <Explore />}
        </Provider>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 0;
  justify-content: center;
  .bottombar {
    height: 30px;
  }
`;

export default Dashboard;
