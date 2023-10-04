import React, { useState } from 'react'
import '../components/Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'

export default function Signin () {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = async () => {
    try {
      if (email === '' || password === '') {
        alert('All fields are required')
      } else {
        const data = {
          email: email,
          password: password
        }
        await fetch('http://localhost:6500/auth/signin', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => {
            res
              .json()
              .then(data => {
                if (data.message === 'User not found') {
                  alert('User does not exist')
                } else if (data.message === 'password does not match') {
                  alert('password is not matching')
                } else if (data.message === 'data accessible') {
                 
                  navigate('/home', { state: { data: data } })
                } else {
                  alert('Something is wrong')
                }
              })
              console.log("Signin data----->",data)
              .catch(err => {
                console.log('data error----->', err)
              })
          })
          .catch(err => {
            console.log('res error---->', err)
          })
      }
    } catch (err) {
      console.log('catch error---->', err)
    }
  }
  return (
    <div className='signinMainDiv'>
      <Navbar.Brand href='' className='signinMainName'>
        Event Wallah
      </Navbar.Brand>
      <div className='signinFormDiv'>
        <label className='signinLabel'>Email</label>
        <br />
        <input
          className='signinInput'
          type='text'
          placeholder='Enter your email'
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label className='signinLabel'>Password</label>
        <br />
        <input
          className='signinInput'
          type='text'
          placeholder='Enter your password'
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button type='Submit' onClick={submitHandler} className='btnSubmit'>
          Login
        </button>
        <br />
        <label className='signinLabel'>I do not have an account</label>
        <br />
        <Link to='/register' style={{ color: 'yellow' }}>
          Register
        </Link>
      </div>
    </div>
  )
}
