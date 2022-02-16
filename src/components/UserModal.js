import styled from "styled-components";
import { useGlobalContext } from "../context";
import React, { useState } from "react";
import axios from "axios";
import "../axios";

const UserModal = () => {
  const [bio, setBio] = useState("-");
  const [image, setImage] = useState(
    "https://cdn.myanimelist.net/images/characters/11/366718.jpg"
  );
  const handleBio = (e) => {
    setBio(e.target.value);
  };
  const handleImg = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append("image", image);
    console.log(image);
    await axios.post("userinfo/upload", formData);
    await axios.post("/userinfo/", {
      bio,
    });
  };
  return (
    <Wrapper>
      <div className="cover-card">
        <div className="form-row">
          <label>BIO:</label>
          <textarea
            name="bio"
            className="form-input"
            onChange={handleBio}
          ></textarea>
        </div>
        <div className="form-row">
          <label>User Image:</label>
          <input
            type="file"
            name="img"
            placeholder="upload"
            onChange={handleImg}
          />
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  * {
    box-sizing: border-box;
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

    max-width: 500px;
    min-height: 250px;
    padding: 1.25rem;
    text-align: center;
    display: grid;
    grid-template-rows: auto auto;
    align-content: space-between;
  }
  .form-row {
    display: grid;
    grid-template-columns: 100px auto auto;
    button {
      background: none;
      border: none;
      color: white;
      font-size: 20px;
      padding: 10px;
      border: 1px solid white;
    }
  }
  .form-input {
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    resize: none;
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: 8px;
    background: none;
    border: 1px solid white;
    color: white;
    height: 150px;
    font-size: 20px;
  }
`;
export default UserModal;
