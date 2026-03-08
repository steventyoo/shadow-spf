import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import ZeroClaims from "@/components/ZeroClaims";
import Product from "@/components/Product";
import StickCollection from "@/components/StickCollection";
import KidsCollection from "@/components/KidsCollection";
import DemonHunters from "@/components/DemonHunters";
import Formula from "@/components/Formula";
import Testimonials from "@/components/Testimonials";
import Athletes from "@/components/Athletes";
import Waitlist from "@/components/Waitlist";
import AthleteSpotlight from "@/components/AthleteSpotlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Hero />
      <ZeroClaims />
      <Product />
      <StickCollection />
      <KidsCollection />
      <DemonHunters />
      <Formula />
      <Testimonials />
      <Athletes />
      <Waitlist />
      <AthleteSpotlight />
      <Footer />
    </main>
  );
}
