import React from "react";
import { useState } from "react";

function DisplayData({props}){
    const [accountBalance, addBal] = useState(props.accountBalance);
    const [currSex, handleSexChange] = useState(true);

    const toggleSex = () => handleSexChange(!currSex)

    return(
        <div>
            <p>{currSex ? 'man' : 'woman'}</p>
            <p>{props.human.surname}</p>
            <p>{accountBalance}</p>
            <button onClick={() => addBal(accountBalance + 500)}>Add 500</button>
            <button onClick={() => addBal(accountBalance - 500)}>Substract 500</button>
            <button onClick={toggleSex}>Sex change</button>

        </div>
    )
}

export default DisplayData