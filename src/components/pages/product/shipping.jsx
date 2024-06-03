import { FaShippingFast } from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { BiChat } from "react-icons/bi";

const additionalInfo = [
  {
    id: 1,
    title: "FREE SHIPPING",
    description:
      "Enjoy Free Shipping On All Orders - No Minimum Purchase Required.",
    icon: <FaShippingFast size={50} />,
  },
  {
    id: 2,
    title: "24/7 SUPPORT",
    description:
      "Our Team Is Available 24/7 To Help With Any Questions Or Concerns.",
    icon: <MdOutlineMarkUnreadChatAlt size={50} />,
  },
  {
    id: 3,
    title: "MONEY BACK",
    description: "We Offer A 100% Money-Back Guarantee For Your Satisfaction.",
    icon: <FaCircleDollarToSlot size={50} />,
  },
];

import { BodyOne, Title } from "../../constants/Components";

export const Shipping = () => {
  return (
    <>
      <section className="container">
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalInfo.map((info) => (
            <div
              key={info.id}
              className="flex items-center justify-center flex-col text-center gap-2"
            >
              <div className="text-primary-green ">{info.icon} </div>
              <h5 className="text-xl font-bold mt-4">{info.title}</h5>
              <p className="mt-2">{info.description}</p>
            </div>
          ))}
        </div>
        <div className="box bg-primary p-8 flex flex-col lg:flex-row items-center justify-between">
          <div className="left flex items-center gap-3">
            <BiChat size={100} color="white" />
            <div>
              <Title className="text-white leading-none" level={4}>
                SUBSCRIBE TO OUR NEWSLETTER
              </Title>
              <BodyOne className="text-gray-100">
                Get Latest news, offers amd Discounts.
              </BodyOne>
            </div>
          </div>
          <div className="left w-full p-5 px-8 lg:w-1/2">
            <input type="text" className="outline-none w-full p-2" />{" "}
          </div>
        </div>
      </section>
    </>
  );
};
