import React, { useState } from "react";

export default function Signup() {
  const [user, setUser] = useState({});
  const [isUser, setIsUser] = useState(false);

  console.log(user);
  const handelSubmit = (e) => {
    e.preventDefault();
    setIsUser(true);
    return user;
  };
  return (
    <>
      {isUser ? (
        <h2>Welcome {user.userName}!</h2>
      ) : (
        <form onSubmit={handelSubmit}>
          <label>
            Name & Lastname:
            <input
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              type="text"
              name="name"
              required
            />
          </label>
          <br></br> <br></br>
          <label>
            Email:
            <input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              name="email"
              required
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Password:
            <input
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              name="email"
              required
            />
          </label>
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      )}
    </>
  );
}
