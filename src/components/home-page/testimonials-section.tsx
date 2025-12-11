'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Business Student',
      image: 'SC',
      content:
        "The event management system has transformed how we organize campus activities. It's intuitive and saves us so much time!",
      rating: 5,
    },
    {
      name: 'Michael Roberts',
      role: 'IT Department',
      image: 'MR',
      content:
        'As an administrator, I appreciate the detailed analytics and easy-to-use interface. Perfect for managing large-scale events.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Accounting Student',
      image: 'PS',
      content:
        'Love how I can discover and register for events in just a few clicks. The notification system keeps me updated on everything!',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'TESOL Program',
      image: 'JW',
      content:
        'The platform made organizing our international student meetup effortless. Highly recommend for any campus event!',
      rating: 5,
    },
    {
      name: 'Emily Zhang',
      role: 'Student Council President',
      image: 'EZ',
      content:
        'Managing multiple events simultaneously has never been easier. The team collaboration features are excellent!',
      rating: 5,
    },
    {
      name: 'David Kumar',
      role: 'IT Student',
      image: 'DK',
      content:
        'Clean design, fast performance, and great user experience. This is exactly what KOI needed for event management!',
      rating: 5,
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
              TESTIMONIALS
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            What Our{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-bg)' }}>
              Community Says
            </span>
          </h2>

          <p className="text-lg text-muted-foreground">
            Hear from students and staff who are already using our event management platform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => {
                /* hover effect */
              }}
              onMouseLeave={() => {
                /* hover effect */
              }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-border">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-purple-600" />
                </div>

                {/* Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>

                {/* Gradient border effect on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '5000+', label: 'Active Users' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '150+', label: 'Events Created' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border"
            >
              <div
                className="text-3xl lg:text-4xl font-bold mb-2 bg-clip-text text-transparent"
                style={{ backgroundImage: 'var(--gradient-bg)' }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
