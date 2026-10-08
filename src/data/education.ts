import type { EducationItem, CertificationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    degree: 'B.Sc. in Artificial Intelligence and Data Science',
    institution: 'Arab Academy for Science, Technology, and Maritime Transport (AAST)',
    period: 'Sept 2021 - Sept 2025',
    location: 'Egypt',
    summary:
      'Rigorous 4-year undergraduate curriculum covering mathematical foundations, statistical learning, neural networks, computer vision, natural language processing, database systems, and distributed computing.',
    highlights: [
      'Graduation Project Lead: Led a 5-member team on ARAGbMR (Agentic RAG & Mixed Reality Education Platform), securing 52,250 EGP in competitive project funding.',
      'Core Research: Developed DualRisk-AI, an explainable healthcare prediction pipeline evaluated on 29,951 total NHANES participants with temporal external validation.',
      'Coursework Foundations: Machine Learning, Deep Learning, Probability & Statistics, Linear Algebra, Computer Vision, Natural Language Processing, Data Structures & Algorithms, Database Systems.'
    ]
  },
  {
    degree: 'High School Diploma',
    institution: 'Thebes American College',
    period: 'Sept 2019 - Jul 2021',
    location: '6th of October City, Giza, Egypt',
    summary:
      'American High School Diploma with emphasis on advanced mathematics, sciences, and foundational computer studies.',
    highlights: [
      'Strong academic focus on mathematics and analytical sciences.',
      'Completed coursework preparing for university engineering and computing curricula.'
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: 'Machine Learning (60 Hours)',
    provider: 'Information Technology Institute (ITI)',
    period: 'Aug - Sep 2024',
    duration: '60 Intensive Hours',
    topics: [
      'Supervised Machine Learning Algorithms (Regression, Classification, Ensembles)',
      'Unsupervised Machine Learning & Clustering Techniques',
      'Python Data Science Stack (NumPy, Pandas, scikit-learn, Matplotlib, Seaborn)',
      'Model Evaluation Metrics, Cross-Validation, & Hyperparameter Tuning'
    ],
    projects: [
      'Heart Attack Risk Prediction Pipeline (Supervised Classification on clinical biometric markers)',
      'Customer Segmentation & Market Clustering (Unsupervised K-Means on retail consumer cohorts)'
    ]
  }
];
