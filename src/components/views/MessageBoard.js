import React, { useState, useEffect } from "react";
import axios from "../../axios-index";
import MessageForm from "./MessageForm";
import CardMessage from "./CardMessage";

export default function MessageBoard() {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    const response = await axios.get("/getting");

    // const messageObj = await response.json();
    setMessages(response.data);
  };
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <h1>Message Board:</h1>
      <MessageForm getMessages={getMessages} />
      <div style={{ display: "flex", width: "60%" }}>
        {messages.map((message, i) => (
          <CardMessage
            message={message}
            i={i}
            key={i}
            getMessages={getMessages}
          />
        ))}
      </div>
    </>
  );
}
