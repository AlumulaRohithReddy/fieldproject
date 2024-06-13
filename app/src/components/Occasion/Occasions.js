import React from 'react'
import '../Occasion/Ocassion.css'
import { Link, NavLink } from 'react-router-dom'
function Occasions() {
  return (
    <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
    <div class="container">
      <NavLink class="navbar-brand mr-auto" to=''> 
        <img
          src="https://mail.google.com/mail/u/0?ui=2&ik=317a1da3bd&attid=0.1&permmsgid=msg-f:1791796945846943122&th=18ddbdd432d63d92&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_wIMCxezeFTyU7DnojN9pTI29VeyahI1N2rdyGXNafmNVJ-PmQy7SD-D2se6TIw6i34syWS6sHRbQRwQsbXk9AEucfNA2bc9QrBeivJDq-nJz5qEswEYfy08w&disp=emb&realattid=ii_lsznvbct0"
          class="logo"
        />
      </NavLink>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav  ">
          <Link class="nav-link active" id="navItem1" to='/main'>
            Home
          </Link>
          <Link class="nav-link active" id="navItem1" to='/occ'>
            Occasions
            
          </Link>
          <Link class="nav-link active" id="navItem1" to='/Gall'>
            Gallery
           
          </Link>
          <Link class="nav-link active" id="navItem1" to='/'>
            Reviews
          
          </Link>
          <Link class="nav-link active" id="navItem1" to='/contact'>
            Contact Us
          
          </Link>
        </div>
      </div>
    </div>
  </nav>
        <div className="c1 ">
        <h1 className="head">Occasions</h1>
        <div className="se">
                <div className="c">
                    <img src="https://khammaghani.in/wp-content/uploads/2022/06/South-Indian-Bride-785x1024.jpeg" className="img"/>
                    <div className="di ">
                    <h1 className="b mt-3">Bridal</h1>
                    <Link className="bt ml-auto mt-3" to='/get'>Get Started</Link>
                </div>    
            </div>
                <div className="c">
                    <img src="https://img.freepik.com/free-photo/indian-picture-woman-hands-mehendi-tradition-decoration_155003-3325.jpg?t=st=1714803491~exp=1714807091~hmac=5838add803421322e8f45120d387fdbc5227e3a0e3a259c9e2ab6df0e3c597f4&w=360" className="img"/>
                    <div className="di ">
                    <h1 className="b mt-3">Non-Bridal</h1>
                    <Link className="bt ml-auto mt-3" to='/getn'>Get Started</Link>
                </div>    
            </div>
             <div className="c">
                    <img src="https://media.fashonation.com/wp-content/uploads/2023/01/12045646/pexels-photo-1193942.jpeg" className="imge"/>
                    <div className="di ">
                    <h1 className="b mt-3">Shoot</h1>
                    <Link className="bt ml-auto mt-3">Get Started</Link>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-section pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <img
            src="https://mail.google.com/mail/u/0?ui=2&ik=317a1da3bd&attid=0.1&permmsgid=msg-f:1791796945846943122&th=18ddbdd432d63d92&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_wIMCxezeFTyU7DnojN9pTI29VeyahI1N2rdyGXNafmNVJ-PmQy7SD-D2se6TIw6i34syWS6sHRbQRwQsbXk9AEucfNA2bc9QrBeivJDq-nJz5qEswEYfy08w&disp=emb&realattid=ii_lsznvbct0"
            class="logo"
          />
          <h1 class="footer-section-mail-id">belleza2819@gmail.com</h1>
          <p class="footer-section-address">
            123 Pragathi Nagar, Hyderabad, India.
          </p>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Occasions