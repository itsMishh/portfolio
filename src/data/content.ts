export const profile = {
  name: 'Misha Punj',
  eyebrow: 'Software Developer (.NET) · Oakville, ON (Toronto area)',
  location: 'Oakville, ON (Toronto area)',
  email: 'itsmisha101@gmail.com',
  linkedin: 'https://www.linkedin.com/in/misha-punj',
  github: 'https://github.com/itsMishh',
  resume: '/resume',
  resumePdf: '/Misha_Punj_Resume.pdf',
};

export const experience = [
  {
    title: 'Software Developer · IIMSWISS Corp.',
    when: 'Jun 2025 – Present',
    bullets: [
      'Develop and maintain enterprise applications using C#, .NET, ASP.NET MVC and Microsoft SQL Server, delivering features end to end from requirements gathering through development, testing and production release.',
      'Design and develop REST APIs and third-party integrations connecting internal enterprise systems with external financial and accounting platforms.',
      'Modernize and enhance legacy applications using Clean Architecture and software design principles to improve maintainability and scalability and reduce technical debt.',
      'Perform production support, incident analysis and troubleshooting, identifying root causes across application code, APIs and SQL Server data.',
      'Develop, optimize and maintain SQL Server queries, stored procedures and relational database components to support application functionality and performance.',
      'Write unit tests and use AI coding tools (Claude Code, OpenAI Codex, GitHub Copilot) to accelerate development, debugging and code reviews.',
      'Collaborate in an Agile/Scrum environment using Azure DevOps Server (TFS), Git and GitFlow, including pull requests and code reviews.',
      'Create and maintain technical documentation for application features, APIs, integrations and implementation processes.',
    ],
  },
];

export const skills: Record<string, string[]> = {
  Languages: ['C#', 'SQL (T-SQL)'],
  'Frameworks & APIs': ['.NET', 'ASP.NET MVC', 'REST APIs', 'Web Services'],
  Databases: ['Microsoft SQL Server', 'T-SQL', 'Stored Procedures', 'Relational Database Design'],
  'DevOps & Version Control': ['Azure DevOps Server (TFS)', 'Git', 'GitFlow', 'NuGet', 'Microsoft Azure'],
  'Testing & Tools': ['Unit Testing', 'Debugging', 'Root Cause Analysis', 'Claude Code', 'OpenAI Codex', 'GitHub Copilot'],
  Practices: ['Agile/Scrum', 'SDLC', 'Clean Architecture', 'Software Design', 'Requirements Gathering', 'Technical Documentation', 'Production Support'],
};

export const education = [
  {
    degree: 'Diploma, Computer Programming',
    school: 'Sheridan College',
    period: 'May 2023 – Dec 2024',
    note: 'Coursework in data structures, algorithms, Linux, computer and network security, and cloud-enabled networks. Core team member of the Google Developer Student Club (Sep 2023 – Oct 2024).',
  },
  {
    degree: 'Introduction to Cybersecurity',
    school: 'Cisco',
    period: '2023',
    note: '',
  },
];
