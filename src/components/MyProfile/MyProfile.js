import Sidebar from "./Sidebar"
import Navigation from "../Navigation/Navigation.js"
import React, {useState, useEffect} from 'react'
import Mpdetails from "./Mpdetails"
import "./MyProfile.css"
import Iputs from './Iputs'




const MyProfile = () => {
    const [name,setName] = useState('');
    const [gender,setGender] = useState('');
    const [email,setEmail] = useState('');
    const [birthday,setBirthday] = useState('');
    const [nickname,setNickname] = useState('');
    const [distance,setDistance] = useState('');
    const [mylocation,setMylocation] = useState('');



    return (
        <>
            <h1>User Profile</h1> 
            <Iputs/>
            <Mpdetails
                name={name}
                gender={gender}
                email={email}
                birthday={birthday}
                nickname={nickname}
                distance={distance}
                mylocation={mylocation}
                setName={setName}
                setGender={setGender}
                setEmail={setEmail}
                setBirthday={setBirthday}
                setNickname={setNickname}
                setDistance={setDistance}
                setMylocation={setMylocation}
            ></Mpdetails>
        </>
    )
}
export default MyProfile