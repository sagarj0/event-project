'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Excellence in Education',
      description: 'Accredited degree courses with TEQSA and CRICOS certification',
    },
    {
      icon: Users,
      title: 'Vibrant Community',
      description: 'Join 5000+ students across Sydney and Newcastle campuses',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Recognized for nurturing students and preparing them for careers',
    },
    {
      icon: BookOpen,
      title: 'Diverse Programs',
      description: 'Business, IT, Accounting, and TESOL programs available',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Clean background */}

      <div className=" container-wrapper">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl" />
                <Image
                  src="/landing/about-illustration.svg"
                  alt="KOI Institute"
                  width={500}
                  height={400}
                  className="relative drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 rounded-full bg-card shadow-lg border border-border"
                >
                  <span className="text-sm font-semibold text-card-foreground">ABOUT KOI INSTITUTE</span>
                </motion.div>

                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Excellence in{' '}
                  <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-bg)' }}>
                    Higher Education
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  King&apos;s Own Institute is a leading tertiary education provider offering high-quality accredited
                  degree courses. We believe the higher education experience is as crucial as the qualification itself.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  With campuses in Sydney and Newcastle, we nurture our students and prepare them for successful careers
                  through industry-relevant programs and outstanding teaching.
                </p>
              </div>

              {/* Features grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
                  >
                    <feature.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-card-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
