// Projects data - migrated from data/projects.json
export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'ai' | 'web' | 'extension' | 'system' | 'desktop' | 'mobile';
    technologies: string[];
    github?: string;
    demo?: string;
    image: string;
    featured: boolean;
    highlights?: string[];
}

export const projects: Project[] = [
{
        id: "test1",
        title: "Test - Project 1",
        description: "Description for project 1.",
        category: "web",
        technologies: ["Django", "PostgreSQL", "Ethereum", "Solidity", "Hardhat", "Web3.py"],
        github: "",
        demo: "",
        image: "/images/preview/test.png",
        featured: true,
        highlights: [
            "Test Line 1",
            "Test Line 2",
            "Test Line 3",
            "Test Line 4",
            "Test Line 5"
        ]
    },

{
        id: "test2",
        title: "Test - Project 2",
        description: "Description for project 2.",
        category: "ai",
        technologies: ["React", "Supabase", "Vercel", "Gemini AI", "TypeScript"],
        github: "",
        demo: "",
        image: "/images/preview/test.png",
        featured: true,
        highlights: [
            "Test Line 1",
            "Test Line 2",
            "Test Line 3",
            "Test Line 4",
            "Test Line 5"
        ]
    },
{
        id: "test3",
        title: "Test - Project 3",
        description: "Description for project 3.",
        category: "extension",
        technologies: ["Django", "PostgreSQL", "Ethereum", "Solidity", "Hardhat", "Web3.py"],
        github: "",
        demo: "",
        image: "/images/preview/test.png",
        featured: true,
        highlights: [
            "Test Line 1",
            "Test Line 2",
            "Test Line 3",
            "Test Line 4",
            "Test Line 5"
        ]
    },
{
        id: "test4",
        title: "Test - Project 4",
        description: "Description for project 4.",
        category: "system",
        technologies: ["ASP.NET Core 9", "React", "YOLOv11", "Docker", "PostgreSQL", "SignalR"],
        github: "",
        demo: "",
        image: "/images/preview/test.png",
        featured: true,
        highlights: [
            "Test Line 1",
            "Test Line 2",
            "Test Line 3",
            "Test Line 4",
            "Test Line 5"
        ]
    },
{
        id: "test5",
        title: "Test - Project 5",
        description: "Description for project 5.",
        category: "desktop",
        technologies: ["Django", "PostgreSQL", "Ethereum", "Solidity", "Hardhat", "Web3.py"],
        github: "",
        demo: "",
        image: "/images/preview/test.png",
        featured: true,
        highlights: [
            "Test Line 1",
            "Test Line 2",
            "Test Line 3",
            "Test Line 4",
            "Test Line 5"
        ]
    },
{
        id: "test6",
        title: "Test - Project 6",
        description: "Description for project 6.",
        category: "mobile",
        technologies: ["Django", "PostgreSQL", "Ethereum", "Solidity", "Hardhat", "Web3.py"],
        github: "",
        demo: "",
        image: "/images/preview/test.png",
        featured: true,
        highlights: [
            "Test Line 1",
            "Test Line 2",
            "Test Line 3",
            "Test Line 4",
            "Test Line 5"
        ]
    },

    ];

// Limit to 3 featured projects on homepage
export const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
export const allProjects = projects;
