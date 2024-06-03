import {
  Banner,
  Hero,
  InstagramPost,
  Product,
  ProductSlide,
  Shipping,
  Testimonials,
} from "../../routers";
import { Title, Caption } from "../constants/Components";
import { ProductSlideCard } from "./product/ProductSlide";

export const HomePages = () => {
  return (
    <>
      <Hero />
      <Product />
      <Shipping />
      <Banner />
      <ProductSlide />
      <Testimonials />

      <div className="container my-16 slideproduct">
        <Title level={3}>Recent Product</Title>
        <Caption> DISCOVER THE HOST TRENDING PRODUCT IN MOONCART.</Caption>
        <br />
        <ProductSlideCard />
      </div>
      <InstagramPost />
    </>
  );
};
