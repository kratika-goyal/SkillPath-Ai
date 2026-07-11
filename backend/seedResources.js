import mongoose from "mongoose";
import dotenv from "dotenv";
import Resource from "./models/Resource.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const resources = [
  // HTML & CSS
  {
    title: "HTML Crash Course",
    url: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    type: "video",
    topic: "HTML",
    description: "Complete HTML tutorial for beginners.",
    tags: ["HTML", "Frontend"]
  },
  {
    title: "MDN HTML Docs",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    type: "documentation",
    topic: "HTML",
    description: "Official HTML documentation.",
    tags: ["HTML"]
  },
  {
    title: "CSS Crash Course",
    url: "https://www.youtube.com/watch?v=yfoY53QXEnI",
    type: "video",
    topic: "CSS",
    description: "Learn CSS from scratch.",
    tags: ["CSS"]
  },
  {
    title: "CSS Tricks",
    url: "https://css-tricks.com/",
    type: "article",
    topic: "CSS",
    description: "Best CSS articles and guides.",
    tags: ["CSS"]
  },

  // JavaScript
  {
    title: "JavaScript Crash Course",
    url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
    type: "video",
    topic: "JavaScript",
    description: "Complete JavaScript course.",
    tags: ["JavaScript"]
  },
  {
    title: "JavaScript.info",
    url: "https://javascript.info/",
    type: "documentation",
    topic: "JavaScript",
    description: "Modern JavaScript tutorial.",
    tags: ["JavaScript"]
  },

  // React
  {
    title: "React Official Docs",
    url: "https://react.dev",
    type: "documentation",
    topic: "React",
    description: "Official React documentation.",
    tags: ["React"]
  },
  {
    title: "React Course - freeCodeCamp",
    url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
    type: "course",
    topic: "React",
    description: "Complete React course.",
    tags: ["React"]
  },

  // Node.js
  {
    title: "Node.js Docs",
    url: "https://nodejs.org/docs/latest/api/",
    type: "documentation",
    topic: "Node.js",
    description: "Official Node.js docs.",
    tags: ["Node"]
  },
  {
    title: "Node.js Crash Course",
    url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
    type: "video",
    topic: "Node.js",
    description: "Node.js beginner tutorial.",
    tags: ["Node"]
  },

  // Express
  {
    title: "Express.js Docs",
    url: "https://expressjs.com/",
    type: "documentation",
    topic: "Express",
    description: "Official Express documentation.",
    tags: ["Express"]
  },

  // MongoDB
  {
    title: "MongoDB University",
    url: "https://learn.mongodb.com/",
    type: "course",
    topic: "MongoDB",
    description: "Official MongoDB learning platform.",
    tags: ["MongoDB"]
  },

  // Git
  {
    title: "Git Handbook",
    url: "https://guides.github.com/introduction/git-handbook/",
    type: "article",
    topic: "Git",
    description: "Learn Git basics.",
    tags: ["Git"]
  },

  // GitHub
  {
    title: "GitHub Docs",
    url: "https://docs.github.com/",
    type: "documentation",
    topic: "GitHub",
    description: "Official GitHub documentation.",
    tags: ["GitHub"]
  },

  // Python
  {
    title: "Python Official Docs",
    url: "https://docs.python.org/3/",
    type: "documentation",
    topic: "Python",
    description: "Official Python documentation.",
    tags: ["Python"]
  },
  {
    title: "Python Full Course",
    url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
    type: "course",
    topic: "Python",
    description: "Python complete beginner course.",
    tags: ["Python"]
  },

  // Machine Learning
  {
    title: "Machine Learning by Andrew Ng",
    url: "https://www.coursera.org/learn/machine-learning",
    type: "course",
    topic: "Machine Learning",
    description: "One of the best ML courses.",
    tags: ["ML"]
  },

  // Data Analytics
  {
    title: "Kaggle Learn",
    url: "https://www.kaggle.com/learn",
    type: "course",
    topic: "Data Analytics",
    description: "Free Data Analytics courses.",
    tags: ["Data"]
  },

  // Tools
  {
    title: "VS Code",
    url: "https://code.visualstudio.com/",
    type: "tool",
    topic: "Editor",
    description: "Best code editor.",
    tags: ["VS Code"]
  },

  {
    title: "Postman",
    url: "https://www.postman.com/",
    type: "tool",
    topic: "API",
    description: "API testing tool.",
    tags: ["API"]
  }
];

try {
  await Resource.deleteMany();
  await Resource.insertMany(resources);

  console.log(`${resources.length} resources inserted successfully.`);
  process.exit();
} catch (err) {
  console.error(err);
  process.exit(1);
}