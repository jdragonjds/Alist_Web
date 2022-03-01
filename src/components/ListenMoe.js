import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";

let heartbeatInterval;
let ws;
function heartbeat(interval) {
  heartbeatInterval = setInterval(() => {
    ws.send(JSON.stringify({ op: 9 }));
  }, 2000);
}

const ListenMoe = () => {
  const [icon, setIcon] = useState(faCirclePlay);
  const [song, setSong] = useState({
    title: "None",
    artist: "None",
    image: "None",
  });
  const audioElement = document.querySelector("audio");
  const toggle = () => {
    setIcon(icon === faCirclePlay ? faCirclePause : faCirclePlay);
    if (icon === faCirclePlay) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  };
  const handleSocket = (prop) => {
    console.log(prop);
    setSong({
      title: prop.title,
      artist: prop.artists[0].name,
      image: prop.albums[0].image,
    });
  };
  function connect() {
    ws = new WebSocket("wss://listen.moe/gateway_v2");

    ws.onopen = () => {
      clearInterval(heartbeatInterval);
      heartbeatInterval = null;
    };

    ws.onmessage = (message) => {
      if (!message.data.length) return;
      let response;
      try {
        response = JSON.parse(message.data);
      } catch (error) {
        return;
      }
      switch (response.op) {
        case 0:
          ws.send(JSON.stringify({ op: 9 }));
          heartbeat(response.d.heartbeat);
          break;
        case 1:
          if (
            response.t !== "TRACK_UPDATE" &&
            response.t !== "TRACK_UPDATE_REQUEST" &&
            response.t !== "QUEUE_UPDATE" &&
            response.t !== "NOTIFICATION"
          )
            break;
          handleSocket(response.d.song); // Do something with the data
        default:
          break;
      }
    };

    ws.onclose = (error) => {
      clearInterval(heartbeatInterval);
      heartbeatInterval = null;
      if (ws) {
        ws.close();
        ws = null;
      }
      setTimeout(() => connect(), 5000);
    };
  }
  useEffect(() => {
    connect();
  }, []);

  return (
    <Wrapper>
      <div className="player">
        <div className="col-1-of-4">
          <FontAwesomeIcon icon={icon} onClick={toggle} />
        </div>
        <div className="col-2-of-4">
          <span>
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </span>
        </div>
        <div className="col-1-of-4">
          <img
            src={`https://cdn.listen.moe/covers/${song.image}`}
            alt="title"
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .player {
    z-index: 6;
    width: 25rem;
    height: 3.4rem;
    bottom: 0;
    left: 0;
    display: block;
    position: fixed;
    margin: 0 0 2rem 2rem;
    align-content: center;
    &::after {
      content: "";
      clear: both;
      display: block;
    }
    h4,
    p {
      margin: 0;
      padding: 0;
    }
    h4 {
      color: orangered;
    }
  }
  .col-1-of-4 {
    width: 20%;
    height: 100%;
    float: left;
  }
  .col-1-of-4 > img {
    width: 85%;
    height: 85%;
    transform: translateX(-42px);
    border: 4px solid orangered;
  }
  .col-2-of-4 {
    width: 60%;
    height: 100%;
    float: left;
    background-color: rgba(147, 71, 46, 0.8);
    transform: translateX(-42px);
  }
  .col-2-of-4 > span {
    display: flex;
    flex-direction: column;
    color: white;
    padding: 2px 0 0 40px;
  }
  .col-1-of-4 > svg {
    color: white;
    font-size: 3.3rem;
    text-align: center;
    color: rgb(199, 204, 216);
    margin: 0 0 0 10px;
    position: absolute;
    z-index: 10;
  }
  @media (min-width: 776px) {
  } ;
`;

export default ListenMoe;
