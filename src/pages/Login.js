import  Button  from 'react-bootstrap/Button'
import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import loginAction from '../redux/login/loginAction'


function Login() {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.userLogin)
  const navigate = useNavigate();

  useEffect(() => {  
    localStorage.clear();
    let token = localStorage.getItem("token");

    if (token && token !== "undefined") {
      navigate("/profile")
    }
    // eslint-disable-next-line
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginAction.login(loginData.email,loginData.password, navigate))
  }

  return (
    <div >
    <Form style={{margin:'80px 40px 95px 40px'}} onSubmit={handleLogin}>
    <h3 style={{margin:'20px 0px'}} >Let's Login!</h3>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => dispatch(loginAction.setEmail(e.target.value))} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(e) => dispatch(loginAction.setPassword(e.target.value))} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <p style={{margin:'30px 0px 1px 0px'}}>don't have an account?</p>
    <Link to="/register">register</Link>
    </div>
  )
}

export default Login