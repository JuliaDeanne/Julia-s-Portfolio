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