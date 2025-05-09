'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface FeatureItem {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  position: Position;
  dropdownHeight: string;
  bgColor: string;
  textColor: string;
  verticalOffset: string;
  horizontalOffset: string;
}

const featureItems: FeatureItem[] = [
  {
    id: 1,
    title: 'Collaborative Workspace',
    subtitle: 'Real-time collaboration',
    content: 'Work simultaneously with your team in a shared digital space with live cursor tracking and instant updates.',
    position: 'top-left',
    dropdownHeight: 'h-[280px]',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-800',
    verticalOffset: 'top-[90px]',
    horizontalOffset: 'left-[0px]'
  },
  {
    id: 2,
    title: 'Templates Library',
    subtitle: '100+ pre-built templates',
    content: 'Jumpstart your projects with our collection of professionally designed templates for various use cases.',
    position: 'top-right',
    dropdownHeight: 'h-[220px]',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-800',
    verticalOffset: 'top-[20px]',
    horizontalOffset: 'right-[30px]'
  },
  {
    id: 3,
    title: 'Advanced Analytics',
    subtitle: 'Data-driven insights',
    content: 'Track engagement, participation, and progress with our comprehensive analytics dashboard.',
    position: 'bottom-left',
    dropdownHeight: 'h-[320px]',
    bgColor: 'bg-green-50',
    textColor: 'text-green-800',
    verticalOffset: 'bottom-[10px]',
    horizontalOffset: 'left-[30px]'
  },
  {
    id: 4,
    title: 'Secure Platform',
    subtitle: 'Enterprise-grade security',
    content: 'Rest easy with end-to-end encryption, SSO, and compliance with global security standards.',
    position: 'bottom-right',
    dropdownHeight: 'h-[180px]',
    bgColor: 'bg-red-50',
    textColor: 'text-red-800',
    verticalOffset: 'bottom-[60px]',
    horizontalOffset: 'right-[0px]'
  },
];

export default function Section3() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="w-full mx-auto px-4 py-24 relative min-h-[800px]">
      <div className="max-w-full mx-auto">
        {/* Yellow Video Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[55%] h-[650px] bg-[#ffdf54] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-[90%] h-[90%] object-cover rounded-2xl"
            >
              <source src="/" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Feature Items */}
        <div className="relative z-10 h-[600px]">
          {featureItems.map((item) => {
            const isExpanded = expandedId === item.id;
            const isRight = item.position.includes('right');
            
            return (
              <motion.div
                key={item.id}
                className={`absolute ${item.verticalOffset} ${item.horizontalOffset} text-left`}
                layout
                transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              >
                <motion.div
                  className={`${item.bgColor} rounded-2xl shadow-lg overflow-hidden cursor-pointer ${
                    isExpanded ? 'w-[450px]' : 'w-[300px]'
                  }`}
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', damping: 15, stiffness: 100 }}
                  layout
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="mr-4">
                        <h3 className={`text-xl font-semibold ${item.textColor} mb-1`}>{item.title}</h3>
                        <p className={`text-sm ${item.textColor} opacity-80`}>{item.subtitle}</p>
                      </div>
                      <motion.span
                        className={`text-xl font-bold ${item.textColor}`}
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ type: 'spring', damping: 15, stiffness: 100 }}
                      >
                        &gt;
                      </motion.span>
                    </div>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ 
                            opacity: 1, 
                            height: 'auto',
                            transition: { 
                              opacity: { duration: 0.2 },
                              height: { type: 'spring', damping: 20, stiffness: 100 }
                            }
                          }}
                          exit={{ 
                            opacity: 0, 
                            height: 0,
                            transition: { 
                              opacity: { duration: 0.15 },
                              height: { duration: 0.25 }
                            }
                          }}
                          className={`${item.dropdownHeight} ${item.textColor} overflow-hidden`}
                          layout
                        >
                          <p className="mt-4 opacity-90">{item.content}</p>
                          <button className={`mt-4 px-4 py-2 ${item.textColor} bg-white bg-opacity-50 rounded-lg text-sm font-medium hover:bg-opacity-100 transition-all`}>
                            Learn more
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}