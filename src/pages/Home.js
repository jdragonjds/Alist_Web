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
            <Link to="/forgot-password" className="btn">
              Forgot Password
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
    max-width: 600px;
    max-height: 600px;
    padding: 1.25rem;
    text-align: center;
    display: grid;
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
    position: absolute;
    transform: translate(170%, -77%);
    width: 130px;
    height: 200px;
    z-index: 2;
  }
  .btn-container {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 40px;
    justify-content: space-around;
    align-content: center;
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
    width: 140px;
  }
  .btn:hover {
    color: black;
    background: white;
  }
`;

export default Home;
