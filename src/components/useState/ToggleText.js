
import React, { useState } from 'react';

export default function ToggleText() {

    const initialState = "Welcome to React Challenges"
    // state - which is text, setChangeText which will hide the text
    const [text, setChangeText] = useState(true);

    // function to hide the text
    const handleButtonChange = (event) =>{
       // setChangeText(!text) - this will just remove the text forever
        // setChangeText( prevtext => !prevtext)
        setChangeText(!text)
    }
 return(
        <div>
            <button onClick= {handleButtonChange}> Show/ Hide</button>
            {/* the text */}
            {/* <h1>{text}</h1> */}
            {/*conditionally render text  */}
            {text && <h1>{initialState}</h1>}
     </div>
 )
}