import emailjs from 'emailjs-com';

 const Contact = () => {
 

  function sendEmail (e)  {
    e.preventDefault();

    emailjs.sendForm('service_xaolhyz', 'template_2ukcc0q', e.target, 'L-s_ybg2o97hBh9au')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id="contacts" className="contact">

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          
          <h1>GET IN TOUCH</h1>
          <h2>Currently seeking new opportunities</h2>

          <h3>Julia Deanne Bongayan - Aspiring Full Stack Developer</h3>

          <h4>jdeannebongayan@gmail.com</h4>
          <h4>09563960275</h4>
          <br/>

          <h4>Sampaloc, Manila</h4>
          <h4>Philippines</h4>
        <div className="icon">
          <a href="https://www.facebook.com/hulyadeyan/" target="_blank">
          <i  className="bi bi-facebook "  ></i>
          </a>
          
          <a href="https://www.linkedin.com/in/juliabongayan/" target="_blank">
          <i className="bi bi-linkedin"></i>
              </a>
              </div>
        </div>
        <div className="contact-form col-md-6">
    <form id="contact-form" onSubmit={sendEmail}>
    
     <div className="form-group">
      <input type="text" placeholder="Your Name" className="form-control" name="name" id="name"/>
     </div>
     <br/>
     <div className="form-group">
      <input type="email" placeholder="Your Email" className="form-control" name="user_email" id="email"/>
     </div>
     <br/>
     <div className="form-group">
      <textarea rows="6" placeholder="Message" className="form-control" name="message" id="message"></textarea> 
     </div>
    <br/> 
     
     <div id="cf-submit">
      <input type="submit" id="contact-submit" className="btn btn-transparent" value="Submit"/>
     </div>      
     
    </form>

        </div>
       </div>
      </div>
      
      
    </section>
    
   

);
};
export default Contact;