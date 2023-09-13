import {useTitle} from "../../hooks/useTitle";
import {Hero} from "./components/Hero";
import { FeaturedProduct } from "./components/FeaturedProduct";
import {Testimonials} from "./components/Testimonials";
import { Faq } from "./components/Faq";
export const HomePage = () => {
  useTitle("Access Latest Computer Science E-bboks");
  return (
    <main>
    <Hero/>
    <FeaturedProduct/>
    <Testimonials/>
    <Faq/>
  </main>
  )
}
