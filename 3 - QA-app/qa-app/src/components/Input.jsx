import React, { useState } from 'react';
import Button from './Button';
import './Input.css';

const Input = () => {
    const quotes = [
        {
            quote:
                "One of my most productive days was throwing away 1,000 lines of code.",
            cite: "Ken Thompson"
        },
        {
            quote:
                "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
            cite: "Bjarne Stroustrup"
        },
        {
            quote: "When in doubt, use brute force.",
            cite: "Ken Thompson"
        },
        {
            quote: "Talk is cheap. Show me the code.",
            cite: "Linus Torvalds"
        },
        {
            quote:
                "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
            cite: "Martin Golding"
        },
        {
            quote:
                "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
            cite: "Linus Torvalds"
        },
        {
            quote:
                "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",
            cite: "Alan Kay"
        },
        {
            quote:
                "Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris",
            cite: "Larry Wall"
        },
        {
            quote:
                "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.",
            cite: "George Carrette"
        }
    ];
    const [index, setIndex] = useState();

    const generate = () => {
        const index = Math.floor(Math.random() * quotes.length);
        setIndex(index);
    }


    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                {/* <input placeholder='Type your question here' className='input-box' type="text" required /> */}
                <Button onClick={generate}>Render an quote</Button>
                {/* <button onClick={generate}>generate</button> */}

                <p style={{ maxWidth: '450px' }}>{quotes[index] && quotes[index].quote}</p>
                <p>{quotes[index] && quotes[index].cite}</p>
            </div>
        </>
    );
}

export default Input;