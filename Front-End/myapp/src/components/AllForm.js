import React, { useState } from 'react'
import '../components/AllForm.css'
import Navbar from 'react-bootstrap/Navbar'
import { useLocation,useNavigate } from 'react-router-dom'
export default function AllForm () {
  const navigate=useNavigate()
  const location=useLocation()
  const [token,setToken]=useState(location.state.token)
  const [asset_name,setAssetName]=useState(location.state.name)
  console.log("Asset name----->",asset_name)
    const [file1,setFile1]=useState(null)
    const [file2,setFile2]=useState(null)
    const[name,setName]=useState("")
    const [address,setAddress]=useState("")
    const [minprice,setMinPrice]=useState("")
    const[desc,setDesc]=useState("")
    const handleFile1=(e)=>{
         setFile1(e.target.files[0])
        //  setFile1(URL.createObjectURL(e.target.files[0]))
    }
    const handleFile2=(e)=>{
      setFile2(e.target.files[0])
      // setFile2(URL.createObjectURL(e.target.files[0]))
 }

 const submitHandler = async () => {
  try {
    if (file2 != null || file1 != null || !name || !address || !minprice|| !desc ) {
      var formData = new FormData()
      formData.append('Img', file1)
      formData.append('Img', file2)
      formData.append('name', name)
      formData.append('address', address)
      formData.append('minBookingPrice', minprice)
      formData.append('description', desc)

      await fetch('http://localhost:6500/update/'+asset_name+'/', {
        method: 'PATCH',
        headers: {
          authorization: 'Bearer ' +token
        },
        body: formData
      })
        .then(res => {
          res
            .json()
            .then(data => {
              console.log("data---->",data)
              if (data.message === 'User not found Login again') {
                alert('User not found Login again')
              } else if (data.message === 'data updated successfully') {
                alert('Updated successfully')
                // navigate("/home",{state:{token:token}})
              } else {
                alert('Something is wrong')
              }
            })
            .catch(err => {
              console.log('getting data error---->', err)
            })
        })
        .catch(err => {
          console.log('response error--->', err)
        })
    } else {
      alert('All the fields are required')
    }
  } catch (err) {
    console.log('catch error---->', err)
  }
}


  return (
    <div className='allFormMainDiv'>
       <Navbar.Brand href='' className='allFormTitle'>Event Wallah</Navbar.Brand>
      <div className='allFormFormDiv'>
       
        <img className='allFormImg' src={file1} />
        <img className='allFormImg' src={file2} />
        <input type='file' className='imgUpload1' onChange={handleFile1} />
       
        <input type='file' className='imgUpload1' onChange={handleFile2} />
      <br/>
      <label>Name</label><br />
      <input type="text" placeholder='Enter your name' onChange={e=>setName(e.target.value)} /><br/>
      <label>Address</label><br />
      <input type="email" placeholder='Enter your address' onChange={e=>setAddress(e.target.value)} /><br/>
      <label>Min Booking Price</label><br />
      <input type="number" placeholder='Enter minimum booking price' onChange={e=>setMinPrice(e.target.value)} /><br/>
      <label>Description</label><br />
      <input type="box" placeholder='Enter some description' onChange={e=>setDesc(e.target.value)} /><br/>
      <button type='Submit' className='btnSubmit1' onClick={submitHandler}>Update</button><br />
     
      </div>
    </div>
  )
}
