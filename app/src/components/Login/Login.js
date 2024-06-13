import React from 'react'
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom'
function Login() {
  let navigate=useNavigate()
  function move(){
    navigate("/main")
  }
  return (
    <div>
      <div class="d d-flex flex-column justify-content-center align-items-center">
            <div class="image1">
              <img src="https://mail.google.com/mail/u/0?ui=2&ik=317a1da3bd&attid=0.1&permmsgid=msg-f:1791796945846943122&th=18ddbdd432d63d92&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9aXSS8g4gHiq0-r332naBntT-fRc2TXwajpI4lL4WynJVYrCgpcY4Ze3gEkrfkKHPZ846KHAfDgxzEk9Aw2PdL5A705h2fsLRsx1ItzckUiemjGRdTtsxpoqw&disp=emb&realattid=ii_lsznvbct0" class="img"/>
            </div>
            <div class="card">
            <label for="Username" class="l">Username</label>
            <input type="text" id="Username" name="Username" placeholder="Enter Username"/>
            <p ></p>
            <label for="Password" class="l">Password</label>
            <input type="password" id="Password" name="Password" placeholder="Enter Password"/>
            <p ></p>
            <button className="btn m-auto mt-5" onClick={move} >Login</button>
            <p class="mt-5">Don't have an account? <a href="signup.html">Signup</a></p>
        </div>
    </div>



    </div>
  )
}

export default Login;