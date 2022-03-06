import React from "react";
import memesData from "../memesData";

export default function Main() {
  //created new state called 'memeImage' with an empty string as default
  //when the setMemeImage function is called ,update the memeImage state to be random chosen image url
  //below the div form, add an <img/> and set src to the 'newImage' state you created
  //const [memeImage, setMemeImage] = React.useState("");
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMeme, setAllMeme] = React.useState(memesData);

  React.useEffect(() => {
    fetch("https://i.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  function getMemeImage() {
    const memesArray = allMeme.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="inputtxt"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          className="inputtxt"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button className="new-meme-btn" onClick={getMemeImage}>
          Click to get a new meme image.
        </button>
      </div>
      <div class="meme">
        <img src={meme.randomImg} alt="meme-img" className="meme-img" />
        <h2 className="meme-top-text">{meme.topText}</h2>
        <h2 className="meme-bottom-text">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
