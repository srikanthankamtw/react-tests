import { useState } from "react";

function Greeting() {

    const [changedText, setChangedText] = useState(false);

    function textChangeHandler() {
        setChangedText(true);
    }
    return (
        <>
        <h1> Hello World!</h1>
        { !changedText && <p> click the button below to set </p> }
        { changedText && <p> i'm all set </p> }
        <button onClick={textChangeHandler}> Change Text </button>
        </>
    );
}

export default Greeting;