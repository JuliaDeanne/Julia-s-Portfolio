import React, {useState} from 'react';

import Gallery from "./gallery";


const Projects = () => { 
 
 const[items, setItems] = useState(Gallery);
 const filterItem = (categoryItem) => {
        const updatedItems = Gallery.filter((currentElement) => {
            return currentElement.category === categoryItem;
        });

        setItems(updatedItems);
    }
    return (
        <>
  <section className="portfolio-section" id="portfolio"></section>
  <div className="container">
  <div className="row ">
   <div className="col-lg-12">
    {/* <!-- section title --> */}
    <div className="title text-center">
     <h2>Projects<span className="color"> Handled</span></h2>
     <div className="border"></div>
    </div>
    {/* <!-- /section title --> */}
   </div>
       {/* <!-- /end col-lg-12 --> */}
    </div>
    <div className="row">
   <div className="col-md-12">
    <div className="portfolio-filter">
    <button className="active" type="button" onClick={() => setItems(Gallery)}>All</button>
     <button type="button" onClick={() => filterItem('web')}>Web</button>
     <button type="button" onClick={() => filterItem('mobile')}>Mobile</button>
     <button type="button" onClick={() => filterItem('thesis')}>Thesis</button>
   </div>
  </div>
  </div>
  </div>
  {/* gallery section */}
  <div className="row">
   <div className="col-lg-4" >
   {
       items.map((elem) => {
        const { name, image, description, } = elem;

        return(
    <div className="portfolio-block">
     <img className="project-image" src={image} alt={name}/>
     <div className="caption">
      <a className="search-icon image-popup"  href={image}>
       <i className="tf-ion-android-search"></i>
      </a>
      <h4><a href="">{name}</a></h4>
      <p>{description}</p>
     </div>
    </div>


)
})
}

</div>
</div>




  </>

)
}

export default Projects;






// PROJECTS LAJDLDJAL:
import React, {useState} from 'react';
import Gallery from "./gallery";


const Projects = () => { 
 
 const[items, setItems] = useState(Gallery);
 const filterItem = (categoryItem) => {
        const updatedItems = Gallery.filter((currentElement) => {
            return currentElement.category === categoryItem;
        });

        setItems(updatedItems);
    }
    return (
        <>
 
    <div className="title text-center" >
     <h2>Projects<span className="color"> Handled</span></h2>
     <div className="border"></div>
    </div>
    

    <section id="portfolio" className="portfolio">
      <div className="container" >

        <div className="row"  >
          <div className="col-lg-12">
            <ul id="portfolio-flters">
               <li className="filter-active" onClick={() => setItems(Gallery)}>All</li>
               <li onClick={() => filterItem('web')}>Web</li>
               <li onClick={() => filterItem('mobile')}>Mobile</li>
               <li onClick={() => filterItem('thesis')}>Thesis</li>
            </ul>
          </div>
        </div>
        </div>

          <div className="scrollmenu "> 
          {
            
            items.map((elem) => {
            const { name, image, description, } = elem;
            
           return(

        

          
        // {<div className="row portfolio-container" >

          {/* <div className="col-lg-4 col-md-6 portfolio-item filter-app"  >
            <div className="portfolio-wrap">
              <img src={image} className="img-fluid" alt={image}/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>{name}</h4>
                <p>App</p>
              </div>
            </div>
          </div> */}

          

          {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={image}  className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={image} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={azure} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={azure} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={azure} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={azure} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={azure} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={azure} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bi bi-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
            </div> */}
          
          
         
    
})
}

</div>
          </section>

  
   

        </>

)
}

export default Projects;