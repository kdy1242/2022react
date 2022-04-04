import React from "react";
import ReactDOM from "react-dom";


function Child(props) {
    return <div>{props.children}</div>
}

function SlotMachine(props) {
    const { s1, s2, s3 } = props
    const allSame = s1 === s2 && s2 === s3
    const allSeven = allSame && s1 === "7"

    return (
        <div>
            <div>{s1} {s2} {s3}</div>
            {
                allSame &&
                <div style={allSeven ? {color: "red"} : null}>Congratz!</div>
            }
        </div>
    )
}

ReactDOM.render(
    <div>
        <SlotMachine s1="X" s2="Y" s3="Z" />
        <SlotMachine s1="X" s2="X" s3="X" />
        <SlotMachine s1="7" s2="7" s3="7" />
        <SlotMachine s1="🍓" s2="🍒" s3="🍍" />
        <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
    </div>,
    document.getElementsById('root')
)