import React, { useEffect, useState } from 'react'
import '../components/UpdateProfile.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
export default function UpdateProfile () {
  const location = useLocation()
  const navigate = useNavigate()
  const [data, setData] = useState(location.state.data)

  const [img, setImg] = useState(null)
  const [file, setFile] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const handleFile = e => {
    setFile(e.target.files[0])
    setImg(URL.createObjectURL(e.target.files[0]))
  }
  const submitHandler = async () => {
    try {
      if (file != null || !name || !email || !phone) {
        var formData = new FormData()
        formData.append('Img', file)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)

        await fetch('http://localhost:6500/update/update-myprofile/', {
          method: 'PATCH',
          headers: {
            authorization: 'Bearer ' + data.token
          },
          body: formData
        })
          .then(res => {
            res
              .json()
              .then(data => {
                if (data.message === 'User not found') {
                  alert('Signin again')
                } else if (data.message === 'data updated') {
                  alert('Profile updated successfully')
                  navigate('/')
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
    <div className='updateMainDiv'>
      <Navbar.Brand href='' className='updateMainName'>
        Event Wallah
      </Navbar.Brand>
      <div className='updateFormDiv'>
        <img className='updateImg' src={img} />
        <input type='file' className='imgUpload' onChange={handleFile} />
        <br />
        <label className='updateLabel'>Name</label>
        <br />
        <input
          className='updateInput'
          type='text'
          placeholder='Enter your name'
          onChange={e => setName(e.target.value)}
        />
        <br />
        <label className='updateLabel'>Email</label>
        <br />
        <input
          className='updateInput'
          type='email'
          placeholder='Enter your email'
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label className='updateLabel'>Phone</label>
        <br />
        <input
          className='updateInput'
          type='text'
          placeholder='Enter your phone number'
          onChange={e => setPhone(e.target.value)}
        />
        <br />
        <button type='Submit' className='btnSubmit' onClick={submitHandler}>
          Update
        </button>
        <br />
      </div>
    </div>
  )
}
