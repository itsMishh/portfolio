export const profile = {
  name: 'Misha Punj',
  eyebrow: 'Software Developer · Toronto area',
  email: 'itsmisha101@gmail.com',
  linkedin: 'https://www.linkedin.com/in/misha-punj',
};

export const experience = [
  {
    title: 'Software Developer · IIMSWISS Corp.',
    when: 'Jun 2025 – Present',
    bullets: [
      'Develop and maintain enterprise business applications in C#, ASP.NET MVC and Microsoft SQL Server, owning features end to end from requirements to production release.',
      'Design and build REST APIs and third-party integrations that connect internal systems with external platforms, including financial and accounting services.',
      'Apply Clean Architecture and sound design principles across new and existing code to improve maintainability and reduce technical debt.',
      'Resolve production issues and bugs, tracing root causes through code and data.',
      'Write and tune SQL Server queries and stored procedures, and document features and APIs for the team.',
      'Work in Agile sprints using Azure DevOps Server (TFS), Git and GitFlow, with code reviews and pull requests.',
    ],
  },
];

export const skills: Record<string, string[]> = {
  Languages: ['C#', 'SQL (T-SQL)'],
  Frameworks: ['.NET', 'ASP.NET MVC', 'REST APIs'],
  Data: ['Microsoft SQL Server'],
  SDLC: ['Clean Architecture', 'Unit Testing', 'Requirements Gathering', 'Technical Documentation'],
  Tools: ['Azure DevOps (TFS)', 'Git', 'GitFlow', 'NuGet', 'GitHub Copilot', 'Agile'],
};

export const education = [
  {
    degree: 'Diploma, Computer Programming',
    school: 'Sheridan College',
    period: 'May 2023 – Dec 2024',
    note: 'Data structures, algorithms, and software design. Core team member of the Google Developer Student Club (Sep 2023 – Oct 2024).',
  },
  {
    degree: 'Introduction to Cybersecurity',
    school: 'Cisco',
    period: '2023',
    note: '',
  },
];
