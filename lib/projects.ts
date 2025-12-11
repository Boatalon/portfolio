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
}

export const projects: Project[] = [
    {
        id: 'sign-to-speech',
        title: 'Sign to Speech',
        titleTH: 'แปลภาษามือเป็นเสียง',
        description: 'Real-time sign language translation using computer vision and machine learning. Converts sign language gestures into speech using video camera input.',
        descriptionTH: 'แปลภาษามือเป็นเสียงแบบเรียลไทม์ด้วยเทคโนโลยี Computer Vision และ Machine Learning โดยใช้กล้องวิดีโอในการตรวจจับท่าทางภาษามือ',
        image: '/images/sign-to-speech.jpg',
        tags: ['Machine Learning', 'Computer Vision', 'Python', 'TensorFlow', 'Real-time Processing'],
        link: 'https://sign-to-speech.vercel.app', // แก้ไข URL ตามจริง
        github: 'https://github.com/yourusername/sign-to-speech', // แก้ไข URL ตามจริง
        featured: true,
        category: 'ml',
    },
    {
        id: 'object-detection',
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
        id: 'image-classification',
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
    // เพิ่มโปรเจกต์อื่นๆ ได้ที่นี่
];

export const featuredProjects = projects.filter(p => p.featured);

export const getProjectById = (id: string): Project | undefined => {
    return projects.find(p => p.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
    return projects.filter(p => p.category === category);
};
