import Hero from "@/app/(components)/Hero";
import Skills from "@/app/(components)/Skills";
import Header from "@/app/(components)/Header";
import OnlinePortfolio from "@/app/(components)/OnlinePortfolio";
import About from "@/app/(components)/About";
import Contact from "@/app/(components)/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Header />

      <Hero />
      <Skills />

      <section id="portfolio" className="min-h-screen scroll-mt-28">
        <OnlinePortfolio />
      </section>

      <section id="about" className="min-h-screen scroll-mt-28">
        <About />
      </section>

      <section id="contact" className="min-h-screen scroll-mt-28">
        <Contact />
      </section>
    </main>
  );
}