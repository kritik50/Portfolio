// ✏️ EDIT THIS FILE to personalise your portfolio
// This is the ONLY file you need to change.

export const ME = {
  name:       'Kritikinchan Palai',
  role:       'Full Stack Developer',
  tagline:    'I craft clean, scalable web experiences — from pixel to database.',
  email:      'kritikpalai@email.com',
  github:     'https://github.com/kritik50',
  linkedin:   'https://www.linkedin.com/in/kritik-palai/',
  location:   'Bengaluru, India',
  resumeLink: 'https://drive.google.com/file/d/1uiDGjlta2l9fbV6cmNASqgWUbH5GUT8w/view?usp=drive_link',
};

 
export const EXPERIENCE = [
  {
    title:    'Web Developer Intern',
    company:  'Aayojon',       
    location: 'Bhubaneswar, India',        
    duration: 'Jan 2025 – May 2025',
    type:     'Internship',
    bullets: [
      'Collaborated in a 4-person agile team to integrate dynamic UI components with backend APIs, ensuring real-time data synchronization for service packages and user inquiries.',
      'Designed and implemented the core Appointment Booking System, enabling seamless scheduling and automated lead capture for event consultations.',
      'Seamlessly integrated dynamic UI elements with server-side logic for real-time service updates.',
      'Enhanced site speed and mobile responsiveness, improving overall user retention.',
      'Contributed to the full SDLC, from requirement gathering to deployment, for an event management platform.',
    ],
    tags: ['Angular 18', 'Node.js', 'REST APIs', 'Agile', 'Firebase' , 'GCP'],
  },
];

export const SKILLS = {
  Frontend:  ['React.js', 'Angular 18', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
  Backend:   ['Node.js', 'Express.js', 'Django', 'Flask', 'REST APIs', 'MySQL', 'PostgreSQL'],
  Languages: ['JavaScript', 'Python', 'SQL'],
  Data:      ['Pandas', 'NumPy'],
  Tools:     ['Git', 'GitHub', 'Docker', 'Postman'],
};

export const PROJECTS = [
  {
    num:    '01',
    title:  'Cloud Kitchen',
    desc:   'Developing a full-stack React + Firebase app for a cloud kitchen with dynamic content management and personalized meal plan customization.',
    tags:   ['React', 'Node.js', 'Firebase'],
    github: 'https://github.com/kritik50/cloudkitchen-fullstack',
    live:   'https://cloudkitchen-fullstack.vercel.app/',
  },
  {
    num:    '02',
    title:  'SmartBookMark',
    desc:   'Developed a full-stack React + Firebase app for a cloud kitchen with dynamic content management and personalized meal plan customization.',
    tags:   ['Next.js', 'Supabase', 'Gemini-Api'],
    github: 'https://github.com/kritik50/Smart-Bookmark',
    live:   'https://smart-bookmark-steel.vercel.app/',
  },
  {
    num:    '03',
    title:  'Sign-Language Detection',
    desc:   'Auto-generates quizzes from uploaded PDFs using NLP. Teachers can export results and track student performance over time.',
    tags:   ['Python', 'OpenCV', 'Teachable Machine', 'MediaPipe'],
    github: 'https://github.com/kritik50/Sign-Detection',
  },
  {
    num:    '04',
    title:  'Split-App',
    desc:   'Split-App is a full-stack group expense sharing app that lets users create groups, split bills, track balances, and settle dues.',
    tags:   ['React + Vite', 'FastApi', 'SQLAlchemy + SQLite'],
    github: 'https://github.com/kritik50/Split-App',
    live:   'https://split-app-tawny-seven.vercel.app/',
    
  },
];

export const EDUCATION = [
  {
    degree:     'B.Tech in Computer Science',
    school:     'Trident Academy Of Technology',
    location:   'Bhubaneswar, India',
    year:       '2021 – 2025',
    grade:      'CGPA 7.2 / 10',
    highlights: ['DBMS', 'Operating Systems', 'Web Development', 'Python', 'SQL'],
  },
  {
    degree:     'Class XII — CBSE',
    school:     'MBS Public School',
    location:   'Bhubaneswar, India',
    year:       '2021',
    grade:      '68.4%',
    highlights: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
  },
];

export const STATS = [
  { num: '4+',   label: 'Projects'   },
  { num: '7.2',  label: 'CGPA'       },
  { num: '3',    label: 'Hackathons' },
  { num: '2025', label: 'Graduating' },
];