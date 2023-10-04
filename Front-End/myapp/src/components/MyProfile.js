import React, { useEffect, useState } from 'react'
import '../components/MyProfile.css'
import {Link,useNavigate,useLocation } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'

export default function MyProfile () {
  const location=useLocation()
  const [data,setData]=useState(location.state.data)
  // const [imgdata,setImgData]=useState(window.URL.createObjectURL(data.data.image))
  // setImgData(window.URL.createObjectURL(data.data.image))
  console.log("myprofile data---->",data)
  const navigate=useNavigate()

  const updateClickHandler=()=>{
          navigate("/update-profile",{state:{data:data}})
  }
    const file="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFq3X0p2o9iA4kvFnFtd2Bwctl_zGKr_3gA&usqp=CAU"
  return (
    <div className='myprofMainDiv'>
       <Navbar.Brand href='' className='myProfTitle'>Event Wallah</Navbar.Brand>
      <div className='myprofFormDiv'>
       
        <img className='myprofImg' src={`E:\\Projects\\Mern projects\\Mern Web ( Opt, Token authentication, Reset Password)\\Back-End\\uploads\\Img-1695729655312.jpg`} />
       
      <br/>
      <label className='myprofLabel'>Name</label><br />
      <label className='txt'>{data.data.name}</label><br/>
      <label className='myprofLabel'>Email</label><br />
      <label className='txt'>{data.data.email}</label><br/>
      <label className='myprofLabel'>Phone</label><br />
      <label className='txt'>{data.data.phone}</label><br/>
      <button type='Submit' onClick={updateClickHandler} className='btnSubmit'>Update</button><br />
     
      </div>
    </div>
  )
}
