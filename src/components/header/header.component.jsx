import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector"; //selectCurrentUser is a function that takes in a state and returns the current user.  it's a function that takes in a state and returns the current user.  it's a function that takes in a state and returns the current user
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { auth } from "../../firebase/firebase.utlis";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown-component";


const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown /> //if hidden is true, don't render the cart dropdown. if hidden is false, render the cart dropdown.  this is a ternary operator.  if hidden is true, return null. if hidden is false, return the cart dropdown.  the ternary operator is a shorthand way of writing an if else statement.  it's a shorthand way of writing an if statement followed by an else statement.  it's a shorthand way of writing an if statement followed by an else statement followed by an else statement.  it's a shorthand way of writing an if statement followed by an else statement followed by an else statement followed by an else statement.  it's a shorthand way of writing an if statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement followed by an else statement
    }
  </div>
);
const mapStateToProps = (state) =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });

export default connect(mapStateToProps)(Header);
