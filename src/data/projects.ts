import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'dualrisk-ai',
    title: 'DualRisk-AI',
    subtitle: 'Explainable Clinical Risk Prediction Pipeline & External Temporal Validation',
    tagline: 'Dual clinical risk assessment for diabetes and cardiovascular burden using NHANES epidemiological data with SHAP interpretability and temporal validation.',
    category: 'Healthcare AI',
    featured: true,
    publishedOrShowcased: 'Targeted for Informatics in Medicine Unlocked (Elsevier)',
    period: '2024 - 2025',
    datasetInfo: '21,798 adult records from NHANES (2013-2020) for development; 8,153 adults from NHANES (August 2021 - August 2023) for temporal external validation across 10 clinical input features.',
    problem:
      'Most machine learning models in healthcare suffer from severe performance degradation when evaluated on subsequent population cohorts without retraining. Furthermore, clinical practitioners reject black-box predictions that lack biological interpretability and feature attribution.',
    approach:
      'Engineered an end-to-end, reproducible 5-phase pipeline: (1) multi-cycle NHANES data merging and cleaning, (2) baseline comparative modeling (Logistic Regression & Random Forest), (3) a custom lightweight PyTorch Hybrid CNN + Attention architecture (8,514 parameters), (4) SHAP TreeExplainer feature attribution, and (5) zero-retraining temporal external validation on the post-pandemic NHANES 2021-2023 cycle.',
    solution:
      'DualRisk-AI simultaneously predicts diabetes status and estimates cardiovascular risk-factor burden. The framework maintains exceptional generalization across temporal cohorts while providing per-patient SHAP biomarker attribution explanations (HbA1c, glucose, BMI, systolic BP, cholesterol, age, smoking status).',
    technologies: [
      'Python',
      'PyTorch',
      'scikit-learn',
      'Pandas',
      'NumPy',
      'SHAP',
      'Matplotlib',
      'NHANES Datasets'
    ],
    metrics: [
      {
        value: '0.9173',
        label: 'External ROC-AUC (Diabetes)',
        subtext: 'Random Forest evaluated on 8,153 unseen adults (NHANES 2021-2023) without retraining'
      },
      {
        value: '0.9521',
        label: 'External ROC-AUC (Cardiovascular)',
        subtext: 'PyTorch Hybrid CNN + Attention across unseen external population'
      },
      {
        value: '21,798',
        label: 'Adult Patients Analyzed',
        subtext: 'Multi-cycle NHANES clinical cohort with rigorous stratified partitioning'
      },
      {
        value: '8,514',
        label: 'Parameters (CNN+Attention)',
        subtext: 'Ultra-compact neural architecture designed to prevent overfitting on tabular features'
      }
    ],
    architectureSteps: [
      {
        step: 'Phase 1: Preprocessing & Cohort Harmonization',
        description: 'Merged examination, laboratory, and demographic NHANES cycles (2013-2020 & 2021-2023). Implemented clinical imputation, label definition, and stratified splits.'
      },
      {
        step: 'Phase 2: Baseline & Tree-Based Modeling',
        description: 'Trained and calibrated Logistic Regression and Random Forest classifiers for both diabetes prediction and cardiovascular risk estimation.'
      },
      {
        step: 'Phase 3: Hybrid CNN + Attention Architecture',
        description: 'Developed an 8,514-parameter PyTorch model combining 1D convolution for localized feature relationships with self-attention for global clinical biomarker interplay.'
      },
      {
        step: 'Phase 4: Explainability via SHAP TreeExplainer',
        description: 'Extracted global and local feature importance rankings, validating that HbA1c, fasting glucose, BMI, systolic blood pressure, and age drove clinical predictions.'
      },
      {
        step: 'Phase 5: Temporal External Validation',
        description: 'Benchmarked models against the completely unseen post-pandemic NHANES August 2021-August 2023 cohort without any model retraining.'
      }
    ],
    contributions: [
      'Built reproducible data processing scripts merging raw NHANES SAS/XPT files into clean analysis-ready cohorts.',
      'Designed and coded the custom PyTorch Hybrid CNN + Attention model architecture and custom training loop.',
      'Conducted extensive SHAP interpretability experiments comparing global feature impact with established clinical literature.',
      'Executed temporal external validation protocol, demonstrating robust out-of-sample generalization (0.9173 and 0.9521 ROC-AUC).',
      'Authored publication-grade manuscript materials, tables, and visualization figures for journal submission.'
    ],
    images: [
      {
        url: `${import.meta.env.BASE_URL}projects/dualrisk/Figure_1_Workflow.png`,
        caption: 'Figure 1: DualRisk-AI End-to-End 5-Phase Research and Modeling Workflow',
        alt: 'DualRisk-AI Workflow'
      },
      {
        url: `${import.meta.env.BASE_URL}projects/dualrisk/Figure_2_Internal_External_AUC.png`,
        caption: 'Figure 2: Internal vs. External ROC-AUC and F1 Performance Comparison across Models',
        alt: 'Internal vs External ROC-AUC'
      },
      {
        url: `${import.meta.env.BASE_URL}projects/dualrisk/Figure_3_SHAP_Diabetes.png`,
        caption: 'Figure 3: SHAP Summary Plot identifying key clinical predictors for Diabetes Prediction',
        alt: 'SHAP Diabetes Summary Plot'
      },
      {
        url: `${import.meta.env.BASE_URL}projects/dualrisk/Figure_4_SHAP_HeartRisk.png`,
        caption: 'Figure 4: SHAP Summary Plot for Cardiovascular Risk Factor Burden Estimation',
        alt: 'SHAP HeartRisk Summary Plot'
      },
      {
        url: `${import.meta.env.BASE_URL}projects/dualrisk/image2.png`,
        caption: 'PyTorch Hybrid CNN + Attention Neural Network Architecture (8,514 parameters)',
        alt: 'Hybrid CNN Attention Architecture'
      }
    ],
    links: {
      manuscript: 'Targeted: Informatics in Medicine Unlocked (Elsevier)'
    }
  },
  {
    id: 'aragbmr',
    title: 'ARAGbMR',
    subtitle: 'Agentic RAG-Based Mixed-Reality Education Platform',
    tagline: 'Award-winning AR educational platform featuring an avatar pedagogical agent powered by LangChain and Gemini 1.5 Pro on XREAL Air 2 Ultra glasses.',
    category: 'Agentic & RAG',
    featured: true,
    publishedOrShowcased: 'Awarded 52,250 EGP Funding; Evaluated at AASTMT University',
    period: '2024 - 2025',
    datasetInfo: 'Domain-specific academic textbooks and university curricula spanning ~2,500 PDF pages transformed into high-density vector representations.',
    problem:
      'Higher-education textbooks are static, high friction, and lack interactive comprehension checks. Students struggle with spatial comprehension of complex concepts and lack real-time pedagogical feedback when studying independently.',
    approach:
      'Led a 5-member engineering team to build a mixed-reality educational assistant on XREAL Air 2 Ultra glasses. Engineered an automated document ingestion pipeline processing 2,500 pages into vector representations, connected to a FastAPI backend running LangChain, Gemini 1.5 Pro, Speech-to-Text, and Text-to-Speech.',
    solution:
      'The platform projects an interactive 3D virtual avatar directly into the student’s physical field of view. The avatar delivers contextual explanations, answers unscripted student questions with low latency, and dynamically displays interactive 3D visual slides synchronized with the curriculum.',
    technologies: [
      'Unity (AR/VR)',
      'FastAPI',
      'LangChain',
      'Retrieval-Augmented Generation (RAG)',
      'XREAL Air 2 Ultra SDK',
      'Gemini 1.5 Pro',
      'Speech-to-Text (STT)',
      'Text-to-Speech (TTS)',
      'Agile / Scrum'
    ],
    metrics: [
      {
        value: '52,250 EGP',
        label: 'Competitive Funding Awarded',
        subtext: 'Selected for university project funding based on technical merit and demonstration'
      },
      {
        value: '+26 pts',
        label: 'Learning Gain Improvement',
        subtext: 'Measured during formal student cohort evaluation sessions at AASTMT'
      },
      {
        value: '4.6 / 5.0',
        label: 'User Engagement Score',
        subtext: 'Student and evaluator satisfaction across mixed-reality interactions'
      },
      {
        value: '< 1 hr',
        label: 'Ingestion for ~2,500 Pages',
        subtext: 'Automated PDF-to-AR slide transformation pipeline while keeping RAM < 1 GB'
      }
    ],
    architectureSteps: [
      {
        step: '1. Ingestion Pipeline',
        description: 'Processes large textbook PDFs (~2,500 pages), parses sections, extracts core concepts, and embeds text into vector indexes within 1 hour under 1 GB memory.'
      },
      {
        step: '2. FastAPI RAG Microservice',
        description: 'Manages conversational context, semantic retrieval, prompt synthesis, and streaming interaction with Gemini 1.5 Pro.'
      },
      {
        step: '3. Voice & Audio Processing',
        description: 'Integrates real-time speech-to-text input with low-latency neural text-to-speech output, achieving ~15-second end-to-end full voice conversational turn.'
      },
      {
        step: '4. Unity AR Runtime & XREAL SDK',
        description: 'Renders the 3D conversational avatar, synchronizes lip-sync / gestures, and projects interactive AR visual slides onto XREAL Air 2 Ultra spatial displays.'
      }
    ],
    contributions: [
      'Served as team lead for a 5-member cross-functional engineering team, coordinating backend, AI, and AR modules using Agile workflows.',
      'Secured 52,250 EGP project funding following university panel presentation and live technical demonstration.',
      'Engineered the avatar-based teaching assistant RAG pipeline integrating Gemini 1.5 Pro, STT, and TTS.',
      'Architected the memory-efficient PDF processing pipeline capable of handling ~2,500-page academic texts under 1 GB memory usage.',
      'Conducted formal evaluation sessions at AASTMT, establishing the +26 percentage-point learning gain.'
    ],
    links: {
      manuscript: 'Showcased at AASTMT'
    }
  },
  {
    id: 'leaf-lab',
    title: 'Leaf Lab',
    subtitle: 'On-Device Plant Disease Classification Mobile App',
    tagline: 'High-accuracy convolutional neural network quantized for real-time edge mobile inference across 38 crop disease categories without internet connectivity.',
    category: 'Mobile & On-Device AI',
    featured: true,
    publishedOrShowcased: 'Offline Edge AI Mobile App',
    period: '2024',
    datasetInfo: '87,000 augmented images across 38 distinct crop and plant disease classes.',
    problem:
      'Agricultural communities in rural environments often have unstable or non-existent internet access, making cloud-dependent computer vision models unusable for immediate field diagnostics of crop diseases.',
    approach:
      'Trained a high-capacity CNN on 87,000 augmented images using TensorFlow. Applied post-training quantization to export an ultra-efficient TensorFlow Lite (.tflite) model optimized for on-device mobile execution, integrated into a native Flutter application.',
    solution:
      'An offline mobile application allowing farmers and agronomists to scan plant foliage using their smartphone camera and receive real-time disease classification, confidence scores, and management advice in milliseconds with zero internet connection.',
    technologies: [
      'TensorFlow',
      'TensorFlow Lite',
      'Flutter',
      'CNN',
      'Data Augmentation',
      'Dart',
      'On-Device Inference'
    ],
    metrics: [
      {
        value: '97.3%',
        label: 'Test Accuracy',
        subtext: 'Balanced precision and recall of 97.3% across all 38 plant disease classes'
      },
      {
        value: '87,000',
        label: 'Augmented Images Trained',
        subtext: 'Extensive geometric and photometric augmentation to ensure robustness in varied sunlight'
      },
      {
        value: '38',
        label: 'Disease Classes Detected',
        subtext: 'Covering multi-crop fungal, bacterial, and viral foliar conditions'
      },
      {
        value: '0 KB',
        label: 'Internet Required',
        subtext: 'Full TFLite neural model executes on-device on the smartphone CPU/NPU'
      }
    ],
    architectureSteps: [
      {
        step: '1. Data Pipeline & Augmentation',
        description: 'Engineered an offline augmentation pipeline on 87,000 images covering rotations, color jitter, affine transformations, and noise injection.'
      },
      {
        step: '2. Deep CNN Training',
        description: 'Trained and tuned a deep convolutional network using TensorFlow, implementing early stopping and learning rate annealing.'
      },
      {
        step: '3. TFLite Quantization',
        description: 'Quantized model weights into a lightweight TensorFlow Lite bundle to drastically reduce binary footprint and memory latency.'
      },
      {
        step: '4. Flutter Edge Deployment',
        description: 'Integrated the TFLite runtime with the mobile camera stream via Flutter platform channels for immediate real-time bounding and prediction.'
      }
    ],
    contributions: [
      'Trained the CNN classifier achieving 97.3% test accuracy and 97.3% balanced precision/recall.',
      'Implemented data preprocessing and augmentation scripts to handle diverse field conditions.',
      'Successfully quantized and packaged the model using TensorFlow Lite for mobile deployment.',
      'Developed the Flutter application interface enabling real-time camera inference and offline result displays.'
    ]
  },
  {
    id: 'medical-ultrasound',
    title: 'Breast Ultrasound Segmentation & Analysis',
    subtitle: 'Deep Learning System for Tumor Delineation & Diagnostic Classification',
    tagline: 'End-to-end medical web application combining U-Net boundary segmentation with CNN classification for normal, benign, and malignant breast lesions.',
    category: 'Healthcare AI',
    featured: true,
    publishedOrShowcased: 'Full-Stack Medical AI Web Application',
    period: '2024',
    datasetInfo: '780 ultrasound images from 600 clinical patients categorized into normal, benign, and malignant.',
    problem:
      'Manual delineation of breast ultrasound tumor boundaries is labor intensive and prone to inter-observer variability, which can delay urgent oncology interventions.',
    approach:
      'Developed a two-stage deep learning pipeline combining a U-Net architecture for pixel-wise tumor segmentation with a convolutional network for diagnostic lesion classification into normal, benign, and malignant categories.',
    solution:
      'An end-to-end full-stack web application allowing clinicians to upload ultrasound scans, view precise segmented tumor contours, review classification probabilities, and record diagnostic metadata in MongoDB.',
    technologies: [
      'U-Net',
      'CNN',
      'Python',
      'MongoDB',
      'OpenCV',
      'Full-Stack Web Development',
      'REST APIs'
    ],
    metrics: [
      {
        value: '0.85',
        label: 'F1-Score',
        subtext: 'Achieved across multi-class tumor classification and segmentation masks'
      },
      {
        value: '780',
        label: 'Clinical Ultrasound Scans',
        subtext: 'Curated patient imaging dataset from 600 individuals'
      },
      {
        value: '3-Class',
        label: 'Diagnostic Triage',
        subtext: 'Normal tissue, benign lesions, and malignant neoplastic tumors'
      },
      {
        value: '100%',
        label: 'Full-Stack Integration',
        subtext: 'Independent model development, API layer, and database persistence'
      }
    ],
    architectureSteps: [
      {
        step: '1. Image Processing & Mask Generation',
        description: 'Normalized ultrasound speckle noise and prepared binary segmentation ground truth masks using OpenCV.'
      },
      {
        step: '2. U-Net Segmentation Network',
        description: 'Trained an encoder-decoder U-Net with skip connections to extract fine spatial tumor boundaries.'
      },
      {
        step: '3. CNN Classification Network',
        description: 'Constructed a classifier to triage identified lesions into normal, benign, or malignant.'
      },
      {
        step: '4. Web Application & Database Persistence',
        description: 'Built a full-stack web interface with MongoDB for logging patient records, scan histories, and prediction outputs.'
      }
    ],
    contributions: [
      'Trained U-Net and CNN models achieving an F1-score of 0.85 across 780 ultrasound images.',
      'Engineered medical image preprocessing pipelines including contrast adjustment and speckle reduction.',
      'Independently implemented the full-stack web interface connecting model inference endpoints to MongoDB storage.',
      'Created visual mask overlays allowing clinicians to compare original scans with segmented tumor regions.'
    ]
  },
  {
    id: 'fitlife-pro',
    title: 'FitLife Pro',
    subtitle: 'AI-Style Fitness and Nutrition Tracking Mobile Application',
    tagline: 'Flutter-based Android application featuring dynamic nutrition analytics, hydration tracking, workout routines, and Firestore architecture.',
    category: 'Mobile & On-Device AI',
    featured: false,
    publishedOrShowcased: 'Production Architecture Prototype',
    period: '2024 - 2025',
    datasetInfo: 'Structured Firestore users/{uid} data model with custom schemas for macronutrients, hydration logs, and workout metrics.',
    problem:
      'Most fitness applications fragment exercise routines, nutrition monitoring, and hydration into disparate silos, resulting in inconsistent habit formation.',
    approach:
      'Engineered a comprehensive Flutter mobile application following Material 3 design principles, featuring Provider/ChangeNotifier state management and Cloud Firestore data modeling.',
    solution:
      'Provides an AI-coach dashboard displaying daily caloric targets, macronutrient breakdowns via fl_chart, hydration logging in 250ml intervals, and structured workout modules.',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase Authentication',
      'Cloud Firestore',
      'Provider & ChangeNotifier',
      'Material 3',
      'fl_chart',
      'percent_indicator'
    ],
    metrics: [
      {
        value: '5 Modules',
        label: 'Integrated Tracking Areas',
        subtext: 'Workout execution, nutrition logs, hydration, analytics, and user profile'
      },
      {
        value: 'Material 3',
        label: 'Design System',
        subtext: 'Polished luxury dark UI with high-contrast accessibility'
      },
      {
        value: 'Real-Time',
        label: 'State Synchronization',
        subtext: 'Cross-screen reactive updates powered by Provider and ChangeNotifier'
      }
    ],
    contributions: [
      'Developed the complete Android application with Firebase Authentication (email/password, password reset, guest mode).',
      'Designed the AI-coach dashboard with interactive cards, recovery streaks, and daily workout progression.',
      'Structured the Cloud Firestore data model to persist goals, meal logs, and hydration records.',
      'Implemented custom chart components using fl_chart for daily macronutrient and weekly progress visualization.'
    ]
  },
  {
    id: 'restaurant-chatbot',
    title: 'Multi-Turn Restaurant RAG Assistant',
    subtitle: 'Conversational Retrieval Agent with FAISS Vector Store & WhatsApp Integration',
    tagline: 'Context-aware RAG assistant providing real-time menu recommendations, allergen filtering, and ingredient substitution answers.',
    category: 'Agentic & RAG',
    featured: false,
    publishedOrShowcased: 'Applied Conversational RAG System',
    period: '2024',
    datasetInfo: 'Relational and vector database indexing multi-item menu catalogs, ingredient breakdowns, and allergen flags.',
    problem:
      'Diners with specific dietary restrictions (vegan, gluten-free, allergies) require nuanced, accurate information that standard keyword search fails to answer gracefully.',
    approach:
      'Built a multi-turn RAG assistant using LangChain and a FAISS vector database. Generated embeddings for detailed dish recipes, ingredient lists, and culinary preparation methods, accessible via WhatsApp API.',
    solution:
      'Customers interact naturally via WhatsApp, asking complex multi-turn questions such as ingredient substitutions and caloric profiles, receiving instant, factual responses derived from verified restaurant databases.',
    technologies: [
      'LangChain',
      'FAISS Vector DB',
      'Text Embeddings',
      'WhatsApp API',
      'Python',
      'Retrieval-Augmented Generation (RAG)'
    ],
    metrics: [
      {
        value: 'Multi-Turn',
        label: 'Context Retention',
        subtext: 'Retains conversational state across complex ordering and ingredient queries'
      },
      {
        value: 'FAISS',
        label: 'Semantic Search',
        subtext: 'Vectorized retrieval over ingredients, preparation, and allergen profiles'
      },
      {
        value: 'WhatsApp',
        label: 'Direct Channel Delivery',
        subtext: 'Accessible on standard consumer messaging platforms without separate app downloads'
      }
    ],
    contributions: [
      'Configured the FAISS vector store indexing menu items and ingredient breakdowns.',
      'Developed LangChain conversational retrieval chains with memory to handle multi-turn dialogs.',
      'Connected API webhooks to the WhatsApp business integration layer for real-time customer messaging.'
    ]
  },
  {
    id: 'sentiment-analysis',
    title: 'Real-Time Sentiment Analysis Dashboard',
    subtitle: 'Streaming NLP Classification Pipeline & Interactive Visualization',
    tagline: 'Transformer-based sentiment classification monitoring public opinions and sentiment trends across live streaming social media text.',
    category: 'NLP & Analytics',
    featured: false,
    publishedOrShowcased: 'Streaming NLP Analytics Platform',
    period: '2024',
    datasetInfo: 'Live streaming social media text scraped in real time and categorized into polarity metrics.',
    problem:
      'Brands and market analysts need immediate awareness of sudden shifts in consumer perception rather than waiting for lagged retrospective surveys.',
    approach:
      'Engineered a real-time data streaming pipeline ingesting live scraped tweet text and processing it through Hugging Face Transformer sentiment classifiers.',
    solution:
      'An interactive analytical dashboard that tracks streaming polarity distributions, trending keyword frequencies, and temporal sentiment shifts.',
    technologies: [
      'Transformers (Hugging Face)',
      'Python',
      'NLP',
      'Data Visualization',
      'Real-Time Text Processing'
    ],
    metrics: [
      {
        value: 'Real-Time',
        label: 'Streaming Inference',
        subtext: 'Immediate classification of live incoming social media text'
      },
      {
        value: 'Transformer',
        label: 'NLP Architecture',
        subtext: 'Contextual attention-based sentiment polarity evaluation'
      },
      {
        value: 'Dynamic',
        label: 'Interactive Visuals',
        subtext: 'Temporal charts tracking shifts in sentiment distribution over time'
      }
    ],
    contributions: [
      'Built the automated text scraping and cleaning pipeline for social media data.',
      'Integrated Hugging Face Transformer models for multi-class sentiment inference.',
      'Designed the interactive dashboard visualizing sentiment trends, volume spikes, and polarity distributions.'
    ]
  },
  {
    id: 'yolov5-detection',
    title: 'Real-Time Object Detection System',
    subtitle: 'Custom-Trained YOLOv5 Model with Live Webcam Stream Inference',
    tagline: 'Computer vision detection pipeline trained on a custom-annotated dataset, deployed with OpenCV for low-latency live video streaming.',
    category: 'Computer Vision',
    featured: false,
    publishedOrShowcased: 'Real-Time Vision Deployment',
    period: '2024',
    datasetInfo: 'Custom-annotated multi-class object dataset with bounding box ground truths.',
    problem:
      'Real-time automated object recognition requires high frame rates and bounding box accuracy without high computational overhead.',
    approach:
      'Annotated a multi-class image dataset, trained a YOLOv5 model using transfer learning and data augmentation, and integrated the weights into an OpenCV live inference pipeline.',
    solution:
      'A low-latency computer vision application that captures live webcam video, detects targets across multiple classes, and renders bounding boxes with confidence scores in real time.',
    technologies: [
      'YOLOv5',
      'OpenCV',
      'Python',
      'Custom Dataset Annotation',
      'Deep Learning'
    ],
    metrics: [
      {
        value: 'High FPS',
        label: 'Real-Time Inference',
        subtext: 'Smooth video processing on standard webcam video input'
      },
      {
        value: 'Multi-Class',
        label: 'Target Detection',
        subtext: 'Accurate bounding box localization across custom classes'
      },
      {
        value: 'OpenCV',
        label: 'Vision Pipeline',
        subtext: 'Lightweight deployment loop without heavy external runtime dependencies'
      }
    ],
    contributions: [
      'Annotated and prepared custom bounding-box dataset following YOLO formatting conventions.',
      'Trained and optimized YOLOv5 network hyperparameters for multi-class detection.',
      'Deployed the real-time detection loop on live video streams using OpenCV.'
    ]
  }
];
