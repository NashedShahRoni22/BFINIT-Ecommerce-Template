import Banner from "../../components/Banner";
import Category1 from "../../components/categories/Category1";
import Category2 from "../../components/categories/Category2";
import ProductAdBanner from "../../components/productAdBanner/ProductAdBanner";
import Products from "../../components/products/Products";
import ProductShowCase from "../../components/productShowCase/ProductShowCase";
import Slider1 from "../../components/sliders/Slider1/Slider1";
import Slider2 from "../../components/sliders/Slider2/Slider2";
import Slider3 from "../../components/sliders/Slider3/Slider3";

export default function Home() {
  return (
    <main>
      <Slider1 />
      <Slider2 />
      <Slider3 />
      <Banner />
      <Category1 />
      <Category2 />
      <ProductAdBanner />
      <ProductShowCase />
      <Products />
    </main>
  );
}
