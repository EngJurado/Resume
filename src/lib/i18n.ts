// Simple translation object without react-i18next for now
import { createContext, useContext, useState, ReactNode } from 'react'

export const translations = {
  en: {
    name: "Carlos Mateo Jurado Díaz",
    bio: "Bioengineer with a Master's degree in Artificial Intelligence and solid experience in neuromodulation, clinical technical support, and development of machine learning solutions. I have provided on-site support for neuromodulation procedures, ensuring optimal functionality and safety of medical devices. Additionally, I have participated in projects involving data analysis and machine learning applied to mental health, as well as the development of biomedical hardware. Founding member of the Colombian Society of Neuromodulation, with valid visas for the United States and Canada, facilitating my international mobility.",
    experience: "Experience",
    "experience-1-title": "External Support — Medtronic, Bucaramanga",
    "experience-1-date": "February 2023 — Present",
    "experience-1-desc-1": "Delivered on-site technical support for neuromodulation procedures, maintaining optimal functionality of neurostimulation equipment.",
    "experience-1-desc-2": "Diagnosed and resolved technical malfunctions during clinical procedures, ensuring patient safety.",
    "experience-1-desc-3": "Conducted patient and family training on proper medical device operation.",
    "experience-1-desc-4": "Collaborated with medical teams to streamline processes and enhance patient care.",
    "experience-2-title": "Data Science Intern — Autonomous University of Zacatecas, Remote",
    "experience-2-date": "September 2024 — December 2024",
    "experience-2-desc-1": "Enhanced mental health analysis models through advanced data preprocessing and feature selection.",
    "experience-2-desc-2": "Developed and optimized machine learning models for emotional health pattern identification.",
    "experience-2-desc-3": "Designed interactive dashboards for real-time data visualization.",
    "experience-2-desc-4": "Collaborated with multidisciplinary teams to uphold technical and clinical standards in AI solutions.",
    "experience-3-title": "Research Student — University of Antioquia, Medellín",
    "experience-3-date": "September 2021 — April 2022",
    "experience-3-desc-1": "Engineered analog filters and designed PCBs to improve sEMG signal acquisition.",
    "experience-3-desc-2": "Optimized hardware to enhance signal quality in biomedical devices.",
    "experience-4-title": "Laboratory Monitor — University of Antioquia, Medellín",
    "experience-4-date": "November 2021 — March 2022",
    "experience-4-desc-1": "Directed laboratory setup, student procedure execution, and inventory management, ensuring optimal experimental efficiency and equipment readiness.",
    education: "Education",
    "education-1-title": "Master's degree, Artificial Intelligence — International University of La Rioja, Remote",
    "education-1-date": "March 2024 — May 2025",
    "education-1-desc": "Focus on Machine Learning, Deep Learning, Planning and Algorithm Development, Natural Language Processing (NLP) & Computer Vision.",
    "education-2-title": "Bioengineering — University of Antioquia, Medellín",
    "education-2-date": "February 2015 — June 2022",
    "education-2-desc": "Focus on medical devices, biomechanics, and biomaterials. Skilled in designing and managing health technologies that drive well-being and sustainable development, with a focus on innovation, ethics, and social responsibility.",
    "continuing-education": "Continuing Education",
    "ce-1": "Data Analysis Bootcamp — Ministerio de Tecnologías de la Información y las Comunicaciones, August 2025",
    "ce-2": "Advanced University Course in Data Analysis for Artificial Intelligence — International University of La Rioja, April 2025",
    "ce-3": "Python Programming Course — International University of La Rioja, November 2024",
    "ce-4": "First Aid — SENA, October 2024",
    "ce-5": "Continuing Education Certificate in Leadership — MIU City University Miami, April 2024",
    "ce-6": "National Technovigilance Program — Invima, August 2023",
    "licenses": "Licenses and Certifications",
    "license-1": "Azure Fundamentals — Microsoft, March 2024",
    "license-2": "Human Resources for Maintenance and Calibration Verification of Class IIb and III Controlled Technology Biomedical Equipment — Invima, July 2022",
    "license-3": "Professional Card — COPNIA, June 2022",
    languages: "Languages",
    "lang-1": "English — B2",
    "lang-2": "Spanish — Native",
    skills: "Skills",
    "clinical-title": "Clinical and Biomedical Competence:",
    "clinical-desc": "Neuromodulation (DBS, SCS, sacral stimulation, TDD), laryngeal nerve monitoring, medical device design, technovigilance, surgical support, patient education, and first aid.",
    "data-title": "Data Science and Artificial Intelligence:",
    "data-desc": "Machine Learning, Deep Learning, NLP (spaCy), computer vision (OpenCV), signal processing, data analysis and visualization, feature engineering, and AI prompting.",
    "programming-title": "Programming and Tools:",
    "programming-desc": "Python, R, JavaScript, SQL, Bash; frameworks and libraries: TensorFlow, Keras, PyTorch, scikit-learn, NumPy, Pandas, SciPy, Matplotlib, Seaborn, Plotly, Bokeh; development with Flask, Streamlit, HTML, CSS, and Bootstrap.",
    "cloud-title": "Cloud Computing and Platforms:",
    "cloud-desc": "Azure, AWS SageMaker, Google Colab, Tableau, Power BI, GitHub (Copilot), Jupyter Notebook, and VS Code.",
    "interpersonal-title": "Interpersonal and Professional Skills:",
    "interpersonal-desc": "Leadership, communication, teamwork, interdisciplinary collaboration, critical thinking, innovation, adaptability, and time management.",
    recognitions: "Recognitions",
    "recognition-1": "Academic honors: Recognized for outstanding academic performance in the 2019-2 semester, University of Antioquia, Medellín, Colombia.",
    "recognition-2": "Academic exchange: Participated in an exchange program at the University of Veracruz, Mexico, in 2019, gaining international academic experience.",
    footer: "&copy; 2025 Carlos Mateo Jurado Díaz. All rights reserved.",
    "profile-image-alt": "Professional headshot of Carlos Mateo Jurado Díaz, Bioengineer with expertise in neuromodulation and AI",
    "email-link": "Send email to Carlos Mateo Jurado Díaz",
    "github-link": "Visit Carlos Mateo Jurado Díaz's GitHub profile",
    "linkedin-link": "Visit Carlos Mateo Jurado Díaz's LinkedIn profile",
    "telegram-link": "Contact Carlos Mateo Jurado Díaz on Telegram",
    "whatsapp-link": "Contact Carlos Mateo Jurado Díaz on WhatsApp",
    "x-link": "Visit Carlos Mateo Jurado Díaz's X (Twitter) profile"
  },
  es: {
    name: "Carlos Mateo Jurado Díaz",
    bio: "Bioingeniero con Maestría en Inteligencia Artificial y sólida experiencia en neuromodulación, soporte técnico clínico y desarrollo de soluciones de machine learning. He brindado soporte in situ para procedimientos de neuromodulación, asegurando la funcionalidad óptima y seguridad de los dispositivos médicos. Además, he participado en proyectos de análisis de datos y aprendizaje automático aplicados a la salud mental y en el desarrollo de hardware biomédico. Miembro fundador de la Sociedad Colombiana de Neuromodulación, con visas vigentes para Estados Unidos y Canadá, facilitando mi movilidad internacional.",
    experience: "Experiencia",
    "experience-1-title": "Soporte Externo — Medtronic, Bucaramanga",
    "experience-1-date": "Febrero 2023 — Actualmente",
    "experience-1-desc-1": "Entregó soporte técnico in situ para procedimientos de neuromodulación, manteniendo la funcionalidad óptima de los equipos de neuroestimulación.",
    "experience-1-desc-2": "Diagnosticó y resolvió fallas técnicas durante los procedimientos clínicos, garantizando la seguridad del paciente.",
    "experience-1-desc-3": "Realizó capacitación a pacientes y familiares sobre el correcto funcionamiento de los dispositivos médicos.",
    "experience-1-desc-4": "Colaboró con equipos médicos para agilizar los procesos y mejorar la atención al paciente.",
    "experience-2-title": "Pasante de Ciencias de Datos — Universidad Autónoma de Zacatecas, Remoto",
    "experience-2-date": "Septiembre 2024 — Diciembre 2024",
    "experience-2-desc-1": "Mejoró los modelos de análisis de salud mental mediante el preprocesamiento avanzado de datos y la selección de características.",
    "experience-2-desc-2": "Desarrolló y optimizó modelos de aprendizaje automático para la identificación de patrones de salud emocional.",
    "experience-2-desc-3": "Diseñó paneles interactivos para la visualización de datos en tiempo real.",
    "experience-2-desc-4": "Colaboró con equipos multidisciplinarios para mantener los estándares técnicos y clínicos en soluciones de IA.",
    "experience-3-title": "Estudiante Investigador — Universidad de Antioquia, Medellín",
    "experience-3-date": "Septiembre 2021 — Abril 2022",
    "experience-3-desc-1": "Diseñó filtros analógicos y diseñó PCBs para mejorar la adquisición de señales sEMG.",
    "experience-3-desc-2": "Optimizó el hardware para mejorar la calidad de la señal en dispositivos biomédicos.",
    "experience-4-title": "Monitor de laboratorio — Universidad de Antioquia, Medellín",
    "experience-4-date": "Noviembre 2021 — Marzo 2022",
    "experience-4-desc-1": "Dirigió la configuración del laboratorio, la ejecución de procedimientos por parte de los estudiantes y la gestión de inventario, asegurando una eficiencia experimental óptima y la preparación del equipo.",
    education: "Educación",
    "education-1-title": "Maestría en Inteligencia Artificial — Universidad Internacional de La Rioja, Remoto",
    "education-1-date": "Marzo 2024 — Mayo 2025",
    "education-1-desc": "Enfoque en Machine Learning, Deep Learning, Planning and Algorithm Development, Natural Language Processing (NLP) & Computer Vision.",
    "education-2-title": "Bioingeniería — Universidad de Antioquia, Medellín",
    "education-2-date": "Febrero 2015 — Junio 2022",
    "education-2-desc": "Enfoque en dispositivos médicos, biomecánica y biomateriales. Capacitado para diseñar y gestionar tecnologías en salud que promuevan el bienestar y el desarrollo sostenible, con un compromiso en innovación, ética y responsabilidad social.",
    "continuing-education": "Formación continua",
    "ce-1": "Bootcamp de Análisis de Datos — Ministerio de Tecnologías de la Información y las Comunicaciones, Agosto 2025",
    "ce-2": "Curso Universitario Avanzado en Data Analyst para Inteligencia Artificial — Universidad Internacional de La Rioja, Abril 2025",
    "ce-3": "Curso de Programación en Python — Universidad Internacional de La Rioja, Noviembre 2024",
    "ce-4": "Primeros auxilios — SENA, Octubre 2024",
    "ce-5": "Continuing Education Certificate in Leadership — MIU City University Miami, Abril 2024",
    "ce-6": "Programa Nacional de Tecnovigilancia — Invima, Agosto 2023",
    "licenses": "Licencias y Certificaciones",
    "license-1": "Azure Fundamentals — Microsoft, Marzo 2024",
    "license-2": "Recurso Humano para Mantenimiento y Verificación de la calibración para Equipos Biomédicos de Tecnología Controlada de clases IIb y III — Invima, Julio 2022",
    "license-3": "Tarjeta profesional — COPNIA, Junio 2022",
    languages: "Idiomas",
    "lang-1": "Inglés — B2",
    "lang-2": "Español — Nativo",
    skills: "Habilidades",
    "clinical-title": "Competencia clínica y biomédica:",
    "clinical-desc": "Neuromodulación (DBS, SCS, estimulación sacra, TDD), monitoreo de nervio laríngeo, diseño de dispositivos médicos, tecnovigilancia, soporte quirúrgico, educación al paciente y primeros auxilios.",
    "data-title": "Ciencia de datos e inteligencia artificial:",
    "data-desc": "Machine Learning, Deep Learning, NLP (spaCy), visión computacional (OpenCV), procesamiento de señales, análisis y visualización de datos, ingeniería de características y AI prompting.",
    "programming-title": "Programación y herramientas:",
    "programming-desc": "Python, R, JavaScript, SQL, Bash; frameworks y librerías: TensorFlow, Keras, PyTorch, scikit-learn, NumPy, Pandas, SciPy, Matplotlib, Seaborn, Plotly, Bokeh; desarrollo con Flask, Streamlit, HTML, CSS y Bootstrap.",
    "cloud-title": "Computación en la nube y plataformas:",
    "cloud-desc": "Azure, AWS SageMaker, Google Colab, Tableau, Power BI, GitHub (Copilot), Jupyter Notebook y VS Code.",
    "interpersonal-title": "Competencias interpersonales y profesionales:",
    "interpersonal-desc": "Liderazgo, comunicación, trabajo en equipo, colaboración interdisciplinaria, pensamiento crítico, innovación, adaptabilidad y gestión del tiempo.",
    recognitions: "Reconocimientos",
    "recognition-1": "Matrícula de Honor: Reconocido por rendimiento académico sobresaliente en el semestre 2019-2, Universidad de Antioquia, Medellín, Colombia.",
    "recognition-2": "Programa de Intercambio Académico: Participó en un programa de intercambio en la Universidad de Veracruz, México, en 2019, adquiriendo experiencia académica internacional.",
    footer: "&copy; 2025 Carlos Mateo Jurado Díaz. Todos los derechos reservados.",
    "profile-image-alt": "Foto profesional de Carlos Mateo Jurado Díaz, Bioingeniero con experiencia en neuromodulación e IA",
    "email-link": "Enviar correo electrónico a Carlos Mateo Jurado Díaz",
    "github-link": "Visitar el perfil de GitHub de Carlos Mateo Jurado Díaz",
    "linkedin-link": "Visitar el perfil de LinkedIn de Carlos Mateo Jurado Díaz",
    "telegram-link": "Contactar a Carlos Mateo Jurado Díaz en Telegram",
    "whatsapp-link": "Contactar a Carlos Mateo Jurado Díaz en WhatsApp",
    "x-link": "Visitar el perfil de X (Twitter) de Carlos Mateo Jurado Díaz"
  }
};

// Simple translation hook
let currentLanguage = 'en';

export const useTranslation = () => {
  const t = (key: string) => {
    const lang = currentLanguage;
    if (lang === 'es' && (translations.es as any)[key]) {
      return (translations.es as any)[key];
    }
    return (translations.en as any)[key] || key;
  };

  const i18n = {
    language: currentLanguage,
    changeLanguage: (lang: string) => {
      currentLanguage = lang;
      // Force a re-render by dispatching a custom event
      window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
    }
  };

  return { t, i18n };
};

// Export current language for components that need to track it
export const getCurrentLanguage = () => currentLanguage;