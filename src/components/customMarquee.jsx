import React from "react";
import Marquee from "react-fast-marquee";
import { quotes } from "./quotes";
export default function CustomMarquee(){
      const quoteElement = quotes.map((quote)=>(
        <div class="quote-card">
                <p class="quote-text">“{quote.quote}”</p>
                <span class="quote-source">– {quote.character}, {quote.movie} ({quote.year})</span>
        </div>
      ))
    return (
        <Marquee gradient={true}>
            {quoteElement}
        </Marquee>
    )
}