import myimage from '../images/myimage.jpg';
import qr from '../images/QR.png';
import joker from '../images/joker.gif';
import catwoman from '../images/catwoman.gif';
import ursula from'../images/ursula.gif';
import camille from '../images/camille.gif';
import mycv from '../files/Bongayan_CV.pdf';
const AboutMe = () => {
    return (
        <>

{/* <!-- ======= Hero Section /Top About Page ======= --> */}
  <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h3>Hello, I am</h3>
          <h1>Julia Deanne Bongayan</h1>
          <h4>Aspiring Full Stack Developer</h4>
          <div>
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img">
          <img src={myimage} className="img-fluid-me" alt="Responsive"/>
        </div>
      </div>
    </div>
    </section>
  {/* <!-- End Hero --> */}

  <main id="main">

    {/* <!-- ======= About Section /Bottom About Page ======= --> */}
    <section id="about" className="about">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
            <img src={qr} className="qr" alt="Qr Code"/>
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0">
            <h2>Personal & Professional Background</h2>
            <p>
              I am an aspiring full stack developer based in Manila, Philippines. Taking up Information Technology at
              University of Santo Tomas under Web and Mobile Development Track.
            </p>
            <div className="row">
              <div className="col-md-6">
                <h3>What I do: </h3>
                <p>I've worked as a project manager and front end developer my whole college life but I've also had the opportunity
                  to work in a field of Full Stack Development in TELUS International as an intern, designing and strategizing entire website. 
                  From workflow diagrams to detailed user interface mockups.</p>
              </div>
              <div className="col-md-6">
                <h3>Why I do it: </h3>
                <p>As a web developer, I want to take an experience over the top. This means having fun and finding the perfect and most creative 
                  solution to the project. I am a licensed financial advisor and in my spare time I work my way around through my clients, do digital artworks and play video games with my friends.
                </p>
              </div>
            </div>
            <div>
            <a href={mycv} className="btn-primary" download="Bongayan_CV.pdf" target="_blank">DOWNLOAD CV</a>&nbsp;&nbsp;&nbsp;
            <a href="Contact" className="btn-secondary">HIRE ME</a>
            </div>
            </div>
          </div>
        </div>
     
    </section></main>
    {/* <!-- End About Section --> */}
        
    {/* <!-- ======= Artwork Section /Before Footer Page ======= --> */}
    <section id="art" className="art">
      <div className="container">

        <div className="section-title">
          <h2>My Digital Artworks</h2>
          <hr></hr>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="character">
              <img src={joker} className="img-fluid" alt="art gif"/>
              <div className="character-info">
                <div className="character-info-content">
                  <h4>Joker</h4>
                  <span>The Dark Knight</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="character">
              <img src={catwoman} className="img-fluid" alt="art gif"/>
              <div className="character-info">
                <div className="character-info-content">
                  <h4>CatWoman</h4>
                  <span>Comic books issue 7</span>
                </div>
              </div>
            </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="character">
              <img src={ursula} className="img-fluid" alt="art gif"/>
              <div className="character-info">
                <div className="character-info-content">
                  <h4>Ursula Corbero</h4>
                  <span>Nude color palettes</span>
                </div>
              </div>
            </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="character">
              <img src={camille} className="img-fluid" alt="art gif"/>
              <div className="character-info">
                <div className="character-info-content">
                  <h4>Camille Razat</h4>
                  <span>Camille from Emily Paris</span>
                </div>
              </div>
            </div>
            </div>
          
          
          </div>
          <p> All works are based on images that can be found randomly from google for inspiration and personal entertainment purposes only.</p>
        </div>
      
    </section>
    {/* <!-- End Artworks Section --> */}

</>
       
)
}

export default AboutMe;