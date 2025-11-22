
import { Project, SkillMetric, SoftSkill, ExperienceItem } from './types';
import { Brain, Users, Clock, Zap, Lightbulb, Search } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Autonomous UAV Simulation',
    category: 'Professional',
    description: 'Simulated UAVs and soft robots in Gazebo with ROS2. Integrated PX4-Autopilot for autonomous missions and developed robotic manipulation systems involving sensor fusion and real-time data.',
    techStack: ['ROS 2', 'PX4', 'Gazebo', 'C++', 'Python'],
    image: 'https://picsum.photos/id/1050/800/600?grayscale&blur=2',
    size: 'wide',
  },
  {
    id: 'r1',
    title: 'LiDAR Odometry Comparison',
    category: 'Research',
    description: 'Map reconstruction and Localization study. Compared LiDAR Odometry Algorithms for UAV Navigation, focusing on SLAM accuracy in aerial environments.',
    techStack: ['LIO', 'SLAM', 'Mapping', 'Localization'],
    image: 'https://picsum.photos/id/1000/800/600?grayscale&blur=2',
    size: 'normal',
  },
  {
    id: 'r2',
    title: 'IoT Pipeline Leak Detection',
    category: 'Research',
    description: 'Developed an IoT solution with thermal camera computer vision for automatic leak detection in onshore oil pipelines. Enhances real-time monitoring in remote areas.',
    techStack: ['IoT', 'Computer Vision', 'Thermography', 'Python'],
    image: 'https://picsum.photos/id/250/600/800?grayscale&blur=2',
    size: 'tall',
  },
  {
    id: 'pers1',
    title: 'Solarfly Drone',
    category: 'Personal',
    description: 'Innovative solution to revolutionize inspection and cleaning at solar plants through the use of autonomous drones.',
    techStack: ['UAVs', 'Autonomous Flight', 'Inspection'],
    image: 'https://picsum.photos/id/433/800/600?grayscale&blur=2',
    size: 'normal',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Robotics Engineer Intern',
    company: 'SENAI CIMATEC',
    period: '2024 - Present',
    description: 'Simulating UAVs and soft robots in Gazebo with ROS2. Integrating PX4-Autopilot for autonomous missions and developing robotic manipulation systems. Working with embedded systems, sensor fusion, and real-time data using C++, Python, and Linux tools.'
  },
  {
    id: 'exp2',
    role: 'Robotics Junior Researcher',
    company: 'SENAI CIMATEC',
    period: '2023 - 2024',
    description: 'Conducted applied research in aerial robotics, sensor fusion, and perception for autonomous mapping and navigation. Results were published and presented at SIINTEC X.'
  },
  {
    id: 'exp3',
    role: 'Scientific Research Volunteer',
    company: 'SENAI CIMATEC',
    period: '2021 - 2023',
    description: 'Fellow researcher in a CNPq project. Developed an IoT solution with thermal camera computer vision for automatic leak detection in onshore oil pipelines to enhance real-time monitoring.'
  }
];

export const SKILL_METRICS: SkillMetric[] = [
  { subject: 'ROS/ROS2', A: 90, fullMark: 100 },
  { subject: 'C++', A: 85, fullMark: 100 },
  { subject: 'Python', A: 95, fullMark: 100 },
  { subject: 'PX4', A: 88, fullMark: 100 },
  { subject: 'Linux', A: 92, fullMark: 100 },
  { subject: 'Electronics', A: 80, fullMark: 100 },
];

export const SOFT_SKILLS: SoftSkill[] = [
  { title: 'Innovation', icon: Lightbulb, description: 'Passionate about creating novel solutions for complex problems.' },
  { title: 'Research', icon: Search, description: 'Experienced in scientific methodology and academic publication.' },
  { title: 'Adaptability', icon: Brain, description: 'Transitioning between high-level software and low-level hardware.' },
  { title: 'Teamwork', icon: Users, description: 'Collaborating in multidisciplinary engineering teams.' },
];

export const BIO_TEXT = `
Passionate about Innovation, I am a student of Electrical Engineering and a Researcher at SENAI CIMATEC with over 2 years of experience in programming.

My expertise lies in Python and C++ for robotics and aerial systems. I am an enthusiast of Multicopter UAVs, dedicating my work to bridging the gap between theoretical control systems and real-world autonomous application. 

Whether it's simulating soft robots in Gazebo or deploying sensor fusion algorithms on real hardware, I am driven by the challenge of making machines move intelligently.
`;
