import React from 'react'

const Login = () => {
  return (
    <div>
        
        <h1 className="loginTitle">Select Login Method:</h1>
        <div className="wrapper">
            <div className="left">

                <div className="loginbtn">
                    <button>Login With Google</button>
                </div>

            </div>
            <div className="right">
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
            </div>
        </div>
    </div>
  )
}

export default Login