import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import moeimg from "../img/platelet.png";
function Home() {
  const { user } = useGlobalContext();
  return (
    <>
      {user && <Navigate to="/dashboard" />}
      <Wrapper className="page">
        <div className="cover-card">
          <img src={moeimg} alt="" className="moe" />
          <p>
            I'm baby viral enamel pin chartreuse cliche retro af selfies kinfolk
            photo booth plaid jianbing actually squid 3 wolf moon lumbersexual.
            Hell of humblebrag gluten-free lo-fi man braid leggings.
          </p>
          <div className="btn-container">
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
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
    width: 70%;
    height: 70%;
    max-width: 600px;
    max-height: 600px;
    padding: 1.25rem;
    text-align: center;
  }
  .moe {
    position: absolute;
    transform: translate(100%, -85%);
    width: 150px;
    height: 200px;
    z-index: 2;
  }
  .btn-container {
  }
`;

export default Home;
