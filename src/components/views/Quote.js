import React, { useState, useEffect } from "react";

export default function Quote() {
  const [quote, setQuote] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState(
    "https://source.unsplash.com/random/500×200/?spring"
  );

  useEffect(() => {
    let options = {
      method: "GET",
      headers: { "x-api-key": "bLdAG1FNLAogkQ5eDWwqyg==UhHOQIFHQgI2aGAY" },
    };
    //Fetching
    const getRandomQuote = async () => {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/quotes?category=${category}`,
        options
      );

      const quoteObject = await response.json();
      setQuote(quoteObject[0]);
    };
    const timeStamp = Date.now();
    setImgUrl(
      `https://source.unsplash.com/random/500×200/?spring&${timeStamp}`
    );
    getRandomQuote();
  }, [category]);

  const handleChange = (e) => {
    setCategory(e.target.value);
    //console.log(e.target.value);
  };
  //console.log(category);

  return (
    <>
      <h1>Quotes to light us:</h1>
      <form className="dropdown">
        <label>Select a category:</label>
        <select onChange={handleChange} name="category" className="category">
          <option name="best">best</option>
          <option name="equality">equality</option>
          <option name="forgiveness">forgiveness</option>
          <option name="friendship">friendship</option>
          <option name="happiness">happiness</option>
          <option name="inspirational">inspirational</option>
          <option name="learning">learning</option>
          <option name="love">love</option>
          <option name="morning">morning</option>
        </select>
        <br></br>
      </form>
      <div className="quote-div">
        <img src={imgUrl} alt="Random nature pic" />
        <div className="quote-card">
          <p>{quote.quote} </p>
          <small>-{quote.author}-</small>
        </div>
      </div>
    </>
  );
}
