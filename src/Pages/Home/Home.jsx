import Products from "../../components/products/Products";
import Slider1 from "../../components/Sliders/Slider1/Slider1";
import Slider2 from "../../components/Sliders/Slider2/Slider2";
import Slider3 from "../../components/Sliders/Slider3/Slider3";

export default function Home() {
  return (
    <main>
      {/* <Slider1 /> */}
      {/* <Slider2 /> */}
      <Slider3 />
      <Products/>
    </main>
  );
}
