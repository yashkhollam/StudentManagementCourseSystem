const coursesData = [

    // 1. Complete Web Development Bootcamp
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        category: "Web Development",
        instructor: "John Smith",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
        rating: 4.8,
        reviews: 1250,
        duration: "45 Hours",
        level: "Beginner",
        price: 999,
        description: "Learn HTML, CSS, JavaScript and modern web development.",

        originalPrice: 1999,
        totalStudents: 3200,
        badge: "Bestseller",
        demoVideo: "https://www.youtube.com/embed/UB1O30fR-EE",

        whatYouWillLearn: [
            "Build responsive websites using HTML and CSS",
            "Understand JavaScript fundamentals",
            "Learn modern frontend development",
            "Build real-world web applications",
            "Understand responsive web design"
        ],

        requirements: [
            "Basic computer knowledge",
            "A computer or laptop",
            "Willingness to learn programming"
        ],

        instructorDetails: {
            name: "John Smith",
            role: "Full Stack Web Developer",
            experience: "6+ Years",
            bio: "Experienced web developer passionate about teaching modern web technologies.",
            image: "https://i.pravatar.cc/150?img=12"
        },

        courseContent: [
            {
                id: 1,
                module: "HTML Fundamentals",
                lessons: [
                    "Introduction to HTML",
                    "HTML Elements and Tags",
                    "Forms and Tables",
                    "Semantic HTML"
                ]
            },
            {
                id: 2,
                module: "CSS Fundamentals",
                lessons: [
                    "Introduction to CSS",
                    "CSS Selectors",
                    "Flexbox and Grid",
                    "Responsive Design"
                ]
            },
            {
                id: 3,
                module: "JavaScript Fundamentals",
                lessons: [
                    "Variables and Data Types",
                    "Functions",
                    "Arrays and Objects",
                    "DOM Manipulation"
                ]
            }
        ]
    },


    // 2. Complete React JS Course
    {
        id: 2,
        title: "Complete React JS Course",
        category: "Frontend Development",
        instructor: "Sarah Johnson",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
        rating: 4.9,
        reviews: 980,
        duration: "30 Hours",
        level: "Intermediate",
        price: 799,
        description: "Master React, hooks, components and state management.",

        originalPrice: 1599,
        totalStudents: 2800,
        badge: "Top Rated",
        demoVideo: "https://www.youtube.com/embed/SqcY0GlETPk",

        whatYouWillLearn: [
            "Understand React fundamentals",
            "Build reusable React components",
            "Work with React Hooks",
            "Manage application state",
            "Build real-world React applications"
        ],

        requirements: [
            "Basic HTML and CSS knowledge",
            "JavaScript fundamentals",
            "Basic understanding of ES6"
        ],

        instructorDetails: {
            name: "Sarah Johnson",
            role: "Senior React Developer",
            experience: "5+ Years",
            bio: "Frontend specialist with extensive experience building modern React applications.",
            image: "https://i.pravatar.cc/150?img=47"
        },

        courseContent: [
            {
                id: 1,
                module: "React Fundamentals",
                lessons: [
                    "Introduction to React",
                    "Understanding JSX",
                    "Components",
                    "Props and State"
                ]
            },
            {
                id: 2,
                module: "React Hooks",
                lessons: [
                    "Introduction to Hooks",
                    "useState",
                    "useEffect",
                    "useRef"
                ]
            },
            {
                id: 3,
                module: "Advanced React",
                lessons: [
                    "React Router",
                    "Context API",
                    "Redux Toolkit",
                    "Building Projects"
                ]
            }
        ]
    },


    // 3. Java Programming Masterclass
    {
        id: 3,
        title: "Java Programming Masterclass",
        category: "Programming",
        instructor: "David Wilson",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
        rating: 4.7,
        reviews: 850,
        duration: "40 Hours",
        level: "Beginner",
        price: 899,
        description: "Learn Java programming and object-oriented concepts.",

        originalPrice: 1799,
        totalStudents: 2400,
        badge: "Popular",
        demoVideo: "https://www.youtube.com/embed/eIrMbAQSU34",

        whatYouWillLearn: [
            "Understand Java fundamentals",
            "Learn object-oriented programming",
            "Work with classes and objects",
            "Understand inheritance and polymorphism",
            "Build Java applications"
        ],

        requirements: [
            "Basic computer knowledge",
            "No previous programming experience required",
            "Java JDK installed"
        ],

        instructorDetails: {
            name: "David Wilson",
            role: "Java Developer",
            experience: "7+ Years",
            bio: "Java developer experienced in teaching programming and object-oriented development.",
            image: "https://i.pravatar.cc/150?img=13"
        },

        courseContent: [
            {
                id: 1,
                module: "Java Basics",
                lessons: [
                    "Introduction to Java",
                    "Variables and Data Types",
                    "Operators",
                    "Control Statements"
                ]
            },
            {
                id: 2,
                module: "Object Oriented Programming",
                lessons: [
                    "Classes and Objects",
                    "Constructors",
                    "Inheritance",
                    "Polymorphism",
                    "Encapsulation and Abstraction"
                ]
            },
            {
                id: 3,
                module: "Advanced Java",
                lessons: [
                    "Exception Handling",
                    "Collections Framework",
                    "Multithreading",
                    "File Handling"
                ]
            }
        ]
    },


    // 4. Python for Beginners
    {
        id: 4,
        title: "Python for Beginners",
        category: "Programming",
        instructor: "Emily Brown",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
        rating: 4.8,
        reviews: 1100,
        duration: "25 Hours",
        level: "Beginner",
        price: 699,
        description: "Start your programming journey with Python.",

        originalPrice: 1399,
        totalStudents: 3000,
        badge: "Beginner Friendly",
        demoVideo: "https://www.youtube.com/embed/kqtD5dpn9C8",

        whatYouWillLearn: [
            "Understand Python syntax",
            "Work with variables and data types",
            "Learn loops and functions",
            "Understand lists and dictionaries",
            "Build simple Python programs"
        ],

        requirements: [
            "Basic computer knowledge",
            "No programming experience required"
        ],

        instructorDetails: {
            name: "Emily Brown",
            role: "Python Developer",
            experience: "4+ Years",
            bio: "Python developer who enjoys teaching programming through practical examples.",
            image: "https://i.pravatar.cc/150?img=44"
        },

        courseContent: [
            {
                id: 1,
                module: "Python Basics",
                lessons: [
                    "Introduction to Python",
                    "Variables and Data Types",
                    "Operators",
                    "Conditional Statements"
                ]
            },
            {
                id: 2,
                module: "Python Collections",
                lessons: [
                    "Lists",
                    "Tuples",
                    "Sets",
                    "Dictionaries"
                ]
            },
            {
                id: 3,
                module: "Functions and OOP",
                lessons: [
                    "Functions",
                    "Lambda Functions",
                    "Classes and Objects",
                    "Inheritance"
                ]
            }
        ]
    },


    // 5. Node.js and Express Masterclass
    {
        id: 5,
        title: "Node.js and Express Masterclass",
        category: "Backend Development",
        instructor: "Michael Clark",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
        rating: 4.6,
        reviews: 650,
        duration: "35 Hours",
        level: "Intermediate",
        price: 1099,
        description: "Build scalable backend applications using Node.js.",

        originalPrice: 2199,
        totalStudents: 1800,
        badge: "Trending",
        demoVideo: "https://www.youtube.com/embed/TlB_eWDSMt4",

        whatYouWillLearn: [
            "Understand Node.js architecture",
            "Build REST APIs using Express",
            "Work with MongoDB",
            "Implement JWT authentication",
            "Handle errors and middleware"
        ],

        requirements: [
            "Basic JavaScript knowledge",
            "Understanding of HTML and CSS",
            "Basic programming knowledge"
        ],

        instructorDetails: {
            name: "Michael Clark",
            role: "Backend Developer",
            experience: "6+ Years",
            bio: "Backend engineer specializing in Node.js and scalable API development.",
            image: "https://i.pravatar.cc/150?img=14"
        },

        courseContent: [
            {
                id: 1,
                module: "Node.js Fundamentals",
                lessons: [
                    "Introduction to Node.js",
                    "Node.js Modules",
                    "File System",
                    "NPM"
                ]
            },
            {
                id: 2,
                module: "Express.js",
                lessons: [
                    "Introduction to Express",
                    "Routing",
                    "Middleware",
                    "REST API Development"
                ]
            },
            {
                id: 3,
                module: "MongoDB Integration",
                lessons: [
                    "MongoDB Introduction",
                    "Mongoose",
                    "CRUD Operations",
                    "Authentication"
                ]
            }
        ]
    },


    // 6. MySQL Database Complete Course
    {
        id: 6,
        title: "MySQL Database Complete Course",
        category: "Database",
        instructor: "Robert Miller",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600",
        rating: 4.7,
        reviews: 720,
        duration: "20 Hours",
        level: "Beginner",
        price: 599,
        description: "Learn SQL queries, joins, relationships and database design.",

        originalPrice: 1199,
        totalStudents: 1600,
        badge: "Popular",
        demoVideo: "https://www.youtube.com/embed/7S_tz1z_5bA",

        whatYouWillLearn: [
            "Understand relational databases",
            "Write SQL queries",
            "Perform CRUD operations",
            "Work with joins and relationships",
            "Design database tables"
        ],

        requirements: [
            "Basic computer knowledge",
            "No previous database experience required"
        ],

        instructorDetails: {
            name: "Robert Miller",
            role: "Database Developer",
            experience: "8+ Years",
            bio: "Database professional specializing in SQL and relational database design.",
            image: "https://i.pravatar.cc/150?img=15"
        },

        courseContent: [
            {
                id: 1,
                module: "SQL Fundamentals",
                lessons: [
                    "Introduction to MySQL",
                    "Database and Tables",
                    "SELECT Queries",
                    "WHERE Clause"
                ]
            },
            {
                id: 2,
                module: "SQL Operations",
                lessons: [
                    "INSERT",
                    "UPDATE",
                    "DELETE",
                    "ORDER BY and GROUP BY"
                ]
            },
            {
                id: 3,
                module: "Advanced SQL",
                lessons: [
                    "Joins",
                    "Subqueries",
                    "Constraints",
                    "Database Relationships"
                ]
            }
        ]
    },


    // 7. MongoDB for Developers
    {
        id: 7,
        title: "MongoDB for Developers",
        category: "Database",
        instructor: "James Anderson",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
        rating: 4.8,
        reviews: 540,
        duration: "18 Hours",
        level: "Intermediate",
        price: 749,
        description: "Learn MongoDB, collections, documents and aggregation.",

        originalPrice: 1499,
        totalStudents: 1400,
        badge: "Trending",
        demoVideo: "https://www.youtube.com/embed/ofme2o29ngU",

        whatYouWillLearn: [
            "Understand NoSQL databases",
            "Work with collections and documents",
            "Perform CRUD operations",
            "Learn MongoDB aggregation",
            "Connect MongoDB with Node.js"
        ],

        requirements: [
            "Basic programming knowledge",
            "Basic database understanding"
        ],

        instructorDetails: {
            name: "James Anderson",
            role: "Database Engineer",
            experience: "5+ Years",
            bio: "Database engineer specializing in MongoDB and modern database architecture.",
            image: "https://i.pravatar.cc/150?img=16"
        },

        courseContent: [
            {
                id: 1,
                module: "MongoDB Basics",
                lessons: [
                    "Introduction to MongoDB",
                    "Databases and Collections",
                    "Documents",
                    "MongoDB Installation"
                ]
            },
            {
                id: 2,
                module: "MongoDB CRUD",
                lessons: [
                    "Insert Documents",
                    "Find Documents",
                    "Update Documents",
                    "Delete Documents"
                ]
            },
            {
                id: 3,
                module: "Advanced MongoDB",
                lessons: [
                    "Aggregation Pipeline",
                    "Indexing",
                    "Relationships",
                    "Mongoose Integration"
                ]
            }
        ]
    },


    // 8. PHP and Laravel Development
    {
        id: 8,
        title: "PHP and Laravel Development",
        category: "Backend Development",
        instructor: "Daniel Thomas",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
        rating: 4.6,
        reviews: 430,
        duration: "32 Hours",
        level: "Intermediate",
        price: 899,
        description: "Build dynamic web applications using PHP and Laravel.",

        originalPrice: 1799,
        totalStudents: 1200,
        badge: null,
        demoVideo: "https://www.youtube.com/embed/OK_JCtrrv-c",

        whatYouWillLearn: [
            "Understand PHP fundamentals",
            "Learn object-oriented PHP",
            "Connect PHP with MySQL",
            "Build applications using Laravel",
            "Create REST APIs"
        ],

        requirements: [
            "Basic HTML and CSS knowledge",
            "Basic programming knowledge"
        ],

        instructorDetails: {
            name: "Daniel Thomas",
            role: "PHP and Laravel Developer",
            experience: "6+ Years",
            bio: "Full stack developer specializing in PHP and Laravel applications.",
            image: "https://i.pravatar.cc/150?img=17"
        },

        courseContent: [
            {
                id: 1,
                module: "PHP Fundamentals",
                lessons: [
                    "Introduction to PHP",
                    "Variables and Data Types",
                    "Control Structures",
                    "Functions"
                ]
            },
            {
                id: 2,
                module: "PHP OOP",
                lessons: [
                    "Classes and Objects",
                    "Constructors",
                    "Inheritance",
                    "Interfaces"
                ]
            },
            {
                id: 3,
                module: "Laravel Development",
                lessons: [
                    "Introduction to Laravel",
                    "Routing",
                    "Controllers",
                    "Database and Eloquent ORM"
                ]
            }
        ]
    },


    // 9. UI/UX Design with Figma
    {
        id: 9,
        title: "UI/UX Design with Figma",
        category: "UI/UX Design",
        instructor: "Sophia Taylor",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600",
        rating: 4.9,
        reviews: 890,
        duration: "22 Hours",
        level: "Beginner",
        price: 799,
        description: "Learn modern UI/UX design and create beautiful interfaces.",

        originalPrice: 1599,
        totalStudents: 2100,
        badge: "Top Rated",
        demoVideo: "https://www.youtube.com/embed/FTFaQWZBqQ8",

        whatYouWillLearn: [
            "Understand UI and UX fundamentals",
            "Learn design principles",
            "Create wireframes and prototypes",
            "Use Figma effectively",
            "Design responsive interfaces"
        ],

        requirements: [
            "Basic computer knowledge",
            "No previous design experience required"
        ],

        instructorDetails: {
            name: "Sophia Taylor",
            role: "UI/UX Designer",
            experience: "5+ Years",
            bio: "Creative UI/UX designer experienced in designing user-friendly digital products.",
            image: "https://i.pravatar.cc/150?img=45"
        },

        courseContent: [
            {
                id: 1,
                module: "Design Fundamentals",
                lessons: [
                    "Introduction to UI/UX",
                    "Design Principles",
                    "Color Theory",
                    "Typography"
                ]
            },
            {
                id: 2,
                module: "Figma Basics",
                lessons: [
                    "Introduction to Figma",
                    "Frames and Components",
                    "Auto Layout",
                    "Prototyping"
                ]
            },
            {
                id: 3,
                module: "Practical Design",
                lessons: [
                    "Wireframing",
                    "Mobile App Design",
                    "Website Design",
                    "Portfolio Project"
                ]
            }
        ]
    },


    // 10. Data Science with Python
    {
        id: 10,
        title: "Data Science with Python",
        category: "Data Science",
        instructor: "William Davis",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
        rating: 4.8,
        reviews: 760,
        duration: "38 Hours",
        level: "Advanced",
        price: 1499,
        description: "Explore data analysis, visualization and machine learning.",

        originalPrice: 2499,
        totalStudents: 1900,
        badge: "Advanced",
        demoVideo: "https://www.youtube.com/embed/LHBE6Q9XlzI",

        whatYouWillLearn: [
            "Understand data science fundamentals",
            "Analyze data using Python",
            "Work with NumPy and Pandas",
            "Create data visualizations",
            "Understand machine learning basics"
        ],

        requirements: [
            "Basic Python knowledge",
            "Basic mathematics knowledge",
            "Understanding of programming fundamentals"
        ],

        instructorDetails: {
            name: "William Davis",
            role: "Data Scientist",
            experience: "7+ Years",
            bio: "Data scientist specializing in Python, analytics and machine learning.",
            image: "https://i.pravatar.cc/150?img=18"
        },

        courseContent: [
            {
                id: 1,
                module: "Python for Data Science",
                lessons: [
                    "Python Refresher",
                    "NumPy Fundamentals",
                    "Pandas Fundamentals",
                    "Data Cleaning"
                ]
            },
            {
                id: 2,
                module: "Data Visualization",
                lessons: [
                    "Matplotlib",
                    "Seaborn",
                    "Exploratory Data Analysis",
                    "Data Visualization Projects"
                ]
            },
            {
                id: 3,
                module: "Machine Learning",
                lessons: [
                    "Introduction to Machine Learning",
                    "Supervised Learning",
                    "Unsupervised Learning",
                    "Model Evaluation"
                ]
            }
        ]
    },


    // 11. C++ Programming Complete Course
    {
        id: 11,
        title: "C++ Programming Complete Course",
        category: "Programming",
        instructor: "Daniel White",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
        rating: 4.7,
        reviews: 610,
        duration: "28 Hours",
        level: "Beginner",
        price: 649,
        description: "Learn C++ fundamentals, OOP and problem solving.",

        originalPrice: 1299,
        totalStudents: 1500,
        badge: null,
        demoVideo: "https://www.youtube.com/embed/vLnPwxZdW4Y",

        whatYouWillLearn: [
            "Understand C++ syntax",
            "Learn variables and data types",
            "Understand object-oriented programming",
            "Work with arrays and pointers",
            "Solve programming problems"
        ],

        requirements: [
            "Basic computer knowledge",
            "No prior C++ experience required"
        ],

        instructorDetails: {
            name: "Daniel White",
            role: "C++ Developer",
            experience: "5+ Years",
            bio: "Software developer experienced in C++ programming and problem solving.",
            image: "https://i.pravatar.cc/150?img=19"
        },

        courseContent: [
            {
                id: 1,
                module: "C++ Fundamentals",
                lessons: [
                    "Introduction to C++",
                    "Variables and Data Types",
                    "Operators",
                    "Conditional Statements"
                ]
            },
            {
                id: 2,
                module: "Functions and Arrays",
                lessons: [
                    "Functions",
                    "Arrays",
                    "Pointers",
                    "References"
                ]
            },
            {
                id: 3,
                module: "Object Oriented Programming",
                lessons: [
                    "Classes and Objects",
                    "Constructors",
                    "Inheritance",
                    "Polymorphism"
                ]
            }
        ]
    },


    // 12. Spring Boot for Java Developers
    {
        id: 12,
        title: "Spring Boot for Java Developers",
        category: "Backend Development",
        instructor: "Alex Martin",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600",
        rating: 4.9,
        reviews: 520,
        duration: "42 Hours",
        level: "Advanced",
        price: 1299,
        description: "Build REST APIs and enterprise applications using Spring Boot.",

        originalPrice: 2499,
        totalStudents: 1300,
        badge: "Bestseller",
        demoVideo: "https://www.youtube.com/embed/9SGDpanrc8U",

        whatYouWillLearn: [
            "Understand Spring Boot fundamentals",
            "Build REST APIs",
            "Work with Spring Data JPA",
            "Connect applications with databases",
            "Implement backend security"
        ],

        requirements: [
            "Basic Java knowledge",
            "Understanding of OOP concepts",
            "Basic SQL knowledge"
        ],

        instructorDetails: {
            name: "Alex Martin",
            role: "Java Backend Developer",
            experience: "8+ Years",
            bio: "Backend engineer specializing in Java, Spring Boot and enterprise application development.",
            image: "https://i.pravatar.cc/150?img=20"
        },

        courseContent: [
            {
                id: 1,
                module: "Spring Boot Fundamentals",
                lessons: [
                    "Introduction to Spring Boot",
                    "Project Setup",
                    "Spring Boot Architecture",
                    "Dependency Injection"
                ]
            },
            {
                id: 2,
                module: "REST API Development",
                lessons: [
                    "Controllers",
                    "Request Mapping",
                    "REST API Methods",
                    "Exception Handling"
                ]
            },
            {
                id: 3,
                module: "Database Integration",
                lessons: [
                    "Spring Data JPA",
                    "Entity and Repository",
                    "CRUD Operations",
                    "Database Relationships"
                ]
            }
        ]
    }

];

export default coursesData;