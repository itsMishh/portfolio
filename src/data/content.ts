export const profile = {
  name: 'Misha Punj',
  eyebrow: 'Software Developer · Toronto area',
  email: 'itsmisha101@gmail.com',
  linkedin: 'https://www.linkedin.com/in/misha-punj/',
};

export const experience = [
  {
    title: 'Software Developer',
    org: 'IIMSWISS Corp.',
    when: 'Jun 2025 – Present',
    bullets: [
      'Develop and maintain enterprise business applications in C#, ASP.NET MVC and Microsoft SQL Server, owning features end to end from requirements to production release.',
      'Design and build REST APIs and third-party integrations that connect internal systems with external platforms, including financial and accounting services.',
      'Apply Clean Architecture and sound design principles across new and existing code to improve maintainability and reduce technical debt.',
      'Resolve production issues and bugs, tracing root causes through code and data.',
      'Work in Agile sprints using Azure DevOps Server (TFS), Git and GitFlow, with code reviews and pull requests.',
      'Write and tune SQL Server queries and stored procedures, and document features and APIs for the team.',
    ],
  },
];

export const skills: Record<string, string[]> = {
  Languages: ['C#', 'SQL (T-SQL)'],
  Frameworks: ['.NET', 'ASP.NET MVC', 'REST APIs'],
  Data: ['Microsoft SQL Server', 'Relational design'],
  DevOps: ['Azure DevOps Server (TFS)', 'Git', 'GitFlow', 'Microsoft Azure'],
  Practices: ['Agile', 'SDLC', 'Clean Architecture', 'Requirements gathering', 'Technical documentation'],
};

export const education = [
  {
    title: 'Diploma, Computer Programming',
    org: 'Sheridan College',
    when: 'May 2023 – Dec 2024',
    body: 'Coursework in data structures, algorithms, Linux, computer math and technical communication. Core team member of the Google Developer Student Club (Sep 2023 – Oct 2024).',
  },
  {
    title: 'Introduction to Cybersecurity',
    org: 'Cisco',
    when: '2023',
    body: '',
  },
];
