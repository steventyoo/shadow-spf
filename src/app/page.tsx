import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Formula from "@/components/Formula";
import Athletes from "@/components/Athletes";
import AthleteSpotlight from "@/components/AthleteSpotlight";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Product />
      <Formula />
      <Athletes />
      <Waitlist />
      <AthleteSpotlight />
      <Footer />
    </main>
  );
}
