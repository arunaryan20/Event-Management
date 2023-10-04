import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import '../components/AssetsView.css'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate, useLocation } from 'react-router-dom'
export default function AssetsView () {
  const location = useLocation()
  const navigate = useNavigate()
  const [data, setData] = useState(location.state.data)
  const [asset_name, setAssetName] = useState(location.state.name)
  const [token,setToken]=useState(location.state.token)
  const updateHandler = () => {
    navigate('/update-asset',{state:{data:data,name:asset_name,token:token}})
  }
  return (
    <div className='assetsMainDiv'>
      <Navbar.Brand href='' className='signinMainName'>
        Event Wallah
      </Navbar.Brand>
      <div className='assetsFormDiv'>
        <Card style={{ height: '16rem', width: '14rem', marginLeft: '10px' }}>
          <div
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingTop: '10px'
            }}
          >
            <img
              style={{ height: '50px', width: '50px' }}
              variant='top'
              src='data:image/jpeg;base64,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'
            />
            <img
              style={{ height: '50px', width: '50px', marginLeft: '20px' }}
              variant='top'
              src='data:image/jpeg;base64,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'
            />
          </div>
          <Card.Body>
            <Card.Title style={{ fontSize: '10px' }} className='cardTitle'>
              Name:{data.name}
            </Card.Title>
            <Card.Text style={{ fontSize: '7px' }} className='cardText'>
              About: {data.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroup.Item style={{ fontSize: '9px' }} className='cardItem'>
              Address:{data.address}
            </ListGroup.Item>
            <ListGroup.Item style={{ fontSize: '9px' }} className='cardItem'>
              Min Booking Price: {data.minBookingPrice} ₹
            </ListGroup.Item>
            <Card.Link
              style={{ cursor: 'pointer' }}
              className='updateBtn'
              onClick={updateHandler}
            >
              Update
            </Card.Link>
          </ListGroup>
        </Card>
      </div>
    </div>
  )
}
