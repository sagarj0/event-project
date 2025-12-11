'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Users, Bell, BarChart3, Shield, Zap } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: 'Easy Event Creation',
      description:
        'Create and manage events with our intuitive interface. Set dates, times, and locations effortlessly.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Attendee Management',
      description: 'Track registrations, manage capacity, and communicate with attendees seamlessly.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Automated reminders and updates keep everyone informed about upcoming events.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Gain valuable insights with detailed analytics on attendance, engagement, and more.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security ensuring your data and events are always protected.',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for quick loading and smooth user experience.',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Background decoration */}

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-500 rounded-full animate-ping delay-700" />
      </div>

      <div className="container-wrapper relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-card shadow-lg border border-border">
            <span
              className="text-sm font-semibold bg-clip-text text-transparent"
              style={{ backgroundImage: 'var(--gradient-bg)' }}
            >
              POWERFUL FEATURES
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need to{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-bg)' }}>
              Manage Events
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Powerful tools designed to make event management simple and efficient for the entire KOI community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <Image
                src="/landing/features-illustration.svg"
                alt="Event Management Features"
                width={400}
                height={400}
                className="drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* Right - Feature Cards */}
          <div className="space-y-6 order-1 lg:order-2">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group flex gap-4 p-6 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all"
              >
                <div
                  className={`shrink-0 w-14 h-14 bg-linear-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 " />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group text-center p-8 bg-card rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all"
            >
              <div
                className={`inline-flex w-16 h-16 bg-linear-to-br ${feature.gradient} rounded-2xl items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-8 h-8 " />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
