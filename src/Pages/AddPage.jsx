import React from "react";
import WorkSpace from "../Components/Workspace";
import AddBar from "../Components/AddBar";

export default function AddPage(){
    return(
        //addbar component is used as a children of a workspace
        <WorkSpace>
            <AddBar/>
        </WorkSpace>
    )
}