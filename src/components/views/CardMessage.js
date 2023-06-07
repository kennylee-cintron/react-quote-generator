import React, { useState } from "react";
import axios from "../../axios-index";

export default function CardMessage({ message, i, getMessages }) {
  const [isPressed, setIsPressed] = useState(false);
  const [password, setPassword] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const deleteMessage = async (password) => {
    const response = await axios.delete(`/delete/${message._id}`, {
      data: { password: password },
    });
    console.log(response);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    if (password === message.password) {
      await deleteMessage();
      await getMessages();
    } else {
      alert("Wrong password. Try again");
    }
  };

  return (
    <div key={i}>
      <button onClick={() => setIsPressed(!isPressed)}>
        {message.title} from {message.name}
      </button>
      {isPressed && (
        <div>
          {message.text}{" "}
          <button onClick={() => setIsButtonPressed(true)}>❌</button>
          <button onClick={() => setIsPressed(false)}>⬅️</button>
          {isButtonPressed && (
            <form onSubmit={handleDelete}>
              <input
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
              <button>☑️</button>
              <button onClick={() => setIsButtonPressed(false)}>⬅️</button>
            </form>
          )}
          {}
        </div>
      )}
    </div>
  );
}
