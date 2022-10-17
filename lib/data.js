import { TECH_TYPE } from "./consts";

export const techCards = [
  { imageSrc: "html-5.svg", text: "HTML", type: TECH_TYPE.FRONTEND },
  { imageSrc: "css-3.svg", text: "CSS", type: TECH_TYPE.FRONTEND },
  { imageSrc: "javascript.svg", text: "Javascript", type: TECH_TYPE.LANGUAGES },
  { imageSrc: "java.svg", text: "Java", type: TECH_TYPE.LANGUAGES },
  { imageSrc: "python.svg", text: "Python", type: TECH_TYPE.LANGUAGES },
  { imageSrc: "sql.svg", text: "SQL", type: TECH_TYPE.LANGUAGES },
  { imageSrc: "c.svg", text: "C Language", type: TECH_TYPE.LANGUAGES },
  { imageSrc: "react.svg", text: "React.js", type: TECH_TYPE.FRONTEND },
  { imageSrc: "redux.svg", text: "Redux", type: TECH_TYPE.FRONTEND },
  { imageSrc: "css-in-js.png", text: "CSS in JS", type: TECH_TYPE.FRONTEND },
  { imageSrc: "next-js.svg", text: "Next.js", type: TECH_TYPE.FRONTEND },
  { imageSrc: "nodejs.svg", text: "Node.js", type: TECH_TYPE.BACKEND },
  { imageSrc: "express.png", text: "Express", type: TECH_TYPE.BACKEND },
  { imageSrc: "mysql.svg", text: "MySQL", type: TECH_TYPE.DATABASE },
  { imageSrc: "mongodb.png", text: "Mongo DB", type: TECH_TYPE.DATABASE },
  { imageSrc: "firebase.svg", text: "FireStore", type: TECH_TYPE.DATABASE },
  { imageSrc: "jest.svg", text: "Jest", type: TECH_TYPE.TESTING },
  {
    imageSrc: "rest-assured.png",
    text: "Rest Assured",
    type: TECH_TYPE.TESTING,
  },
  { imageSrc: "git.svg", text: "Git", type: TECH_TYPE.TOOLS },
  { imageSrc: "jira.svg", text: "Jira", type: TECH_TYPE.TOOLS },
  { imageSrc: "npm.svg", text: "NPM", type: TECH_TYPE.TOOLS },
  { imageSrc: "eslint.svg", text: "ESlint", type: TECH_TYPE.TOOLS },
];

export const animatedCards = [
  {
    title: "User Experience",
    text: "Building an interactive UI/UX keeps users hooked and customers satisfied.",
    imgSrc: "user-experience.svg",
  },
  {
    title: "Performance",
    text: "Studies have shown the negative impact poor performance can have on business goals.",
    imgSrc: "performance.svg",
  },
  {
    title: "Quality",
    text: "Less bugs leads to a maintainable and flexible system which delivers a high quality product.",
    imgSrc: "quality.svg",
  },
];

export const projects = [
  {
    id: "twitterclone",
    title: "Twitter Clone",
    subTitle: "Chat Application with channels, direct messages and more!",
    previewImage: "/projects/twitter/twitter1.png",
    about:
      "This project is a Clone of the famous web application Twitter. \n" +
      "Every color and pixel was measured in order to match the original app.",
    sliderImages: [
      {
        imgSrc: "/projects/twitter/twitter1.png",
        imgAlt: "screenshot1",
      },
      {
        imgSrc: "/projects/twitter/twitter2.jpg",
        imgAlt: "screenshot2",
      },
    ],
    keyFeatures: [
      "Creating an entire Express API from scratch",
      "Perfect Pixel design of Twitter from scratch (no component libraries).",
      "Fully Responsive app, Mobile friendly.",
      "Custom Components using Styled components (CSS-in-JS).",
      "Dynamically uploading images with Cloudinary API",
      "Rich Message editor using Draft Js.",
      "Using mongoDB database to store tweets and users instantly.",
      "Email + Password / authentication with JWT + Middlewares.",
      "Support of users + interactions",
      "Searching tweets and users within the app",
      "Tracking when users are online / offline.",
      "Like & dislike tweets / follow & unfollow users.",
      "Form validations for the Login and Register forms",
      "Change profile info, upload pictures using supabase",
    ],
    techUsedIcons: [
      { iconSrc: "/devIcons/react.svg", iconTitle: "React" },
      { iconSrc: "/devIcons/redux.svg", iconTitle: "Redux" },
      { iconSrc: "/devIcons/mongodb.png", iconTitle: "MongoDB" },
      { iconSrc: "/devIcons/express.png", iconTitle: "Express" },
      { iconSrc: "/devIcons/jwt.svg", iconTitle: "JWT" },
      { iconSrc: "/devIcons/nodejs.svg", iconTitle: "Node" },
    ],
    sourceCodeLink: "https://github.com/antondelu/twitter-front-react",
    liveDemoLink: "#",
  },
  {
    id: "flixtime",
    title: "FlixTime",
    subTitle: "All your Favorite movies and TV Shows with a beautiful design",
    previewImage: "/projects/flixtime/flixtime2.webp",
    about:
      "The main focus of this project was to sharpen my UI skills and build product with beautiful design from scratch",
    sliderImages: [
      { imgSrc: "/projects/flixtime/flixtime1.webp", imgAlt: "screenshot1" },
      { imgSrc: "/projects/flixtime/flixtime2.webp", imgAlt: "screenshot2" },
      { imgSrc: "/projects/flixtime/flixtime4.webp", imgAlt: "screenshot4" },
      { imgSrc: "/projects/flixtime/flixtime3.webp", imgAlt: "screenshot3" },
    ],
    keyFeatures: [
      "Design UI without any component system, only pure CSS (Styled Components).",
      "100% Responsive, using Media queries, Grid & Flexbox layouts.",
      "Built with React Hooks and wrote custom hooks to create reusable functionality",
      "Server side rendered app, with serverless functions to fetch the data.",
      "Using TMDB API as the data source, parallel fetching with axios.",
      "Functionality: Searching, Filtering and Sorting.",
    ],
    techUsedIcons: [
      { iconSrc: "/devIcons/next-js.svg", iconTitle: "Next.js" },
      { iconSrc: "/devIcons/react.svg", iconTitle: "React" },
      { iconSrc: "/devIcons/css-in-js.png", iconTitle: "CSS-in-JS" },
    ],
    sourceCodeLink: "https://github.com/alankatz3793/Flixtime",
    liveDemoLink: "https://flixtime-topaz.vercel.app/",
  },
  /*   {
    id: "dobble",
    title: "Dobble",
    subTitle: "Dobble card game brought back to life",
    previewImage: "/projects/dobble/dobble1.webp",
    about:
      "Dobble - The beloved board game created with React + Node.js.\nplayers have to find symbols in common between two cards.\n\nPresentation: https://slides.com/itamarcohen/dobble/",
    sliderImages: [
      { imgSrc: "/projects/dobble/dobble1.webp", imgAlt: "screenshot1" },
      { imgSrc: "/projects/dobble/dobble2.webp", imgAlt: "screenshot2" },
      { imgSrc: "/projects/dobble/dobble3.webp", imgAlt: "screenshot3" },
      { imgSrc: "/projects/dobble/dobble4.webp", imgAlt: "screenshot4" },
    ],
    keyFeatures: [
      "Design of Dobble from scratch (no component libraries) + using the original game symbols.",
      "React hooks for form validation, handle game state, pre-cache images.",
      "Using Socket.IO + Express in a Node.js server as a bridge between clients and Room manager.",
      "Fully Responsive + Optimized for Mobile.",
      "Offline mode - Two Players on same device.",
      "Online mode - Two Players on Different devices.",
      "Custom Components using Styled components (CSS-in-JS).",
    ],
    techUsedIcons: [
      { iconSrc: "/devIcons/react.svg", iconTitle: "React" },
      { iconSrc: "/devIcons/nodejs.svg", iconTitle: "Node.js" },
      { iconSrc: "/devIcons/socket-io.svg", iconTitle: "Socket.IO" },
      { iconSrc: "/devIcons/css-in-js.png", iconTitle: "CSS-in-JS" },
    ],
    sourceCodeLink: "https://github.com/Icohen007/dobble",
    liveDemoLink: "http://play-dobble.herokuapp.com",
  }, */
  {
    id: "Hack Wines",
    title: "Hack Wines",
    subTitle: "Wines E-commerce",
    previewImage: "/projects/wines/wines1.png",
    about:
      "This proyects was made by 3 students. In this project we built an eCommerce Shop - with the MERN Stack(MongoDB, Express, React, Node.js), my first fullstack application.",
    sliderImages: [
      { imgSrc: "/projects/wines/wines1.png", imgAlt: "screenshot1" },
      { imgSrc: "/projects/wines/wines2.png", imgAlt: "screenshot2" },
      { imgSrc: "/projects/wines/wines3.png", imgAlt: "screenshot3" },
      { imgSrc: "/projects/wines/wines4.png", imgAlt: "screenshot4" },
      { imgSrc: "/projects/wines/wines5.png", imgAlt: "screenshot5" },
      { imgSrc: "/projects/wines/wines6.png", imgAlt: "screenshot6" },
    ],
    keyFeatures: [
      "Creating an entire Express API from scratch",
      "User authentication with JWT and cookies",
      "Password hashing with bcrypt",
      "Authorization, Roles, and Protected Routes",
      "Dynamically uploading images with Cloudinary API",
      "Modelling database content with Mongoose schemas",
      "Pagination with MongoDB",
      "Beautiful and profesional design using React.js & Redux",
      "Form and requests Validation in server side",
    ],
    techUsedIcons: [
      { iconSrc: "/devIcons/react.svg", iconTitle: "React" },
      { iconSrc: "/devIcons/redux.svg", iconTitle: "Redux" },
      { iconSrc: "/devIcons/mongodb.png", iconTitle: "MongoDB" },
      { iconSrc: "/devIcons/express.png", iconTitle: "Express" },
      { iconSrc: "/devIcons/jwt.svg", iconTitle: "JWT" },
      { iconSrc: "/devIcons/nodejs.svg", iconTitle: "Node" },
    ],
    sourceCodeLink: "https://github.com/SantiTorija/ecommerce_front_end",
    liveDemoLink: "https://hack-wines.vercel.app/",
  },
  {
    id: "alanPortafolio",
    title: "My Portfolio",
    subTitle: "Well, this is really meta...",
    previewImage: "/projects/portfolio/portfolio1.png",
    about: `This is the parallel to the interview question, "tell me about yourself..." 😉
My personal portfolio built to showcase my projects and skills. I designed and develop by myself and happy with how it turned out`,
    sliderImages: [
      { imgSrc: "/projects/portfolio/portfolio1.png", imgAlt: "screenshot1" },
      { imgSrc: "/projects/portfolio/portfolio2.png", imgAlt: "screenshot2" },
      { imgSrc: "/projects/portfolio/portfolio3.png", imgAlt: "screenshot3" },
      { imgSrc: "/projects/portfolio/portfolio5.png", imgAlt: "screenshot4" },
      { imgSrc: "/projects/portfolio/portfolio4.png", imgAlt: "screenshot5" },
    ],
    keyFeatures: [
      "Used NextJS to build server-rendered isomorphic React portfolio application",
      "Optimized to get high Lighthouse score, by lazy loading fonts and images, code-splitting",
      "Responsive application, using CSS-in-JS, Media queries, Grid & Flexbox layouts.",
      "Wrote serverless function (using mailgun & nodemailer) to handle contact form submission",
    ],
    techUsedIcons: [
      { iconSrc: "/devIcons/next-js.svg", iconTitle: "Next.js" },
      { iconSrc: "/devIcons/react.svg", iconTitle: "React" },
      { iconSrc: "/devIcons/css-in-js.png", iconTitle: "CSS-in-JS" },
      { iconSrc: "/devIcons/nodemailer.png", iconTitle: "Nodemailer" },
    ],
    sourceCodeLink: "https://github.com/alankatz3793/Portfolio",
    liveDemoLink: "https://myportfolio-alankatz.vercel.app/",
  },
  /* {
    id: "shapirabros",
    title: "Shapira Bros",
    subTitle: "Website for Shapira brothers",
    previewImage: "/projects/shapirabros/shapirabros1.jpg",
    about:
      "this is my first frontend project, I created a website for a costumer with React.js, developed with pixel perfect and custom design",
    sliderImages: [
      {
        imgSrc: "/projects/shapirabros/shapirabros6.png",
        imgAlt: "screenshot6",
      },
      {
        imgSrc: "/projects/shapirabros/shapirabros1.jpg",
        imgAlt: "screenshot1",
      },
      {
        imgSrc: "/projects/shapirabros/shapirabros2.jpg",
        imgAlt: "screenshot2",
      },
      {
        imgSrc: "/projects/shapirabros/shapirabros3.jpg",
        imgAlt: "screenshot3",
      },
      {
        imgSrc: "/projects/shapirabros/shapirabros4.jpg",
        imgAlt: "screenshot4",
      },
      {
        imgSrc: "/projects/shapirabros/shapirabros5.jpg",
        imgAlt: "screenshot5",
      },
    ],
    keyFeatures: [
      "Creating interactive website with React.js",
      "Developed fully responsive front-end application using modern CSS-in-JS solution Styled Components to build reusable React components",
    ],
    techUsedIcons: [
      { iconSrc: "/devIcons/react.svg", iconTitle: "React" },
      { iconSrc: "/devIcons/css-in-js.png", iconTitle: "CSS-in-JS" },
    ],
    liveSiteLink: "https://shapira-bros.com",
  }, */
];
