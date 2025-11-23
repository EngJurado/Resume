import { IconBrandGithub, IconBrandLinkedin, IconBrandTelegram, IconBrandWhatsapp, IconBrandX, IconMail } from '@tabler/icons-react'

export const RESUME_DATA = {
    avatarUrl: "/profile.webp",
    initials: "CJ",
    location: "Colombia",
    locationLink: "https://www.google.com/maps/place/Colombia",
    about: "Bioengineer with a Master's degree in Artificial Intelligence",
    personalWebsiteUrl: "https://engjurado.me",
    contact: {
        email: "eng.jurado@gmail.com",
        tel: "",
        social: [
            {
                name: "Email",
                url: "mailto:eng.jurado@gmail.com",
                icon: IconMail,
            },
            {
                name: "GitHub",
                url: "https://github.com/EngJurado",
                icon: IconBrandGithub,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/engjurado/",
                icon: IconBrandLinkedin,
            },
            {
                name: "Telegram",
                url: "https://telegram.me/engjurado",
                icon: IconBrandTelegram,
            },
            {
                name: "WhatsApp",
                url: "https://wa.me/qr/Y57EJ6RVNLYQI1",
                icon: IconBrandWhatsapp,
            },
            {
                name: "X",
                url: "https://x.com/EngJurado",
                icon: IconBrandX,
            },
        ],
    },
    translations: {
        en: {
            name: "Carlos Mateo Jurado Díaz",
            bio: "Bioengineer with a Master's degree in Artificial Intelligence and extensive experience in neuromodulation, clinical technical support, and machine learning solution development. I provide on-site technical support for neuromodulation procedures, ensuring optimal device functionality and safety. Additionally, I participated in projects involving data analysis and machine learning applied to mental health, as well as biomedical hardware development. Founding member of the Colombian Society of Neuromodulation (SCON) and member of the International Neuromodulation Society (INS), with valid visas for the United States and Canada, facilitating international mobility.",
            experience: [
                {
                    title: "External Support — Medtronic, Bucaramanga",
                    date: "February 2023 — Present",
                    descriptions: [
                        "Provide on-site technical support for neuromodulation procedures, maintaining optimal functionality of neurostimulation equipment.",
                        "Diagnose and resolve technical malfunctions during clinical procedures, ensuring patient safety.",
                        "Conduct patient and family education on proper medical device use.",
                        "Collaborate with medical teams to streamline clinical processes and enhance patient care."
                    ]
                },
                {
                    title: "Data Science Intern — Autonomous University of Zacatecas, Remote",
                    date: "September 2024 — December 2024",
                    descriptions: [
                        "Enhanced mental health analysis models through advanced data preprocessing and feature selection.",
                        "Developed and optimized machine learning models for emotional health pattern identification.",
                        "Designed interactive dashboards for real-time data visualization.",
                        "Collaborated with multidisciplinary teams to uphold technical and clinical standards in AI solutions."
                    ]
                },
                {
                    title: "Research Student — University of Antioquia, Medellín",
                    date: "September 2021 — April 2022",
                    descriptions: [
                        "Engineered analog filters and designed PCBs to improve surface electromyography (sEMG) signal acquisition.",
                        "Optimized hardware to enhance signal quality in biomedical devices."
                    ]
                },
                {
                    title: "Laboratory Monitor — University of Antioquia, Medellín",
                    date: "November 2021 — March 2022",
                    descriptions: [
                        "Managed laboratory setup, supervised student procedures, and maintained inventory, ensuring optimal experimental efficiency."
                    ]
                }
            ],
            education: [
                {
                    title: "Master's degree in Artificial Intelligence — International University of La Rioja, Remote",
                    date: "March 2024 — May 2025",
                    desc: "Focus on Machine Learning, Deep Learning, Planning and Algorithm Development, Natural Language Processing (NLP), and Computer Vision."
                },
                {
                    title: "Bioengineering — University of Antioquia, Medellín",
                    date: "February 2015 — June 2022",
                    desc: "Focus on medical devices, biomechanics, and biomaterials. Skilled in designing and managing health technologies that drive well-being and sustainable development, with emphasis on innovation, ethics, and social responsibility."
                }
            ],
            continuingEducation: [
                "Data Analysis Bootcamp — Ministerio de Tecnologías de la Información y las Comunicaciones, August 2025",
                "Advanced University Course in Data Analysis for Artificial Intelligence — International University of La Rioja, April 2025",
                "Python Programming Course — International University of La Rioja, November 2024",
                "First Aid — SENA, October 2024",
                "Continuing Education Certificate in Leadership — MIU City University Miami, April 2024",
                "National Technovigilance Program — Invima, August 2023"
            ],
            licenses: [
                "Azure Fundamentals — Microsoft, March 2024",
                "Human Resources for Maintenance and Calibration Verification of Class IIb and III Controlled Technology Biomedical Equipment — Invima, July 2022",
                "Professional Card — COPNIA, June 2022"
            ],
            languages: [
                "English — B2",
                "Spanish — Native"
            ],
            skills: [
                {
                    title: "Clinical and Biomedical Competence:",
                    desc: "Neuromodulation (Deep Brain Stimulation - DBS, Spinal Cord Stimulation - SCS, Sacral Stimulation, Targeted Drug Delivery - TDD), laryngeal nerve monitoring, medical device design, technovigilance, surgical support, patient education, and first aid."
                },
                {
                    title: "Data Science and Artificial Intelligence:",
                    desc: "Machine Learning, Deep Learning, Natural Language Processing (NLP with spaCy), computer vision (OpenCV), signal processing, data analysis and visualization, feature engineering, and AI prompting."
                },
                {
                    title: "Programming and Tools:",
                    desc: "Python, R, JavaScript, SQL, Bash; frameworks and libraries: TensorFlow, Keras, PyTorch, scikit-learn, NumPy, Pandas, SciPy, Matplotlib, Seaborn, Plotly, Bokeh; development with Flask, Streamlit, HTML, CSS, and Bootstrap."
                },
                {
                    title: "Cloud Computing and Platforms:",
                    desc: "Azure, AWS SageMaker, Google Colab, Tableau, Power BI, GitHub Copilot, Jupyter Notebook, and VS Code."
                },
                {
                    title: "Interpersonal and Professional Skills:",
                    desc: "Leadership, communication, teamwork, interdisciplinary collaboration, critical thinking, innovation, adaptability, and time management."
                }
            ],
            recognitions: [
                "Academic honors: Recognized for outstanding academic performance in the 2019-2 semester at the University of Antioquia, Medellín, Colombia.",
                "Academic exchange: Participated in an exchange program at the University of Veracruz, Mexico, in 2019, gaining international academic experience."
            ],
            sectionTitles: {
                experience: "Experience",
                education: "Education",
                continuingEducation: "Continuing Education",
                licenses: "Licenses and Certifications",
                languages: "Languages",
                skills: "Skills",
                recognitions: "Recognitions",
                footer: "© 2025 Carlos Mateo Jurado Díaz. All rights reserved.",
                profileImageAlt: "Professional headshot of Carlos Mateo Jurado Díaz, Bioengineer with expertise in neuromodulation and AI"
            }
        },
        es: {
            name: "Carlos Mateo Jurado Díaz",
            bio: "Bioingeniero con Maestría en Inteligencia Artificial y amplia experiencia en neuromodulación, soporte técnico clínico y desarrollo de soluciones de machine learning. Brindo soporte técnico in situ para procedimientos de neuromodulación, asegurando la funcionalidad óptima y seguridad de los dispositivos médicos. Además, participé en proyectos de análisis de datos y aprendizaje automático aplicados a la salud mental, así como en el desarrollo de hardware biomédico. Miembro fundador de la Sociedad Colombiana de Neuromodulación (SCON) y miembro de la Sociedad Internacional de Neuromodulación (INS), con visas vigentes para Estados Unidos y Canadá, facilitando mi movilidad internacional.",
            experience: [
                {
                    title: "Soporte Externo — Medtronic, Bucaramanga",
                    date: "Febrero 2023 — Actualidad",
                    descriptions: [
                        "Brindo soporte técnico in situ para procedimientos de neuromodulación, manteniendo la funcionalidad óptima de los equipos de neuroestimulación.",
                        "Diagnostico y resuelvo fallas técnicas durante los procedimientos clínicos, garantizando la seguridad del paciente.",
                        "Realizo capacitación a pacientes y familiares sobre el correcto uso de los dispositivos médicos.",
                        "Colaboro con equipos médicos para agilizar los procesos clínicos y mejorar la atención al paciente."
                    ]
                },
                {
                    title: "Pasante en Ciencias de Datos — Universidad Autónoma de Zacatecas, Remoto",
                    date: "Septiembre 2024 — Diciembre 2024",
                    descriptions: [
                        "Mejoré los modelos de análisis de salud mental mediante el preprocesamiento avanzado de datos y la selección de características.",
                        "Desarrollé y optimicé modelos de aprendizaje automático para la identificación de patrones de salud emocional.",
                        "Diseñé paneles interactivos para la visualización de datos en tiempo real.",
                        "Colaboré con equipos multidisciplinarios para mantener los estándares técnicos y clínicos en soluciones de IA."
                    ]
                },
                {
                    title: "Estudiante Investigador — Universidad de Antioquia, Medellín",
                    date: "Septiembre 2021 — Abril 2022",
                    descriptions: [
                        "Diseñé filtros analógicos y diseñé PCBs para mejorar la adquisición de señales de electromiografía superficial (sEMG).",
                        "Optimicé el hardware para mejorar la calidad de la señal en dispositivos biomédicos."
                    ]
                },
                {
                    title: "Monitor de Laboratorio — Universidad de Antioquia, Medellín",
                    date: "Noviembre 2021 — Marzo 2022",
                    descriptions: [
                        "Gestioné la configuración del laboratorio, supervisé los procedimientos estudiantiles y mantuve el inventario, asegurando una eficiencia experimental óptima."
                    ]
                }
            ],
            education: [
                {
                    title: "Maestría en Inteligencia Artificial — Universidad Internacional de La Rioja, Remoto",
                    date: "Marzo 2024 — Mayo 2025",
                    desc: "Enfoque en Machine Learning, Deep Learning, Planificación y Desarrollo de Algoritmos, Procesamiento de Lenguaje Natural (NLP) y Visión por Computadora."
                },
                {
                    title: "Bioingeniería — Universidad de Antioquia, Medellín",
                    date: "Febrero 2015 — Junio 2022",
                    desc: "Enfoque en dispositivos médicos, biomecánica y biomateriales. Capacitado para diseñar y gestionar tecnologías en salud que promuevan el bienestar y el desarrollo sostenible, con énfasis en la innovación, la ética y la responsabilidad social."
                }
            ],
            continuingEducation: [
                "Bootcamp de Análisis de Datos — Ministerio de Tecnologías de la Información y las Comunicaciones, Agosto 2025",
                "Curso Universitario Avanzado en Data Analyst para Inteligencia Artificial — Universidad Internacional de La Rioja, Abril 2025",
                "Curso de Programación en Python — Universidad Internacional de La Rioja, Noviembre 2024",
                "Primeros Auxilios — SENA, Octubre 2024",
                "Continuing Education Certificate in Leadership — MIU City University Miami, Abril 2024",
                "Programa Nacional de Tecnovigilancia — Invima, Agosto 2023"
            ],
            licenses: [
                "Azure Fundamentals — Microsoft, Marzo 2024",
                "Recurso Humano para Mantenimiento y Verificación de Calibración de Equipos Biomédicos de Tecnología Controlada de Clases IIb y III — Invima, Julio 2022",
                "Tarjeta Profesional — COPNIA, Junio 2022"
            ],
            languages: [
                "Inglés — B2",
                "Español — Nativo"
            ],
            skills: [
                {
                    title: "Competencia Clínica y Biomédica:",
                    desc: "Neuromodulación (Estimulación Cerebral Profunda - DBS, Estimulación de Médula Espinal - SCS, Estimulación Sacra, Administración Dirigida de Medicamentos - TDD), monitoreo de nervio laríngeo, diseño de dispositivos médicos, tecnovigilancia, soporte quirúrgico, educación al paciente y primeros auxilios."
                },
                {
                    title: "Ciencia de Datos e Inteligencia Artificial:",
                    desc: "Machine Learning, Deep Learning, Procesamiento de Lenguaje Natural (NLP con spaCy), visión computacional (OpenCV), procesamiento de señales, análisis y visualización de datos, ingeniería de características y AI prompting."
                },
                {
                    title: "Programación y Herramientas:",
                    desc: "Python, R, JavaScript, SQL, Bash; frameworks y librerías: TensorFlow, Keras, PyTorch, scikit-learn, NumPy, Pandas, SciPy, Matplotlib, Seaborn, Plotly, Bokeh; desarrollo con Flask, Streamlit, HTML, CSS y Bootstrap."
                },
                {
                    title: "Computación en la Nube y Plataformas:",
                    desc: "Azure, AWS SageMaker, Google Colab, Tableau, Power BI, GitHub Copilot, Jupyter Notebook y VS Code."
                },
                {
                    title: "Competencias Interpersonales y Profesionales:",
                    desc: "Liderazgo, comunicación, trabajo en equipo, colaboración interdisciplinaria, pensamiento crítico, innovación, adaptabilidad y gestión del tiempo."
                }
            ],
            recognitions: [
                "Matrícula de Honor: Reconocido por rendimiento académico sobresaliente en el semestre 2019-2 en la Universidad de Antioquia, Medellín, Colombia.",
                "Programa de Intercambio Académico: Participé en un programa de intercambio en la Universidad de Veracruz, México, en 2019, adquiriendo experiencia académica internacional."
            ],
            sectionTitles: {
                experience: "Experiencia",
                education: "Educación",
                continuingEducation: "Formación Continua",
                licenses: "Licencias y Certificaciones",
                languages: "Idiomas",
                skills: "Habilidades",
                recognitions: "Reconocimientos",
                footer: "© 2025 Carlos Mateo Jurado Díaz. Todos los derechos reservados.",
                profileImageAlt: "Foto profesional de Carlos Mateo Jurado Díaz, Bioingeniero con experiencia en neuromodulación e IA"
            }
        }
    }
} as const;
