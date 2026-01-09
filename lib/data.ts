
export const profile = {
    name: "Yash Kakade",
    headline: "Robotics + Perception Engineer",
    subheading: "camera-only motion capture, humanoid manipulation, RL + simulation",
    about: {
        short: "I’ll happily spend 100 hours building a system if it eliminates 30 minutes of repeated manual work.",
        long: "I’m a Caltech undergraduate studying Electrical Engineering and Computer Science, focused on robotics and learning-based control. My long-term goal is simple: build systems (eventually humanoid robots) that are reliable enough to operate in unstructured human environments, starting with my own home.",
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
        tags: ["Computer Vision", "Perception", "Motion Capture"],
        stack: ["Python", "OpenCV", "Optimization"],
        date: "2025",
        summary: "Self-healing calibration and rigid-body tracking system requiring only standard cameras.",
        description: "I built this system entirely from scratch, utilizing Structure from Motion (SfM) theory and applying it at a fundamental level to address the challenges of handling uncertainty and real-world noise in robotics. The core of the solution involves a custom pipeline built with Python, OpenCV, and Optimization that prioritizes modularity and performance to ensure execution within real-time constraints. Key features include autonomous hands-free calibration, robust occlusion handling, and a self-healing capability that allows the system to automatically recover and recalibrate if a camera is bumped or moved.",
        metrics: ["10 micron level accuracy", "N Rigid Bodies"],
        image: "/images/projects/mocap-system.png",
    },
    {
        slug: "autonomous-lawnmower",
        title: "Fully Autonomous Low-Cost Lawnmower",
        categories: ["Robotics"],
        tags: ["SLAM", "Navigation", "Hardware", "Computer Vision"],
        stack: ["Python", "ROS 2", "Raspberry Pi", "Arduino", "OpenCV", "3D Printing"],
        date: "2022",
        summary: "A sub-$300 award-winning autonomous lawnmower capable of 2D SLAM and obstacle avoidance.",
        description: "My dad wanted me to cut the lawn every week, which took 2 hours, so I built this robot in 2 weeks and never cut the lawn again. I designed and built a fully autonomous lawnmower from scratch using a custom-designed 3D-printed chassis. The system integrates LiDAR, ultrasonic sensors, gyros, and OpenCV cameras for comprehensive obstacle avoidance. I engineered the control system using a Raspberry Pi and Arduino, implementing ROS 2 and 2D SLAM algorithms to enable autonomous operation without manual intervention. The project received national and state-level recognition for achieving a sub-$300 build cost, significantly lower than the $4,000 price point of commercial equivalents. You can watch a full video breakdown of the build on my YouTube channel.",
        metrics: ["<$300 Build vs $4k Commercial", "National Level Awards"],
        image: "/images/projects/lawnmower.jpg",
    },
    {
        slug: "digital-twins-usaf",
        title: "Universal Object Tracking & Digitization",
        categories: ["Perception"],
        tags: ["Digital Twin", "Computer Vision", "Simulation", "DevOps"],
        stack: ["ROS 2", "Docker", "Python", "PyTorch", "OptiTrack", "YOLOv8"],
        date: "2024",
        summary: "Automated digital twin pipeline with high-accuracy object detection for Boston Dynamics Spot.",
        description: "I engineered the solution using ROS 2, Docker, Python, PyTorch, OptiTrack, and YOLOv8 to ensure robust multi-agent coordination. My pipeline begins with scanning the object and attaching IR markers for OptiTrack localization. I built a bridge that consumes NatNet packets from OptiTrack and publishes them to ROS 2 as TF frames and JSON metadata, effectively creating a real-time digital twin for any arbitrary object. To ensure accessibility for other researchers, I containerized the entire pipeline using Docker, enabling a single-command installation that handles all dependencies automatically. Extending this capability, I enabled the lab's Boston Dynamics Spot robot to autonomously identify these custom objects by fine-tuning Meta's SAM2 and YOLOv8 models, achieving 92.8% detection accuracy on lab-specific datasets.",
        metrics: ["92.8% Detection Accuracy", "Automated Digital Twin Pipeline"],
        images: ["/images/projects/ur16.gif", "/images/projects/ur16.jpeg"],
    },
    {
        slug: "humanoid-tennis",
        title: "Humanoid Tennis Manipulation",
        categories: ["Robotics", "Algorithms"],
        tags: ["ROS 2", "Inverse Kinematics", "Damped Least Squares", "Newton-Raphson"],
        stack: ["Python", "ROS 2", "RViz", "Unitree G1", "NumPy"],
        date: "2025",
        summary: "Autonomous tennis system with a 29-DOF humanoid using hybrid IK and whole-body control.",
        description: "I developed an autonomous tennis/table-tennis system for the 29-DOF Unitree G1 humanoid, designed to detect and strike virtual targets in real-time. The core of the system is a custom 100 Hz control node built on a Finite State Machine (IDLE, SWING, RETURN) that manages the robot's full kinematic chain, including the waist joints for an expanded reachable workspace. I implemented a robust Hybrid Inverse Kinematics pipeline, combining a Newton–Raphson solver for initial target acquisition with Damped Least-Squares (DLS) differential IK for smooth trajectory tracking. To ensure stability and avoid wrist singularities, I formulated the control problem using a reduced 5×7 Jacobian (for a 5D end-effector task with 3 position + 2 orientation components using the 7 right-arm joints) and utilized quintic time-scaling to generate singularity-free, human-like swing motions with zero velocity at the endpoints.",
        github: "https://github.com/sromeror58/project_ws",
        metrics: ["5D|Redundancy-Aware IK", "≤5 IK Iterations|Stable Newton–Raphson convergence"],
        image: "/images/projects/humanoid_tennis.png",
    },
    {
        slug: "dual-robot-slam",
        title: "Collaborative Dual-Robot SLAM",
        categories: ["Robotics", "Algorithms"],
        tags: ["Multi-Robot", "SLAM", "Navigation"],
        stack: ["ROS 2", "Python", "Gazebo", "Nav2", "RViz"],
        date: "2024",
        summary: "Collaborative SLAM system where two robots autonomously explore and map a Mars-like environment.",
        description: "We implemented a hybrid central-distributed architecture in ROS 2 to enable two robots to autonomously map a Mars-like environment. The core of our system is a centralized SLAM node that fuses LiDAR scans from both rovers into a single probabilistic occupancy grid using a log-odds mapping approach. This required careful management of the TF tree to localize each robot (e.g., `/robot1/base_footprint`) within the shared global frame. For exploration, we developed a specialized Rapidly-exploring Random Tree (RRT) algorithm that biases node selection based on a custom cost function—maximizing the Euclidean distance from visited regions to prioritize unexplored frontiers. The system leverages strict namespace isolation and tuned QoS policies to ensure reliable high-frequency sensor data synchronization for real-time consistency.",
        github: "https://github.com/itsyashk/ros2-dual-robot-slam-explorer",
        metrics: ["Unified Multi-Robot Map", "Dual RRT Path Planning Algorithm"],
        images: ["/images/projects/dual-slam.png", "/images/projects/mars-robot.png"],
    },
    {
        slug: "learning-robust-perception",
        title: "Learning Robust Perception for Control",
        categories: ["Perception", "ML/AI"],
        tags: ["Computer Vision", "Adversarial ML", "CNN", "TensorFlow"],
        stack: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
        date: "2023",
        summary: "Analyzing and mitigating the impact of adversarial noise on CNN-based autonomous driving perception.",
        description: "We conducted research on the vulnerability of CNN-based perception systems to adversarial noise, specifically in the context of autonomous driving. Using Python and TensorFlow, we developed a custom CNN architecture with 52,673 parameters and evaluated its performance on a dataset of 2,000 images. Our analysis revealed a critical 40% reduction in accuracy when adversarial noise was introduced to road areas. To mitigate this, we retrained the model with noise-aware strategies, successfully improving vehicle position identification accuracy by 20% and demonstrating enhanced robustness for machine perception.",
        approach: "The core of the solution involves a custom pipeline built with Python, TensorFlow, Pandas, Matplotlib. We prioritized modularity and performance, ensuring the system can run in real-time constraints.",
        github: "https://github.com/jaydenzhaobautista/fsri-perception-based-control",
        metrics: ["40% Vulnerability Identified", "20% Robustness Gain", "52k Parameter Custom CNN"],
        image: "/images/projects/fsri-perception.png",
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
