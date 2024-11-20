const projects = [
  {
    id: 1,
    name: "GBV Web App Support",
    description:
      "A web app created to help Nigerians facing gender-based violence. It connects them with important resources, support services, and emergency contacts, offering help and safety information.",
    tags: ["Python", "JavaScript", "MySQL"],
    link: "https://github.com/JenniferOgbang/Gender-Based-Violence-Support-web-app-project",
  },

  {
    id: 2,
    name: "Dxmentorship",
    description:
      "A volunteer project that connects mentors with people looking to learn from them. I volunteered to help improve the app’s design and features using Astro and JavaScript, making it easier for users to find mentors and start learning.",
    tags: ["Astro", "JavaScript"],
    link: "https://github.com/Dxmentorship/dxmentorship",
  },

  {
    id: 3,
    name: "Floral E-commerce Site",
    description:
      "A group project where we built an online flower shop. Users can browse different flowers, place orders, and pay online. Our team worked together to create the website and manage the shop's real-time inventory.",
    tags: ["Bootstrap", "JavaScript", "JSON"],
    link: "https://github.com/codercodingss/flowers-website",
  },

  {
    id: 4,
    name: "Project Osus",
    description:
      "An open-source URL shortener application I contributed to during Hacktoberfest. This project helps first-time contributors get started with open-source by offering a simple and useful tool to shorten URLs. I worked on improving the app and adding new features to make it more user-friendly.",
    tags: ["Python"],
    link: "https://github.com/GitElla404/project-osus",
  },

  {
    id: 5,
    name: "Social Media Post API",
    description:
      "An API for building social media apps. It lets users log in, post updates, comment, and like posts. This was built using Spring Boot to handle the server-side tasks.",
    tags: ["REST API", "Java", "Spring Boot"],
    link: "https://github.com/codercodingss/post_api/tree/master",
  },

  {
    id: 6,
    name: "Java Phone Book App",
    description:
      "A simple contact book app that lets users store and manage phone numbers and addresses. It was built using JavaFX for easy use on desktop computers.",
    tags: ["Java", "JavaFX"],
    link: "https://github.com/GitElla404",
  },

  {
    id: 7,
    name: "News App",
    description:
      "A mobile app that lets users read the latest news. It gathers articles from different sources and uses Firebase to store data, with Flutter for building the app for both Android.",
    tags: ["Flutter", "Firebase"],
    link: "https://github.com/codercodingss/News---App/tree/master",
  },

  {
    id: 8, 
  name: "Nairaland Clone", 
  description: "A Nairaland clone built using PHP and CSS. This forum-style web app allows users to create accounts, post topics, and participate in discussions. I focused on designing the user interface and implementing the core functionality for user interactions and content management.", 
  tags: ["PHP", "Laravel", "Javascript"], 
  link: "https://github.com/codercodingss/nairalandphpclone" 
  },
  
  
  
  
  
  
];

const projectContainer = document.getElementById("projects-container");

projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add(
    "bg-white",
    "pt-3",
    "pr-3",
    "pb-0",
    "pl-3",
    "border-2",
    "border-secondary",
    "rounded-lg",
    "shadow-md",
    "text-center",
    "shadow-inner",
    "hover:scale-105",
    "hover:shadow-lg",
    "hover:ease-in",
    "space-y-4",
  );

  projectCard.innerHTML = `
      <h3 class="text-2xl font-bold text-primary text-center">${
        project.name
      }</h3>
      <p class="text-base -tracking-normal text-text">${project.description}</p>
      
      <div class="flex justify-center gap-2 mb-4">
        ${project.tags
          .map(
            (tag) =>
              `<span class="px-2 py-1 tracking-wider font-bold text-sm text-white rounded-full ${getTagColor(
                tag
              )}">${tag}</span>`
          )
          .join("")}
      </div>
  
      <a href="${
        project.link
      }" target="_blank" class="text-primary text-base mt-4 inline-block underline">Read More</a>
    `;

  projectContainer.appendChild(projectCard);
});

function getTagColor(tag) {
  const tagColors = {
    python: "bg-primary",
    javascript: "bg-secondary",
    "tailwind css": "bg-accent",
    bootstrap: "bg-primary",
    java: "bg-accent",
    javafx: "bg-secondary",
    "spring boot": "bg-primary",
    flutter: "bg-accent",
    firebase: "bg-primary",
    "Rest API": "bg-secondary",
    astro: "bg-accent",
    mysql: "bg-primary",
    json: "bg-secondary",
  };
  return tagColors[tag] || "bg-primary";
}
