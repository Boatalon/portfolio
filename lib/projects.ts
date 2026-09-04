export interface Project {
    id: string;
    title: string;
    titleTH: string;
    description: string;
    descriptionTH: string;
    image: string;
    tags: string[];
    link?: string;
    github?: string;
    liveDemo?: boolean;
    featured: boolean;
    category: 'ml' | 'web' | 'mobile' | 'other';
    slug?: string;
    // New fields for full-page layout
    layout?: 'demo-left' | 'demo-right' | 'full-width';
    video?: string; // Path to a video file for the project card
    demoContent?: string; // URL for demo iframe or video
    detailedDescription?: string;
    role?: string;
    period?: string;
    challenge?: string;
    features?: string[];
    deploymentPlan?: string[];
    conclusion?: string;
    certificateImage?: string; // Path to certificate/award image
}

export const projects: Project[] = [
    {
        id: 'Handy-Talk',
        slug: 'Handy-Talk',
        title: 'Handy-Talk',
        titleTH: 'Handy-Talk',
        description: 'A browser-based prototype that translates supported sign-language words into speech using computer vision and machine learning.',
        descriptionTH: 'แปลภาษามือเป็นเสียงแบบเรียลไทม์ด้วยเทคโนโลยี Computer Vision และ Machine Learning โดยใช้กล้องวิดีโอในการตรวจจับท่าทางภาษามือ',
        image: '/images/asl-hello.gif',
        tags: ['Machine Learning', 'Computer Vision', 'Python', 'TensorFlow', 'Real-time Processing'],
        liveDemo: true,
        github: 'https://github.com/Boatalon/HandyTalk',
        featured: true,
        category: 'ml',
        layout: 'demo-left',
        role: 'Machine Learning & Web Prototype',
        detailedDescription: 'Handy-Talk explores word-level sign-language recognition in the browser. A webcam captures a short sequence, MediaPipe extracts hand motion, and a TensorFlow model ranks supported words before the interface produces speech. The live demo is an early research prototype rather than a production accessibility tool.',
        challenge: 'The available training data is limited, and sign-language meaning depends on motion, timing, hand shape, and context. The prototype must balance recognition quality with browser latency and user privacy.',
        features: [
            'Real-time hand tracking and gesture recognition',
            'Sequence-based inference across 10 video frames',
            'WLASL-based training workflow for supported vocabulary',
            'Hand-keypoint feature engineering',
            'Client-side speech output and top prediction confidence'
        ],
        deploymentPlan: [
            'Load the TensorFlow runtime and model only after the visitor starts the demo',
            'Cache versioned model assets in IndexedDB for repeat sessions',
            'Measure accuracy and latency on unseen users before expanding the vocabulary',
            'Add a model-card notice covering limitations, supported words, and privacy'
        ],
        conclusion: 'The result is a working browser proof of concept that demonstrates the full camera-to-prediction-to-speech pipeline while making its current accuracy limits explicit.'
    },
    {
        id: 'YangBOT-disease-detection',
        slug: 'YangBOT-disease-detection',
        title: 'YangBOT Rubber Tree Disease Detection',
        titleTH: 'YangBOT-ตรวจจับโรคพืช',
        description: 'A YOLO-based field workflow for detecting Colletotrichum disease in rubber trees and notifying farmers through LINE Bot.',
        descriptionTH: 'ระบบจำแนกประเภทแบบไบนารีโดยใช้ Faster R-CNN สำหรับการตรวจจับวัตถุ พร้อมการเทรนและประเมินผลด้วยชุดข้อมูลที่กำหนดเอง',
        image: '/images/yangbot-disease.png',
        tags: ['Deep Learning', 'PyTorch', 'Object Detection', 'Computer Vision'],
        liveDemo: false,
        featured: true,
        category: 'ml',
        layout: 'demo-right',
        role: 'Machine Learning Research Assistant',
        period: 'Nov 2024 — Aug 2026',
        detailedDescription: 'At Kasetsart University, I developed and trained a YOLO-based object-detection system for Colletotrichum disease in rubber trees. The custom dataset was prepared with plant pathologists, and the workflow connects visual detection with LINE Bot alerts for farmers in high-risk areas. Source code and data remain confidential under the project agreement.',
        challenge: 'Field images vary in lighting, disease severity, background clutter, and leaf condition. The system also needs evidence from plant specialists and weather data before a detection can support a dependable risk alert.',
        features: [
            'YOLO-based object detection for visible disease symptoms',
            'Custom dataset prepared with plant pathologists',
            'PyTorch training and evaluation workflow',
            'LINE Bot notifications for high-risk areas',
            'Disease-severity and weather-data collection for forecasting'
        ],
        deploymentPlan: [
            'Validate the model on unseen field locations and changing weather conditions',
            'Define confidence thresholds with plant-pathology reviewers',
            'Package inference as a monitored service after field validation',
            'Connect confirmed detections and forecasting signals to LINE Bot alerts'
        ],
        conclusion: 'The project established an end-to-end research workflow from expert-labeled field data to detection and farmer notification. Public code and a live demo are unavailable because the work is confidential.'
    },
    {
        id: 'aavc-2026',
        slug: 'aavc-2026',
        title: 'Autonomous Aerial Vehicle Challenge AAVC 2026',
        titleTH: 'การแข่งขันอากาศยานไร้คนขับอัตโนมัติ AAVC 2026',
        description: 'An autonomous drone system for payload delivery and precision landing, built for the Autonomous Aerial Vehicle Challenge 2026.',
        descriptionTH: 'ระบบโดรนอัตโนมัติสำหรับส่งสิ่งของและลงจอดอย่างแม่นยำ พัฒนาสำหรับการแข่งขัน Autonomous Aerial Vehicle Challenge 2026',
        image: '/images/aavc-drone.jpg',
        video: '/videos/aavc-drone.mp4',
        tags: ['Pixhawk', 'Jetson Nano', 'ArUco', 'MAVLink', 'ArduPilot', 'Computer Vision'],
        featured: true,
        category: 'other',
        layout: 'demo-left',
        role: 'Drone & Computer Vision Flyhigh Team',
        period: 'Aug 2026',
        detailedDescription: 'For the Flyhigh Team at Kasetsart University, I helped design and build an autonomous drone using Pixhawk, Jetson Nano, and onboard cameras. The vision system detects ArUco landing pads, while MAVLink coordinates autonomous payload delivery and precision landing. I represented Kasetsart University at AAVC 2026 from 28–30 August 2026.',
        challenge: 'The aircraft had to combine visual targeting, mission control, payload delivery, and landing accuracy while remaining safe under changing power, communication, and flight conditions.',
        features: [
            'ArUco landing-pad detection with an onboard camera',
            'MAVLink mission control for autonomous payload delivery',
            'Precision landing using Pixhawk and Jetson Nano',
            'Geofencing, Return-to-Launch, and failsafe configuration',
            'Flight-log analysis for stability, power reliability, and safety'
        ],
        deploymentPlan: [
            'Validate mission logic in simulation before hardware flight tests',
            'Run controlled field tests for detection range, landing error, and payload release',
            'Review flight logs after every test and tune power, control, and failsafe parameters',
            'Promote only validated mission profiles to competition deployment'
        ],
        conclusion: 'The team completed an integrated autonomous-flight system and represented Kasetsart University at AAVC 2026, using staged testing and flight-log review to improve reliability and safety.'
    },
    {
        id: 'pigeon-drone',
        slug: 'pigeon-drone',
        title: 'Pigeon Deterrence Drone',
        titleTH: 'โดรนไล่นกพิราบ',
        description: 'A custom-built quadcopter with onboard AI for real-time pigeon detection, aerial survey, and civil engineering inspection.',
        descriptionTH: 'โดรนควอดคอปเตอร์พร้อม AI ตรวจจับนกพิราบแบบเรียลไทม์ สำรวจทางอากาศ และตรวจสอบงานวิศวกรรมโยธา',
        image: '/images/pigeon-drone.jpg',
        tags: ['Arduino', 'Computer Vision', 'Embedded Systems', 'Drone', 'OpenCV'],
        featured: true,
        category: 'other',
        layout: 'demo-left',
        role: 'AI & Drone Engineer (Short-term Contract)',
        period: '2024',
        detailedDescription: 'Designed and built a custom quadcopter from scratch for pigeon deterrence and aerial survey tasks. An onboard camera feeds a real-time computer vision pipeline for pigeon detection, while an Arduino-based embedded system handles autonomous flight control. The platform also supports aerial photography and survey missions for civil engineering inspections.',
        challenge: 'Integrating real-time AI inference on constrained embedded hardware while maintaining stable autonomous flight and reliable pigeon detection across varying lighting and outdoor conditions.',
        features: [
            'Custom-built quadcopter frame and power system',
            'Real-time pigeon detection using onboard camera and computer vision',
            'Arduino-based embedded flight control system',
            'Autonomous deterrence patrol missions',
            'Aerial photography and survey for civil engineering inspections'
        ],
        deploymentPlan: [
            'Field-test detection accuracy across different lighting and environments',
            'Tune flight controller PID parameters for stable autonomous patrol',
            'Validate deterrence effectiveness over multi-day deployments',
            'Expand to multi-drone coordination for larger areas'
        ],
        conclusion: 'Delivered a working autonomous deterrence and survey drone, demonstrating end-to-end hardware–software integration from embedded flight control to onboard AI inference.'
    },
    {
        id: 'idairy-smartfarm',
        slug: 'idairy-smartfarm',
        title: 'i-Dairy: Intelligent Dairy Management',
        titleTH: 'i-Dairy: การจัดการฟาร์มโคนมอัจฉริยะ',
        description: 'An intelligent dairy farm management system using IoT sensors and data analytics to monitor herd health, milk yield, and farm environment in real-time.',
        descriptionTH: 'ระบบจัดการฟาร์มโคนมอัจฉริยะผ่าน IoT และการวิเคราะห์ข้อมูลเพื่อติดตามสุขภาพโค ปริมาณน้ำนม และสภาพแวดล้อมในฟาร์มแบบเรียลไทม์',
        image: '/images/idairy-smartfarm.jpg',
        tags: ['IoT', 'Smart Farm', 'Data Analytics', 'Embedded Systems', 'Dashboard', 'Python'],
        featured: true,
        category: 'other',
        layout: 'demo-right',
        role: 'System Developer & Innovation Lead',
        period: 'Jul 2026',
        detailedDescription: 'i-Dairy is an intelligent dairy farm management system developed at the Faculty of Engineering, Kamphaeng Saen, Kasetsart University. The system integrates IoT sensors across the farm to collect real-time data on herd health, milk production, feeding schedules, and environmental conditions. A central dashboard visualises trends and alerts farm operators to anomalies, enabling data-driven decisions that improve herd welfare and farm productivity.',
        challenge: 'Collecting reliable sensor data in a harsh agricultural environment, synchronising multiple IoT nodes, and presenting actionable insights to farm operators with varying levels of technical literacy.',
        features: [
            'Real-time IoT sensor network for herd health and environment monitoring',
            'Milk yield tracking and production analytics dashboard',
            'Automated feeding schedule management system',
            'Environmental condition monitoring (temperature, humidity)',
            'Alert system for anomalies in health and production metrics',
            'Data logging and historical trend visualisation'
        ],
        deploymentPlan: [
            'Deploy sensor nodes across barn zones and validate data accuracy',
            'Integrate dashboard with farm operator workflows',
            'Expand to predictive health alerts using collected historical data',
            'Scale system to cover full farm operations including breeding records'
        ],
        conclusion: 'The project was awarded 1st Place (รางวัลชนะเลิศ) in the Innovation Work category at the KU-KM Sharing Day 2026, Faculty of Engineering Kamphaeng Saen, Kasetsart University, on 23 July 2026.',
        certificateImage: '/images/idairy-certificate.png',
    },
];

const featuredOrder = ['aavc-2026', 'idairy-smartfarm', 'Handy-Talk', 'YangBOT-disease-detection', 'pigeon-drone'];

export const featuredProjects = featuredOrder
    .map(id => projects.find(project => project.id === id))
    .filter((project): project is Project => Boolean(project?.featured));

export const getProjectById = (id: string): Project | undefined => {
    return projects.find(p => p.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
    return projects.filter(p => p.category === category);
};
