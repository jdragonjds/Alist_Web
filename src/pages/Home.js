import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import moeimg from "../img/platelet.png";
import chromeimg from "../img/chromeimg.png";
import githubimg from "../img/githubimg.png";
import logo from "../img/ALIST-logos_transparent.png";

function Home() {
  const { user } = useGlobalContext();
  const chomeURL = process.env.CHROME_URL;
  const githubURL = process.env.CHROME_URL;
  return (
    <>
      {user && <Navigate to="/dashboard" />}
      <Wrapper className="page">
        <div className="cover-card">
          <img src={moeimg} alt="" className="moe" />
          <img src={logo} alt="jobs app" className="logo" />
          <div className="btn-container">
            <a href={chomeURL}>
              <img src={chromeimg} alt="Chrome Store" className="logocr" />
            </a>
            <a href={githubURL}>
              <img src={githubimg} alt="Chrome Store" className="logocr" />
            </a>
          </div>
          <p>
            Integrates MyAnimeList into various sites, with auto episode
            tracking.
          </p>
          <div className="btn-container">
            <Link to="/register" className="btn">
              Sign Up
            </Link>
            <Link to="/login" className="btn">
              Sign in
            </Link>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .cover-card {
    box-sizing: inherit;
    font-family: "Roboto", "Open Sans", sans-serif;
    border: 0;
    background-color: #0000001f;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    width: 100vw;
    max-width: 500px;
    max-height: 600px;
    padding: 1.25rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    justify-items: center;
  }
  .logo {
    padding: 2rem;
    max-width: 400px;
  }
  .logocr {
    max-width: 100px;
  }
  p {
    color: white;
    font-size: 1.3rem;
  }
  .moe {
    position: inherit;
    transform: translateY(-77%);
    width: 130px;
    height: 200px;
    right: 0;
    z-index: 2;
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .btn {
    text-align: center;
    box-sizing: inherit;
    font-family: "Roboto", "Open Sans", sans-serif;
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.7rem 1rem;
    border-color: #f8f9fa;
    cursor: pointer;
    text-decoration: none;
    color: white;
    margin-bottom: 5px;
    width: 100px;
  }
  .btn:hover {
    color: black;
    background: white;
  }
  @media only screen and (max-width: 350px) {
    .moe {
      display: none;
    }
  }
`;

export default Home;
