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
  location: string;
  description: string;
  keyAreas: string[];
}

export const experiencesData: Experience[] = [
  {
    role: 'Junior Data Analyst Intern',
    company: 'Datavalley India Pvt. Ltd.',
    period: '21 December 2025 – 15 July 2026',
    type: 'Internship',
    location: 'India',
    responsibilities: [
      'Worked with foundational and practical data analysis concepts across business domains',
      'Worked with data cleaning and transformation pipelines to ensure dataset accuracy and consistency',
      'Analyzed structured datasets to uncover patterns, distributions, and trends',
      'Created meaningful reports and visualizations to communicate quantitative findings clearly',
      'Worked with SQL, Excel, Power BI, and Python-related analytics workflows',
      'Developed a practical understanding of data-driven problem solving in professional environments'
    ],
    technologies: ['SQL', 'Power BI', 'Microsoft Excel', 'Python', 'Data Cleaning', 'Reporting']
  }
];

export const educationData: Education = {
  degree: 'B.Tech – Computer Science and Engineering',
  institution: 'Krishna University College of Engineering and Technology',
  department: 'Computer Science and Engineering',
  location: 'Andhra Pradesh, India',
  description: 'Rigorous engineering curriculum focused on computer science fundamentals, data structures, algorithms, relational database management systems (RDBMS), object-oriented programming, and analytical problem-solving.',
  keyAreas: [
    'Relational Database Management Systems (SQL)',
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java, Python)',
    'Web Development & Software Engineering Principles',
    'Discrete Mathematics & Statistical Analysis'
  ]
};
