// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sayyam",
  middleName: "",
  lastName: "Mubeen",
  message: " Passionate about using Economic theory and Data Analytics to tackle complex social problems. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sayyam03",
      style: "socialicons",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/audiofyle_9806/",
      style: "socialicons",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sayyammubeen",
      style: "socialicons",
    },

  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/sayyam.jpg"),
  imageSize: 375,
  message:
  "My name is Sayyam Mubeen and I have recently graduated with a Master of Arts in Economics from Boston University (BU). With an earnest passion for Economics, a budding interest in making peculiar insights from data, and an eagerness to learn before my Ph.D., I believe that I have a chance to make a real impact in this world! ",
  resume: require("../editable-stuff/resume.pdf"),
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sayyam03", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/sayyam.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/sayyam.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

const skills = {
  show: false,
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time opportunities where I can learn before getting a Ph.D. and apply the skills I have learned so far! If you know of any positions available, or if you just want to say hi, please feel free to email me at",
  email: "sayyam03@gmail.com",
};


// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
