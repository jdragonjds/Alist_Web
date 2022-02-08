//import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "../axios";
import styled from "styled-components";
import React, { useState } from "react";
import useLocalState from "../utils/localState";
import logo from "../img/ALIST-logos_transparent.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const {
    alert,
    showAlert,
    loading,
    setLoading,
    success,
    setSuccess,
    hideAlert,
  } = useLocalState();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    hideAlert();
    if (!email) {
      showAlert({
        text: "Please provide email",
      });
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post("/auth/forgot-password", {
        email,
      });
      showAlert({ text: data.msg, type: "success" });
      setSuccess(true);
    } catch (error) {
      showAlert({
        text: "Something went wrong, please try again",
      });
      setSuccess(true);
    }
    setLoading(false);
  };
  return (
    <>
      <Wrapper className="page">
        <div className="cover-card">
          <img src={logo} alt="alist" className="logo" />
          {alert.show && <div className={`${alert.type}`}>{alert.text}</div>}

          {!success && (
            <form onSubmit={handleSubmit} className="form">
              <h4>Forgot password</h4>
              <div className="form-row">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-input email-input"
                  onChange={handleChange}
                />
                <button type="submit" className="btn">
                  SUBMIT
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
  .form {
    width: var(--fluid-width);
    max-width: var(--fixed-width);
    border-radius: var(--borderRadius);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    position: relative;
  }
  .form-row {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    flex: 1 4 1;
    justify-content: space-between;
    align-content: center;
    gap: 20px;
  }
  .form-label {
    display: block;
    font-size: 1rem;
    margin-top: 17px;
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
    width: 60px;
    height: 34px;
    border-radius: 8px;
    background: none;
  }
  .btn:hover {
    color: black;
    background: white;
  }
`;

export default ForgotPassword;
