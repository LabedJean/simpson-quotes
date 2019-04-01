// src/Quote.js
import React from "react";

const Quote = ({ quote, character, image }) => (
    <figure>
        <img src={image} alt={character} />
        <figcaption>
            <h1>{character}</h1>
            <h2>{quote}</h2>
        </figcaption>
    </figure>
);

export default Quote;