
import { Project, SkillMetric, SoftSkill } from './types';
import { Brain, Users, Clock, Zap, Lightbulb, MessageCircle } from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Autonomous Warehouse Rover',
    category: 'Professional',
    description: 'Developed a ROS 2 navigation stack for a differential drive robot. Implemented SLAM using Lidar and depth cameras to map dynamic warehouse environments with 98% localization accuracy.',
    techStack: ['ROS 2', 'C++', 'Nav2', 'Gazebo', 'SLAM'],
    image: 'https://picsum.photos/id/1073/800/600?grayscale&blur=2',
    size: 'wide',
  },
  {
    id: 'p2',
    title: '6-DOF Robotic Arm',
    category: 'Professional',
    description: 'Engineered inverse kinematics algorithms and motion planning using MoveIt framework. Integrated computer vision for pick-and-place operations.',
    techStack: ['Python', 'MoveIt', 'OpenCV', 'Kinematics'],
    image: 'https://picsum.photos/id/201/600/800?grayscale&blur=2',
    size: 'tall',
  },
  {
    id: 'p3',
    title: 'Drone Swarm',
    category: 'Professional',
    description: 'Simulated and deployed a swarm of 5 drones for search and rescue operations. Implemented leader-follower control logic.',
    techStack: ['PX4', 'Python', 'MavLink'],
    image: 'https://picsum.photos/id/1064/800/600?grayscale&blur=2',
    size: 'normal',
  },
  {
    id: 'p4',
    title: 'Edge AI Object Detection',
    category: 'Professional',
    description: 'Optimized YOLOv8 inference on edge hardware (Jetson Nano). Created a custom ROS node publishing bounding boxes at 30FPS.',
    techStack: ['PyTorch', 'CUDA', 'C++'],
    image: 'https://picsum.photos/id/1058/800/600?grayscale&blur=2',
    size: 'normal',
  },
  {
    id: 'g1',
    title: 'FPGA Motor Controller',
    category: 'Graduation',
    description: 'Designed a PID controller on a Xilinx FPGA for high-precision DC motor control, achieving <1% steady-state error.',
    techStack: ['Verilog', 'VHDL', 'FPGA'],
    image: 'https://picsum.photos/id/856/800/600?grayscale&blur=2',
    size: 'normal',
  },
  {
    id: 'g2',
    title: 'Smart Grid Load Balancer',
    category: 'Graduation',
    description: 'Developed an IoT system to monitor and balance electrical loads across a microgrid simulation using Zigbee.',
    techStack: ['Embedded C', 'IoT', 'PCB Design'],
    image: 'https://picsum.photos/id/1082/800/600?grayscale&blur=2',
    size: 'wide',
  },
];

export const SKILL_METRICS: SkillMetric[] = [
  { subject: 'ROS/ROS2', A: 85, fullMark: 100 },
  { subject: 'C++', A: 75, fullMark: 100 },
  { subject: 'Python', A: 85, fullMark: 100 },
  { subject: 'PX4', A: 88, fullMark: 100 },
  { subject: 'Linux', A: 92, fullMark: 100 },
  { subject: 'Electronics', A: 80, fullMark: 100 },
];

export const SOFT_SKILLS: SoftSkill[] = [
  { title: 'Problem Solving', icon: Lightbulb, description: 'Turning complex physical constraints into logical software solutions.' },
  { title: 'Collaboration', icon: Users, description: 'Bridging the gap between mechanical, electrical, and software teams.' },
  { title: 'Adaptability', icon: Brain, description: 'Quickly learning new frameworks and hardware platforms.' },
  { title: 'Time Management', icon: Clock, description: 'Delivering robust code under tight prototyping schedules.' },
];

export const BIO_TEXT = `
I'm Rodrigo, and I am a Robotics Engineer graduate in Electrical Engineering.

I'm passionate about creating intelligent systems that integrate software and hardware to solve real-world problems. My journey started on a robotics laboratory during my undergraduate years, where I learned the fundamentals of robotics and control systems.
This passion drove me into Robotics, where I am striving deep into the field of Autonomous Systems, focusing on Machine Learning, UAV framework (PX4), ROS 2 and Embedded Systems development.
`;