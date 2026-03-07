'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Phone, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abhisheksingh89208@gmail.com',
      href: 'mailto:abhisheksingh89208@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8700682998',
      href: 'tel:+918700682998',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Haryana, India',
      href: 'https://www.google.com/maps/place/Ballabhgarh,+Faridabad,+Haryana/@28.3393783,77.3053352,14z/data=!3m1!4b1!4m6!3m5!1s0x390cdb98e43a52c7:0xa3688094e68c35b2!8m2!3d28.338774!4d77.3205629!16zL20vMGY1OXZj?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Abhishek Singh',
      href: 'https://github.com/abhi2506-se',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Abhishek Singh',
      href: 'https://linkedin.com/in/abhishek-singh-494a86270/',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: 'Abhishek Singh',
      href: 'https://www.instagram.com/_abhiiisheksingh/',
    },
  ]

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div variants={itemVariants} className="bg-secondary border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

          <div className="space-y-6">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={idx}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-background transition-colors"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex-shrink-0 mt-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{method.label}</p>
                    <p className="text-muted-foreground text-sm">{method.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-secondary border border-border rounded-xl p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6">Quick Message</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you have a question, want to collaborate, or just want to say hello, I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
          </p>
          <Button asChild size="lg" className="w-full">
            <a href="mailto:abhisheksingh89208@gmail.com">Send Me an Email</a>
          </Button>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-600/20 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Open to Opportunities</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I'm currently looking for frontend development roles, full-stack positions, or internships where I can contribute my skills and grow as a developer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline">
            <a href="mailto:abhisheksingh89208@gmail.com">Discuss an Opportunity</a>
          </Button>
          <Button asChild>
            <a href="Cv.pdf" target="_blank" rel="noopener noreferrer">
              Download My Resume
            </a>
          </Button>
        </div>
      </motion.div>
    </motion.section>
  )
}
