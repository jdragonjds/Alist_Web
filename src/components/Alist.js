import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchAnime } from "../alist-server-calls/fetchAnime";
import React, { useEffect, useState } from "react";
import "../axios";

const Alist = ({ animeList, loading, error, fetchAnime }) => {
  useEffect(() => {
    fetchAnime();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  console.log("animeList");
  console.log(animeList);
  return (
    <Wrapper>
      <div className="animeContainer">
        {animeList.map((anime) => {
          return (
            <div className="animeTile">
              <span>{anime.name}</span>
              <a href={anime.url}>
                <img src={anime.img}></img>
              </a>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .animeContainer {
    padding: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .animeTile {
    background: rgba(93, 12, 100, 0.404);
    padding: 5px;
    width: 300px;
    height: 470px;
    margin: 10px;
    margin: 10px;
    overflow: hidden;
  }
  .animeTile span {
    color: white;
    font-size: 25px;
  }
  .animeTile img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .animeTile:hover {
    box-shadow: 0px 0px 6px 3px rgba(233, 140, 26, 0.81);
  }
`;

const mapStateToProps = (state) => {
  return {
    animeList: state.anime.anime,
    loading: state.anime.loading,
    error: state.anime.error,
  };
};

export default connect(mapStateToProps, { fetchAnime })(Alist);
