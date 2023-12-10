import React, { useContext } from "react";
import { AppCtx } from "../Context/AppContext";

export default function ViewBar({filteredData}){
    //values and states is imported from the useContext
    const {navigate}=useContext(AppCtx);
    //useContext and AppCtx is imported
    return(
             //viewBar is imported from the daisyUI
            <div className="viewBar">
            <div className="mockup-window border border-base-300">
            <div className="toalign"><hr/>
                <h3><b className="underline underline-offset-1">Name</b> - {filteredData[0].name}</h3><hr/>
                <h3><b className="underline underline-offset-1">UserName</b> - {filteredData[0].username}</h3><hr/>
                <h3><b className="underline underline-offset-1">Email</b> - {filteredData[0].email}</h3><hr/>
                <h3><b className="underline underline-offset-1">Address</b>  
                   <ol className="ol">
                    <li>Street - {filteredData[0].address.street}</li>
                    <li>Suite - {filteredData[0].address.suite}</li>
                    <li>City - {filteredData[0].address.city}</li>
                    <li>Zip Code - {filteredData[0].address.zipcode}</li>
                    <li><b className="underline underline-offset-1">Geo</b>  </li>
                    <ol className="ol">
                    <li>Lat - {filteredData[0].address.geo.lat}</li>
                    <li>Lng - {filteredData[0].address.geo.lng}</li>
                    </ol>
                   </ol>
                </h3><hr/>
                <h3><b className="underline underline-offset-1">Phone</b> - {filteredData[0].phone}</h3><hr/>
                <h3><b className="underline underline-offset-1">Website</b> - {filteredData[0].website}</h3><hr/>
                <h3><b className="underline underline-offset-1">Company</b>  
                    <ol className="ol">
                        <li>Name - {filteredData[0].company.name}</li>
                        <li>CatchPhrase - {filteredData[0].company.catchPhrase}</li>
                        <li>bs - {filteredData[0].company.bs}</li>
                    </ol>
                </h3>
                <div className="form-footer">
                  <a className="btn btn-neutral text-xl px-10 " onClick={()=>navigate("/")}>GO BACK</a>
                </div>
                
            </div>
               
    
            </div>
           
        </div>
        
        
        
    )
}