import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-nextjs-toast';
import {API_URL} from '../utils/constant';

const Login = ({ setlogOut }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const submitHandler = async () => {
    try {
      const response = await axios.post(API_URL+'/login', {
      email: username,
      password: password,
    })
    if (response.status == 200) {
      toast.notify(response.data.messages)
      localStorage.setItem('isLogin' ,true)
      setlogOut(false)
    } 
    } catch (error) {
      toast.notify(error.response.data.messages)
    }
    setUsername('')
    setPassword('')
  }
  useEffect(() => {
    if (localStorage.getItem('isLogin')==true) {
      setlogOut(false)
    }
  }, [])
  

  return (
    <>
      <div className="login__pagemain">
        <ToastContainer />
        <div className="row MnrWW">
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 box__1">
            <img src="/images/Log_inPage.png" alt="" />
          </div>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 box__2">
            <div className="login__page">
              <div className="img__sec">
                <img
                  src="/images/nigel__icon.png"
                  alt=""
                  className="Nigel_icon"
                />
              </div>
              <div className="login__page__title">
                <p className="txt__head">Welcome To Nigel Workflow Management</p>
                <p className="txt__sbtitle">Please Login to continue.</p>
              </div>
              <div className="login__page__form">

                <div className="form-group">
                  <input
                    type="text"
                    value={username}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    name="username"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group frgtlgin">
                  <button onClick={submitHandler} className="submit_btn">
                    Login
                  </button>
                  <div className="frgtPswrd__link">
                    <a href="#">Forgot Password ?</a>{" "}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;