import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../axios";
import styled from "styled-components";
import React, { useState } from "react";
import useLocalState from "../utils/localState";
import logo from "../img/ALIST-logos_transparent.png";
import { useGlobalContext } from "../context";

function Register() {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const {
    alert,
    showAlert,
    loading,
    setLoading,
    success,
    setSuccess,
    hideAlert,
  } = useLocalState();
  const { user, saveUser, logoutUser } = useGlobalContext();
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    logoutUser();
    setLoading(true);
    hideAlert();
    if (!values.email || !values.password || !values.name) {
      showAlert({
        text: "Please provide proper values",
      });
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post("/auth/register", {
        ...values,
      });
      showAlert({ text: data.msg, type: "success" });
      setSuccess(true);
      saveUser(data.user.name);
      localStorage.setItem(
        "user",
        JSON.stringify({ name: data.user.name, token: data.token })
      );
    } catch (error) {
      showAlert({
        text: error.response.data.msg || "there was an error",
      });
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    setLoading(false);
  };
  return (
    <>
      <Wrapper className="page">
        {user && navigate("/dashboard")}
        <div className="cover-card">
          <img src={logo} alt="alist" className="logo" />
          {alert.show && <div className={`${alert.type}`}>{alert.text}</div>}

          {!success && (
            <form onSubmit={handleSubmit} className="form">
              <h4>Register</h4>
              <div className="form-row">
                <input
                  type="name"
                  name="name"
                  placeholder="Username"
                  className="form-input name-input"
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  className="form-input name-input"
                  placeholder="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <input
                  type="password"
                  name="password"
                  className="form-input name-input"
                  placeholder="password"
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <button type="submit" className="btn">
                  Register
                </button>
              </div>
            </form>
          )}
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  font-size: 20px;
  .form {
    width: var(--fluid-width);
    max-width: var(--fixed-width);
    border-radius: var(--borderRadius);
    padding: 2rem 2.5rem;
    position: relative;
    justify-content: center;
  }
  .form-row {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    gap: 20px;
  }
  .form-label {
    display: block;
    font-size: 1rem;
    margin-top: 12px;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
  .form-input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: 8px;
    background: none;
    border: 1px solid white;
    color: white;
    min-height: 1rem;
    width: 80%;
    font-size: 20px;
  }
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
    font-weight: 20px;
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
    height: 34px;
    border-radius: 8px;
    background: none;
    font-size: 20px;
  }
  .btn:hover {
    color: black;
    background: white;
  }
`;

export default Register;
