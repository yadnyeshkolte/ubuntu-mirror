import { useState, useEffect } from "react";

interface BlogPost {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
}

// Sample blog posts for the initial render
const sampleBlogPosts: BlogPost[] = [
  {
    id: 1,
    image: "https://assets.ubuntu.com/v1/a0ca630d-woman-computer@1x.jpg",
    date: "May 1, 2023",
    title: "Ubuntu 24.04 LTS Release Highlights",
    excerpt: "Discover the new features and improvements in the latest Ubuntu Long Term Support release.",
    url: "#",
  },
  {
    id: 2,
    image: "https://assets.ubuntu.com/v1/fbd123d4-Significant%20enterprise%20savings.jpg",
    date: "April 25, 2023",
    title: "Enterprise Open Source Cost Savings",
    excerpt: "How enterprises are reducing TCO with Ubuntu and open source solutions.",
    url: "#",
  },
  {
    id: 3,
    image: "https://assets.ubuntu.com/v1/21ef9142-Ultra%20Secure%20Things.png",
    date: "April 18, 2023",
    title: "Securing IoT Devices with Ubuntu Core",
    excerpt: "Best practices for implementing secure IoT solutions with Ubuntu Core.",
    url: "#",
  },
];

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(sampleBlogPosts);
  const [isLoading, setIsLoading] = useState(false);

  // This would typically fetch blog posts from an API
  useEffect(() => {
    // For this demo, we're using the sample posts
    setIsLoading(true);
    
    // Simulate API call
    const timer = setTimeout(() => {
      setBlogPosts(sampleBlogPosts);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 bg-ubuntu-lightgrey">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light mb-8">
          Latest news from{" "}
          <a href="#" className="text-ubuntu-orange hover:underline">
            our blog ›
          </a>
        </h2>
        
        {isLoading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded shadow overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <h3 className="text-xl font-medium mb-2 mt-1">{post.title}</h3>
                  <p className="text-ubuntu-grey mb-4">{post.excerpt}</p>
                  <a href={post.url} className="text-ubuntu-orange hover:underline">
                    Read more ›
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
