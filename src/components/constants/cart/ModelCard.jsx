import { IoIosCart, IoIosHeart } from "react-icons/io";
import { Badges, BodyOne, Title } from "../Components";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  CartActions,
  clearCart,
  selectTotalPrice,
  selectTotalQuantity,
} from "../../../redux/slice/cartSlice";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { CheckOutForm } from "./CheckOutForm";
import {
  favoriteAction,
  selectTotalFavorites,
} from "../../../redux/slice/favoriteSlice";
import PropTypes from "prop-types";

export const ModelCard = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  const cartItems = useSelector((state) => state.cart.itemList);
  const totalPrice = useSelector(selectTotalPrice);
  const totalFavorite = useSelector(selectTotalFavorites);
  const favorite = useSelector((state) => state.favorites.favoritesItemList);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setIsActiveTab] = useState("cart");

  const openModel = () => {
    setIsOpen(true);
    document.body.style.overflowX = "hidden";
  };

  const closeModel = () => {
    setIsClosing(true);
    document.body.style.overflowX = "auto";
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleTabChange = (tab) => {
    setIsActiveTab(tab);
  };

  const handlePaymentSuccess = () => {
    console.log("==========================");
    console.log("Payment Success");
    console.log("==========================");
    clearCart();
  };

  return (
    <>
      <button className="relative z-20 " onClick={openModel}>
        <IoIosHeart size={23} />

        <div className="absolute -top-2 -right-1.5">
          <Badges color="bg-primary-green">{totalFavorite}</Badges>
        </div>
      </button>

      <button className="relative z-20 " onClick={openModel}>
        <IoIosCart size={23} />

        <div className="absolute -top-2 -right-1.5">
          <Badges color="bg-primary-green">{totalQuantity}</Badges>
        </div>
      </button>

      {isOpen && (
        <>
          <div className="cartoverlay" onClick={closeModel}></div>
          <div
            className={`cartmodel p-10 text-black ${
              isClosing ? "closing" : ""
            }`}
          >
            <div className="flex justify-between gap-5">
              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "cart" ? "text-black" : ""
                }`}
                onClick={() => handleTabChange("cart")}
              >
                Shopping Cart
                <span className="w-7 h-7 text-[12px] font-normal rounded-full text-white grid place-content-center bg-black">
                  {totalQuantity}
                </span>
              </button>
              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "wishlist" ? "text-black" : ""
                }`}
                onClick={() => handleTabChange("wishlist")}
              >
                Wishlist
                <span className="w-7 h-7 text-[12px] font-normal rounded-full text-white grid place-content-center bg-black">
                  {totalFavorite}
                </span>
              </button>
            </div>
            <div className="line-container">
              <div
                className={`line ${activeTab === "cart" ? "active" : ""}`}
              ></div>
              <div
                className={`line ${activeTab === "wishlist" ? "active" : ""}`}
              ></div>
            </div>
            {activeTab === "cart" ? (
              <>
                {cartItems.map((item) => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    cover={item.cover}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}

                <div className="total flex items-center justify-between mt-10">
                  <Title level={6}>SubTotal:</Title>
                  <Title level={6}>{totalPrice.toFixed(2)}</Title>
                </div>
                <div className="checkout">
                  <CheckOutForm
                    total={totalPrice}
                    handlePaymentSuccess={handlePaymentSuccess}
                  />
                </div>
                <NavLink to="/cart">
                  <button className="primary-btn w-full">View Cart</button>
                </NavLink>
              </>
            ) : (
              <>
                {favorite.map((item) => (
                  <FavoriteProduct
                    key={item.id}
                    id={item.id}
                    cover={item.cover}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
                <NavLink to="/favourite">
                  <button className="primary-btn w-full mt-8">
                    Check your Favourite
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export const CartProduct = ({ id, cover, name, price, quantity }) => {
  const dispatch = useDispatch();

  const removeCartItems = () => {
    dispatch(CartActions.removeFromAllCart(id));
  };
  return (
    <div className="mt-5 border-b-2 border-gray-200 pb-2">
      <div className="flex items-center gap-5">
        <div className="images w-20 h-20">
          {cover?.slice(0, 1).map((images, i) => (
            <img
              src={images.image}
              alt=""
              key={i}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="details w-1/2">
          <BodyOne>{name}</BodyOne>
          <p className="text-primary-green">
            {quantity} x ${price?.toFixed(2)}
          </p>
        </div>
        <button className="w-10 h-10 bg-gray-200  flex items-center justify-center rounded-full ">
          <IoCloseOutline size={23} onClick={removeCartItems} />
        </button>
      </div>
    </div>
  );
};

const FavoriteProduct = ({ id, cover, name, price, quantity }) => {
  const dispatch = useDispatch();
  const removeCartItems = () => {
    dispatch(favoriteAction.removeFromFavorites(id));
  };

  return (
    <div className="nt-5 border-b-2 border-gray-200 pb-5">
      <div className="flex items-center gap-5">
        <div className="images w-20 h-20">
          {cover?.slice(0, 1).map((image, i) => (
            <img
              key={i}
              src={image?.image}
              alt={i}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="details w-1/2">
          <BodyOne>{name}</BodyOne>
          <p className="text-primary-green">
            {quantity} x ${price?.toFixed(2)}
          </p>
        </div>
        <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-primary">
          <IoCloseOutline size={25} onClick={removeCartItems} />
        </button>
      </div>
    </div>
  );
};

CartProduct.prototypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};

FavoriteProduct.prototypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};
