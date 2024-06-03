import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BodyTwo, Title } from "./Components";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-0 right-20 bg-white text-black rounded-full slider-btn z-10"
      onClick={onClick}
    >
      <button className="next ">
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
}
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-0 right-0  text-white rounded-full slider-btn"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowRight size={50} />
      </button>
    </div>
  );
}

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <section className="testimonials">
        <div className="container h-full flex items-center justify-center">
          <div className="w-1/2 flex relative z-50">
            <div className="box w-72 h-72 bg-white rounded-full z-50">
              <img
                src="../images/hero/girl.png"
                alt=""
                className="absolute left-0 z-10 rounded-full -top-[70px] w-80  "
              />
            </div>
            <div className="bg-[rgba(255,255,255,0.5)] px-5 backdrop-blur-sm p-3 rounded-lg absolute top-32 right-20 z-50">
              <BodyTwo className="leading-none">Our Satisfied User</BodyTwo>

              <div className="flex items-center ">
                <img
                  src="../images/testimonial/pic1-2.png"
                  alt=""
                  className="h-12 w-12 rounded-full border-2 border-gray-100"
                />
                <img
                  src="../images/testimonial/pic2-2.png"
                  alt=""
                  className="-ml-4 h-12 w-12 rounded-full border-2 border-gray-100"
                />
                <span className="-ml-4 w-12 h-12 object-cover rounded-full border-2 border-gray-300 bg-slate-100 flex items-center justify-center">
                  +12k
                </span>
              </div>
            </div>
          </div>
          <div className="left w-1/2 relative z-50">
            <Title level={3}> What our clients say about us</Title>
            <BodyTwo className="mb-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              ipsa rerum necessitatibus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cum assumenda dolores animi, a, officiis magnam
              ducimus voluptatibus quas natus necessitatibus repellat.
              Consectetur assumenda atque rem dolor magnam ut ab, numquam quis
              reprehenderit minus? Voluptas saepe doloribus quidem quis alias,
              quisquam ducimus iste ea quam odio sit optio, magni nostrum ullam!
            </BodyTwo>

            <Slider {...settings}>
              <TestimonialsCard
                name="Kenneth Fong"
                post="Undergraduate Student"
                cover="../images/testimonial/pic5.jpg"
              />
              <TestimonialsCard
                name="Joe Do"
                post="Postgraduate Student"
                cover="../images/testimonial/pic6.jpg"
              />
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export const TestimonialsCard = ({ cover, name, post }) => {
  return (
    <>
      <div className="flex items-center gap-8 mt-4">
        <div className="w-20 h-20 ">
          <img
            src={cover}
            className="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div className="details">
          <Title level={5} className="font-medium leading-none ">
            {name}
          </Title>
          <p>{post}</p>
        </div>
      </div>
    </>
  );
};
