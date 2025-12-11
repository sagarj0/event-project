'use client';

import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Clean minimalistic background */}

      <div className=" container-wrapper py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2  backdrop-blur-sm rounded-full border shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium text-muted-foreground">King&apos;s Own Institute</span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span
                  className="bg-clip-text text-transparent bg-gradient"
                  style={{ backgroundImage: 'var(--gradient-bg)' }}
                >
                  Manage Events
                </span>
                <br />
                <span className="text-primary">Effortlessly</span>
              </h1>
              <p className="text-lg lg:text-xl max-w-xl text-muted-foreground">
                Streamline your campus events with our intuitive event management platform. Built for KOI
                Institute&apos;s vibrant community.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                style={{ backgroundImage: 'var(--gradient-bg)' }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Create Event
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2  shadow-lg">
                Explore Events
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Events Hosted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">5000+</div>
                <div className="text-sm text-muted-foreground">Students Engaged</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <Image
                src="/landing/hero-illustration.svg"
                alt="Event Management Illustration"
                width={600}
                height={500}
                className="drop-shadow-2xl animate-float"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
