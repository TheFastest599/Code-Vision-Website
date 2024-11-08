import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUs() {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'contact@codevision.com',
      link: 'mailto:contact@codevision.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+1 234 567 890',
      link: 'tel:+1234567890',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: 'University Campus, Tech Building',
      link: '#',
    },
  ];

  return (
    <div className="pt-20">
      <PageHeader title="Contact Us" subtitle="Get in touch with us" />

      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="card block hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <info.icon className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">{info.title}</h3>
                    <p className="opacity-80">{info.content}</p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}