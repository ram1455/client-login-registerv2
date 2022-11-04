import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import profileAction from '../redux/profile/profileAction';

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.userProfile)

  useEffect(() => {
    let loggedInUser = localStorage.getItem('user');

    if (loggedInUser) {
      dispatch(profileAction.getProfile());
    }
    // eslint-disable-next-line
  }, [])

  if (user === null) {
    return <div>loading...</div>
  }

  const logout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  }

  return (
    <div style={{margin:'150px auto'}}>
    <h3 style={{margin:'0px auto'}}>My Profile</h3>
    <Card style={{ width: '18rem', margin:'20px auto'}}>
      <Card.Body>
        <Card.Text>
          Fullname  : {user.user.name}
        </Card.Text>
        <Card.Text>
          Email     : {user.user.email}
        </Card.Text>
        <Button variant="primary" onClick={logout} >Log out</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile