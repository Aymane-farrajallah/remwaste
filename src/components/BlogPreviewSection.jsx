import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';

// Define colors here
const colors = {
  brandPrimary: '#4A90E2',
  textMain: '#333333',
  textLight: '#555555',
  brandLightContrast: '#FFFFFF', // Section background
  cardBg: '#FFFFFF',
};

const blogPostsData = [
  {
    id: 1,
    title: 'The Ultimate Guide to Modern Web Design Trends in 2024',
    imgSrc: 'https://via.placeholder.com/400x250.png/A5B4FC/FFFFFF?text=Blog+1',
    author: 'Alex Smith',
    date: 'October 26, 2023',
    excerpt: 'Discover the latest trends shaping the future of web design, from AI integration to immersive experiences...',
    link: '#',
  },
  {
    id: 2,
    title: 'Boosting User Engagement: UX Principles That Work',
    imgSrc: 'https://via.placeholder.com/400x250.png/A5B4FC/FFFFFF?text=Blog+2',
    author: 'Jane Doe',
    date: 'October 15, 2023',
    excerpt: 'Learn how to apply key UX principles to create more engaging and user-friendly digital products...',
    link: '#',
  },
  {
    id: 3,
    title: 'The Power of Storytelling in Branding Your Business',
    imgSrc: 'https://via.placeholder.com/400x250.png/A5B4FC/FFFFFF?text=Blog+3',
    author: 'John B.',
    date: 'September 28, 2023',
    excerpt: 'Explore how effective storytelling can build a strong brand identity and connect with your audience...',
    link: '#',
  },
];

const BlogPostCard = ({ post, index }) => {
  return (
    <motion.div
      className="flex flex-col rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
      style={{ backgroundColor: colors.cardBg }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img src={post.imgSrc} alt={post.title} className="w-full h-52 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="text-xl font-semibold mb-3"
          style={{ color: colors.textMain }}
        >
          {post.title}
        </h3>
        <div className="flex items-center text-xs mb-3" style={{ color: colors.textLight }}>
          <UserCircle size={14} className="mr-1.5" style={{ color: colors.brandPrimary }} /> {post.author}
          <span className="mx-2">|</span>
          <CalendarDays size={14} className="mr-1.5" style={{ color: colors.brandPrimary }} /> {post.date}
        </div>
        <p
          className="text-sm mb-4 flex-grow"
          style={{ color: colors.textLight }}
        >
          {post.excerpt}
        </p>
        <a
          href={post.link}
          className="inline-flex items-center font-medium mt-auto transition-colors duration-300"
          style={{ color: colors.brandPrimary }}
          onMouseOver={(e) => e.currentTarget.style.color = '#3B82F6'} // Darker shade on hover
          onMouseOut={(e) => e.currentTarget.style.color = colors.brandPrimary}
        >
          Read More <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

const BlogPreviewSection = () => {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: colors.brandLightContrast }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: colors.textMain }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            From Our Blog
          </motion.h2>
          <motion.p
            className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto"
            style={{ color: colors.textLight }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stay updated with our latest insights, tips, and news from the industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="/blog" // Link to a full blog page
            className="inline-block px-8 py-3 text-base font-medium text-white rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ backgroundColor: colors.brandPrimary, borderColor: colors.brandPrimary }}
          >
            View All Posts
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default BlogPreviewSection;
