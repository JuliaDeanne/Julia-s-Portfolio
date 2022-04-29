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
            
            <div className="cards col-lg-6">
              
             <img src={image} className="img-fluid" alt={image}/>
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