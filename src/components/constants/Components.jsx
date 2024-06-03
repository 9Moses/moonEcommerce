import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Title = ({ level, children, className }) => {
  const Heading = `h${level}`;
  const classes = `font-medium ${
    level === 1
      ? "text-[80px] font-[600] text-black"
      : level === 2
      ? "text-[40px] font-[700] text-black "
      : level === 3
      ? "text-[28px] font-[700] text-black"
      : level === 4
      ? "text-[24px] font-[600] text-black"
      : level === 5
      ? "text-[22px] font-[600] text-black"
      : "text-[18px] font-[500] text-primary"
  }`;

  return <Heading className={`${className} ${classes}`}>{children}</Heading>;
};

const BodyOne = ({ children, className }) => {
  const classes = "text-lg font-normal text-primary-gray mb-4";
  return <p className={`${className} ${classes}`}>{children}</p>;
};

const BodyTwo = ({ children }) => {
  return <p className="text-base font-normal text-black">{children}</p>;
};

const Caption = ({ children }) => {
  return <p className="text-sm font-normal text-primary-gray">{children}</p>;
};

const Span = ({ children }) => {
  return <span className="text-xs font-semibold text-white">{children}</span>;
};

const CustomNavLinks = ({ href, className, children }) => {
  const linkStyles =
    "text-[14px] font-medium text-gray-500 cursor-pointer list-none";
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? `${className} ${linkStyles} text-primary-green `
          : `${className} ${linkStyles}`
      }
    >
      {children}
    </NavLink>
  );
};
const CustomLinks = ({ className, children }) => {
  const linkStyles =
    "text-[14px] font-medium text-gray-500 cursor-pointer list-none";
  return (
    <NavLink className={`${className} ${linkStyles} `}>{children}</NavLink>
  );
};

const Badges = ({ color, children }) => {
  return (
    <div
      className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center text-white`}
    >
      {children}
    </div>
  );
};

export {
  Title,
  BodyOne,
  BodyTwo,
  Caption,
  Span,
  CustomNavLinks,
  CustomLinks,
  Badges,
};

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};
CustomNavLinks.propTypes = {
  href: PropTypes.isRequired,
  className: PropTypes.isRequired,
  children: PropTypes.isRequired,
};
CustomLinks.propTypes = {
  className: PropTypes.isRequired,
  children: PropTypes.isRequired,
};
BodyOne.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};
BodyTwo.propTypes = {
  children: PropTypes.node.isRequired,
};
Caption.propTypes = {
  children: PropTypes.node.isRequired,
};
Span.propTypes = {
  children: PropTypes.node.isRequired,
};
Badges.propTypes = {
  color: PropTypes.isRequired,
  children: PropTypes.isRequired,
};
