export const projectsData = [
  {
    id: "substation-chatbot",
    number: "01",
    category: "AI / ML",
    title: "AI-Powered Maintenance Chatbot for Electrical Substations",
    code: "PRJ_232",
    year: "2024",
    image: "/images/substation.svg",
    shortDescription:
      "An AI-assisted maintenance chatbot that answers electrical-substation maintenance questions using technical manuals, SOPs, and maintenance documentation.",
    tags: ["Python", "FastAPI", "Machine Learning", "LangGraph", "BM25", "Qdrant", "Hugging Face", "Next.js"],
    overview:
      "Industrial electrical substations operate under high-voltage conditions where rapid maintenance response and compliance with standard operating procedures (SOPs) are critical. This system assists field engineers with conversational guidance, procedural query expansion, and equipment anomaly lookup from technical manuals.",
    problem:
      "During equipment trips, high transformer oil temperatures, or gas pressure alarms, field technicians must rapidly locate exact procedures within multi-volume paper manuals, costing critical response time and increasing downtime risks.",
    solution:
      "Architected a LangGraph state-graph pipeline utilizing hybrid retrieval (BM25 keyword search + Qdrant vector similarity) paired with Cross-Encoder reranking and HyDE prompt generation to retrieve relevant manual sections and classify electrical fault symptoms accurately.",
    keyFeatures: [
      "FastAPI asynchronous backend with conversational session state",
      "LangGraph state machine for intent-based routing and query expansion",
      "Hybrid search combining BM25 keyword matching with Qdrant vector similarity",
      "PDF document-processing and technical literature chunking pipeline",
      "Cross-Encoder reranking for precision procedural guidance",
      "Next.js web interface tailored for field operations"
    ],
    whatIBuilt:
      "Constructed the FastAPI endpoint routing, integrated LangGraph state flows, built vector indexing and hybrid retrieval pipelines, and connected the interactive dark-themed chat interface.",
    githubUrl: "https://github.com/jashwanth7636",
    liveDemo: null
  },
  {
    id: "emotion-detection",
    number: "02",
    category: "NLP / AI",
    title: "Emotion Detection from Text Using NLP",
    code: "NLP_EMO",
    year: "2024",
    image: "/images/emotion-mesh.svg",
    shortDescription:
      "A Python application that analyzes written text and predicts emotion categories using natural-language-processing techniques and a trained text-classification model.",
    tags: ["Python", "Streamlit", "TF-IDF", "Multinomial Naive Bayes", "Scikit-learn", "NLP", "Text Preprocessing"],
    overview:
      "Understanding fine-grained human emotional context beyond binary positive/negative sentiment is crucial for user analytics, dialog understanding, and customer feedback. This project implements an end-to-end NLP classification pipeline.",
    problem:
      "Standard sentiment analysis often oversimplifies user expressions, missing underlying emotional nuances like frustration, surprise, joy, or apprehension in customer conversations.",
    solution:
      "Built a complete NLP text preprocessing pipeline (lowercasing, punctuation stripping, tokenization, stop-word removal, and TF-IDF vectorization) and trained text classification models on dialog corpora (including the Cornell Movie-Dialogs Corpus) to predict multi-class emotional distributions.",
    keyFeatures: [
      "Text preprocessing and noise reduction for unstructured conversational text",
      "TF-IDF feature extraction and multi-class classification using Scikit-learn",
      "Multi-class prediction across emotional dimensions (Joy, Anger, Sadness, Surprise, Fear)",
      "Interactive Streamlit web interface with real-time confidence probability bars",
      "Text area and file ingestion support for batch analysis"
    ],
    whatIBuilt:
      "Preprocessed textual datasets, trained Scikit-learn text classifiers, built confidence scoring logic, and developed the Streamlit frontend with real-time probability distribution displays.",
    githubUrl: "https://github.com/jashwanth7636",
    liveDemo: null
  },
  {
    id: "smart-slot-booking",
    number: "03",
    category: "WEB APP",
    title: "Smart Slot-Based Service Booking System",
    code: "SLOT_SYS",
    year: "2024",
    image: "/images/booking-system.svg",
    shortDescription:
      "A Java web application for managing service bookings, updating reservations, and preventing conflicting time-slot bookings.",
    tags: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "HTML", "CSS", "Apache Tomcat", "Bootstrap"],
    overview:
      "A dynamic multi-tier appointment reservation platform enabling clients to check service schedules, select available time windows, and manage appointments with database-enforced integrity.",
    problem:
      "Manual appointment workflows and paper reservation logs suffer from double-booking collisions, lack real-time slot visibility, and produce administrative overhead.",
    solution:
      "Developed a robust Java MVC web application powered by Java Servlets and JDBC, utilizing MySQL transactions to guarantee atomic slot reservation and eliminate double-booking errors.",
    keyFeatures: [
      "Dynamic interactive slot matrix displaying real-time slot availability",
      "Java Servlets backend controller layer managing session authentication and business logic",
      "Relational MySQL schema for users, service categories, and reservation history",
      "Database-level conflict detection to prevent double-booking collisions",
      "Responsive user interface built with HTML, CSS, and Bootstrap 5 on Apache Tomcat"
    ],
    whatIBuilt:
      "Designed the relational MySQL schema, implemented the core Java Servlet controller endpoints (BookingServlet, LoginServlet, RegisterServlet, UpdateServlet, DeleteServlet), created JSP views, and deployed on Apache Tomcat.",
    githubUrl: "https://github.com/jashwanth7636",
    liveDemo: null
  }
];

export const projects = projectsData;
