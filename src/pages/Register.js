import  Button  from 'react-bootstrap/Button'
import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import registerAction from '../redux/register/registerAction'



function Register() {
  const registerData = useSelector( state => state.userRegister);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.clear();
    dispatch(registerAction.resetForm());

    let token = localStorage.getItem('token');
    if (token && token !== 'undefined') {
      navigate('/')
    }
        // eslint-disable-next-line
  }, [])
  

  const handleRegister = (e) => {
    e.preventDefault()

    dispatch(
      registerAction.register(registerData.email,
      registerData.password,
      registerData.name,
      navigate))
  }

  return (
    <div >
    <Form style={{margin:'60px 40px 10px 40px'}} onSubmit={handleRegister}>
    <h3 style={{margin:'20px 0px'}} >Register Here!</h3>
      <Form.Group className="mb-3">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={e => dispatch(registerAction.setName(e.target.value))} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => dispatch(registerAction.setEmail(e.target.value))}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e => dispatch(registerAction.setPassword(e.target.value))}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        register
      </Button>
    </Form>
    <p style={{margin:'30px 0px 1px 0px'}}>have an account?</p>
    <Link to="/">login</Link>
    </div>
  )
}

export default Register