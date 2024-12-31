import React, { useState } from 'react';
import './customcode.css';


const Custom = () => {
    const [count, setCount] = useState(0);

    const handleincrementClick = () => {
        setCount(count + 1);
    }
    const handleDecrementClick = () => {
        setCount(count - 1)
    }
    return (
        <>
            {count >= 0 ?
                (
                    <>
                        <h1>Count = {count}</h1>
                        <button onClick={handleincrementClick}>Increment</button>
                        <button onClick={handleDecrementClick}>Decrement</button>
                    </>
                ) : (
                    <>
                        <h1>Sorry the count has been below  0</h1>
                        <button onClick={handleincrementClick}>Increment</button>
                    </>
                )
            }
        </>
    )
}

export default Custom