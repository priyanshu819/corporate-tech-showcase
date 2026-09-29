"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: "cloud",
    name: "Cloud Native Engine",
    desc: "Kubernetes-native deployment platform with automated horizontal pod autoscaling.",
    specs: ["Sub-10ms Latency", "99.99% SLA Uptime", "Multi-Region Sync"],
  },
  {
    id: "ai",
    name: "AI Gateway & Mesh",
    desc: "Low-latency API gateway optimized for LLM inference streaming and prompt caching.",
    specs: ["Token Analytics", "Model Load Balancing", "eBPF Monitoring"],
  },
  {
    id: "sec",
    name: "Zero-Trust Guard",
    desc: "Enterprise security protocol with real-time threat intelligence and edge isolation.",
    specs: ["Quantum-Resistant", "SOC2 Compliant", "Automatic Failover"],
  },
];

export default function Products() {
  const [active, setActive] = useState("cloud");
  const selected = products.find((p) => p.id === active);

  return (
    <section id="products" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">Enterprise Product Offerings</h2>
        <p className="text-gray-400 text-sm">Categorized high-performance technology modules.</p>
      </div>

      {/* Tabbed Navigation */}
      <div className="flex justify-center gap-3 mb-8">
        {products.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={`px-5 py-2.5 rounded-xl font-medium text-xs md:text-sm transition-all ${
              active === p.id
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-gray-900 text-gray-400 hover:text-white border border-gray-800"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Selected Product Card */}
      {selected && (
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card p-8 rounded-2xl border border-indigo-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-3">{selected.name}</h3>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">{selected.desc}</p>
          <div className="flex flex-wrap gap-3">
            {selected.specs.map((spec) => (
              <span
                key={spec}
                className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold"
              >
                ✓ {spec}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}