import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import OfflineSignature from "@/components/OfflineSignature";
import Payments from "@/components/Payments";
import Segments from "@/components/Segments";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <OfflineSignature />
      <Payments />
      <Segments />
      <CTASection />
      <Footer />
    </main>
  );
}
