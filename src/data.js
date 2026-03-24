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
  resumeLink: '#',
};

export const SKILLS = {
  Frontend:  ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
  Backend:   ['Node.js', 'Express.js', 'REST APIs', 'MySQL', 'PostgreSQL'],
  Languages: ['JavaScript', 'Python', 'SQL'],
  Tools:     ['Git', 'GitHub', 'Docker', 'Figma', 'Postman'],
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
    title:  'Weather-App',
    desc:   'Minimalist weather app with 7-day forecasts, geolocation support, and animated weather icons. 5000+ daily active users.',
    tags:   ['React', 'OpenWeather API', 'Geolocation'],
    github: 'https://github.com/kritik50/weather-app',
    
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