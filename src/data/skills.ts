import type { SkillGroup } from '../types';

export const skillsData: SkillGroup[] = [
  {
    id: 'ml-datascience',
    category: 'Machine Learning & Data Science',
    icon: 'Activity',
    description: 'Statistical modeling, feature engineering, explainability, and rigorous validation.',
    skills: [
      { name: 'scikit-learn', highlight: true },
      { name: 'NumPy', highlight: false },
      { name: 'Pandas', highlight: true },
      { name: 'SHAP (TreeExplainer)', highlight: true },
      { name: 'Feature Engineering', highlight: true },
      { name: 'Model Evaluation (ROC-AUC / F1)', highlight: true },
      { name: 'Tabular Data Modeling', highlight: true },
      { name: 'Temporal External Validation', highlight: true },
      { name: 'Clinical Risk Prediction', highlight: true },
      { name: 'Healthcare AI', highlight: true },
      { name: 'Explainable AI (XAI)', highlight: true }
    ]
  },
  {
    id: 'deeplearning-cv',
    category: 'Deep Learning & Computer Vision',
    icon: 'Eye',
    description: 'Neural architectures, spatial reasoning, medical segmentation, and edge quantization.',
    skills: [
      { name: 'PyTorch', highlight: true },
      { name: 'TensorFlow', highlight: true },
      { name: 'Keras', highlight: false },
      { name: 'CNNs', highlight: true },
      { name: 'U-Net Segmentation', highlight: true },
      { name: 'YOLOv5', highlight: true },
      { name: 'OpenCV', highlight: true },
      { name: 'TensorFlow Lite (TFLite)', highlight: true },
      { name: 'Hybrid CNN + Attention', highlight: true },
      { name: 'Data Augmentation', highlight: false }
    ]
  },
  {
    id: 'nlp-genai',
    category: 'NLP & Generative AI',
    icon: 'BrainCircuit',
    description: 'Retrieval-Augmented Generation, Transformer models, semantic indexing, and conversational agents.',
    skills: [
      { name: 'Transformers (Hugging Face)', highlight: true },
      { name: 'LangChain', highlight: true },
      { name: 'Retrieval-Augmented Generation (RAG)', highlight: true },
      { name: 'Text Summarization', highlight: false },
      { name: 'Speech-to-Text (STT)', highlight: false },
      { name: 'Text-to-Speech (TTS)', highlight: false },
      { name: 'Gemini 1.5 Pro API', highlight: true },
      { name: 'Vector Embeddings', highlight: true }
    ]
  },
  {
    id: 'languages',
    category: 'Programming Languages',
    icon: 'Code2',
    description: 'Core languages used for model development, systems programming, and application clients.',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'C', highlight: false },
      { name: 'JavaScript (Node.js)', highlight: true },
      { name: 'Dart', highlight: true },
      { name: 'SQL', highlight: true },
      { name: 'HTML5 & CSS3', highlight: false }
    ]
  },
  {
    id: 'backend-databases',
    category: 'Backend & Data Infrastructure',
    icon: 'Database',
    description: 'APIs, relational & document storage, vector databases, and cloud authentication.',
    skills: [
      { name: 'FastAPI', highlight: true },
      { name: 'Flask', highlight: false },
      { name: 'FAISS Vector Database', highlight: true },
      { name: 'MongoDB', highlight: true },
      { name: 'SQL / Relational DBs', highlight: false },
      { name: 'Firebase Authentication', highlight: true },
      { name: 'Cloud Firestore', highlight: true },
      { name: 'RESTful APIs', highlight: true }
    ]
  },
  {
    id: 'mobile-ar',
    category: 'Mobile & Mixed Reality (AR)',
    icon: 'Smartphone',
    description: 'Interactive client applications, state architectures, spatial computing, and on-device inference.',
    skills: [
      { name: 'Flutter', highlight: true },
      { name: 'Provider & ChangeNotifier', highlight: true },
      { name: 'Material 3', highlight: false },
      { name: 'Unity (AR/VR)', highlight: true },
      { name: 'XREAL Air 2 Ultra SDK', highlight: true },
      { name: 'On-Device Mobile Inference', highlight: true },
      { name: 'Android APK Build & Release', highlight: false },
      { name: 'SharedPreferences', highlight: false }
    ]
  },
  {
    id: 'visualization',
    category: 'Data Visualization & Analytics',
    icon: 'BarChart3',
    description: 'Communicating data distributions, clinical correlations, and system telemetry.',
    skills: [
      { name: 'Power BI', highlight: true },
      { name: 'Matplotlib', highlight: true },
      { name: 'Seaborn', highlight: false },
      { name: 'fl_chart (Flutter)', highlight: true },
      { name: 'percent_indicator', highlight: false },
      { name: 'Interactive Dashboards', highlight: true }
    ]
  },
  {
    id: 'tools-workflow',
    category: 'Tools & Engineering Practices',
    icon: 'Cpu',
    description: 'Version control, development environments, and collaborative delivery.',
    skills: [
      { name: 'Git & GitHub', highlight: true },
      { name: 'Agile & Scrum Workflows', highlight: true },
      { name: 'Jupyter Notebook', highlight: true },
      { name: 'VS Code', highlight: false },
      { name: 'Android Studio', highlight: false },
      { name: 'Firebase Console', highlight: false }
    ]
  }
];
