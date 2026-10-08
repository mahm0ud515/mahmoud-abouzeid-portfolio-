import type { Profile } from '../types';

export const profileData: Profile = {
  name: 'Mahmoud Abouzeid',
  titles: [
    'AI & Data Science Engineer',
    'Machine Learning Engineer',
    'Applied AI Practitioner'
  ],
  currentRole: 'AI & Data Science Engineer',
  status: 'Open to AI / Data Science & ML Engineering Roles',
  location: 'Sheikh Zayed City, Giza, Egypt',
  email: 'mahmoudabouzeid220@gmail.com',
  phone: '+20 109 898 1387',
  linkedin: 'https://linkedin.com/in/mahmoud-abouzeid-54a1aa24b',
  github: 'https://github.com/mahm0ud515',
  resumePdfUrl: '/mahmoud-abouzeid-resume.pdf',
  summary:
    'AI & Data Science engineer with hands-on experience building and deploying end-to-end systems across Healthcare AI, Computer Vision, NLP, Retrieval-Augmented Generation (RAG), Mixed Reality, and mobile applications. Developed an explainable clinical risk-prediction pipeline with SHAP interpretability and temporal external validation on NHANES data. Led a 5-member team to deliver an agentic RAG-based AR education platform showcased at AASTMT, which won project funding of 52,250 EGP. Proficient in Python, PyTorch, TensorFlow, scikit-learn, LangChain, FastAPI, Flutter, and Firebase across research, web, and mobile environments.',
  shortBio:
    'Graduated in AI & Data Science from the Arab Academy for Science, Technology, and Maritime Transport (AAST). I combine rigorous data science methodology—such as temporal external validation and SHAP explainability—with practical full-stack and mobile deployment capabilities to build reliable, real-world AI applications.',
  keyStats: [
    {
      value: '21,798+',
      label: 'Clinical Cohort Modeled',
      helper: 'NHANES epidemiological records with temporal validation'
    },
    {
      value: '0.9521',
      label: 'Top External ROC-AUC',
      helper: 'PyTorch Hybrid CNN + Attention on unseen clinical data'
    },
    {
      value: '52,250 EGP',
      label: 'Competitive Funding Won',
      helper: 'Awarded for agentic RAG & AR graduation platform'
    },
    {
      value: '87,000+',
      label: 'Training Samples Processed',
      helper: '38-class edge computer vision model achieving 97.3% accuracy'
    }
  ],
  specializations: [
    {
      title: 'Healthcare & Explainable AI',
      description:
        'Building statistically sound clinical risk prediction pipelines with zero-retraining temporal external validation and SHAP TreeExplainer biomarker attributions.',
      icon: 'Activity',
      tags: ['SHAP', 'NHANES', 'PyTorch', 'ROC-AUC 0.9521', 'Clinical Validation']
    },
    {
      title: 'Agentic RAG & Generative Systems',
      description:
        'Architecting multi-turn conversational agents, semantic document indexing with FAISS/embeddings, and low-latency LLM orchestration with Gemini 1.5 Pro and LangChain.',
      icon: 'BrainCircuit',
      tags: ['LangChain', 'FAISS', 'Gemini 1.5 Pro', 'PDF Pipelines', 'STT/TTS']
    },
    {
      title: 'Computer Vision & Edge Deep Learning',
      description:
        'Training CNN, U-Net, and YOLOv5 architectures, followed by TensorFlow Lite quantization for real-time, low-memory on-device inference.',
      icon: 'Eye',
      tags: ['TensorFlow Lite', 'U-Net', 'YOLOv5', 'OpenCV', 'On-Device Mobile']
    },
    {
      title: 'Full-Stack & Mobile AI Integration',
      description:
        'Bridging the gap between ML models and user products using FastAPI, Flutter (Provider, Material 3), Firebase, MongoDB, and interactive visualization dashboards.',
      icon: 'Layers',
      tags: ['FastAPI', 'Flutter', 'Firebase', 'MongoDB', 'Power BI']
    }
  ]
};
