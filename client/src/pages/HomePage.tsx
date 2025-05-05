import { useEffect } from "react";
import NotificationBanner from "@/components/NotificationBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CTABanner from "@/components/CTABanner";
import EOLNotice from "@/components/EOLNotice";
import LocaleOptions from "@/components/LocaleOptions";
import EnterpriseOpen from "@/components/EnterpriseOpen";
import BlogSection from "@/components/BlogSection";
import EngineerSection from "@/components/EngineerSection";
import SecuritySection from "@/components/SecuritySection";
import EnterpriseSavings from "@/components/EnterpriseSavings";
import CloudSection from "@/components/CloudSection";
import KubernetesSection from "@/components/KubernetesSection";
import OpenStackSection from "@/components/OpenStackSection";
import IoTSection from "@/components/IoTSection";
import WorkstationSection from "@/components/WorkstationSection";
import { useNotification } from "@/hooks/useNotification";

export default function HomePage() {
  const { showNotification } = useNotification();

  useEffect(() => {
    // Show a welcome notification when the page loads
    setTimeout(() => {
      showNotification({
        message: "Your submission was sent successfully!",
        type: "success",
      });
    }, 1000);
  }, [showNotification]);

  return (
    <div className="min-h-screen flex flex-col">
      <NotificationBanner />
      <Header />
      <main>
        <CTABanner />
        <HeroSection />
        <EOLNotice />
        <LocaleOptions />
        <EnterpriseOpen />
        <BlogSection />
        <EngineerSection />
        <SecuritySection />
        <EnterpriseSavings />
        <CloudSection />
        <KubernetesSection />
        <OpenStackSection />
        <IoTSection />
        <WorkstationSection />
      </main>
      <Footer />
    </div>
  );
}
