import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


  const PortfolioSection = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="../img/pcl.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
        <CardImg top width="100%" src="./img/lms.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  };







// import ScrollableAnchor from "react-scrollable-anchor";
// const portfolioItems = [
//   {
//     imgSrc: "../img/pcl.png",
//     heading: "Capstone Project",
//     description: "Capstone project from Suncoast Developers Guild",
//     url: "www.google.com"
//   },
//   {
//     imgSrc: "./img/lms.png",
//     heading: "Word Press",
//     description:""
//   }
  // {
  //   imgSrc: "./img/portfolio-3.jpg",
  //   heading: "Strawberries",
  //   description:
  //     "Strawberries are such a tasty snack, especially with a little sugar on top!"
  // },
  // {
  //   imgSrc: "./img/portfolio-4.jpg",
  //   heading: "Workspace",
  //   description:
  //     "A yellow workspace with some scissors, pencils, and other objects."
  // }
// ];
// const PortfolioSection = () => (
//   <ScrollableAnchor id="portfolio">
  
//     <section className="content-section">
//       <div className="container">
//         <div className="content-section-heading text-center">
//           <h3 className="text-secondary mb-0">Portfolio</h3>
//           <h2 className="mb-5">Recent Projects</h2>
//         </div>
//         <div className="row no-gutters">
//           {portfolioItems.map((project, index) => (
//             <div className="col-lg-6" key={`portfolio_item_${index}`}>
//               <a className="portfolio-item" href="www.google.com">
//                 <span className="caption">
//                   <span className="caption-content">
//                     <h2>{project.heading}</h2>
//                     <p className="mb-0">{project.description}</p>
//                   </span>
//                 </span>
//                 <img className="img-fluid" src={project.imgSrc} alt="" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//    </ScrollableAnchor>
// );

export default PortfolioSection;
