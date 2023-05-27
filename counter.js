// import React from 'react';
import { useState } from "react"

export default function counter(){
    const [count, setState] = this.useState(0)
    function increment(){
        setState(count+1)

    }
    function decrement(){
        setState(count-1)

    }
    return <>
    <button onClick={increment}>+</button>
    <span>{count}</span> 
    <button onClick={decrement}>-</button>
    </>

}



// when we write this code without using react, we  we need to tell everything but in react  we only need to tell we want to plus it, it will do by itselfs


// import React from 'react';
import { useState } from "react"

export default function counter(){
    const [count, setState] = this.useState(0)
    function increment(){
        if(count<100)
       count++;
       document.getElementById('counter').innerText = count;


    }
    function decrement(){
        setState(count-1)

    }
    return <>
    <button onClick={increment}>+</button>
    <span id="counter">{count}</span> 
    <button onClick={decrement}>-</button>
    </>
}
