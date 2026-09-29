"use client";

import { motion } from "framer-motion";
import { Cpu, Lock } from "lucide-react";

const features = [
  {
    title: "Real-time Edge Compute",
    description: "Deploy serverless functions globally with sub-10ms cold starts.",
    icon: Cpu,
    colSpan: "md:col-span-2",
    badge: "99.99% Uptime",
  },
  {
    title: "Zero-Trust Security",
    description: "Post-quantum cryptographic security enabled by default.",
    icon: Lock,
    colSpan: "md:col-span-1",
    badge: "SOC2 Type II",
  },
];

export default function BentoGrid() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`glass-card rounded-2xl p-6 hover:border-indigo-500/50 transition-all ${feature.colSpan}`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <feature.icon className="w-6 h-6" />
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                {feature.badge}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}