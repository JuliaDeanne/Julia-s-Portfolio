// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

import telus from '../images/telus.png';
import sunlife from '../images/sunlife.png';
import ust from '../images/ust.png';
import ue from '../images/ue.png';
import code from '../images/code.gif';

import routing from '../images/routing.png';
import itessentials from '../images/itessentials.png';
import cloud from '../images/cloud.jpeg';
import azure from '../images/azure.jpeg';
import devops from '../images/devops.jpeg';
import projmanage from '../images/projmanage.jpeg';
import fourthyr from '../images/fourthyr.png';
import thirdyr from '../images/thirdyr.png';
import secondyr from '../images/secondyr.png';

const Resume = () => {
    return (
      <>
  <section className="section about-2 padding-0 bg-dark" id="about">
 <div className="container-fluid">
  <div className="row">
   <div className="col-md-6 padding-0 ">
    <img className="img2-responsive" src={code} alt="code gif"/>
   </div>
   <div className="col-md-6">
    <div className="content-block">
     
     <div className="row">
     <div className="col-md-6">
     <h2>Experience</h2>
     <div className="media">
        
         <img className="telus" src={telus} alt="TELUS logo"/>
        
        <div className="media-body">
         <h4 className="media-heading">TELUS International Philippines Inc.</h4>
         <p>Applications Developer and Support Intern</p>
         <p>2022 - Present </p>
        </div>
       </div>
        
      </div>
      
      <div className="col-md-6">
      <h2>Education</h2>
      <div className="media">
        
         <img className="school" src={ust} alt="UST logo"/>
        
        <div className="media-body">
         <h4 className="media-heading">University of Santo Tomas</h4>
         <p>College</p>
         <p>2018 - Present </p>
        </div>
       </div>
       
      </div>
      </div>
      
     <div className="row">
     
      <div className="col-md-6">
      <div className="media">

        <div className="pull-left">
         <img className="sunlife" src={sunlife} alt="SunLife logo"/>
        </div>
        <div className="media-body">
         <h4 className="media-heading">Sunlife Philippines</h4>
         <p>Licensed Financial Advisor </p>
         <p>2021 - Present </p>
        </div>
       </div>
       
      </div>
      <div className="col-md-6">
      <div className="media">
        <div className="pull-left">
         <img className="school" src={ue} alt="UE logo"/>
        </div>
        <div className="media-body">
         <h4 className="media-heading">University of the East Manila</h4>
         <p>Senior High School </p>
         <p>2014 - 2018 </p>
        </div>
       </div>
       
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</section>
   
<section id="skills" className="bg-one section">
 <div className="container">
  <div className="row">
   
   <div className="title text-center" >
    <h2>My <span className="color">Skills</span></h2>
    <div className="border"></div>
   </div>
  
   <article className="col-md-4 col-sm-6 col-xs-12">
    <div className="skills-block text-center">
     <div className="skills-icon text-center">
          <i className="bi bi-code-slash"></i>
     </div>
     <h3>Coding Languages</h3>
     <p>Java, PHP, Python, Nodejs</p>
    </div>
   </article>
           
   <article className="col-md-4 col-sm-6 col-xs-12">
    <div className="skills-block text-center">
     <div className="skills-icon text-center">
          <i className="bi bi-layers-fill"></i>
     </div>
     <h3>Responsive Design</h3>
     <p>HTML, CSS, Bootstrap, React, Javascript</p>
    </div>
   </article>
           
   <article className="col-md-4 col-sm-6 col-xs-12">
    <div className="skills-block text-center">
     <div className="skills-icon text-center">
          <i className="bi bi-brush"></i>
     </div>
     <h3>Graphic | UI Design </h3>
     <p>Canva, Figma, Sketchbook Pro</p>
    </div>
   </article>
  
   <article className="col-md-4 col-sm-6 col-xs-12">
    <div className="skills-block text-center">
     <div className="skills-icon text-center">
          <i className="bi bi-window-dock"></i>
     </div>
     <h3>Apps Development</h3>
     <p>Visual Studio, Android Studio, Eclipse</p>
    </div>
   </article>
   
   <article className="col-md-4 col-sm-6 col-xs-12">
    <div className="skills-block text-center">
     <div className="skills-icon text-center">
          <i className="bi bi-server"></i>
     </div>
     <h3>Database Application</h3>
     <p>MySQl, MongoDb, Firebase</p>
    </div>
   </article>
  
   <article className="col-md-4 col-sm-6 col-xs-12">
    <div className="skills-block text-center kill-margin-bottom">
     <div className="skills-icon text-center">
          <i className="bi bi-hdd-network"></i>
     </div>
     <h3>Network Technologies</h3>
     <p>Basic Cisco Networking</p>
    </div>
   </article>
   
  </div>  
 </div>    
</section>   

{/* <!-- END OF MY SKILL SECTION !--> */}

<div className="title text-center" >
    <h2>Certificates & <span className="color">Awards</span></h2>
    <div className="border"></div>
   </div>
  
  <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide><img src={devops} className="swipe" alt="udemy certificate"/></SwiperSlide>
        <SwiperSlide><img src={projmanage} className="swipe" alt="udemy certificate"/></SwiperSlide>
        <SwiperSlide><img src={cloud} className="swipe" alt="udemy certificate"/></SwiperSlide>
        <SwiperSlide><img src={azure} className="swipe" alt="udemy certificate"/></SwiperSlide>
        <SwiperSlide><img src={routing} className="swipe" alt="cisco certificate"/></SwiperSlide>
        <SwiperSlide><img src={itessentials} className="swipe" alt="cisco certificate"/></SwiperSlide>
        <SwiperSlide><img src={fourthyr} className="swipe" alt="dean's list"/></SwiperSlide>   
        <SwiperSlide><img src={thirdyr} className="swipe" alt="dean's list"/></SwiperSlide>
        <SwiperSlide><img src={secondyr} className="swipe" alt="dean's list"/></SwiperSlide>
        
      </Swiper>
  
    </>

          )
        }
         

export default Resume;