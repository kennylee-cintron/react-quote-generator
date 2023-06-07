import React, { useState } from "react";
import axios from "../../axios-index";

export default function MessageForm({ getMessages }) {
  const [input, setInput] = useState(null);

  const postMessage = async (bodyText) => {
    const response = await axios.post("/posting", bodyText);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postMessage(input);
    await getMessages();
    setInput(null);
    console.log("submitted");
  };

  //console.log(input);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "40%" }}
      >
        <label>Name: </label>
        <input
          type="text"
          value={input?.name || ""}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <label>Password: </label>
        <input
          type="password"
          value={input?.password || ""}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <label>Title: </label>
        <input
          value={input?.title || ""}
          type="text"
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />

        <label>Message: </label>
        <textarea
          type="text"
          value={input?.text || ""}
          onChange={(e) => setInput({ ...input, text: e.target.value })}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
