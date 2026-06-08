import { Link } from "react-router";
import BlogPostItem from "../components/BlogPostItem";
import Hero from "../components/Hero";
import BlogPosts from "../components/BlogPosts";
import CTA from "../components/CTA";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

function Blog() {
  const { contentMap } = useContent();

  return (
    <div>
      {/* Blog Hero */}
      <Hero
        heroBg={c(contentMap, "blog.header_bg_image")}
        heroTitle={c(contentMap, "blog.header_title")}
        heroDesc={c(contentMap, "blog.header_description")}
        ctaBtn={false}
        ctaBtnText={c(contentMap, "blog.header_button_text")}
      />
      {/* Blog Posts */}
      <BlogPosts />
      {/* CTA */}
      <CTA
        title={c(contentMap, "blog.cta_title")}
        text={c(contentMap, "blog.cta_description")}
        textBtn={c(contentMap, "blog.cta_button_text")}
      />
    </div>
  );
}

export default Blog;
