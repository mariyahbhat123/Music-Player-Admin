import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export default function AddMusic() {
  const [songData, setSongData] = useState({
    name: "",

    singer: "",
  });

  const [songs, setSong] = useState({});
  console.log(songs);

  const [image, setImage] = useState({});

  const handleAddMusic = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("songs", songs);
    formData.append("singer", songData.singer);
    formData.append("name", songData.name);
    formData.append("image", image);
    console.log(formData);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    try {
      const response = await fetch("http://localhost:5000/api/addMusic", {
        method: "POST",

        body: formData,
      });
      const json = await response.json();
      if (!json) {
        console.log("ERRROORR");
      } else {
        console.log("success");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onClickAdd = (e) => {
    setSongData({ ...songData, [e.target.name]: e.target.value });
  };
  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form
        className="p-5"
        encType="multipart/form-data"
        style={{ width: "60%", border: "2px solid black", margin: "14%" }}
      >
        <h4 className="mb-5">Add Song </h4>
        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            id="file"
            onChange={(e) => setImage(e.target.files[0])}
          ></Form.Control>
          <Form.Label>Music</Form.Label>
          <Form.Control
            type="file"
            name="songs"
            id="file"
            onChange={(e) => setSong(e.target.files[0])}
          ></Form.Control>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={(e) => onClickAdd(e)}
          ></Form.Control>
          <Form.Label>Singer</Form.Label>
          <Form.Control
            type="text"
            name="singer"
            onChange={(e) => onClickAdd(e)}
          ></Form.Control>
          <Button onClick={handleAddMusic}>Add Song</Button>
        </Form.Group>
      </Form>
    </div>
  );
}
