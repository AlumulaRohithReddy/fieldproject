import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Getstartedn/Getstartedn.css'
function Getstartedn() {
  return (
    <div>
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
    <div className='main2'>
    <Link className='bt' to="/occ">Back</Link>
        <h1 className='head3'>Sub-occasion</h1>
       
        <div className='card1'>
            <Link className='li'>Party Makeup</Link>
            <Link className='li'>Baby Shower</Link>
            <Link className='li'>House Warming</Link>
            <Link className='li'>Naming Ceremony</Link>
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
    </div>
  )
}

export default Getstartedn