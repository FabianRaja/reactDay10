import React from "react";
import EditBar from "../Components/EditBar";
import WorkSpace from "../Components/Workspace";

export default function EditPage(){
    return(
        //editbar component is used as a children of a workspace
        <WorkSpace>
            <EditBar/>
        </WorkSpace>
    )
}