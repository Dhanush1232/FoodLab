import React from 'react';
import Navbar from "../components/Navbar";
import img72 from '../images/LOCK.png';
import img73 from '../images/location.png';
import img74 from '../images/phone.png';
import img75 from '../images/email.png';
import img76 from '../images/fb.png';
import img77 from '../images/gm.png';
import img78 from '../images/tweet.png';
import img79 from '../images/insta.png';
import img200 from '../images/first.jpg';
import img201 from '../images/second.jpg';
import img202  from '../images/third.jpg';

const Home = () => {
 
  return(
    <>
       <Navbar/>
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <img src={img200} className="d-block w-100 " id="img" alt="..."/>
      <div id="content">
      <h1>EMPOWERING SOCIETY</h1>
      <h1>THROUGH SCIENCE</h1>
      <h3>Food lab is one point solution for all food safety needs.</h3>
      <button id='inside-slider'>Get Started</button></div>
    </div>
    <div className="carousel-item " >
      < img src={img201} className="d-block w-100 " id="img" alt="..."/>
      <div id="content">
      <h1>EMPOWERING SOCIETY</h1>
      <h1>THROUGH SCIENCE</h1>
      <h3>Food lab is one point solution for all food safety needs.</h3>
      <button id='inside-slider'>Get Started</button></div>
    </div>
    <div className="carousel-item " >
      <img src={img202} className="d-block w-100 " id="img" alt="..."/>
      <div id="content">
      <h1>EMPOWERING SOCIETY</h1>
      <h1>THROUGH SCIENCE</h1>
      <h3>Food lab is one point solution for all food safety needs.</h3>
      <button id='inside-slider'>Get Started</button></div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  
		<br/><br/><br/><br/><br/>
  <div className='footer'>
    <div className="one1">
      <h4 id="in-one1">ABOUT</h4><br/>
      <h6 id="in1-one1">
      The food laboratory will help to provide valid testing result on laboratory testing parameters such as testing on Salmonella, Listeria, E. coli, Coliform, Clostridium botulinum etc. So, food laboratory very important to check if the foods are wholesome or not.
      </h6>
      <div className='secure'>
        <div className='icon'>
        <img src={img72}/>
        </div><br/>
        <div className='text1'>
            <p id='in1-one11'>Secured Food</p>
        </div>
      </div>
    </div>
    <div className="two">
    <h4 id="in-one1">DETAILS</h4><br/>
    <div className='secure'>
        <div className='icon'>
        <img src={img73}/>
        </div>
        <div className='text11'>
            <p id='in1-one11'><pre>Address:  XYZ, New Delhi, 
            India,<br/>Pin-Code: 605 102. </pre></p>
        </div>
    </div><br/><br/>
    <hr class="line"></hr>
    <div className='secure'>
        <div className='icon'>
        <img src={img74}/>
        </div>
        <div className='text1'>
            <p id='in1-one11'><pre>Phone: +91 123456789</pre></p>
      </div>
      </div><br/><br/>
      <div className='secure'>
        <div className='icon'>
        <img src={img75}/>
        </div>
        <div className='text1'>
            <p id='in1-one11'><pre>Email: ABC@gmail.com</pre></p>
      </div>
      </div><br/><br/>
      <div className='row'>
        <div className='column'>
        <a target="_blank" href="https://mail.google.com/mail/u/0/"> <img src={img76}/> </a>
      </div>
      <div className='column'>
      <a target="_blank" href="https://mail.google.com/mail/u/0/"> <img src={img77}/> </a>
      </div>
      <div className='column'>
      <a target="_blank" href="https://mail.google.com/mail/u/0/"> <img src={img78}/> </a>
      </div>
      <div className='column'>
      <a target="_blank" href="https://mail.google.com/mail/u/0/"> <img src={img79}/> </a>
      </div>
      </div>
    </div>
    <div className="three">
    <h4 id="in-one1">INFORMATIONS</h4><br/>
    <h6 id="in1-one1">
      <pre>
        1. About Us<br/>
        2. Contact Us<br/>
        3. Terms & Conditions<br/>
        4. Training Registration<br/>
        5. Services<br/>
        6. Privacy Policy<br/>
      </pre>
      </h6>
    </div>
    <div className="four">
    <h4 id="in-one1">CONTACT FORM</h4><br/>
    <div className="contact_form_text" >
                  <textarea className='text_area' type='text'
                      name="message"
                      placeholder="Feedback" cols="60" rows="10"></textarea>
                </div>
                  <br></br>
                <div className="contact_form_button" >
                  <button type="submit" className="button7" ><strong>Send Feedback</strong></button>
                </div>
    </div> 
  </div>
          
    </>
  )
}

export default Home



