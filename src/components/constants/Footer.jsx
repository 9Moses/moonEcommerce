import { logo } from "../../assets/common";
import { BodyOne, Caption, CustomLinks, Title } from "./Components";

export const Footer = () => {
  return (
    <footer className="py-14">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="" className="h-7" />
          <div className="flex flex-col gap-2 mt-5">
            <Caption>Address: 12 Abeka, Accra, Ghana </Caption>
            <Caption>Email: info@hotmail.com</Caption>
            <Caption>Call: +233 040 456 6789 </Caption>
          </div>
          <br />
          <BodyOne>Subscribe to Our Newsletter</BodyOne>
          <input
            type="text"
            className="p-3 w-full bg-white-100 rounded-md outline-none"
            placeholder="Enter your email  address"
          />
        </div>
        <div>
          <Title level={5}>Our Stories</Title>
          <div className="flex flex-col gap-4">
            <CustomLinks>Normal</CustomLinks>
            <CustomLinks>Shop with Sidebar</CustomLinks>
            <CustomLinks>Shop with category</CustomLinks>
            <CustomLinks>Shop Filter Top Bar</CustomLinks>
            <CustomLinks>Shop Wide</CustomLinks>
            <CustomLinks>My Account</CustomLinks>
          </div>
        </div>
        <div>
          <Title level={5}>Useful links</Title>
          <div className="flex flex-col gap-4">
            <CustomLinks>Normal</CustomLinks>
            <CustomLinks>Shop with Sidebar</CustomLinks>
            <CustomLinks>Shop with category</CustomLinks>
            <CustomLinks>Shop Filter Top Bar</CustomLinks>
            <CustomLinks>Shop Wide</CustomLinks>
            <CustomLinks>My Account</CustomLinks>
          </div>
        </div>
        <div>
          <Title level={5}>Our Blog</Title>
          <div className="flex flex-col gap-4">
            <CustomLinks>Normal</CustomLinks>
            <CustomLinks>Shop with Sidebar</CustomLinks>
            <CustomLinks>Shop with category</CustomLinks>
            <CustomLinks>Shop Filter Top Bar</CustomLinks>
            <CustomLinks>Shop Wide</CustomLinks>
            <CustomLinks>My Account</CustomLinks>
          </div>
        </div>
      </div>
    </footer>
  );
};
