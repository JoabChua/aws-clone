import { TrashIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { cartActions, CartItem } from "../store/cart-slice";
import classes from "./Cart.module.css";
import Modal from "react-modal";
import { useState } from "react";
import CheckoutModal from "../components/CheckoutModal";
import ConfirmationModal from "../components/ConfirmationModal";

const Cart = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [selectedRemoveItem, setselectedRemoveItem] = useState({} as CartItem);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const dispatch = useDispatch<AppDispatch>();

  const increment = (item: CartItem) => {
    dispatch(cartActions.incrementInCart({ id: item.id }));
  };

  const decrement = (item: CartItem) => {
    dispatch(cartActions.decrementInCart({ id: item.id }));
  };

  const openRemoveFromCartConfirmationDialog = (item: CartItem) => {
    setselectedRemoveItem(item);
    setOpenConfirmModal(true);
  };

  const closeRemoveFromCartConfirmationDialog = () => {
    setselectedRemoveItem({} as CartItem);
    setOpenConfirmModal(false);
  };

  const removeFromCartHandler = (item: CartItem) => {
    dispatch(cartActions.removeFromCart(item));
    setselectedRemoveItem({} as CartItem);
    closeRemoveFromCartConfirmationDialog();
  };

  const closeAllModal = () => {
    setOpenConfirmModal(false);
    setModalIsOpen(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const makePayment = (ev: { email: string; credit: string }) => {
    console.log(ev);
    dispatch(cartActions.clearCart());
    closeModal();
  };

  const numberWithCommas = (num: number) => {
    return num
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const priceString = numberWithCommas(totalPrice);

  return (
    <div className={`${cartItems.length === 0 ? classes.container : ""}`}>
      {cartItems.length === 0 && (
        <div className={classes.wrapper}>
          <h1>No item in cart!</h1>
          <Link to={`/product`}>
            <button>Go and shop more!</button>
          </Link>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className={classes.wrapper_cart}>
          <ul>
            {cartItems.map((item: CartItem) => {
              return (
                <div className={classes.item} key={item.id}>
                  <img src={item.img} alt={item.anchorText} width="100px" />
                  <div className={classes.desc}>
                    <h4>{item.title}</h4>
                    <Link to={`/product/` + item.id}>
                      <p>{item.anchorText}</p>
                    </Link>
                  </div>
                  <div className={classes.right}>
                    <div className={classes.cartcount}>
                      <button
                        className={classes.counter}
                        onClick={() => decrement(item)}
                        disabled={item.count <= 0}
                      >
                        -
                      </button>
                      <span>{item.count}</span>
                      <button
                        className={classes.counter}
                        onClick={() => increment(item)}
                      >
                        +
                      </button>
                    </div>
                    <div className={classes.delete}>
                      <button
                        className={classes.removeBtn}
                        onClick={() =>
                          openRemoveFromCartConfirmationDialog(item)
                        }
                      >
                        <TrashIcon className="icon" />
                      </button>
                    </div>
                    <div className={classes.price}>${item.price}</div>
                  </div>
                </div>
              );
            })}
          </ul>
          <div className={classes.cartout}>
            <span className={classes.total}>Total: ${priceString}</span>
            <button className={classes.checkout} onClick={openModal}>
              Checkout
            </button>
          </div>
        </div>
      )}
      <Modal
        isOpen={modalIsOpen || openConfirmModal}
        onRequestClose={closeAllModal}
        className={classes.modal}
      >
        {modalIsOpen && (
          <CheckoutModal onPaying={makePayment} onCloseModal={closeModal} />
        )}
        {openConfirmModal && (
          <ConfirmationModal
            title="Are you sure"
            msg="Remove selected item from cart?"
            onConfirm={() => removeFromCartHandler(selectedRemoveItem)}
            onCancel={closeRemoveFromCartConfirmationDialog}
          />
        )}
      </Modal>
    </div>
  );
};

Modal.setAppElement("#root");

export default Cart;
