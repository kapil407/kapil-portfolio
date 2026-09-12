export const portfolio = {
  name: 'Kapil Kumar',
  role: 'Software Developer',
  tagline:
    'I build dependable backend systems, clean web interfaces, and scalable applications that turn product ideas into production-ready software.',
  location: 'India',
  email: 'kapilkeer1998@gmail.com',
  apiUrl: 'http://localhost:1000/api',
  resumeUrl: 'https://drive.google.com/file/d/1wsptlBVRE8rwENofSmi8nA0IExjfo8bN/view?usp=sharing',
  socials: {
    github: 'https://github.com/kapil407',
    linkedin: 'https://www.linkedin.com/in/kapil-kumar-148b08305/',
  },
  about:
    'Software Developer focused on solving practical engineering problems with clean, maintainable code. I enjoy backend development, designing REST APIs, working with databases, and building scalable applications that stay reliable as they grow.',
  stats: [
    { value: '10+', label: 'Core technologies' },
    { value: '5+', label: 'Project modules shipped' },
    { value: '100%', label: 'Growth mindset' },
  ],
  skills: [
    { category: 'Languages', items: ['Java', 'C++', 'JavaScript', 'SQL'] },
    { category: 'Backend', items: ['Node.js',"Express.js", 'REST APIs'] },
    { category: 'Database', items: ['MySQL','MongoDB'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code'] },
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React.js','Tailwind CSS'] },
  ],
  projects: [
    {
      name: 'BlueNest',
      type: 'Social Media Platform',
      description:
        'A scalable full-stack social media platform built with the MERN stack, focused on secure authentication, real-time communication, AI-assisted content creation, and efficient media management.',
      // impact:
      //   'Built with a focus on structured backend logic, maintainable feature modules, and a user experience that can scale as engagement grows.',
      features: [
        'Implemented secure authentication using JWT access/refresh tokens, hashed refresh-token storage, automatic token renewal, and session revocation.',
        'Added OTP verification, real-time login alerts, secure logout, and logout-from-all-devices functionality',
        'Built real-time one-to-one messaging using Socket.IO for instant user communication.',
        'Integrated Cloudinary for optimized media storage and retrieval of posts, profile images, and comments.',
        'Implemented Redux Toolkit for centralized state management and reduced prop drilling.',
        'Developed REST APIs using Node.js and Express.js for authentication and user data management.',
        'Integrated Google Gemini API for AI-assisted post generation and an interactive AI chatbot.',
        'Implemented lazy loading to improve initial load performance and user experience.',
        'Added complete account deletion with immediate cleanup of user data and active sessions.'
      ],
      technologies: ['React.js', 'JavaScript', 'Node.js','Express.js', 'REST APIs', 'MongoDB','Redux Toolkit','Socket.IO','Cloudinary','Google Gemini API','Nodemailer'],
      githubUrl: portfolioSafeUrl('https://github.com/kapil407/BlueNest'),
      liveUrl: 'https://bluenest-frontend.onrender.com/',
    },
    {
  name: 'BookStore',
  type: 'E-Commerce Platform',
  description:
    'A full-stack e-commerce platform for browsing and purchasing books, featuring dynamic product search, filtering, cart management, order tracking, and a comprehensive admin dashboard.',

  features: [
    'Implemented dynamic product search and filtering for a smooth and efficient book discovery experience.',
    'Developed RESTful APIs for product, cart, user, and order management.',
    'Integrated MongoDB aggregation pipelines for efficient order history retrieval and data processing.',
    'Built cart management functionality with a streamlined shopping experience and clear navigation.',
    'Developed a comprehensive Admin Dashboard for managing books, inventory, users, and orders.',
    'Implemented CRUD operations for efficient inventory and product management.',
    'Added order status management to allow administrators to track and update customer orders.',
    'Integrated Cloudinary for efficient book cover and media storage and retrieval.',
    'Implemented Redux Toolkit for centralized state management across the application.'
  ],

  technologies: [
    'React.js',
    'JavaScript',
    'Node.js',
    'Express.js',
    'REST APIs',
    'MongoDB',
    'Redux Toolkit',
    'Cloudinary',
    'Tailwind CSS'
  ],

  githubUrl: portfolioSafeUrl('YOUR_GITHUB_URL'),
  liveUrl: 'https://bookstorewithadmin-frontend.onrender.com/'
},
  ],
  // experience: [
  //   {
  //     role: 'Software Developer',
  //     company: 'Project-Based Experience',
  //     period: 'Current',
  //     summary:
  //       'Designing and building full-stack applications with emphasis on backend APIs, database design, and readable implementation patterns.',
  //     highlights: [
  //       'Develop reusable components and service-oriented application modules',
  //       'Translate product requirements into reliable technical workflows',
  //       'Use Git, GitHub, and Postman to support disciplined development',
  //     ],
  //   },
  // ],
  education: [
    {
      degree: 'Master of Computer Application',
      institution: 'N I T Allahabad',
      period: '2023-2026',
      details:
        'Focused learning across programming, databases, web development, backend engineering, and software design fundamentals.',
    },
    {
  degree: 'Bachelor of Science (B.Sc.)',
  details: 'Physics, Chemistry & Mathematics (PCM)',
  
  institution: 'C C S University Meerut',
  period: '2017 – 2021'
}
  ],
  achievements: [
//    {
//   title: 'Coding Achievements',
//   value: 'LeetCode & GeeksforGeeks',
//   description:
//     'Regularly practice Data Structures and Algorithms on LeetCode and GeeksforGeeks, solving problems across core DSA concepts.',
// },
    {
  title: 'Coding Achievements',
  value: '550+ DSA Problems',
  gfgUrl:"https://www.geeksforgeeks.org/profile/kapilke7eoc?tab=activity",
  leetcodeUrl:"https://leetcode.com/u/keerkapil/",
  description:
    'Solved 450+ problems on LeetCode and 100+ on GeeksforGeeks, strengthening problem-solving skills across core data structures and algorithms.',
},
   {
  title: 'Certifications',
  value: 'MERN Stack',
  description:
    'Full-stack development with MongoDB, Express.js, React.js, and Node.js, along with REST APIs, Redux Toolkit, and modern web development practices.',
},
   {
  title: 'Accomplishments',
  value: 'Full-Stack Projects',
  description:
    'Built and deployed full-stack MERN applications featuring secure authentication, real-time messaging, AI integration, e-commerce functionality, and admin management.',
},
  ],
  navItems: [ 'Home','About', 'Skills', 'Projects', 'Education', 'Achievements', 'Contact'],
}

function portfolioSafeUrl(url) {
  return url
}
