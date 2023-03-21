import React from "react";

export default function Signup() {
  return (
    <>
      <form>
        <label>
          Name & Lastname:
          <input type="text" name="name" />
        </label>
        <br></br> <br></br>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <br></br>
        <br></br>
        <label>
          Password:
          <input type="password" name="email" />
        </label>
        <br></br>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
