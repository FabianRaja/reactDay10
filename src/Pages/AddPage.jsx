import React from "react";
import AddBar from "../Components/AddBar";
import WorkSpace from "../Components/Workspace";



export default function AddPage(){
    return(
        //addbar component is used as a children of a workspace
       <WorkSpace>
        <AddBar/>
       </WorkSpace>
    )
}