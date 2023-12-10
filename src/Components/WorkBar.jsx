import React, { useContext } from "react";
import TopBar from "./TopBar";
import { AppCtx } from "../Context/AppContext";

export default function WorkSpace({children}){
   //state is imported from the useContext
   const {theme}=useContext(AppCtx);
   //useContext and AppCtx is imported

    return(
        <div className="workspace" data-theme={theme}>
            <div>
            <TopBar/>
            </div>
            <div>
            {children}
            </div>
            
           
        </div>
    )
}