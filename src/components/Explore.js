import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import React, { useEffect, useState } from "react";
import data from "./explore/data";
const Explore = () => {
  const [tab, setTab] = useState("youtube");
  return (
    <Wrapper>
      <h>Youtube Channels</h>
      <div className="Container">
        {data.youtube.map((anime) => {
          console.log(anime);
          return (
            <div className="Tile">
              <span>{anime.name}</span>
              <a href={anime.url}>
                <img src={anime.img}></img>
              </a>
            </div>
          );
        })}
      </div>
      <h>Manga Sites</h>
      <div className="Container">
        {data.manga.map((anime) => {
          console.log(anime);
          return (
            <div className="Tile">
              <span>{anime.name}</span>
              <a href={anime.url}>
                <img src={anime.img}></img>
              </a>
            </div>
          );
        })}
      </div>
      <h>Anime Sites</h>
      <div className="Container">
        {data.anime.map((anime) => {
          console.log(anime);
          return (
            <div className="Tile">
              <span>{anime.name}</span>
              <a href={anime.url}>
                <img src={anime.img}></img>
              </a>
            </div>
          );
        })}
      </div>
      <h>J-pop Sites</h>
      <div className="Container">
        {data.jpop.map((anime) => {
          console.log(anime);
          return (
            <div className="Tile">
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
  font-family: "Inconsolata", monospace;
  color: white;
  h {
    margin-left: 7rem;
    font-size: 30px;
  }
  .Container {
    padding: 3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .Tile {
    background: rgba(93, 12, 100, 0.404);
    padding: 5px;
    width: 300px;
    height: 470px;
    margin: 10px;
    margin: 10px;
    overflow: hidden;
  }
  .Tile span {
    color: white;
    font-size: 25px;
  }
  .Tile img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .animeTile:hover {
    box-shadow: 0px 0px 6px 3px rgba(233, 140, 26, 0.81);
  }
`;
export default Explore;
