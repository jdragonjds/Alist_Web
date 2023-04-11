import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import axios from "axios";
import "../axios";

const User = () => {
  const { getCurrentId } = useGlobalContext();
  const [src, setSrc] = useState();
  const [bio, setBio] = useState();
  const [flist, setFlist] = useState([
    {
      name: "no anime",
      url: "",
      status: "-",
      img: "https://staticg.sportskeeda.com/editor/2022/01/40388-16425471102098-1920.jpg",
    },
  ]);
  const getInfo = async (req, res) => {
    const idd = getCurrentId();
    const { data } = await axios.get(`/userinfo/${idd}`);
    setSrc(data.img);
    setBio(data.bio);
  };
  const getImg = async (name) => {
    const data = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${name}&order_by=title&sort=asc&limit=1`
    ).then((res) => res.json());
    return data.results[0].image_url;
  };
  const getFlist = async (req, res) => {
    const idd = getCurrentId();
    const { data } = await axios.get(`/friend/anime/${idd}`);
    let templist = data.animeList;
    for (let i = 0, len = templist.length; i < len; i++) {
      templist[i] = { ...templist[i], img: await getImg(templist[i].name) };
    }
    setFlist(templist);
    console.log("flist");
  };
  useEffect(() => {
    getInfo();
    getFlist();
  }, [getCurrentId]);
  return (
    <Wrapper>
      <div className="user">
        <div>
          <img src={src} className="user-img" />
        </div>
        <div className="user">{bio}</div>
        <div className="user">
          <table className="usertable">
            <thead>
              <th>no.</th>
              <th>Cover</th>
              <th>Name</th>
              <th>Status</th>
              <th>Url</th>
            </thead>
            <tbody>
              {flist.map((anime, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={anime.img}
                        alt="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/1b2ceb47-7c72-4d37-a938-d06752d81541/ddpkxe6-6380c486-0998-48b8-859f-5b20375e7ffc.png"
                      />
                    </td>
                    <td>{anime.name}</td>
                    <td>{anime.status}</td>
                    <td>
                      <a href={anime.url}>follow</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  color: white;
  .user {
    display: flex;
    flex-direction: column;
    justify-items: space-around;
    font-size: 30px;
    text-align: center;
    text-shadow: 2px 2px 5px red;
  }
  .user-img {
    border-radius: 50%;
    width: 400px;
    height: 400px;
    overflow: hidden;
    box-shadow: 0px 0px 6px 3px rgba(233, 233, 233, 0.81);
    object-fit: cover;
    overflow: hidden;
  }
  .usertable {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    th,
    td {
      border: 1px solid white;
      padding: 15px;
      font-size: 20px;
    }
    img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      overflow: hidden;
      box-shadow: 0px 0px 6px 3px rgba(233, 233, 233, 0.81);
      object-fit: cover;
    }
    a {
      color: white;
    }
  }
  @media only screen and (max-width: 600px) {
    .usertable {
      background: rgba(0, 0, 0, 0.5);
      width: 100%;
      th,
      td {
        border: 0.5px solid white;
        padding: 4px;
        font-size: 15px;
      }
      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        overflow: hidden;
        object-fit: cover;
      }
    }
  }
`;
export default User;
