import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaBrain,
  FaBug,
  FaComputer
} from "react-icons/fa6";


import reactimg from '../assets/React Complete Guide Bestseller Banner.png'
import nodeimg from '../assets/Node.js Backend Mastery Banner.png'
import sqlimg from '../assets/MySQL for Developers Course Thumbnail.png'

export const categories = [
  {
    id: 1,
    name: "Web Development",
    icon: FaCode,
    coursesCount: 12,
    bgColor: "#DBEAFE",
    fontColor: "#2563EB"
  },
  {
    id: 2,
    name: "Programming Languages",
    icon: FaLaptopCode,
    coursesCount: 18,
    bgColor: "#F3E8FF",
    fontColor: "#9333EA"
  },
  {
    id: 3,
    name: "Database Management",
    icon: FaDatabase,
    coursesCount: 8,
    bgColor: "#D1FAE5",
    fontColor: "#059669"
  },
  {
    id: 4,
    name: "Data Science & AI",
    icon: FaBrain,
    coursesCount: 10,
    bgColor: "#FEF3C7",
    fontColor: "#D97706"
  },
  {
    id: 5,
    name: "Software Testing",
    icon: FaBug,
    coursesCount: 7,
    bgColor: "#FCE7F3",
    fontColor: "#DB2777"
  },
  {
    id: 6,
    name: "Computer Science",
    icon: FaComputer,
    coursesCount: 9,
    bgColor: "#E0E7FF",
    fontColor: "#4F46E5"
  }
];



export const featuredCourses = [
  {
    id: 1,
    title: "React.js Complete Guide",
    description: "Build real-world projects with React.",
    image: reactimg,
    rating: 4.8,
    totalStudents: 3200,
    duration: "24 Hours",
    level: "Beginner",
    badge: "Bestseller"
  },
  {
    id: 2,
    title: "Node.js Backend Mastery",
    description: "Build scalable and secure APIs.",
    image: nodeimg,
    rating: 4.7,
    totalStudents: 2100,
    duration: "20 Hours",
    level: "Intermediate",
    badge: null
  },
  {
    id: 3,
    title: "MySQL for Developers",
    description: "Learn SQL from basics to advanced.",
    image:sqlimg ,
    rating: 4.8,
    totalStudents: 1600,
    duration: "14 Hours",
    level: "Beginner",
    badge: null
  }
];




//


const feedbackData = [
  {
    id: 1,
    name: "Rahul Sharma",
    image: "https://i.pravatar.cc/150?img=12",
    course: "Full Stack Web Development",
    role: "MERN Stack Developer",
    feedback:
      "This course helped me understand full stack development from scratch. The practical projects improved my confidence and helped me become job-ready.",
  },
  {
    id: 2,
    name: "Priya Patel",
    image: "https://i.pravatar.cc/150?img=47",
    course: "Frontend Development",
    role: "Frontend Developer",
    feedback:
      "I had very little coding knowledge before joining this course. The teaching approach and hands-on assignments made learning frontend development easy.",
  },
  {
    id: 3,
    name: "Amit Verma",
    image: "https://i.pravatar.cc/150?img=13",
    course: "Java Full Stack Development",
    role: "Java Developer",
    feedback:
      "The course provided excellent practical knowledge. Building real-world applications helped me understand backend development and database management.",
  },
  {
    id: 4,
    name: "Sneha Deshmukh",
    image: "https://i.pravatar.cc/150?img=44",
    course: "Python Development",
    role: "Python Developer",
    feedback:
      "The instructors explained every concept with practical examples. I especially enjoyed working on projects that helped me improve my problem-solving skills.",
  },
  {
    id: 5,
    name: "Rohan Kulkarni",
    image: "https://i.pravatar.cc/150?img=14",
    course: "MERN Stack Development",
    role: "Full Stack Developer",
    feedback:
      "A great learning experience! I learned how to develop complete web applications and gained confidence in working with modern technologies.",
  },
  {
    id: 6,
    name: "Anjali Singh",
    image: "https://i.pravatar.cc/150?img=45",
    course: "UI/UX Design",
    role: "UI/UX Designer",
    feedback:
      "This course helped me understand design principles and user experience. The practical assignments gave me the confidence to create my own designs.",
  },
  {
    id: 7,
    name: "Vikram Joshi",
    image: "https://i.pravatar.cc/150?img=15",
    course: "Data Science",
    role: "Data Scientist",
    feedback:
      "The structured curriculum and practical exercises made complex data science concepts easier to understand. I highly recommend this course.",
  },
];

export default feedbackData;

