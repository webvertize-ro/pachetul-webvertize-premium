import Hero from "../components/Hero";
import productsHeader from "../assets/images/products_header.avif";
import ProductsSection from "../components/ProductsSection";
import ProductsShortIntro from "../components/ProductsShortIntro";
import WhyChooseOurProducts from "../components/WhyChooseOurProducts";
import CTA from "../components/CTA";
import PhotoGallery from "../components/PhotoGallery";
import { Helmet } from "react-helmet-async";
import { useContent } from "../hooks/useContent";
import { c } from "../utils/content";

function Products() {
  /**
   * Page structure:
   * 1. Hero
   * 2. Products short intro
   * 3. Why choose our products
   * 4. CTA
   */

  const { contentMap } = useContent();

  const images = [1, 2, 3, 4, 5, 6].map((i) => ({
    image: c(contentMap, `products.gallery_image_${i}`),
    description: c(contentMap, `products.gallery_image_${i}_alt`),
  }));

  return (
    <div>
      <Helmet>
        <title>Afacere Locală | Produse</title>
        <meta
          name="description"
          content="Descoperă gama de produse [Numele Afacerii] – calitate testată, disponibilitate locală și consiliere personalizată. Găsești exact ce ai nevoie, fără bătăi de cap."
        />
      </Helmet>
      <Hero
        heroBg={c(contentMap, "products.header_bg_image")}
        heroTitle={c(contentMap, "products.header_title")}
        heroDesc={c(contentMap, "products.header_description")}
        ctaBtnText={c(contentMap, "products.header_button_text")}
      />
      <ProductsSection />
      <WhyChooseOurProducts />
      <PhotoGallery
        title={c(contentMap, "products.gallery_title")}
        text={c(contentMap, "products.gallery_description")}
        images={images}
      />
      <CTA
        title={c(contentMap, "products.cta_title")}
        text={c(contentMap, "products.cta_description")}
        textBtn={c(contentMap, "products.cta_button_text")}
      />
    </div>
  );
}

export default Products;
