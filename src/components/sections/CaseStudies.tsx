"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const caseStudies = [
  { id: 1, category: "Fintech", title: "Global Payment Gateway", metrics: "10M+ Daily Txns", details: "Scaled transaction engine to sub-second processing speed with zero downtime during peak loads." },
  { id: 2, category: "SaaS", title: "Streaming Telemetry Engine", metrics: "40% Infra Savings", details: "Reduced cloud compute overhead using edge serverless routing and dynamic caching." },
  { id: 3, category: "Fintech", title: "Real-time Fraud Detection", metrics: "<5ms Decision Time", details: "Integrated eBPF network hooks with machine learning inference at the edge." },
  { id: 4, category: "AI", title: "LLM Orchestration Mesh", metrics: "99.99% Availability", details: "Managed high-throughput streaming endpoints across multi-region cloud instances." },
];

export default function CaseStudies() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof caseStudies[0] | null>(null);

  const filtered = filter === "All" ? caseStudies : caseStudies.filter((c) => c.category === filter);

  return (
    <section id="case-studies" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-3">Case Studies & Impact</h2>
        <p className="text-gray-400 text-sm">Filterable portfolio showcasing real-world technical deployments.</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 mb-10">
        {["All", "Fintech", "SaaS", "AI"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              filter === cat
                ? "bg-emerald-500 text-black font-bold"
                : "bg-gray-900 text-gray-400 border border-gray-800 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setSelected(item)}
            className="glass-card p-6 rounded-2xl cursor-pointer hover:border-emerald-500/50 transition-all border border-gray-800"
          >
            <span className="text-xs text-emerald-400 font-mono uppercase tracking-wider">{item.category}</span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
            <p className="text-indigo-400 font-semibold text-sm">Metric: {item.metrics}</p>
            <p className="text-xs text-gray-400 mt-2">Click to view preview drawer →</p>
          </motion.div>
        ))}
      </div>

      {/* Preview Drawer Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="glass-card p-8 rounded-2xl max-w-md w-full border border-emerald-500/40 relative"
            >
              <span className="text-xs text-emerald-400 font-mono">{selected.category}</span>
              <h3 className="text-2xl font-bold text-white mb-2">{selected.title}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{selected.details}</p>
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg text-emerald-400 text-xs font-semibold mb-6">
                Benchmark: {selected.metrics}
              </div>
              <button
                onClick={() => setSelected(null)}
                className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Close Drawer
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}