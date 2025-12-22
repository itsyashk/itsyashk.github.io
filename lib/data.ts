
export const profile = {
    name: "Yash Kakade",
    headline: "Robotics + Perception Engineer",
    subheading: "camera-only motion capture, humanoid manipulation, RL + simulation",
    about: {
        short: "I build real robotics systems end-to-end, focusing on autonomy, perception, and control.",
        long: "I am a Caltech undergraduate specializing in electrical engineering and intelligent systems. My passion lies in building physical systems that perceive and interact with the world reliably.",
        focus: [
            "Perception and Calibration",
            "Control + Planning",
            "Sim-to-Real Transfer"
        ],
        interests: [
            "Humanoid Manipulation",
            "RL Locomotion",
            "Multi-Robot Systems"
        ],
        values: [
            "Fast Iteration",
            "Honest Metrics",
            "Clean Interfaces",
            "Reproducible Experiments"
        ]
    },
    socials: {
        github: "http://github.com/itsyashk",
        email: "mailto:ykakade@caltech.edu", // Assuming, or user's specific email if known. Placeholder for now.
        linkedin: "https://www.linkedin.com/in/yash-kakade/"
    }
};

export const projects = [
    {
        slug: "camera-only-mocap",
        title: "Camera-Only Motion Capture System",
        category: "Perception",
        tags: ["Calibration", "Tracking", "Computer Vision"],
        stack: ["Python", "OpenCV", "Optimization"],
        date: "2024",
        summary: "Self-healing extrinsic calibration and rigid-body tracking system requiring only standard cameras.",
        description: "Developed a camera-only motion capture system focused on accessibility and robust calibration. The core innovation is a self-healing extrinsic calibration pipeline that allows cameras to be moved without complete recalibration, and a rigid-body tracking algorithm dealing with occlusion.",
        metrics: ["Sub-mm accuracy (verified)", "Real-time tracking @ 60fps"],
        github: "https://github.com/itsyashk/camera-mocap-placeholder", // Placeholder
    },
    {
        slug: "autonomous-lawnmower",
        title: "Fully Autonomous Low-Cost Lawnmower",
        category: "Robotics",
        tags: ["SLAM", "Navigation", "Hardware"],
        stack: ["ROS 2", "2D SLAM", "OpenCV", "C++"],
        date: "2023",
        summary: "A sub-$300 autonomous lawnmower capable of 2D SLAM and coverage path planning.",
        description: "Designed and built a low-cost autonomous lawnmower from scratch. Implemented a 2D SLAM solution using low-cost lidar and odometry, with a coverage path planning algorithm to ensure complete area coverage. Handled real-world constraints like uneven terrain and limited compute.",
        metrics: ["<$300 BOM", "95% Area Coverage"],
    },
    {
        slug: "digital-twins-usaf",
        title: "USAF Digital Manufacturing Robotics",
        category: "Systems",
        tags: ["Digital Twin", "Simulation", "Deployment"],
        stack: ["OptiTrack", "ROS 2", "Docker", "Python"],
        date: "2024",
        summary: "Digital twins using OptiTrack and ROS 2 for automated manufacturing cells.",
        description: "Internship project with USAF. Built digital twins for manufacturing cells using OptiTrack for ground truth and ROS 2 for state management. Developed a Docker-based deployment pipeline for ensuring reproducibility across varying hardware configurations. Implemented SAM-based object identification for part tracking.",
        metrics: ["Reduced setup time by 40%", "Real-time state synchronization"],
    },
    {
        slug: "humanoid-tennis",
        title: "Humanoid Tennis Manipulation",
        category: "Robotics",
        tags: ["Humanoid", "Manipulation", "Control", "IK"],
        stack: ["ROS 2", "RViz", "C++", "Python"],
        date: "2025",
        summary: "Hybrid IK pipeline and finite-state control for humanoid tennis swings.",
        description: "Developed a ROS 2 humanoid tennis manipulation system using a hybrid IK pipeline: Newton–Raphson IK for target solving and damped least-squares differential IK for real-time tracking. Implemented a 100 Hz finite-state controller with quintic joint-space trajectories, a reduced 5D task formulation to avoid singularities, joint-limit enforcement, and RViz visualization for tennis swing and ball simulation.",
        metrics: ["100 Hz Control Loop", "Singularity-Free Workspace"],
    },
    {
        slug: "dual-robot-slam",
        title: "Collaborative Dual-Robot SLAM",
        category: "Robotics",
        tags: ["Multi-Robot", "SLAM", "Navigation"],
        stack: ["ROS 2", "Gazebo", "Nav2"],
        date: "2024",
        summary: "Simulated multi-robot exploration and map merging in a Mars-like environment.",
        description: "Developed a ROS 2 simulation where two robots autonomously explore a Mars-like environment, sharing sensor data to create a unified map. Leveraged Gazebo and the ROS 2 Navigation Stack (Nav2) to demonstrate collaborative SLAM in a multi-robot system.",
        metrics: ["Unified Map Generation", "Autonomous Exploration"],
    }
];

export const experience = [
    {
        company: "Relativity Space",
        role: "Robotics Software Engineering Intern",
        date: "Summer 2024", // Approximate
        description: [
            "Worked on core robotics software infrastructure.",
            "Contributed to real-time control systems.",
            "Validated software on hardware testbeds."
        ]
    },
    {
        company: "USAF",
        role: "Digital Manufacturing Robotics Intern",
        date: "2024",
        description: [
            "Developed digital twins using OptiTrack + ROS 2.",
            "Implemented Docker-based deployment for manufacturing cells.",
            "Utilized SAM-based object identification."
        ]
    },
    {
        company: "Caltech",
        role: "Student Researcher",
        date: "2023 - Present",
        description: [
            "Research in autonomous systems and perception.",
            "Developing camera-only calibration methods."
        ]
    },
    {
        company: "Various",
        role: "Additive Manufacturing Engineer",
        date: "Prior",
        description: [
            "Experience with 3D printing and CAD design.",
            "Fusion 360 and SolidWorks proficiency."
        ]
    }
];

export const skills = {
    robotics: ["ROS 2", "SLAM", "Planning", "Control", "Calibration"],
    ml_cv: ["PyTorch", "TensorFlow", "OpenCV"],
    systems: ["Docker", "Linux", "Jetson", "Raspberry Pi"],
    cad: ["Fusion 360", "SolidWorks", "3D Printing"]
};

export const hobbies = [
    "Track & Field (Sprinting, Long Jump, Triple Jump)",
    "Strength Training",
    "Daily iPad Writing",
    "Making/Prototyping"
];
