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
        tags: ['Machine Learning', 'Computer Vision', 'PyTorch', 'ONNX Runtime', 'MediaPipe Holistic', 'Pose-TGCN', 'Real-time Processing'],
        github: 'https://github.com/Boatalon/Handy-Talk',
        liveDemo: true,
        featured: true,
        category: 'ml',
        layout: 'demo-left',
        role: 'Machine Learning & Web Prototype',
        detailedDescription: 'Handy-Talk explores word-level sign-language recognition directly in the browser. A webcam captures a continuous 25 FPS sequence, MediaPipe Holistic extracts a 55-node upper-body and dual-hand skeletal graph, and a Pose-TGCN neural network trained on WLASL-100 runs via ONNX Runtime Web (WASM) to rank supported words before synthesizing speech via the Web Speech API.',
        challenge: 'The available training data is limited, and sign-language meaning depends on motion, timing, hand shape, and context. The prototype must balance recognition quality with browser latency and user privacy.',
        features: [
            'Real-time 55-node upper-body and dual-hand tracking via MediaPipe Holistic',
            'Sliding-window sequence inference across 50 frames (25 FPS) via ONNX Runtime Web',
            'Multi-Stage Attention Pose-TGCN trained on the 100-gloss WLASL benchmark',
            '3-of-5 temporal majority-vote smoothing to suppress gesture jitter',
            'Client-side Web Speech API voice synthesis and top-K prediction confidence'
        ],
        deploymentPlan: [
            'Preload MediaPipe Holistic WASM and ONNX model assets in the background during idle time',
            'Run 100% client-side inference in WebAssembly so webcam frames never leave the device',
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
        conclusion: 'The Flyhigh Team was awarded 3rd Place (รางวัลชมเชยอันดับ 3) at the Autonomous Aerial Vehicle Challenge (AAVC) 2026, representing Kasetsart University from 28–30 August 2026. The team delivered a fully integrated autonomous-flight system using staged testing and flight-log analysis to achieve reliable mission performance.',
        certificateImage: '/images/aavc-certificate.png',
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
        title: 'i-Dairy: IoT Cow Stress & Activity Tracker',
        titleTH: 'i-Dairy: ระบบติดตามความเครียดและพฤติกรรมโคนมอัจฉริยะ',
        description: 'A wearable hind-leg IoT telemetry system on Seeed XIAO ESP32-C3 with 50 Hz 3D motion processing, posture-gated step counting, real-time SoftAP web calibration, and OTP-authenticated cloud analytics.',
        descriptionTH: 'ระบบติดตามความเครียดและพฤติกรรมการก้าวเดิน-การนอนของโคนมแบบเรียลไทม์ด้วยเซ็นเซอร์ติดต้นขาหลัง (XIAO ESP32-C3 + MPU6050 + DS18B20) พร้อมหน้าเว็บจูนค่าคลื่นสัญญาณ 50 Hz และการเข้ารหัส OTP',
        image: '/images/idairy-smartfarm.jpg',
        tags: ['ESP32-C3', 'C/C++', 'MPU6050', 'IoT', 'Signal Processing', 'Embedded Systems', 'Smart Farm', 'OTP Security'],
        github: 'https://github.com/Boatalon/Cow-Stress-Tracker-Iot-Project',
        featured: true,
        category: 'other',
        layout: 'demo-right',
        role: 'Embedded Systems & IoT Developer',
        period: 'Jul 2026',
        detailedDescription: 'Developed at the Faculty of Engineering at Kamphaeng Saen, Kasetsart University, i-Dairy combines a wearable upper-hind-leg tracker (Seeed Studio XIAO ESP32-C3, MPU6050 IMU, DS18B20 temperature probe) with barn environmental sensing. Sampling at 50 Hz, the firmware isolates the 3D gravity vector via low-pass filtering for orientation-free step impact detection and computes 3D dot-product leg tilt angles to classify standing and lying bouts while locking out false steps during rest. A companion SoftAP web calibrator streams live 50 Hz waveforms for on-farm threshold tuning before deploying with RTC Deep Sleep and Lagrange polynomial modulo-prime OTP authentication.',
        challenge: 'A leg-mounted enclosure is never flat and experiences muscle tremors, fly-swatting kicks while lying down, Wi-Fi attenuation from the animal’s body, and tight 600 mAh 1S LiPo battery constraints.',
        features: [
            '50 Hz 3D gravity separation & orientation-free hysteresis step counting (ACT)',
            '3D dot-product hind-leg tilt tracking with asymmetric Stand ↔ Lie bout delays and lying step lockout',
            'Offline SoftAP Web Calibrator (192.168.4.1) streaming live 50 Hz dual-canvas waveforms & C #define export',
            'WiFiManager captive portal + NVS Flash persistence for field configuration of Wi-Fi and Device IDs (1–20)',
            'Adaptive RTC Deep Sleep power management with non-blocking DS18B20 skin temperature sensing',
            'Time-based Lagrange polynomial modulo-prime One-Time Password (OTP) authentication over HTTPS'
        ],
        deploymentPlan: [
            'Strap the wearable node to the cow’s upper hind leg and connect to the Cow-Calibrator SoftAP',
            'Zero the 3D standing reference vector while the cow stands naturally and tune step/posture thresholds on live waveforms',
            'Export calibrated #define constants into the production Cow-Stress-Tracker firmware with RTC Deep Sleep enabled',
            'Authenticate and stream step counts, standing/lying bouts, leg angles, and temperature to the KU farm server'
        ],
        conclusion: 'Awarded 1st Place (รางวัลชนะเลิศ) in the Innovation Work category at KU-KM Sharing Day 2026, Faculty of Engineering at Kamphaeng Saen, Kasetsart University (23 July 2026).',
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
