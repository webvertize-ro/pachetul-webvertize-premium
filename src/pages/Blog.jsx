import { Link } from "react-router";
import BlogPostItem from "../components/BlogPostItem";
import Hero from "../components/Hero";
import BlogPosts from "../components/BlogPosts";
import blogHeroImg from "../assets/images/blog_hero.jpg";
import CTA from "../components/CTA";

function Blog() {
  return (
    <div>
      {/* Blog Hero */}
      <Hero
        heroBg={blogHeroImg}
        heroTitle="Blog"
        heroDesc="Citește despre ultimele noutăți ale Afacerii Noastre Locale din acest blog."
        ctaBtn={false}
      />
      {/* Blog Posts */}
      <BlogPosts />
      {/* CTA */}
      <CTA
        title="Ești gată să discutăm despre proiectul tău?"
        text="Dacă ți-au plăcut articolele scrise de noi, hai să discutăm despre proiectul tău. Începem pas cu pas și îți oferim cele mai bune servicii adaptate nevoilor tale. "
      />
    </div>
  );
}

export default Blog;
