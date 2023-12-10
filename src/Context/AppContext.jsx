import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Context is created and imported as AppCTx
export const AppCtx=createContext(null);

export default function AppContext({children}){
    
    //necessary values and states is being stored
    const api="https://652ab8e94791d884f1fd46f5.mockapi.io/details";
    const [data,setData]=useState();
    const [theme,setTheme]=useState("light");
    const navigate=useNavigate();

    const [name,setName]=useState("");
    const [userName,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [street,setStreet]=useState("");
    const [suite,setSuite]=useState("");
    const [city,setCity]=useState("");
    const [zipCode,setZipCode]=useState("");
    const [latitude,setLatitude]=useState("");
    const [longitude,setLongitude]=useState("");
    const [phoneNumber,setPhoneNumber]=useState("");
    const [website,setWebsite]=useState("");
    const [companyName,setCompanyName]=useState("");
    const [catchPhrase,setCatchPhrase]=useState("");
    const [bs,setBs]=useState("");

    //useEffect function to fetch the data and keep it ready for use
    useEffect(()=>{
        async function fetchData(){
                const response=await fetch(api);
                const data1=await response.json();
                setData(data1);           
        }
        fetchData();
    },[])
   
   
    return(
        //all the values and states is passed inside the AppCtx.Provider
        <AppCtx.Provider
        value={{
          api,data,setData,theme,setTheme,navigate,
          name,setName,userName,setUserName,email,setEmail,street,setStreet,
          suite,setSuite,city,setCity,zipCode,setZipCode,latitude,setLatitude,
          longitude,setLongitude,phoneNumber,setPhoneNumber,website,setWebsite,
          companyName,setCompanyName,catchPhrase,setCatchPhrase,bs,setBs
        }}
        >
            {children}
        </AppCtx.Provider>
    )
}