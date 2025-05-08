import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ahmed",
  lastName: "Osama",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Front-end Developer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Cairo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Arabic", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AhmedOsama43",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ahmed-osama-7a1944284/",
  },
  {
    name: "Email",
    icon: "email",
    link: "ar882022@gmail.com",
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+201117756624",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Developer and Builder</>,
  subline: (
    <>
      I’m Ahmed, a software developer specializing in front-end and back-end
      development. I craft responsive web applications, and after hours, I build
      my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://app.cal.com/settings/my-account/profile",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ahmed is a software developer specializing in front-end and back-end web
        development. He builds responsive, user-friendly applications using
        React and Node.js, with a strong foundation in modern web technologies
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Projects",
    experiences: [
      {
        company: "Freshcart",
        timeframe: "2024",
        role: "Front-end Developer",
        achievements: [
          <>Developed a modern e-commerce web application using React.js.</>,
          <>
            Implemented responsive design for optimal performance across
            devices.
          </>,
          <>
            Integrated API functionality to fetch and display product data
            dynamically.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Routing",
        timeframe: "2024",
        role: "Front-End Developer",
        achievements: [
          <>
            Built a web application to practice React Router and responsive
            design.
          </>,
          <>
            Implemented dynamic routes, navigation guards, and route parameters.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies & Training",
    institutions: [
      {
        name: "Tanta University",
        description: <>Bachelor of Computer Science (2022 - 2026)</>,
      },
      {
        name: "Route Academy",
        description: <>Front-end Development Training (Feb 2024 - Sep 2024)</>,
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React.js",
        description: (
          <>
            Building interactive and responsive web applications using React.js.
          </>
        ),
        images: [],
      },
      {
        title: "Node.js & Express",
        description: (
          <>
            Developing scalable back-end services and APIs with Node.js and
            Express.
          </>
        ),
        images: [],
      },
      {
        title: "JavaScript & TypeScript",
        description: (
          <>
            Writing clean, efficient, and maintainable JavaScript and TypeScript
            code.
          </>
        ),
        images: [],
      },
      {
        title: "HTML, CSS",
        description: (
          <>Creating modern, responsive, and visually appealing UI designs.</>
        ),
        images: [],
      },
      {
        title: "Bootstrap & Tailwind CSS",
        description: (
          <>
            Designing mobile-friendly and fast-loading web pages with Bootstrap
            and Tailwind.
          </>
        ),
        images: [],
      },
      {
        title: "Git & GitHub",
        description: (
          <>Version control and collaboration using Git and GitHub.</>
        ),
        images: [],
      },
      {
        title: "SQL & Databases",
        description: <>Managing and optimizing databases with SQL.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
