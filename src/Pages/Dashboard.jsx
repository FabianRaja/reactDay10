import React, { useContext, useEffect } from "react";
import MainBar from "../Components/MainBar";
import { AppCtx } from "../Context/AppContext";
import WorkSpace from "../Components/WorkBar.jsx";


export default function Dashboard(){

    //data state is imported using context
   const {data}=useContext(AppCtx);
   //useContext and AppCtx is imported

    return(
        <div className="dashboard"  >
               {/* MainBar component is used as a children of a workspace */}
            <WorkSpace>
                    <div className="main-bar-section " >
                        {/* data is mapped and necessary values is passed inside the mainBar */}
                        {data && data.map((value,index)=>(
                            <MainBar
                            key={index} name={value.name} userName={value.username} companyName={value.company.name} id={value.id} 
                            />
                        ))}
                    </div>
            </WorkSpace>

           
          
          
           
            
             
            

        </div>
    )
}