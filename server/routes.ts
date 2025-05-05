import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for Ubuntu.com clone
  app.get('/api/posts', (req, res) => {
    // Sample blog posts data
    const posts = [
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
    
    res.json(posts);
  });

  // Sample API endpoint for notification preferences
  app.post('/api/notifications/preferences', (req, res) => {
    // This would typically save user notification preferences
    const { email, preferences } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    
    // Simulating success response
    res.status(200).json({ 
      message: 'Notification preferences updated successfully',
      data: { email, preferences }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
