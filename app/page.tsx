"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Sparkles, Mail, Phone, 
  GraduationCap, MapPin, Globe, Award, Briefcase, Cpu, CheckCircle2 
} from "lucide-react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Esmeralda Nataly Veliz Urbina";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-x-hidden font-sans pb-20">
      
      {/* Luces de Fondo (Glow Effects) */}
      <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[45%] h-[45%] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[20%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />

      <main className="max-w-6xl mx-auto px-6 pt-16 relative z-10">
        
        {/* HERO SECTION: FOTO + TERMINAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Tarjeta de Foto y Perfil */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col items-center bg-white/[0.03] border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl relative group"
          >
            <div className="relative w-44 h-44 mb-6 rounded-full p-1 bg-gradient-to-tr from-purple-500 via-yellow-400 to-purple-600 shadow-lg shadow-purple-500/20">
              <Image 
                src="/foto-perfil.png" 
                alt="Esmeralda Veliz" 
                width={176}
                height={176}
                className="w-full h-full object-cover rounded-full bg-black"
                priority
              />
            </div>

            <h1 className="text-2xl font-bold text-center text-white mb-1">
              Esmeralda Veliz
            </h1>
            <p className="text-purple-400 font-medium text-sm mb-4">Ingeniera en Sistemas (6to Semestre)</p>
            
            <div className="w-full space-y-2 text-xs text-gray-300 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Guatemala</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>+502 54305621</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="truncate">evelizu1@miumg.edu.gt</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="truncate">natalyveliz47@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Terminal Interactiva y Presentación */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            <div className="bg-black/60 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl mb-6">
              <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-gray-400 font-mono">esmeralda@umg-lab: ~/cv</span>
                </div>
                <span className="text-xs text-purple-400 font-mono">Next.js v16.3</span>
              </div>
              <div className="p-6 font-mono text-base md:text-xl flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">root@system:~$</span>
                  <span className="text-green-400">whoami</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">&gt;</span>
                  <span className="text-white font-bold tracking-wide">
                    {text}
                    <motion.span 
                      animate={{ opacity: [1, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block w-2.5 h-5 bg-purple-500 ml-1 align-middle"
                    />
                  </span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-yellow-400">
              Desarrollo de Software & Arquitectura Cloud
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Estudiante apasionada de la Universidad Mariano Gálvez. Enfocada en la creación de aplicaciones web escalables, integración de servicios en la nube (Azure/Linux), administración de bases de datos y desarrollo con buenas prácticas de arquitectura.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full w-fit">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-300 text-xs md:text-sm font-medium italic">
                &quot;Todo lo que puedes imaginar lo puedes lograr&quot;
              </span>
            </div>
          </motion.div>
        </div>

        {/* SECCIÓN: APTITUDES & STACK TÉCNICO */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="text-purple-400 w-7 h-7" />
            <h2 className="text-2xl font-bold text-white">Stack Tecnológico & Competencias</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Desarrollo Frontend", items: ["React / Next.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3 Moderno"] },
              { title: "Backend & Datos", items: ["Node.js", "Python", "Bases de Datos SQL", "Modelado de Datos"] },
              { title: "Infraestructura & Cloud", items: ["Despliegue Azure", "Linux / Contenedores LXC", "Git & GitHub Actions", "CI/CD Automático"] },
              { title: "Habilidades Profesionales", items: ["Resolución de Problemas", "Trabajo Multidisciplinar", "Análisis de Requerimientos", "Documentación Técnica"] }
            ].map((col, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx }}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/40 transition-colors"
              >
                <h3 className="text-purple-400 font-semibold mb-4 border-b border-white/10 pb-2 text-sm uppercase tracking-wider">
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECCIÓN: EXPERIENCIA & EDUCACIÓN (ESTILO TIMELINE) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          
          {/* Columna Experiencia / Proyectos */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-yellow-400 w-7 h-7" />
              <h2 className="text-2xl font-bold text-white">Proyectos & Experiencia</h2>
            </div>

            <div className="border-l-2 border-purple-500/30 pl-6 space-y-8 relative">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#050505]" />
                <h3 className="text-lg font-bold text-white">Plataforma Web CV / Portafolio Cloud</h3>
                <p className="text-xs text-yellow-400 font-mono mb-2">Proyecto Laboratorio UMG • 2026</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Diseño e implementación de portafolio web de alto rendimiento utilizando Next.js, TypeScript y Tailwind CSS, configurado con automatización CI/CD para servidor propio en Azure/LXC.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-500/50 border-4 border-[#050505]" />
                <h3 className="text-lg font-bold text-white">Desarrollo de Sistemas & Gestión Académica</h3>
                <p className="text-xs text-purple-300 font-mono mb-2">Proyectos de Ingeniería • 2024 - Presente</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Análisis, diseño y lógica de software para resolución de problemas computacionales en el ámbito universitario.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Educación & Idiomas */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-purple-400 w-7 h-7" />
              <h2 className="text-2xl font-bold text-white">Educación & Formación</h2>
            </div>

            <div className="border-l-2 border-yellow-500/30 pl-6 space-y-8 relative">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-yellow-400 border-4 border-[#050505]" />
                <h3 className="text-lg font-bold text-white">Ingeniería en Sistemas de Información</h3>
                <p className="text-xs text-yellow-400 font-mono mb-2">Universidad Mariano Gálvez (UMG) • 6to Semestre</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Enfoque en arquitectura de software, bases de datos, redes de computadoras y desarrollo web moderno.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-yellow-500/50 border-4 border-[#050505]" />
                <h3 className="text-lg font-bold text-white">Certificaciones e Idiomas</h3>
                <div className="mt-2 space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span><strong>Español:</strong> Idioma Nativo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span><strong>Inglés:</strong> Técnico / Intermedio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span><strong>Certificaciones Tech:</strong> En constante desarrollo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}