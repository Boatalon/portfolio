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
    featured: boolean;
    category: 'ml' | 'web' | 'mobile' | 'other';
    slug?: string;
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
        link: 'https://sign-to-speech.vercel.app',
        github: 'https://github.com/yourusername/sign-to-speech',
        featured: true,
        category: 'ml',
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
    },
    {
        id: 'face-recognition-system',
        slug: 'face-recognition-system',
        title: 'Face Recognition System',
        titleTH: 'ระบบจดจำใบหน้า',
        description: 'Real-time face detection and recognition system using deep learning. Capable of identifying multiple faces simultaneously with 98% accuracy.',
        descriptionTH: 'ระบบตรวจจับและจดจำใบหน้าแบบเรียลไทม์ด้วยการเรียนรู้เชิงลึก สามารถระบุใบหน้าหลายคนพร้อมกันได้ด้วยความแม่นยำ 98%',
        image: '/images/projects/face-recognition.jpg',
        tags: ['Python', 'OpenCV', 'Deep Learning', 'Face Recognition', 'Real-time'],
        link: 'https://face-recognition-demo.vercel.app',
        github: 'https://github.com/yourusername/face-recognition',
        featured: true,
        category: 'ml',
    },
    {
        id: 'ai-chatbot',
        slug: 'ai-chatbot',
        title: 'AI Customer Service Chatbot',
        titleTH: 'แชทบอทบริการลูกค้า AI',
        description: 'Intelligent chatbot powered by NLP and transformer models. Handles customer inquiries with natural language understanding and context awareness.',
        descriptionTH: 'แชทบอทอัจฉริยะที่ขับเคลื่อนด้วย NLP และโมเดล Transformer รองรับการสอบถามลูกค้าด้วยความเข้าใจภาษาธรรมชาติและบริบท',
        image: '/images/projects/chatbot.jpg',
        tags: ['NLP', 'Transformers', 'Python', 'FastAPI', 'React'],
        link: 'https://ai-chatbot-demo.vercel.app',
        github: 'https://github.com/yourusername/ai-chatbot',
        featured: true,
        category: 'ml',
    },
    {
        id: 'medical-image-classifier',
        slug: 'medical-image-classifier',
        title: 'Medical Image Classifier',
        titleTH: 'ระบบจำแนกภาพทางการแพทย์',
        description: 'CNN-based medical image classification system for detecting diseases from X-ray and CT scan images. Assists healthcare professionals in diagnosis.',
        descriptionTH: 'ระบบจำแนกภาพทางการแพทย์ด้วย CNN สำหรับตรวจจับโรคจากภาพเอ็กซ์เรย์และ CT Scan ช่วยเหลือบุคลากรทางการแพทย์ในการวินิจฉัย',
        image: '/images/projects/medical-ai.jpg',
        tags: ['Deep Learning', 'CNN', 'Medical AI', 'TensorFlow', 'Healthcare'],
        github: 'https://github.com/yourusername/medical-classifier',
        featured: true,
        category: 'ml',
    },
    {
        id: 'pose-estimation',
        slug: 'pose-estimation',
        title: 'Real-time Pose Estimation',
        titleTH: 'ระบบประมาณท่าทางแบบเรียลไทม์',
        description: 'Human pose estimation application for fitness tracking and sports analysis. Detects body keypoints and provides form correction feedback.',
        descriptionTH: 'แอปพลิเคชันประมาณท่าทางมนุษย์สำหรับติดตามการออกกำลังกายและวิเคราะห์กีฬา ตรวจจับจุดสำคัญของร่างกายและให้ข้อเสนอแนะการแก้ไขท่าทาง',
        image: '/images/projects/pose-estimation.jpg',
        tags: ['Computer Vision', 'OpenPose', 'MediaPipe', 'Python', 'Fitness Tech'],
        link: 'https://pose-estimation-demo.vercel.app',
        github: 'https://github.com/yourusername/pose-estimation',
        featured: true,
        category: 'ml',
    },
    {
        id: 'recommendation-engine',
        slug: 'recommendation-engine',
        title: 'AI Recommendation Engine',
        titleTH: 'เครื่องมือแนะนำด้วย AI',
        description: 'Personalized recommendation system using collaborative filtering and deep learning. Provides accurate product and content recommendations.',
        descriptionTH: 'ระบบแนะนำเฉพาะบุคคลด้วยการกรองแบบร่วมมือและการเรียนรู้เชิงลึก ให้คำแนะนำสินค้าและเนื้อหาที่แม่นยำ',
        image: '/images/projects/recommendation.jpg',
        tags: ['Machine Learning', 'Collaborative Filtering', 'Python', 'TensorFlow', 'Data Science'],
        github: 'https://github.com/yourusername/recommendation-engine',
        featured: true,
        category: 'ml',
    },
    {
        id: 'image-classification',
        slug: 'image-classification',
        title: 'Image Classification Models',
        titleTH: 'โมเดลจำแนกประเภทภาพ',
        description: 'Comparative study of deep learning architectures including VGG19 and ResNeXt101 for binary image classification.',
        descriptionTH: 'การศึกษาเปรียบเทียบสถาปัตยกรรมการเรียนรู้เชิงลึกต่างๆ ได้แก่ VGG19 และ ResNeXt101 สำหรับการจำแนกประเภทภาพแบบไบนารี',
        image: '/images/classification.jpg',
        tags: ['Deep Learning', 'VGG19', 'ResNeXt', 'PyTorch'],
        github: 'https://github.com/yourusername/image-classification',
        featured: false,
        category: 'ml',
    },
];

export const featuredProjects = projects.filter(p => p.featured);

export const getProjectById = (id: string): Project | undefined => {
    return projects.find(p => p.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
    return projects.filter(p => p.category === category);
};
