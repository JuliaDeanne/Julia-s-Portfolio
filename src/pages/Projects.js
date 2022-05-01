
import React, {useState} from 'react';
import Gallery from './gallery';


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
               <li onClick={() => filterItem('others')}>Others</li>
            </ul>
          </div>
        </div>
        </div>

          <div className="scrollmenu "> 
          {
            items.map((elem) => {
            const { name, image, description, link } = elem;

            return(
            
            <div className="portfolio-item filter-app col-lg-4 offset-lg-1">
              <div className="portfolio-wrap">              
              <img src={image} className="img-fluid" alt={image}/>
              <div className="portfolio-links">
                {/* <a href={image} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bi bi-plus"></i></a> */}
                <a href={link} className="portfolio-details" title="More Details"><i className="bi bi-link"></i></a>
              </div>
              <div className="portfolio-info">
                <h4>{name}</h4>
                <p>{description}</p>
              </div>

            </div>
          </div>
   
            )
          })
        }

          
        
          
        
          </div>
          </section>
          
          



          

        </>

)
}

export default Projects;