import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../axios";

const Alist = () => {
  const [animeList, SetAnimeList] = useState([]);

  const getImg = async (name) => {
    const data = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${name}&order_by=title&sort=asc&limit=1`
    ).then((res) => res.json());
    return data.results[0].image_url;
  };

  const getList = async () => {
    const { data } = await axios.get("/anime");
    for (let i = 0; i < data.animeList.length; i++) {
      data.animeList[i] = {
        ...data.animeList[i],
        img: await getImg(data.animeList[i].name),
      };
    }
    SetAnimeList(data.animeList);
  };

  useEffect(() => {
    getList();
  }, []);

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
export default Alist;
