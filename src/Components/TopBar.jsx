import React, { useContext } from "react";
import { AppCtx } from "../Context/AppContext";
export default function TopBar(){
    //values and states is imported form the use Context
    const {theme,setTheme,navigate}=useContext(AppCtx);
    //useContext and Appctx is imported
    //handleTheme function to switch between dark and light theme by its icon image
    function handleTheme(){
        if(theme==="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    return(
        <div className="top-bar-section">
               {/* top bar section imported from daisyui */}
                <div className="navbar lg:flex-col bg-base-100 top-bar">
                <div className="flex-1 ">
                    <a className="btn btn-ghost text-xl px-10 " onClick={()=>navigate("/")}>PORTAL</a>
                </div>
                <div className="flex-none lg:flex-col gap-2">
                    <a className="btn btn-ghost text-xl px-10 " onClick={()=>navigate("/add")}>ADD MEMBER</a>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" 
                        src= {theme==="light"?"https://media.istockphoto.com/id/1334613123/vector/moon-and-star-black-icon-of-moon-for-night-pictogram-of-crescent-and-star-logo-for-sleep-and.jpg?s=612x612&w=0&k=20&c=Gy6DGTiwY2lsGPXRr2f7kqPELZEUtG1MsSEce1BkPdo=":"https://www.shutterstock.com/image-vector/sun-yellow-icon-on-white-600nw-1908740776.jpg"} 
                        onClick={()=>handleTheme()} />
                    </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}