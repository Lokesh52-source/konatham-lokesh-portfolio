export interface Project {
  id: string;
  title: string;
  category: 'Power BI' | 'Excel' | 'SQL' | 'Python' | 'Web Development';
  categoryLabel: string;
  description: string;
  longDescription?: string;
  image: string;
  featured?: boolean;
  tools: string[];
  kpis?: { label: string; value: string; sub?: string }[];
  features: string[];
  skills: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  role?: string;
  highlights?: string[];
  sqlSnippet?: string;
}

export const projectsData: Project[] = [
  {
    id: 'nyc-traffic-powerbi',
    title: 'Urban Mobility Intelligence: Traffic Accident & Road Safety Analytics',
    category: 'Power BI',
    categoryLabel: 'Data Analytics | Power BI',
    featured: true,
    image: '/assets/powerbi_dashboard.png',
    description: 'An end-to-end Power BI dashboard analyzing approximately 74,881 NYC traffic accident records using Power Query, DAX, and a star-schema data model.',
    longDescription: 'This comprehensive Power BI project analyzes approximately 74,881 NYC collision records. Built with rigorous Power Query transformations, DAX measures, and a star-schema data model, it designs core KPIs for total accidents, injuries, fatalities, and accident rates while investigating trends by month, day, weekend, borough, and location to surface actionable road safety patterns.',
    tools: ['Power BI', 'Power Query', 'DAX', 'Star Schema', 'Data Modeling', 'Data Cleaning', 'Data Visualization'],
    kpis: [
      { label: 'Total Accidents', value: '74,881', sub: 'Collision records analyzed' },
      { label: 'Total Injuries', value: '27,000+', sub: 'Persons injured across crashes' },
      { label: 'Total Fatalities', value: '144', sub: 'Critical incidents tracked' },
      { label: 'Avg Injuries / Accident', value: '0.37', sub: 'Severity benchmark metric' }
    ],
    features: [
      'Accidents distribution by Borough (Brooklyn, Queens, Manhattan, Bronx, Staten Island)',
      'Accident & injury volume trends by Weekday and Month',
      'Time-based surge analysis highlighting peak traffic risk hours',
      'Fatality rate and injury rate comparisons using custom DAX measures',
      'Geographic distribution map visualization of NYC collisions',
      'Multi-level slicers for Date, Quarter, Borough, and Division filtering'
    ],
    skills: [
      'DAX Measures (DISTINCTCOUNT, CALCULATE, DIVIDE, FILTER)',
      'Star Schema Data Modeling & Relationship Management',
      'Power Query ETL & Data Cleansing',
      'Interactive KPI Cards & Executive Reporting',
      'Geospatial Mapping & Trend Spotting'
    ],
    highlights: [
      'Built an end-to-end Power BI dashboard analyzing ~74,881 NYC traffic accident records using Power Query, DAX, and a star-schema model',
      'Designed KPIs for total accidents, injuries, fatalities, accident rates, and average injuries per accident',
      'Investigated accident trends by month, day, weekend, borough, and location to surface actionable road safety patterns'
    ],
    githubUrl: 'https://github.com/Lokesh52-source',
    liveDemoUrl: '#'
  },
  {
    id: 'fnp-sales-excel',
    title: 'FNP Sales Analysis Dashboard',
    category: 'Excel',
    categoryLabel: 'Data Analytics | Microsoft Excel',
    featured: false,
    image: '/assets/excel_dashboard.png',
    description: 'An end-to-end Excel-based sales analysis dashboard built for FNP (Ferns N Petals), transforming customer, order and product data into an interactive dashboard for analyzing revenue trends, order patterns and customer behavior.',
    longDescription: 'An end-to-end analytics workflow analyzing order transactions across Indian metro cities, gifting occasions, product categories, and order hours. Relational tables were constructed and analyzed using advanced lookup functions, dynamic pivot engines, timelines, and slicers.',
    tools: ['Microsoft Excel', 'PivotTables', 'PivotCharts', 'Slicers', 'Timelines', 'VLOOKUP / XLOOKUP', 'Conditional Formatting'],
    kpis: [
      { label: 'Total Orders', value: '1,000', sub: 'Cleaned transactions' },
      { label: 'Sum of Revenue', value: '₹ 5,86,176', sub: 'Total sales generated' },
      { label: 'Avg Customer Spend', value: '₹ 4,652.19', sub: 'Customer basket value' },
      { label: 'Avg Delivery Days', value: '5.72', sub: 'Order-to-delivery turnaround' }
    ],
    features: [
      'Revenue breakdown by Occasion (Anniversary, Birthday, Festivals)',
      'Orders and peak sales volume distribution by Hour of Day',
      'City-level order performance tracking across key urban hubs',
      'Monthly revenue trend curves identifying seasonal gifting spikes',
      'Product category performance matrix',
      'Interactive Slicers and Time-period scrubbers'
    ],
    skills: [
      'Relational Data Tables (customer_table, orders_table, products_table)',
      'VLOOKUP & XLOOKUP formulas for multi-table enrichment',
      'Date & Time formulas (HOUR, TEXT, DATE functions)',
      'PivotTables & PivotCharts synchronization',
      'Executive KPI metric tiles with conditional formatting'
    ],
    highlights: [
      'Built an interactive Excel dashboard to analyze revenue, orders, products, customers, occasions, cities, and sales trends',
      'Leveraged PivotTables, PivotCharts, Slicers, Timelines, and advanced formulas to summarize and explore sales data',
      'Identified top-performing products, high-revenue occasions, and seasonal sales patterns to support business decisions'
    ],
    githubUrl: 'https://github.com/Lokesh52-source'
  },
  {
    id: 'sql-retail-sales',
    title: 'SQL Retail Sales Analysis',
    category: 'SQL',
    categoryLabel: 'Data Analytics | SQL | PostgreSQL',
    featured: false,
    image: '/assets/sql_cover.png',
    description: 'A PostgreSQL-based retail sales analysis project designed to solve real-world business questions using SQL and generate meaningful business insights from retail sales transactions.',
    longDescription: 'Developed in PostgreSQL using pgAdmin to answer 10 core business questions on consumer retail behavior. Features comprehensive exploratory data analysis, data cleaning for nulls, aggregation, customer segmentation, shift-based temporal analysis, and window ranking functions.',
    tools: ['PostgreSQL', 'pgAdmin', 'SQL DDL & DML', 'Window Functions', 'CTEs', 'Date Functions'],
    kpis: [
      { label: 'Database', value: 'PostgreSQL', sub: 'p1_retail_db' },
      { label: 'Business Queries', value: '10 Core', sub: 'In-depth SQL queries' },
      { label: 'Shift Analysis', value: '3 Tiers', sub: 'Morning, Afternoon, Evening' },
      { label: 'Target Focus', value: 'Customer & Revenue', sub: 'Segmentation & trends' }
    ],
    features: [
      'Data cleaning pipeline removing NULL/incomplete transaction records',
      'Shift analysis categorizing orders into Morning (<12PM), Afternoon (12-5PM), and Evening (>5PM)',
      'Top 5 high-value customer identification by total expenditure',
      'Category revenue ranking & demographic age analysis for Beauty/Clothing',
      'Best-selling month extraction per year using CTEs and RANK()',
      'High-ticket transaction filtering (sales > 1000) and quantity threshold filters'
    ],
    skills: [
      'Advanced SQL queries (SELECT, WHERE, GROUP BY, HAVING, ORDER BY)',
      'Window functions: RANK(), DENSE_RANK(), ROW_NUMBER()',
      'Common Table Expressions (CTEs) for multi-stage calculations',
      'Date manipulation: EXTRACT(MONTH FROM ...), TO_CHAR, DATE_PART',
      'Conditional CASE WHEN logic for shift classification'
    ],
    highlights: [
      'Analyzed retail sales data using PostgreSQL to uncover sales trends, customer behavior, and category performance',
      'Wrote CTEs, window functions, aggregate functions, CASE statements, and date functions to solve business questions',
      'Identified top customers, high-value transactions, best-performing sales months, and customer activity across product categories'
    ],
    sqlSnippet: `-- Shift-wise Sales Volume Analysis
WITH hourly_sales AS (
    SELECT *,
        CASE
            WHEN EXTRACT(HOUR FROM sale_time) < 12 THEN 'Morning'
            WHEN EXTRACT(HOUR FROM sale_time) BETWEEN 12 AND 17 THEN 'Afternoon'
            ELSE 'Evening'
        END AS shift
    FROM retail_sales
)
SELECT 
    shift,
    COUNT(*) AS total_orders,
    SUM(total_sale) AS total_revenue
FROM hourly_sales
GROUP BY shift
ORDER BY total_revenue DESC;`,
    githubUrl: 'https://github.com/Lokesh52-source/Retail-Sales-Analysis-SQL-Project--P1'
  },
  {
    id: 'python-student-management',
    title: 'Student Management System',
    category: 'Python',
    categoryLabel: 'Python | Application Development',
    featured: false,
    image: '/assets/python_sms_1.png',
    description: 'A Python-based Student Management System designed to manage student records through robust CRUD operations with structured JSON-based file storage.',
    longDescription: 'A modular, terminal-driven Python application engineered to handle academic records with complete data integrity. Features input validation, duplicate roll number checks, error handling, CSV export capability, and JSON file persistence.',
    tools: ['Python 3', 'JSON Storage', 'File Handling', 'Modular Architecture', 'Data Validation', 'CRUD Operations'],
    kpis: [
      { label: 'Storage Mode', value: 'JSON File', sub: 'students.json persistence' },
      { label: 'Operations', value: 'Full CRUD', sub: 'Add, View, Search, Update, Delete' },
      { label: 'Validation', value: 'Duplicate Check', sub: 'Guaranteed unique roll numbers' },
      { label: 'Export', value: 'CSV Support', sub: 'Data portability' }
    ],
    features: [
      'Add Student with strict input validation for Age, Course, and Marks',
      'View formatted tabular record lists of all enrolled students',
      'Search Student instantly by Roll Number or Name',
      'Update existing student attributes with validation checks',
      'Delete student records safely with confirmation prompts',
      'Generate comprehensive statistical student performance reports'
    ],
    skills: [
      'Modular Python programming (student_operations, validation, file_handler)',
      'File I/O and JSON serialization/deserialization',
      'Defensive programming & custom exception handling',
      'Input validation algorithms ensuring clean dataset entry'
    ],
    highlights: [
      'Strict roll number uniqueness check prevents corrupted academic entries',
      'Clean separation of concerns across modules for file handling and business logic',
      'Comprehensive reporting function calculating class averages and high scorers'
    ],
    githubUrl: 'https://github.com/Lokesh52-source'
  },
  {
    id: 'bus-pass-system',
    title: 'Online Bus Pass Management System',
    category: 'Web Development',
    categoryLabel: 'Web Development | Academic Project',
    featured: false,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    description: 'An online bus pass management system designed to reduce manual paperwork, simplify bus pass registration and renewal, and save commuter time.',
    longDescription: 'An academic web development initiative designed to streamline transit commuter ticketing. Focused specifically on creating an intuitive, accessible frontend experience that enables commuters to apply, track, and renew bus passes seamlessly.',
    role: 'Frontend Development & UI/UX Design',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Form Validation'],
    kpis: [
      { label: 'My Role', value: 'Frontend & UI', sub: 'UI/UX Design & Client logic' },
      { label: 'Platform', value: 'Responsive Web', sub: 'Cross-browser compatible' },
      { label: 'Workflow', value: 'Digital Pass', sub: 'Paperless application process' }
    ],
    features: [
      'User-friendly responsive pass application portal',
      'Structured multi-step form workflow for commuter details',
      'Pass category selection (Student, Regular, Senior Citizen)',
      'Client-side form validation for commuter identity uploads',
      'Clean, intuitive UI styled for rapid comprehension on mobile and desktop'
    ],
    skills: [
      'Modern Semantic HTML5 structure',
      'Responsive CSS layouts & media queries',
      'Vanilla JavaScript DOM manipulation & event handlers',
      'User-centric interface prototyping & UX flow design'
    ],
    highlights: [
      'Led frontend development and UI/UX design from concept to prototype',
      'Constructed accessible forms with real-time feedback for commuter submissions',
      'Designed responsive views tailored for commuters on mobile devices'
    ],
    githubUrl: 'https://github.com/Lokesh52-source'
  }
];
