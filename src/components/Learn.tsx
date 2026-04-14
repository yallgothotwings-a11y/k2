import React from 'react';
import { BookOpen, Code, Terminal, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Learn() {
  const courses = [
    {
      id: 'python',
      title: 'python basics',
      icon: Terminal,
      description: 'learn the fundamentals of python programming.',
      url: 'https://www.w3schools.com/python/'
    },
    {
      id: 'web',
      title: 'web development',
      icon: Code,
      description: 'html, css, and javascript essentials.',
      url: 'https://www.w3schools.com/html/'
    },
    {
      id: 'cs',
      title: 'computer science',
      icon: Cpu,
      description: 'algorithms and data structures.',
      url: 'https://www.khanacademy.org/computing/computer-science'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto mt-12 space-y-24">
      <div className="text-center space-y-4">
        <h2 className="text-7xl font-black text-white tracking-tighter">learn</h2>
        <p className="text-white/20 text-xs tracking-[0.5em] uppercase font-bold">master the machine</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ y: -8 }}
            onClick={() => window.open(course.url, '_blank')}
            className="group relative bg-k2-gray border-k2 p-10 rounded-3xl cursor-pointer overflow-hidden transition-all hover:border-white/20"
          >
            <div className="relative z-10 space-y-6">
              <div className="inline-flex p-4 rounded-2xl bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                <course.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">{course.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{course.description}</p>
              </div>
              <div className="pt-4">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20 group-hover:text-white transition-colors">
                  start learning →
                </span>
              </div>
            </div>
            
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
              <course.icon size={200} strokeWidth={1} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
