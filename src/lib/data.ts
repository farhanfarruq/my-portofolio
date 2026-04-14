export const personal = {
    name: 'Farhan Farruq',
    handle: 'farhan.dev',
    role: 'Full-Stack Web Developer',
    location: 'Yogyakarta, Indonesia',
    email: 'farhanmiftakhulfarruq@gmail.com',
    bio: [
        "I'm Farhan Miftakhul Farruq, a Computer Science student at Institut Teknologi Dirgantara Adisutjipto, Yogyakarta. I specialize in full-stack web development with a focus on building clean, performant, and maintainable applications.",
        "Currently working as a freelance web developer, I collaborate on a range of projects from personal websites to small business platforms — shipping products from design to deployment.",
    ],
    techStack: [
        'JavaScript (ES6+)',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Tailwind CSS',
    ],
    social: {
        github: 'https://github.com/farhanfarruq',
        linkedin: 'https://www.linkedin.com/in/farhan-faruq/',
        email: 'mailto:farhanmiftakhulfarruq@gmail.com',
    },
};

export const skillGroups = [
    {
        category: 'Frontend',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'PHP', 'Laravel', 'REST API'],
    },
    {
        category: 'Database',
        skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
    },
    {
        category: 'Tools & DevOps',
        skills: ['Git', 'Docker', 'Vercel', 'Figma', 'Postman', 'VS Code'],
    },
];

export const experiences = [
    {
        company: 'PT Panemu Solusi Industri',
        position: 'Fullstack Developer',
        period: '1 April 2026 — 31 Juli 2026',
        location: 'Yogyakarta',
        description: [
            'Working dynamically within the IT division as a Fullstack Developer intern',
            'Collaborating with the team to gather requirements, design, and develop web capabilities',
            'Applying full-stack technologies to build clean, maintainable industrial solutions'
        ],
    },
    {
        company: 'Freelance',
        position: 'Web Developer',
        period: '2024 — Present',
        location: 'Remote',
        description: [
            'Built custom websites and web applications for small businesses and individuals',
            'Managed full project lifecycle: requirements gathering, design, development, and deployment',
            'Worked across the stack with Laravel, Next.js, and MySQL-based solutions',
        ],
    },
];

export const projects = [
    {
        title: 'Sadar Diri Web App',
        description:
            'A full-stack e-commerce application built with Laravel. Features include product filtering, cart functionality, user authentication, and an integrated payment gateway. Deployed on Laravel Cloud.',
        tags: ['Laravel', 'Blade', 'MySQL', 'Laravel Cloud'],
        github: 'https://github.com/farhanfarruq/sadardiri-web',
        live: 'https://sadardiri.laravel.cloud/',
    },
    {
        title: 'To-Do List Application',
        description:
            'A task management application with CRUD features, drag-and-drop interface, and user authentication. Designed to improve personal productivity and team collaboration.',
        tags: ['Laravel', 'Tailwind CSS', 'JavaScript', 'MySQL'],
        github: 'https://github.com/farhanfarruq',
        live: '',
    },
    {
        title: 'Sistem Kampus CRUD',
        description:
            'A campus data management system built with native PHP. Includes student record CRUD operations, basic authentication, and a responsive UI with Bootstrap.',
        tags: ['PHP', 'MySQL', 'Bootstrap', 'Vanilla JS'],
        github: 'https://github.com/farhanfarruq/sistem_kampus2',
        live: 'https://sistem-kampus.free.nf/',
    },
];
