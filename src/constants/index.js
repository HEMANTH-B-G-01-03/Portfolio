import ai from "../assets/ai.png";
import ml from "../assets/ml.jpg";
import debugging from "../assets/debugging.png";
import restaurant from "../assets/company/restaurant.png";
import yoga from "../assets/company/yoga.png";
import urban from "../assets/company/urban.jpg";


import {
  
   mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  starbucks,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
   Quiz,
   Diabetes,   
   book,     
   Expressjs , 
   model,       
  

} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



// const services = [
//   {
//     title: "Backend Developer",
//     icon: web,
//   },
//   {
//     title: "AI Enthusiast",
//     icon: reactjs,
//   },
//   {
//     title: "ML Engineer",
//     icon: backend,
//   },
//   {
//     title: "Debugging Codes",
//     icon: creator,
//   },
//   {
//     title: "Logic Building",
//     icon: mobile,
//   },
// ];


const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: ai,
  },
  {
    title: "ML Engineer",
    icon: ml,
  },
  {
    title: "Debugging Codes",
    icon: debugging,
  },
  {
    title: "Logic Building",
    icon: mobile,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Express js",
    icon: Expressjs ,
  },
];

const experiences = [
  {
    title: "Restaurant MERN STACK",
    company_name: "TCE",
    icon: restaurant,
    iconBg: "#383E56",
    date: "March 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with my teammates and developed a full stack Application.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "QUIZ APP",
    company_name: "Coding Key LLP",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Apr 2023",
    points: [
      "Developing and maintaining quiz applications using Java and Firebase.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Real Time Yoga Pose Assistant",
    company_name: "Mini Project",
    icon: yoga,
    iconBg: "#383E56",
    date: "Jun 2023 - Oct 2023",
    points: [
      "Developed a real-time yoga pose recognition system using computer vision and Deep Learning techniques.",
      "Implemented body landmark detection using MediaPipe and TensorFlow to accurately classify various yoga poses.",
      "Provided real-time posture correction feedback to improve user fitness engagement and reduce injury risks.",
      "Enhanced pose detection accuracy and performance through image processing and AI-based classification models.",
],
  },
  {
    title: "Airport Mangemnet System",
    company_name: "DBMS Project",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Apr 2023",
    points: [
      "Designed and developed a comprehensive airport management system to streamline airport operations and enhance efficiency.",
      "Implemented features for flight scheduling, ticketing, and passenger management to improve operational workflows.",
      "Developed user-friendly interfaces for both passengers and airport staff to facilitate seamless interactions..",
      "Optimized the system for scalability and reliability, handling high volumes of transactions and data efficiently.",
    ],
  },
  {
    title: " Wearable Seizure Detection Devic for Epilepsy Management of the Patient using Deep Learning",
    company_name: "Final Year Project ( UG ) ",
    icon: model,
    iconBg: "#E6DEDD",
    date: "July 2024 - june 2025",
    points: [
      "Developed a wearable seizure detection system for epilepsy management using Deep Learning techniques and real-time health monitoring concepts.",
      "Implemented Deep Learning models to analyze patient health patterns and detect potential seizure activities with improved accuracy.",
      "Integrated sensor-based data processing and predictive analytics to support continuous patient monitoring and emergency alert mechanisms.",
      "Enhanced patient safety and healthcare support by enabling real-time seizure prediction and intelligent monitoring workflows.",
    ],
  },
   {
    title: " Visual Pollution Detection in urban environments",
    company_name: "Post graduate ",
    icon: urban,
    iconBg: "#E6DEDD",
    date: "Jan 2026 - march 2026",
    points: [
    "Developed an AI-powered visual pollution detection system capable of identifying garbage, posters, potholes, graffiti, and road damage in urban environments.",
  "Implemented YOLOv5 for real-time object detection and BiLSTM models for severity classification based on detected pollution patterns.",
  "Integrated Python, PyTorch, TensorFlow/Keras, and Streamlit to build an interactive and efficient smart city monitoring application.",
  "Performed detailed performance evaluation using Precision, Recall, F1-Score, Confusion Matrix, ROC-AUC, and accuracy analysis across multiple pollution categories.",
],
  },

];

const testimonials = [
  {
    testimonial:
      "The quiz application created was user-friendly and engaging. It made the learning process enjoyable and efficient for everyone in the class",
    name: "Harish",
    designation: "Associate Professor",
    company: "CSE Department",
    image: "img/Harish.jpg",
  },
  {
    testimonial:
      "The web  application created was user-friendly and engaging. It made the identification  smoother  and efficient for everyone as an end user ",
    name: "Dr. Umadevi",
    designation: "Associate Professor",
    company: "CSE Department , BMS College of Engineering ,Bengaluru",
    // image: "img/Harish.jpg",
  },
];

const projects = [
  {
    name: "Book Website",
    description:
      "Developed a comprehensive book management website using the MERN stack (MongoDB, Express, React, Node.js) to facilitate easy addition, removal, and management of books.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/Abhishekgadhar/BookMernStack",
  },
  {
    name: "Disease Detection Website",
    description:
      "Developed a web application using Support Vector Machine (SVM) and Streamlit to predict the likelihood of diabetes, Parkinson's disease, and heart disease",
    tags: [
      {
        name: "Steamlit",
        color: "blue-text-gradient",
      },
      {
        name: "ML",
        color: "green-text-gradient",
      },
      {
        name: "SVM",
        color: "pink-text-gradient",
      },
    ],
    image: Diabetes,
    source_code_link: "https://github.com/Abhishekgadhar/Disease-Diagnosis-and-Recommendation-System.git",
  },
  {
    name: "Quiz App",
    description:
      "Developed a quiz application that allows users to take quizzes on various topics, track their scores, and review their performance. The application includes features such as user authentication, quiz creation, and detailed result.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Android Development",
        color: "green-text-gradient",
      },
      {
        name: "XML",
        color: "pink-text-gradient",
      },
    ],
    image: Quiz,
    source_code_link: "https://github.com/Abhishekgadhar/Quiz_Android_App",
  },
];

export { services, technologies,  testimonials ,experiences,  projects };
