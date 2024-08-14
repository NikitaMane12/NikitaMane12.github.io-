import ProjectCard from "./ProjectCard";
import "./project.css";
import Zee5 from "../assets/img/zee5.png";
import speedUp from "../assets/img/speedUp.png";
import basket from "../assets/img/basket.png";
import EventImage from "../assets/img/event.png";
import ConvexTechImage from "../assets/img/convtech.png";
import WeatherAppImage from "../assets/img/whetr app.png";
import html from "../assets/img/html1.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import node from "../assets/img/nodeJs.jpg";

export const Projects = () => {
  const projectData = [
    {
      image: Zee5,
      title: "ZEE5",
      description: `About Zee5 App -->Watch premieres of your favorite TV show episodes a day before telecast on ZEE5 -->Features Landing Page | Login, signup, and user profile | Video page | Buy Plan --> Tech-Stack HTML | CSS | JavaScript| JSON`,
      techStack: [
        { image: html, name: "HTML" },
        { image: css, name: "CSS" },
      ],
      liveLink: "https://zee5-hazel.vercel.app/",
      githubLink: "https://github.com/NikitaMane12/zee5",
    },
    {
      image: speedUp,
      title: "Speed UP",
      description:
        "The SPEEDUP Website is a platform designed to provide information and resources for users interested in electric transportation solutions.",
      techStack: [
        { image: html, name: "HTML" },
        { image: css, name: "CSS" },
        { image: js, name: "JS" },
      ],
      liveLink: "https://main--resilient-rolypoly-c33690.netlify.app/",
      githubLink: "https://github.com/NikitaMane12/SpeedUp",
    },
    {
      image: basket,
      title: "Basket-Haven",
      description: `Bigbasket is one of India's leading online grocery stores, offering a wide range of products including fresh fruits and vegetables, groceries, household essentials, and gourmet items. Competitive prices, and reliable delivery service, making it a popular choice for busy urban consumers looking for a convenient way to shop for groceries online.`,
      techStack: [
        { image: html, name: "HTML" },
        { image: css, name: "CSS" },
        { image: js, name: "JS" },
      ],
      liveLink:
        "https://66405eedbcb7ce8c1a800ea6--timely-froyo-5c39a1.netlify.app/",
      githubLink: "https://github.com/NikitaMane12/Basket-Heaven",
    },
    {
      image: EventImage,
      title: "Event-Delight",
      description:
        "Event Delight is a website designed for event planners and ticket booking. It helps organizers plan events and allows attendees to purchase tickets easily.",
      techStack: [
        { image: html, name: "HTML" },
        { image: css, name: "CSS" },
        { image: js, name: "JS" },
        { image: node, name: "NodeJs" },

        {
          image:
            "https://pluspng.com/img-png/react-logo-png-javascript-logo-react-js-stickers-mugs-t-shirts-and-much-more-880x1136.jpg",
          name: "React",
        },
      ],
      liveLink: "https://event-delight-uqcy.vercel.app/",
      githubLink: "https://github.com/NikitaMane12/Event-Delight",
    },
    {
      image: ConvexTechImage,
      title: "ConvexTech",
      description:
        "ConvexTech Inc. is a global specialist in staffing, recruiting, and consulting across IT, non-IT, engineering, and healthcare sectors, with a strong foothold in software development.",
      techStack: [
        { image: html, name: "HTML" },
        { image: css, name: "CSS" },
        { image: js, name: "JS" },
        {
          image:
            "https://pluspng.com/img-png/react-logo-png-javascript-logo-react-js-stickers-mugs-t-shirts-and-much-more-880x1136.jpg",
          name: "React",
        },
      ],
      liveLink:
        "https://667059a45686ac00927c9621--delicate-maamoul-04d99a.netlify.app/Home",
      githubLink: "https://github.com/NikitaMane12/eBay-Egale",
    },
    {
      image: WeatherAppImage,
      title: "Weather App",
      description:
        "About Weather App --> User can search city --> where user will get weather information and map of that city.",
      techStack: [
        { image: html, name: "HTML" },
        { image: css, name: "CSS" },

        {
          image:
            "https://pluspng.com/img-png/react-logo-png-javascript-logo-react-js-stickers-mugs-t-shirts-and-much-more-880x1136.jpg",
          name: "React",
        },
      ],
      liveLink: "https://w1-six-chi.vercel.app/",
      githubLink: "https://github.com/NikitaMane12/whather-app",
    },
  ];

  return (
    <section id="projects">
      <div className="heading">
        <h1 style={{ textAlign: "center" }}>Project</h1>
      </div>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
