import HeroSection from "./components/HeroSection";
import Head from "next/head";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Website Title</title>
        <meta
          name="description"
          content="A brief description of your website."
        />
        <meta
          name="keywords"
          content="portfolio, developer, projects, blog, achievements"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Your Website Title" />
        <meta
          property="og:description"
          content="A brief description of your website."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <header>
          <Navbar />
        </header>
        <div className="container mt-24 mx-auto px-12 py-4">
          <section id="hero">
            <HeroSection />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
          <section id="blog">
            <BlogSection />
          </section>
          <section id="contact">
            <EmailSection />
          </section>
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
