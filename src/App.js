import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" },
    {name:"A Smarter Way to Learn JavaScript",rating:"3/5"},
    {name:"Secrets of the JavaScript Ninja",rating:"4/5"},
    {name:"Professional JavaScript for Web Developers",rating:"3.2/5"},
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "5/5"
    },
    {
      name:"Age of Vice by Deepti Kapoor",
      rating:"4/5"
    },
    {
      name:"City Under One Roof by Iris Yamashita",
      rating:"3/5"
    },
    {
      name:" A Death at the Party by Amy Stuart",
      rating:"4.3/5"
    },
    {
      name:"The God of Endings by Jacqueline Holland",
      rating:"5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    },
    {
      name:"Influence: The Psychology of Persuasion",
      rating:"4/5"
    },
    {
      name:"Fooled by Randomness",
      rating:"3.5/5"
    },
    {
      name:"Simple Numbers, Straight Talk, Big Profits!",
      rating:"4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📖 GoodBooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
