import React, { useContext } from "react";
import { FirstName } from "./App";
const ComC=()=>{
    const fname = useContext(FirstName);
    return(
        <>
        <h1>{fname}</h1>
        {/* <FirstName.Consumer>{(fname)=>{
            return(
                <>
                    <h1>{fname}</h1>
                </>
            )
        }}</FirstName.Consumer> */}
        
        </>
    )
}
export default ComC;
