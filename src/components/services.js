import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
// import Logo from '../../public/img/js.png' Ask Mark or Jason about this
const ServicesOffered = [
  {
    title: "HTML5",
    imageUrl : "/img/html5.png"
  },
  {
    title: "CSS3",
    imageUrl: "/img/css3.png"
  },
  {
    title: "JavaScript",
    imageUrl: "/img/java-script.png"
  },
  {
    title: "Ruby",
    imageUrl: "/img/ruby.png"
  },
  {
  title: "React",
    imageUrl: "/img/react.png"
  },
  {
    title: "Vue",
    imageUrl: "/img/vue.png"
  },
  {
    title: "GitHub",
      imageUrl: "/img/git-hub.png"
    },
    {
      title: "WordPress",
      imageUrl: "/img/word-press.png"
    }
];
const ServicesSections = () => (
  <ScrollableAnchor id="services">
    <section className="content-section bg-primary text-white text-center">
      <div className="container">
        <div className="content-section-heading">
          <h2 className="mb-5">Core Knowledge</h2>
        </div>
        <div className="row">
          {ServicesOffered.map((service, index) => (
            <div
              className="col-lg-3 col-md-6 mb-5 mb-lg-0"
              key={`service_${index}`}
            >
              <span className="rounded-circle mx-auto mb-3">
                <img src={service.imageUrl}/>
              </span>
              <h4>
                <strong>{service.title}</strong>
              </h4>
              <p className="text-faded mb-0">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);
export default ServicesSections;
