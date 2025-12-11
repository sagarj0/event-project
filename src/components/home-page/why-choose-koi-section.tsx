'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, TrendingUp, Users2, Award } from 'lucide-react';

export function WhyChooseKOISection() {
  const reasons = [
    {
      icon: Target,
      title: 'Industry-Relevant',
      description: 'Business knowledge and acumen applied in all courses, preparing you for real-world challenges.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Excellent Facilities',
      description: 'Outstanding student support and learning facilities, centrally located in Sydney and Newcastle.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Heart,
      title: 'Student-Focused',
      description: 'We nurture students and make the education experience fruitful, enjoyable, and memorable.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: TrendingUp,
      title: 'Career Success',
      description: 'Preparing students for successful careers with practical skills and theoretical knowledge.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users2,
      title: 'Expert Teachers',
      description: 'Outstanding teachers renowned for achievements in business, education, and research.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Award,
      title: 'Accredited Programs',
      description: 'TEQSA and CRICOS accredited courses ensuring quality and international recognition.',
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Clean background */}

      <div className="container-wrapper relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 rounded-full shadow-lg bg-card border border-border">
            <span
              className="text-sm font-semibold bg-clip-text text-transparent"
              style={{ backgroundImage: 'var(--gradient-bg)' }}
            >
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-bg)' }}>
              King&apos;s Own Institute?
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            We are proven, widely experienced practitioners with a proud and established record of achievement in
            education and business.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-border overflow-hidden">
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />

                {/* Icon */}
                <div className={`inline-flex p-4 bg-linear-to-br ${reason.color} rounded-xl mb-4 shadow-lg`}>
                  <reason.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-card-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className={`w-full h-full bg-linear-to-br ${reason.color} rounded-bl-full`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">Ready to join our vibrant community?</p>
          <div className="inline-flex gap-4">
            <button
              className="px-8 py-4  font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              style={{ backgroundImage: 'var(--gradient-bg)' }}
            >
              Learn More
            </button>
            <button className="px-8 py-4 bg-card text-card-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl border border-border transform hover:scale-105 transition-all">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
