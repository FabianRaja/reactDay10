import React, { useContext } from "react";
import ViewBar from "../Components/ViewBar";
import { AppCtx } from "../Context/AppContext";
import WorkSpace from "../Components/WorkBar.jsx";

export default function ViewPage(){

    //id is stored in localStorage as id
    const id=localStorage.getItem("id");
    //state is imported by context
    const {data}=useContext(AppCtx);
    //useContext and AppCtx is imported
    //filtering data by comparing value.id and id
    const filteredData=data?.filter((value,index)=>value.id==id);
    return(
        //viewbar component is used as a children of a workspace and filteredData is passed for its use
        <WorkSpace>
            <ViewBar filteredData={filteredData}/>
        </WorkSpace>
    )
}