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
    demoContent?: string; // URL for demo iframe or video
    detailedDescription?: string;
    features?: string[];
    conclusion?: string;
}

export const projects: Project[] = [
    {
        id: 'Handy-Talk',
        slug: 'Handy-Talk',
        title: 'Handy-Talk',
        titleTH: 'Handy-Talk',
        description: 'Real-time sign language translation using computer vision and machine learning. Converts sign word level language into speech using video camera.',
        descriptionTH: 'แปลภาษามือเป็นเสียงแบบเรียลไทม์ด้วยเทคโนโลยี Computer Vision และ Machine Learning โดยใช้กล้องวิดีโอในการตรวจจับท่าทางภาษามือ',
        image: '/images/asl-hello.gif',
        tags: ['Machine Learning', 'Computer Vision', 'Python', 'TensorFlow', 'Real-time Processing'],
        liveDemo: true,
        github: 'https://github.com/Boatalon/HandyTalk',
        featured: true,
        category: 'ml',
        layout: 'demo-left',
        detailedDescription: 'This project aims to bridge the communication gap between sign language users and non-signers by providing real-time translation of sign language into spoken words. computer vision techniques and deep learning models, the system captures hand movements and facial expressions through a standard webcam, processes them in real-time, and generates corresponding speech output. Live demo is a first experiment model for word level it has a bad accuracy because dataset is not enough we use many feature engineering method for this dataset',
        features: [
            'Real-time hand tracking and gesture recognition',
            'WLASL dataset for training model',
            'Low latency processing suitable for conversations',
            'Feature engineer keypoint for WLASL dataset'
        ],
        conclusion: 'This sign language translation system demonstrates the power of AI in creating more inclusive technology. By making communication accessible to everyone, regardless of their hearing abilities, we can build a more connected society.'
    },
    {
        id: 'YangBOT-disease-detection',
        slug: 'YangBOT-disease-detection',
        title: 'YangBOT-disease-detection',
        titleTH: 'YangBOT-ตรวจจับโรคพืช',
        description: 'End to end disease detection for Yangpara tree using AI and notify via Line bot',
        descriptionTH: 'ระบบจำแนกประเภทแบบไบนารีโดยใช้ Faster R-CNN สำหรับการตรวจจับวัตถุ พร้อมการเทรนและประเมินผลด้วยชุดข้อมูลที่กำหนดเอง',
        image: '/images/yangbot-disease.png',
        tags: ['Deep Learning', 'PyTorch', 'Object Detection', 'Computer Vision'],
        liveDemo: false,
        featured: true,
        category: 'ml',
        layout: 'demo-right',
        detailedDescription: 'I am a researcher assistant for this project at Kasetsart University. I developed a sophisticated object detection system using the YOLO architecture, one of the most powerful deep learning models for accurate and efficient object detection. This project focuses on Colletotrichum sp. disease in Yangpara tree, trained on a custom dataset from Plant pathologists at Kasetsart University. Note: The source code for this project is confidential and cannot be shared due to the terms of the employment contract. A live demo is also not available for the same reason.',
        features: [
            'Use Object Detection architecture for recognize disease in plant',
            'Custom dataset training pipeline with data augmentation',
            'Use line bot for notify disease in plant',
            'Use PyTorch for training model',
            'Comprehensive evaluation metrics and analysis'
        ],
        conclusion: 'The YOLO model proves to be highly effective for object detection tasks, offering an excellent balance between speed and accuracy. This project showcases the practical application of deep learning in computer vision. Due to contractual obligations, the source code and live demo cannot be made publicly available.'
    },
    {
        id: 'ai-pigeon-drone',
        slug: 'ai-pigeon-drone',
        title: 'AI Pigeon Deterrent & Survey Drone',
        titleTH: 'โดรน AI ไล่นกพิราบ & สำรวจงานวิศวกรรม',
        description: 'AI Pigeon Deterrent & Survey Drone',
        descriptionTH: 'โดรนที่สร้างขึ้นเองพร้อม AI ตรวจสอบนกพิราบที่คำนวนด้วย arduno ด้วยภาพจากกล้องสำหรับไล่นกพิราบใกล้อาคาร และใช้เป็นโดรนสำรวจทางอากาศสำหรับงานวิศวกรรมโยธา ในภาพเป็นตัวต้นแบบ',
        image: '/images/ai-drone.jpg',
        tags: ['Drone', 'AI', 'Computer Vision', 'Civil Engineering', 'Embedded Systems', 'Autonomous'],
        featured: true,
        category: 'other',
        layout: 'demo-left',
        detailedDescription: 'A custom-built quadcopter drone designed for two primary purposes. First, it integrates an AI computer vision system to detect and deter pigeons near buildings. Second, it serves as an aerial survey drone for civil engineering applications, capturing aerial photography, surveying construction sites, and inspecting building structures from elevated perspectives.',
        features: [
            'pigeon detection using computer vision',
            'Autonomous flight for deterring pigeons from building perimeters',
            'Aerial survey capabilities for civil engineering projects',
            'Use horn to scare away pigeons',
            'custom-built hardware and software'
        ],
        conclusion: 'This project demonstrates the powerful intersection of AI, drone technology, and civil engineering to solve real-world problems — from managing pigeon-related building damage to enabling efficient aerial surveying of construction sites.'
    },
];

export const featuredProjects = projects.filter(p => p.featured);

export const getProjectById = (id: string): Project | undefined => {
    return projects.find(p => p.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
    return projects.filter(p => p.category === category);
};
