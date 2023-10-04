import React, { useEffect, useState } from 'react'
import '../components/Home.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export default function Home () {
  const location=useLocation();
  const [data,setData]=useState(location.state.data) 

  const navigate=useNavigate()
  const [mydata,setMyData]=useState("")
  
  const fetchData=async(token)=>{
    try{
            await fetch("http://localhost:6500/get/data",{
               method:"GET",
               headers:{
                   Accept:"application/json",
                   "Contect-Type":"application/json",
                   authorization:"Bearer "+data.token
               }
            }).then((res)=>{
                 res.json().then((data)=>{
                  setData(data)
                 }).catch((err)=>{
                   console.log("data error---->",err)
                 })
            }).catch((err)=>{
               console.log("response error----->",err)
            })
    }catch(err){
       console.log("catch error---->",err)
    }
}
useEffect(()=>{
  fetchData();
},[])

  const decorationHandler=()=>{
    navigate("/asset-view",{state:{data:data.data.decoration,name:"decoration",token:data.token}})
 }
 const djSoundHandler=()=>{
  navigate("/asset-view",{state:{data:data.data.djSound,name:"djSound",token:data.token}})
}
const marriegeHallHandler=()=>{
  navigate("/asset-view",{state:{data:data.data.marriegeHall,name:"marriegeHall",token:data.token}})
}
const photographerHandler=()=>{
  navigate("/asset-view",{state:{data:data.data.photographer,name:"photographer",token:data.token}})
}
  const myprofileHandler=()=>{
    navigate("/my-profile",{state:{data:data}})
 }
  return (
    <div className='homeMainDiv'>
      <div>
        <Navbar bg='primary' data-bs-theme='dark' className='homeNavbar'>
          <Container className='container'>
            <Navbar.Brand href='' className='homeMainName'>Event Wallah</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link onClick={decorationHandler} className='assetName'>Decoration</Nav.Link>
              <Nav.Link onClick={djSoundHandler} className='assetName'>DJ Sound</Nav.Link>
              <Nav.Link onClick={marriegeHallHandler} className='assetName'>Marriege Hall</Nav.Link>
              <Nav.Link onClick={photographerHandler} className='assetName'>Photographer</Nav.Link>
              <Nav.Link href='' className='assetName'>Car</Nav.Link>
              <Nav.Link onClick={myprofileHandler} className='homeMyProfile'>My Profile</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      
    </div>
  )
}
