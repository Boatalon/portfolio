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
        link: 'https://sign-to-speech.vercel.app',
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
        layout: 'demo-left',
        detailedDescription: 'Built an advanced face recognition system that leverages deep learning neural networks to accurately identify and verify individuals in real-time. The system processes video streams from cameras, detects faces, extracts facial features, and matches them against a database with lightning-fast performance.',
        features: [
            'Real-time processing of 30+ FPS',
            'Accurate detection in varying lighting conditions',
            'Recognition of multiple faces simultaneously',
            'Age and emotion detection capabilities',
            'Privacy-focused with encrypted facial data storage'
        ],
        conclusion: 'This face recognition system represents the cutting edge of biometric technology, combining accuracy, speed, and privacy to create a robust solution for security and authentication applications.'
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
        layout: 'demo-right',
        detailedDescription: 'Developed an intelligent customer service chatbot using state-of-the-art Natural Language Processing and Transformer models. The bot understands customer queries, maintains conversation context, and provides relevant, helpful responses while learning from each interaction to continuously improve.',
        features: [
            'Natural language understanding with 95%+ accuracy',
            'Multi-turn conversation with context retention',
            'Sentiment analysis for better customer engagement',
            'Multi-language support (English, Thai)',
            'Integration with ticketing and CRM systems'
        ],
        conclusion: 'This AI chatbot transforms customer service by providing instant, accurate, and personalized responses 24/7, reducing response times and improving customer satisfaction.'
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
        layout: 'demo-left',
        detailedDescription: 'Created a medical AI system that assists healthcare professionals in diagnosing diseases from medical imaging. Using convolutional neural networks trained on thousands of medical images, the system achieves diagnostic accuracy comparable to experienced radiologists.',
        features: [
            'High accuracy disease detection from X-rays and CT scans',
            'Support for multiple pathologies and conditions',
            'Uncertainty quantification for confident predictions',
            'Integration with hospital PACS systems',
            'Explainable AI with attention maps showing diagnostic reasoning'
        ],
        conclusion: 'This system empowers healthcare professionals with AI-assisted diagnostics, enabling faster, more accurate disease detection and ultimately better patient outcomes.'
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
        layout: 'demo-right',
        detailedDescription: 'Engineered a real-time pose estimation system for fitness and sports applications. Using computer vision to track body keypoints, the system analyzes movement patterns, detects improper form, and provides real-time feedback to help users improve their technique and prevent injuries.',
        features: [
            '18-point skeletal tracking with high precision',
            'Real-time form analysis and correction',
            'Exercise rep counting and tracking',
            'Support for 50+ common exercises',
            'Performance analytics and progress tracking'
        ],
        conclusion: 'By bringing professional-grade movement analysis to everyone, this system makes personal training more accessible and helps people exercise safer and more effectively.'
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
        layout: 'demo-left',
        detailedDescription: 'Built a sophisticated recommendation engine that uses collaborative filtering and deep learning to provide personalized product and content recommendations. The system learns from user behavior, preferences, and interactions to deliver increasingly accurate suggestions over time.',
        features: [
            'Hybrid collaborative and content-based filtering',
            'Deep neural networks for complex pattern recognition',
            'Real-time recommendation updates',
            'A/B testing framework for optimization',
            'Scalable architecture handling millions of users'
        ],
        conclusion: 'This recommendation engine drives engagement and conversion by connecting users with content and products they love, creating a personalized experience that keeps them coming back.'
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
