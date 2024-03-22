import React from "react";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.png";
import img10 from "./img10.png";
import img11 from "./img11.png";
import img12 from "./img12.jpg";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div className="crousal">
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>
              Elevate Customer Relationships with Our Tailored Salesforce
              Solutions
            </h1>
            <button>Know More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>We Empower clients through our salesforce Experties</h1>
            <p>Transforming Businesses with Innovation Solution</p>
            <button>Get certified consultant advice</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="info">
        <div className="info-detail">
          <h1>Vsync Technologies </h1>
          <p>
            As a trusted Salesforce consulting partner, Vsync Technologies
            specializes in providing cutting-edge solutions to businesses
            seeking to optimize their operations through the Salesforce
            platform. The expert team at VedSphere works closely with clients to
            understand their unique business requirements and tailors Salesforce
            implementations to enhance productivity, streamline processes, and
            drive overall business success. Whether it's customizing Salesforce
            CRM, implementing Salesforce automation, or integrating third-party
            applications, VedSphere ensures that businesses harness the full
            potential of Salesforce technology.
          </p>
        </div>
        <div className="info-img">
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="Services">
        <h1>Our Services</h1>
        <h3>This text briefly introduces visitors to your main services.</h3>
        <div className="container">
          <div className="item">
            <img src={img4} alt="" />
            <h3>Salesforce Support</h3>
            <p>
              Our dedicated team of experts is committed to ensuring the
              seamless operation and continual enhancement of your Salesforce
              environment.
            </p>
          </div>
          <div className="item">
            <img src={img5} alt="" />
            <h3>Salesforce Development</h3>
            <p>
              It involves leveraging Salesforce's robust features and tools to
              build tailored solutions that enhance business processes, improve
              customer engagement, and drive overall efficiency.
            </p>
          </div>
          <div className="item">
            <img src={img6} alt="" />
            <h3>Salesforce Managed Services</h3>
            <p>
              Salesforce Managed Services play a crucial role in maintaining the
              health and effectiveness of a Salesforce implementation, ensuring
              that it evolves with the organization's needs.
            </p>
          </div>
          <div className="item">
            <img src={img8} alt="" />
            <h3>Hire A Resource</h3>
            <p>
              ReactJS development empowers developers to create dynamic and
              efficient user interfaces for single-page applications, enabling a
              smooth and responsive user experience.
            </p>
          </div>
          <div className="item">
            <img src={img7} alt="" />
            <h3>Salesforce Managed Services</h3>
            <p>
              Salesforce Managed Services play a crucial role in maintaining the
              health and effectiveness of a Salesforce implementation, ensuring
              that it evolves with the organization's needs.
            </p>
          </div>
          <div className="item">
            <img src={img10} alt="" />
            <h3> Video Editing</h3>
            <p>
              Our team of experienced editors combines technical proficiency
              with artistic flair to bring your ideas to life. From storytelling
              to visual effects, we leverage cutting-edge tools and techniques
              to create videos that captivate and inspire.
            </p>
          </div>
          <div className="item">
            <img src={img9} alt="" />
            <h3> Graphic Design</h3>
            <p>
              We offer a wide range of graphic design services tailored to your
              unique needs and objectives. Whether you need a new logo, branding
              collateral, packaging design, or digital assets, our team will
              work closely with you to bring your vision to life.
            </p>
          </div>

          <div className="item">
            <img src={img11} alt="" />
            <h3> Web Design</h3>
            <p>
              We offer custom web design solutions tailored to your specific
              needs, goals, and target audience. Whether you need a simple
              brochure website, an e-commerce platform, or a complex web
              application, our team will work closely with you to create a
              unique and impactful online presence.
            </p>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="pic">
          <h2>Let us help your business to move valued customers.</h2>
          <img src={img12} alt="" />
        </div>
        <div className="form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone number"/>
          <textarea placeholder="Write Message" cols="72" rows="8"></textarea>
          <button>SUBMIT NOW</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
