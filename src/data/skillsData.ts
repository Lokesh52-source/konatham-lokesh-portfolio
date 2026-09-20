export interface SkillItem {
  name: string;
  badge?: string;
  description: string;
  tag: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  color: string;
  gradient: string;
  skills: SkillItem[];
}

export const skillsCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    iconName: 'Code2',
    color: '#38bdf8',
    gradient: 'from-sky-500/20 to-cyan-500/10',
    skills: [
      { name: 'Python', tag: 'Core', description: 'Data structures, pandas-style logic, modular file handling, CSV/JSON processing' },
      { name: 'SQL', tag: 'Core', description: 'Relational querying, aggregation, window functions, CTEs, subqueries' },
      { name: 'Java', tag: 'Academic', description: 'Object-oriented fundamentals, problem solving, algorithms' },
      { name: 'HTML5', tag: 'Web', description: 'Semantic page structure, accessible DOM hierarchy' },
      { name: 'CSS3', tag: 'Web', description: 'Modern responsive layouts, Flexbox, Grid, transitions' },
      { name: 'JavaScript', tag: 'Web', description: 'DOM manipulation, async operations, interactive logic' }
    ]
  },
  {
    id: 'analytics',
    title: 'Data Analytics & Methodology',
    iconName: 'TrendingUp',
    color: '#00f2fe',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    skills: [
      { name: 'Data Cleaning', tag: 'Workflow', description: 'Handling missing values, deduplication, standardizing date/text formats' },
      { name: 'Data Transformation', tag: 'ETL', description: 'Restructuring raw datasets into analysis-ready models' },
      { name: 'Exploratory Data Analysis', tag: 'Analysis', description: 'Uncovering distributions, outliers, patterns, and correlations' },
      { name: 'Data Analysis', tag: 'Core', description: 'Formulating hypotheses, statistical summaries, trend evaluations' },
      { name: 'Data Visualization', tag: 'Design', description: 'Selecting optimal chart types to present clear business narratives' },
      { name: 'Dashboard Development', tag: 'BI', description: 'Building intuitive, multi-view analytical dashboards' },
      { name: 'Business Reporting', tag: 'Reporting', description: 'Translating complex data findings into actionable stakeholder reports' },
      { name: 'Insight Generation', tag: 'Value', description: 'Synthesizing metrics into operational recommendations' }
    ]
  },
  {
    id: 'excel',
    title: 'Microsoft Excel Analytics',
    iconName: 'FileSpreadsheet',
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    skills: [
      { name: 'Excel Tables', tag: 'Structure', description: 'Structured references, dynamic ranges, clean tabular modeling' },
      { name: 'PivotTables', tag: 'Aggregation', description: 'Multi-dimensional data summarization and grouping' },
      { name: 'PivotCharts', tag: 'Visuals', description: 'Synchronized visual reporting connected to pivot caches' },
      { name: 'Slicers & Timelines', tag: 'Interactivity', description: 'Dynamic dashboard filtering across categorical and time axes' },
      { name: 'VLOOKUP & XLOOKUP', tag: 'Formulas', description: 'Robust data matching across relational workbooks' },
      { name: 'SUM, AVERAGE, COUNT', tag: 'Stats', description: 'Essential statistical and conditional aggregation (SUMIFS, COUNTIFS)' },
      { name: 'Date & Time Functions', tag: 'Temporal', description: 'HOUR, TEXT, DATE functions for granular temporal breakdowns' },
      { name: 'Conditional Formatting', tag: 'Alerts', description: 'Visual hierarchy, threshold alerts, heatmap matrices' }
    ]
  },
  {
    id: 'bi',
    title: 'Business Intelligence & Visualization',
    iconName: 'PieChart',
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-orange-500/10',
    skills: [
      { name: 'Power BI', tag: 'Primary BI', description: 'End-to-end report design, relationships, and interactive visuals' },
      { name: 'Power Query', tag: 'ETL Engine', description: 'Automated data ingestion, column transformations, M language basics' },
      { name: 'DAX (Data Analysis Expressions)', tag: 'Calculations', description: 'CALCULATE, DISTINCTCOUNT, DIVIDE, FILTER, time intelligence' },
      { name: 'Tableau (Basic)', tag: 'BI', description: 'Fundamental worksheets, calculated fields, dashboard layouts' },
      { name: 'Excel Dashboards', tag: 'Spreadsheet BI', description: 'Self-refreshing executive dashboards and KPI status boards' }
    ]
  },
  {
    id: 'databases',
    title: 'Relational Databases',
    iconName: 'Database',
    color: '#818cf8',
    gradient: 'from-indigo-500/20 to-violet-500/10',
    skills: [
      { name: 'PostgreSQL', tag: 'RDBMS', description: 'Relational modeling, window functions, CTEs, complex join queries' },
      { name: 'MySQL', tag: 'RDBMS', description: 'Schema creation, constraints, indexing, transactional queries' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Development Environment',
    iconName: 'Wrench',
    color: '#c084fc',
    gradient: 'from-purple-500/20 to-pink-500/10',
    skills: [
      { name: 'pgAdmin', tag: 'Database GUI', description: 'Query management, explain plans, database maintenance' },
      { name: 'Git & GitHub', tag: 'Version Control', description: 'Branching, repository versioning, collaborative source management' },
      { name: 'Jupyter Notebook', tag: 'Data Science', description: 'Interactive Python workflows, EDA scratchpads, step-by-step documentation' },
      { name: 'VS Code', tag: 'IDE', description: 'Primary code editor with Python, SQL, and Git extensions' },
      { name: 'Google Sheets', tag: 'Cloud Sheets', description: 'Collaborative analysis, QUERY formulas, sharing data outputs' }
    ]
  }
];
