import React, { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
export default function AddBar(){
    //states and values imported from use context
    const {name,setName,userName,setUserName,email,setEmail,street,setStreet,
        suite,setSuite,city,setCity,zipCode,setZipCode,latitude,setLatitude,
        longitude,setLongitude,phoneNumber,setPhoneNumber,website,setWebsite,
        companyName,setCompanyName,catchPhrase,setCatchPhrase,bs,setBs,navigate}=useContext(AppCtx);
        //usecontext and appCtx is imported
        //add new member function for adding a new data into the mock api
        //values to be used is passed as an argument
        //using async function to await for fetch and then to move on
        async  function addNewMember(name,userName,email,street,suite,city,zipCode,latitude,longitude,phoneNumber,companyName,website,catchPhrase,bs){
        //only with all the values in the application will be added 
        if(name && userName && email && street && suite && city && zipCode && latitude && longitude && phoneNumber && companyName && website && catchPhrase && bs){
             //creating a new object to store the values that filled in the add member form
            const newData={name,username:userName,email,address:{street,suite,city,zipcode:zipCode,geo:{lat:latitude,lng:longitude}},phone:phoneNumber,website,company:{name:companyName,catchPhrase,bs}}
            //using post method to add the new member as newData
            await fetch("https://652ab8e94791d884f1fd46f5.mockapi.io/details",{method:"POST",body:JSON.stringify(newData),headers:{"Content-Type":"application/json",},})
            //after adding the new member it will navigate to the home page
            await navigate("/");
            //page will load to ensure the newly added member is displayed in the screen
            window.location.reload(false);
        }else{
            //if there is one or more input field is not filled then alert msg will appear on the screen as...
            alert("Fill all the fields");
        }
    }
   //used useEffect to clear the input fields whenever it is opened
    useEffect(()=>{
        setName("");
        setUserName("");
        setEmail("");
        setStreet("");
        setSuite("")
        setCity("");
        setZipCode("");
        setLatitude("");
        setLongitude("");
        setPhoneNumber("");
        setWebsite("");
        setCompanyName("");
        setCatchPhrase("");
        setBs("");
    },[])
    return(
        <div className="add-section">
            {/* prevent default function to avoid page from loading when submitting */}
            <form className="form-section" onSubmit={(event)=>event.preventDefault()}>
                    <input value={name} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" onChange={(event)=>setName(event.target.value)} />
                    <input value={userName} type="text" placeholder="UserName" className="input input-bordered w-full max-w-xs" onChange={(event)=>setUserName(event.target.value)} />
                    <input value={email} type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" onChange={(event)=>setEmail(event.target.value)} />
                    <input value={street} type="text" placeholder="Street" className="input input-bordered w-full max-w-xs" onChange={(event)=>setStreet(event.target.value)} />
                    <input value={suite} type="text" placeholder="Suite" className="input input-bordered w-full max-w-xs" onChange={(event)=>setSuite(event.target.value)} />
                    <input value={city} type="text" placeholder="City" className="input input-bordered w-full max-w-xs" onChange={(event)=>setCity(event.target.value)} />
                    <input value={zipCode} type="number" placeholder="Zip Code" className="input input-bordered w-full max-w-xs" onChange={(event)=>setZipCode(event.target.value)} />
                    <input value={latitude} type="number" placeholder="Latitude" className="input input-bordered w-full max-w-xs" onChange={(event)=>setLatitude(event.target.value)} />
                    <input value={longitude} type="number" placeholder="Longitude" className="input input-bordered w-full max-w-xs" onChange={(event)=>setLongitude(event.target.value)} />
                    <input value={phoneNumber} type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" onChange={(event)=>setPhoneNumber(event.target.value)} />
                    <input value={website} type="text" placeholder="Website" className="input input-bordered w-full max-w-xs" onChange={(event)=>setWebsite(event.target.value)} />
                    <input value={companyName} type="text" placeholder="Company Name" className="input input-bordered w-full max-w-xs" onChange={(event)=>setCompanyName(event.target.value)} />
                    <input value={catchPhrase} type="text" placeholder="Catch Phrase" className="input input-bordered w-full max-w-xs" onChange={(event)=>setCatchPhrase(event.target.value)} />
                    <input value={bs} type="text" placeholder="BS" className="input input-bordered w-full max-w-xs" onChange={(event)=>setBs(event.target.value)} /><br/>
            </form>  
            <div className="form-footer">
                {/* necessary values is passed to the addNewMember function */}
            <button className="btn btn-neutral" type="submit" onClick={()=>addNewMember(name,userName,email,street,suite,city,zipCode,latitude,longitude,phoneNumber,companyName,website,catchPhrase,bs)}>Add Member</button>
            </div>         
        </div>
    )
}