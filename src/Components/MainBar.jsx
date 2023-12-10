import React, { useContext } from "react";
import { AppCtx } from "../Context/AppContext";
export default function MainBar({name,userName,companyName,id}){
    //values and states imported using useContext   
    const {navigate,api,theme}=useContext(AppCtx);
    //useContext and AppCtx is imported

    //function view to view the full details of the member
    function view(id){
        //storing member id in the name of id in the local storage
        localStorage.setItem("id",id);
        //will navigate to the view page
        navigate("/view");
    }
    //delete function to delete the member using id
    async function deleteFunction(id){
        //async function to await and fetch
        const data=await fetch("https://652ab8e94791d884f1fd46f5.mockapi.io/details/"+id,{method:"DELETE"}).then((response)=>response.json())
        //to reload the page after deleting the member
        window.location.reload(false);
    }
    //edit function to edit he member using id
   function editPage(id){
      //member id is stored in the local Storage in the name of id
        localStorage.setItem("id",id);
        //will navigate to the edit page
        navigate("/edit")
    }

    return(
        <div className="main-bar ">
            {/* card component imported from the tailwindcss(daisyui) */}
                <div className="card card-bar-section " >
                    <div className="card w-96 bg-base-100 shadow-xl sm:w-full ">
                    <div className="card-body ">
                    <h2 className="card-title">Name : {name}</h2>
                    <p>User Name : {userName}</p>
                    <p>Company Name : {companyName}</p>
                    <div className="card-actions justify-start">
                    <button className={theme==="light"?"btn btn-neutral":"btn btn-accent"} onClick={()=>view(id)}>View</button>
                    <button className={theme==="light"?"btn btn-neutral":"btn btn-accent"} onClick={()=>editPage(id)}>Edit</button>
                    <button className={theme==="light"?"btn btn-neutral":"btn btn-accent"} onClick={()=>deleteFunction(id)}>Delete</button>
                    </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}