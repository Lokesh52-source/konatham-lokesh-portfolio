export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  department: string;
  period: string;
  cgpa: string;
  location: string;
  description: string;
  keyAreas: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  id?: string;
  credentialUrl?: string;
}

export const experiencesData: Experience[] = [
  {
    role: 'Junior Data Analyst Intern',
    company: 'Datavalley India Pvt. Ltd.',
    period: 'Dec 2025 – Jul 2026 · 8 months',
    type: 'Internship',
    location: 'Vijayawada, India',
    responsibilities: [
      'Worked end-to-end on 3 primary datasets sourced from relational databases, ranging from approximately 50,000 to 100,000+ rows, writing SQL queries with JOINs, GROUP BYs, and CTEs to clean messy data, remove duplicates, and prepare analysis-ready tables.',
      'Built a Power BI dashboard analyzing ~74,881 traffic accident records as the primary deliverable, defining core KPIs — Total Accidents, Injury Rate, Fatality Rate, and Average Injuries per Accident — to help stakeholders track road-safety trends without manual reporting.',
      'Performed exploratory data analysis to identify trends, outliers, and inconsistencies across multiple datasets, and supported weekly reporting cycles, improving data accuracy and reducing manual cross-checking for the team.'
    ],
    technologies: ['SQL', 'Power BI', 'Microsoft Excel', 'Python', 'PostgreSQL', 'EDA', 'DAX', 'Data Cleaning']
  }
];

export const educationData: Education = {
  degree: 'Bachelor of Technology (B.Tech) – Computer Science and Engineering',
  institution: 'Krishna University Engineering & Technology',
  department: 'Computer Science and Engineering',
  period: '2022 – 2026',
  cgpa: '7.8 / 10',
  location: 'Andhra Pradesh, India',
  description: 'Rigorous engineering curriculum focused on computer science fundamentals, data structures, algorithms, relational database management systems (RDBMS), object-oriented programming, and analytical problem-solving.',
  keyAreas: [
    'Relational Database Management Systems (SQL)',
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Python, Java)',
    'Data Warehousing & Business Intelligence',
    'Discrete Mathematics & Statistical Analysis',
    'Database Normalization & Query Optimization'
  ]
};

export const certificationsData: Certification[] = [
  {
    name: 'Certificate of Internship – Junior Data Analyst Intern',
    issuer: 'Datavalley India Pvt. Ltd.',
    id: 'AP25S11102593'
  },
  {
    name: 'MySQL Developer',
    issuer: 'edX Verified Certificate',
    date: 'Issued April 6, 2024',
    id: '25e76498e2b24f2ba1534b0eac429e9e'
  },
  {
    name: 'Power BI',
    issuer: 'Microsoft (Great Learning)',
    date: 'Completed May 7, 2025'
  }
];
