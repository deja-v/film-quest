import React from "react";
import Marquee from "react-fast-marquee";
export default function CustomMarquee(){
    const quotes = [ {
        quote: "May the Force be with you.",
        character: "Obi-Wan Kenobi",
        movie: "Star Wars",
        year: 1977
      },
      {
        quote: "I’m going to make him an offer he can’t refuse.",
        character: "Vito Corleone",
        movie: "The Godfather",
        year: 1972
      },
      {
        quote: "Why so serious?",
        character: "The Joker",
        movie: "The Dark Knight",
        year: 2008
      },
      {
        quote: "Here’s looking at you, kid.",
        character: "Rick Blaine",
        movie: "Casablanca",
        year: 1942
      },
      {
        quote: "To infinity and beyond!",
        character: "Buzz Lightyear",
        movie: "Toy Story",
        year: 1995
      },
      {
        quote: "Keep your friends close, but your enemies closer.",
        character: "Michael Corleone",
        movie: "The Godfather Part II",
        year: 1974
      },
      {
        quote: "Life is like a box of chocolates. You never know what you’re gonna get.",
        character: "Forrest Gump",
        movie: "Forrest Gump",
        year: 1994
      },
      {
        quote: "Say hello to my little friend!",
        character: "Tony Montana",
        movie: "Scarface",
        year: 1983
      },
      {
        quote: "I’ll be back.",
        character: "Terminator",
        movie: "The Terminator",
        year: 1984
      },
      {
        quote: "It’s not who I am underneath, but what I do that defines me.",
        character: "Batman",
        movie: "Batman Begins",
        year: 2005
      },
      {
        quote: "You can’t handle the truth!",
        character: "Col. Jessup",
        movie: "A Few Good Men",
        year: 1992
      },
      {
        quote: "After all, tomorrow is another day!",
        character: "Scarlett O'Hara",
        movie: "Gone with the Wind",
        year: 1939
      },
      {
        quote: "With great power comes great responsibility.",
        character: "Uncle Ben",
        movie: "Spider-Man",
        year: 2002
      },
      {
        quote: "Houston, we have a problem.",
        character: "Jim Lovell",
        movie: "Apollo 13",
        year: 1995
      },
      {
        quote: "Carpe diem. Seize the day, boys.",
        character: "John Keating",
        movie: "Dead Poets Society",
        year: 1989
      },
      {
        quote: "I’m the king of the world!",
        character: "Jack Dawson",
        movie: "Titanic",
        year: 1997
      },
      {
        quote: "You talking to me?",
        character: "Travis Bickle",
        movie: "Taxi Driver",
        year: 1976
      },
      {
        quote: "I see dead people.",
        character: "Cole Sear",
        movie: "The Sixth Sense",
        year: 1999
      },
      {
        quote: "Every man dies, not every man really lives.",
        character: "William Wallace",
        movie: "Braveheart",
        year: 1995
      },
      {
        quote: "Frankly, my dear, I don’t give a damn.",
        character: "Rhett Butler",
        movie: "Gone with the Wind",
        year: 1939
      }]

      const quoteElement = quotes.map((quote)=>(
        <div class="quote-card">
                <p class="quote-text">“{quote.quote}”</p>
                <span class="quote-source">– {quote.character}, {quote.movie} {quote.year}</span>
        </div>
      ))
    return (
        <Marquee pauseOnHover={true} gradient={true}>
            {quoteElement}
        </Marquee>
    )
}