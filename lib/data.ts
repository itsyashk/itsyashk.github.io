
export const profile = {
    name: "Yash Kakade",
    headline: "Robotics + Perception Engineer",
    subheading: "camera-only motion capture, humanoid manipulation, RL + simulation",
    about: {
        short: "I love to automate things because I'm lazy. I'd rather spend 100 hours building a system to save 30 minutes of manual labor.",
        long: "I'm a Caltech undergrad studying Electrical Engineering and Computer Science. My end goal is to automate my entire house so I never have to do chores again. This drives my research into humanoid robotics as I believe learning based control is the only way to get robots reliable enough to actually live with us.",
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
        categories: ["Perception", "Algorithms"],
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
        categories: ["Robotics", "Algorithms"],
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
        categories: ["Algorithms", "Perception"],
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
        categories: ["Algorithms"],
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
        categories: ["Algorithms"],
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
        role: "Perception Researcher",
        date: "June 2025 - Present",
        location: "Long Beach, CA",
        description: [
            "Built a motion-capture system from scratch, leveraging traditional Structure-from-Motion techniques.",
            "Achieved ~10 micron global accuracy in rigid-body localization, outperforming OptiTrack’s published 150 micron benchmark by an order of magnitude (IR Camera based).",
            "Developed a fully autonomous, self-calibrating pipeline using a custom calibration stand (no human in the loop) for faster and more robust initialization, with self-healing extrinsics based on epipolar geometry and probabilistic reprojection-error estimation."
        ]
    },
    {
        company: "Caltech (AMBER Lab)",
        role: "Robotics Researcher",
        date: "November 2025 - Present",
        location: "Pasadena, CA",
        description: [
            "Conducted reinforcement learning research for humanoid locomotion in Isaac Lab, developing LIP-inspired policies for velocity tracking and foot-contact regularization.",
            "Designed reward constructions emphasizing phase-consistent gait generation, center-of-mass stability, and energy-efficient motion under disturbances."
        ]
    },
    {
        company: ".406 Ventures",
        role: "Fellow",
        date: "May 2025 - Present",
        location: "Boston, MA",
        description: [
            "Selected as 1 of 15 Student Founders Nationwide Composing Class XVII.",
            "Builder-first venture fellowship."
        ]
    },
    {
        company: "Air Force Research Laboratory",
        role: "Computer Vision Researcher",
        date: "June 2024 - September 2024",
        location: "Dayton, OH",
        description: [
            "Automated digital twins manufacturing using OptiTrack motion capture and 3D scanning for robo-simulations.",
            "Integrated ROS2 into the digital twin pipeline and developed a custom Dockerfile for optimized deployment and consistent environments using Kernel-Based Virtual Machines.",
            "Created a 3D similarity score program via Iterative Closest Point and Hausdorff distance to validate YCB dataset.",
            "Fine-tuned Meta SAM2 with PyTorch and YOLOv8 to create custom weights, enabling Boston Dynamics Spot to identify lab-specific objects with 92.8% accuracy."
        ]
    },
    {
        company: "Caltech (Wierman Group)",
        role: "Machine Learning Researcher",
        date: "July 2023 - September 2023",
        location: "Pasadena, CA",
        description: [
            "Evaluated the impact of adversarial noise on CNN-based machine perception for autonomous driving, identifying a 40% accuracy reduction in critical image regions using Python and TensorFlow.",
            "Developed a CNN with 52,673 trainable parameters across four layers (convolution, max pooling, flatten, and dense) to assess noise effects using a dataset of 2,000 images.",
            "Enhanced the robustness of machine perception by retraining the CNN on noise-affected data, achieving a 20% improvement in accuracy for vehicle position identification under adversarial conditions."
        ]
    },
];

export const skills = {
    robotics: ["ROS 2", "SLAM", "Planning", "Control", "Calibration"],
    ml_cv: ["PyTorch", "TensorFlow", "OpenCV"],
    systems: ["Docker", "Linux", "Jetson", "Raspberry Pi"],
    cad: ["Fusion 360", "SolidWorks", "3D Printing"]
};

export const hobbies = [
    "NCAA Track & Field (Sprinting, Jumps)",
    "Origami",
    "Cars & Racing",
    "Making/Prototyping"
];
