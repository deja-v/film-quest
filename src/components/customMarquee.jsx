import React from "react";
import Marquee from "react-fast-marquee";
import { quotes } from "./quotes";
export default function CustomMarquee(){
      const quoteElement = quotes.map((quote)=>(
        <div key={quote.id} className="quote-card">
                <p className="quote-text">“{quote.quote}”</p>
                <span className="quote-source">– {quote.character}, {quote.movie} ({quote.year})</span>
        </div>
      ))
    return (
        <Marquee gradient={true}>
            {quoteElement}
        </Marquee>
    )
}