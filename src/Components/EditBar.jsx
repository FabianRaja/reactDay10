import React, { useContext, useEffect } from "react";
import { AppCtx } from "../Context/AppContext";
export default function EditBar(){
    //getting the id from the localStorage
    const id=localStorage.getItem("id");
    //states and values imported from use context
    const {name,setName,userName,setUserName,email,setEmail,street,setStreet,
        suite,setSuite,city,setCity,zipCode,setZipCode,latitude,setLatitude,
        longitude,setLongitude,phoneNumber,setPhoneNumber,website,setWebsite,
        companyName,setCompanyName,catchPhrase,setCatchPhrase,bs,setBs,navigate,data}=useContext(AppCtx);
     //usecontext and appCtx is imported
     //used useEffect to display the values of the selected member to edit
    useEffect(()=>{
        const filteredData=data?.filter((value,index)=>value.id==id);
        setName(filteredData[0].name);
        setUserName(filteredData[0].username);
        setEmail(filteredData[0].email);
        setStreet(filteredData[0].address.street);
        setSuite(filteredData[0].address.suite)
        setCity(filteredData[0].address.city);
        setZipCode(filteredData[0].address.zipcode);
        setLatitude(filteredData[0].address.geo.lat);
        setLongitude(filteredData[0].address.geo.lng);
        setPhoneNumber(filteredData[0].phone);
        setWebsite(filteredData[0].website);
        setCompanyName(filteredData[0].company.name);
        setCatchPhrase(filteredData[0].company.catchPhrase);
        setBs(filteredData[0].company.bs);
    },[])
     //edit new member function for editing a stored data in the mock api
        //values to be used is passed as an argument
        //using async function to await for fetch and then to move on
    async function editNewMember(name,userName,email,street,suite,city,zipCode,latitude,longitude,phoneNumber,companyName,website,catchPhrase,bs,id){
         //only with all the values in the application will be added 
        if(name && userName && email && street && suite && city && zipCode && latitude && longitude && phoneNumber && companyName && website && catchPhrase && bs){
           //creating a new object to store the values that filled in the edit member form
           const editData={name,username:userName,email,address:{street,suite,city,zipcode:zipCode,geo:{lat:latitude,lng:longitude}},phone:phoneNumber,website,company:{name:companyName,catchPhrase,bs}}
            //using PUT method to replace the object with the new object
           await fetch("https://652ab8e94791d884f1fd46f5.mockapi.io/details/"+id,{method:"PUT",body:JSON.stringify(editData),headers:{"Content-Type":"application/json",},})
            //after editing the member it will navigate to the home page
           await navigate("/");
           //page will load to ensure the newly added member is displayed in the screen
            window.location.reload(false);
        }
    }
    return(
        <div className="edit-bar">
             {/* prevent default function to avoid page from loading when submitting */}
             <form className="form-section" onSubmit={(event)=>event.preventDefault()}>
                    <input value={name} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" onChange={(event)=>setName(event.target.value)} />
                    <input value={userName} type="text" placeholder="UserName" className="input input-bordered w-full max-w-xs" onChange={(event)=>setUserName(event.target.value)} />
                    <input value={email} type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" onChange={(event)=>setEmail(event.target.value)} />
                    <input value={street} type="text" placeholder="Street" className="input input-bordered w-full max-w-xs" onChange={(event)=>setStreet(event.target.value)} />
                    <input value={suite} type="text" placeholder="Suite" className="input input-bordered w-full max-w-xs" onChange={(event)=>setSuite(event.target.value)} />
                    <input value={city} type="text" placeholder="City" className="input input-bordered w-full max-w-xs" onChange={(event)=>setCity(event.target.value)} />
                    <input value={zipCode} type="text" placeholder="Zip Code" className="input input-bordered w-full max-w-xs" onChange={(event)=>setZipCode(event.target.value)} />
                    <input value={latitude} type="text" placeholder="Latitude" className="input input-bordered w-full max-w-xs" onChange={(event)=>setLatitude(event.target.value)} />
                    <input value={longitude} type="text" placeholder="Longitude" className="input input-bordered w-full max-w-xs" onChange={(event)=>setLongitude(event.target.value)} />
                    <input value={phoneNumber} type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" onChange={(event)=>setPhoneNumber(event.target.value)} />
                    <input value={website} type="text" placeholder="Website" className="input input-bordered w-full max-w-xs" onChange={(event)=>setWebsite(event.target.value)} />
                    <input value={companyName} type="text" placeholder="Company Name" className="input input-bordered w-full max-w-xs" onChange={(event)=>setCompanyName(event.target.value)} />
                    <input value={catchPhrase} type="text" placeholder="Catch Phrase" className="input input-bordered w-full max-w-xs" onChange={(event)=>setCatchPhrase(event.target.value)} />
                    <input value={bs} type="text" placeholder="BS" className="input input-bordered w-full max-w-xs" onChange={(event)=>setBs(event.target.value)} /><br/>
            </form>  
            <div className="form-footer">
                  {/* necessary values is passed to the editNewMember function */}
                <button className="btn btn-neutral" type="submit" onClick={()=>editNewMember(name,userName,email,street,suite,city,zipCode,latitude,longitude,phoneNumber,companyName,website,catchPhrase,bs,id)}>Update Member</button>
            </div>
        </div>
    )
}