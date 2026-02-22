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
        id: 'sign-to-speech',
        slug: 'sign-to-speech',
        title: 'Sign to Speech',
        titleTH: 'แปลภาษามือเป็นเสียง',
        description: 'Real-time sign language translation using computer vision and machine learning. Converts sign language gestures into speech using video camera input.',
        descriptionTH: 'แปลภาษามือเป็นเสียงแบบเรียลไทม์ด้วยเทคโนโลยี Computer Vision และ Machine Learning โดยใช้กล้องวิดีโอในการตรวจจับท่าทางภาษามือ',
        image: '/images/sign-to-speech.jpg',
        tags: ['Machine Learning', 'Computer Vision', 'Python', 'TensorFlow', 'Real-time Processing'],
        liveDemo: true,
        github: 'https://github.com/yourusername/sign-to-speech',
        featured: true,
        category: 'ml',
        layout: 'demo-left',
        detailedDescription: 'This project aims to bridge the communication gap between sign language users and non-signers by providing real-time translation of sign language gestures into spoken words. Using advanced computer vision techniques and deep learning models, the system captures hand movements and facial expressions through a standard webcam, processes them in real-time, and generates corresponding speech output.',
        features: [
            'Real-time hand tracking and gesture recognition',
            'Multi-language support for various sign languages',
            'Text-to-speech conversion with natural voice',
            'High accuracy rate of 95%+ for common gestures',
            'Low latency processing suitable for conversations'
        ],
        conclusion: 'This sign language translation system demonstrates the power of AI in creating more inclusive technology. By making communication accessible to everyone, regardless of their hearing abilities, we can build a more connected society.'
    },
    {
        id: 'object-detection',
        slug: 'object-detection',
        title: 'Object Detection with Faster R-CNN',
        titleTH: 'ตรวจจับวัตถุด้วย Faster R-CNN',
        description: 'Binary classification system using Faster R-CNN for object detection with custom dataset training and evaluation.',
        descriptionTH: 'ระบบจำแนกประเภทแบบไบนารีโดยใช้ Faster R-CNN สำหรับการตรวจจับวัตถุ พร้อมการเทรนและประเมินผลด้วยชุดข้อมูลที่กำหนดเอง',
        image: '/images/faster-rcnn.jpg',
        tags: ['Deep Learning', 'PyTorch', 'Object Detection', 'Computer Vision'],
        github: 'https://github.com/yourusername/faster-rcnn-detection',
        featured: true,
        category: 'ml',
        layout: 'demo-right',
        detailedDescription: 'Developed a sophisticated object detection system using the Faster R-CNN architecture, one of the most powerful deep learning models for accurate and efficient object detection. This project focuses on binary classification, trained on a custom dataset to detect specific objects with high precision.',
        features: [
            'Faster R-CNN architecture for high-speed detection',
            'Custom dataset training pipeline with data augmentation',
            'Real-time bounding box visualization',
            'PyTorch implementation with GPU acceleration',
            'Comprehensive evaluation metrics and analysis'
        ],
        conclusion: 'The Faster R-CNN model proves to be highly effective for object detection tasks, offering an excellent balance between speed and accuracy. This project showcases the practical application of deep learning in computer vision.'
    },
    {
        id: 'ai-pigeon-drone',
        slug: 'ai-pigeon-drone',
        title: 'AI Pigeon Deterrent & Survey Drone',
        titleTH: 'โดรน AI ไล่นกพิราบ & สำรวจงานวิศวกรรม',
        description: 'Custom-built drone equipped with AI for deterring pigeons near buildings and serving as an aerial survey tool for civil engineering applications.',
        descriptionTH: 'โดรนที่สร้างขึ้นเองพร้อม AI ตรวจสอบนกพิราบที่คำนวนด้วย arduno ด้วยภาพจากกล้องสำหรับไล่นกพิราบใกล้อาคาร และใช้เป็นโดรนสำรวจทางอากาศสำหรับงานวิศวกรรมโยธา ในภาพเป็นตัวต้นแบบ',
        image: '/images/ai-drone.jpg',
        tags: ['Drone', 'AI', 'Computer Vision', 'Civil Engineering', 'Embedded Systems', 'Autonomous'],
        featured: true,
        category: 'other',
        layout: 'demo-left',
        detailedDescription: 'A custom-built quadcopter drone designed for two primary purposes. First, it integrates an AI-powered computer vision system to detect and deter pigeons near buildings, helping reduce structural damage caused by bird activity. Second, it serves as an aerial survey drone for civil engineering applications, capturing aerial photography, surveying construction sites, and inspecting building structures from elevated perspectives.',
        features: [
            'AI-powered pigeon detection using computer vision',
            'Autonomous flight for deterring pigeons from building perimeters',
            'Aerial survey capabilities for civil engineering projects',
            'Aerial photography for construction site analysis',
            'High-altitude structural inspection of buildings and infrastructure',
            'Fully custom-built hardware and software from the ground up'
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
