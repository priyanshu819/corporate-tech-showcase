"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name minimum 2 characters ka hona chahiye"),
  email: z.string().email("Valid work email enter karein"),
  message: z.string().min(10, "Message minimum 10 characters ka hona chahiye"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log("Validated Form Data:", data);
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-6 max-w-xl mx-auto">
      <div className="glass-card rounded-2xl p-8 border border-gray-800">
        <h2 className="text-2xl font-bold text-white mb-4">Contact Enterprise Team</h2>
        {submitted ? (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            ✓ Inquiry received! We will reach out shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-xs text-gray-300 block mb-1">Full Name</label>
              <input {...register("name")} className="w-full bg-gray-900 border border-gray-800 rounded-lg p-2.5 text-white text-sm" />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="text-xs text-gray-300 block mb-1">Work Email</label>
              <input {...register("email")} className="w-full bg-gray-900 border border-gray-800 rounded-lg p-2.5 text-white text-sm" />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-xs text-gray-300 block mb-1">Message</label>
              <textarea {...register("message")} rows={3} className="w-full bg-gray-900 border border-gray-800 rounded-lg p-2.5 text-white text-sm" />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white">
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}