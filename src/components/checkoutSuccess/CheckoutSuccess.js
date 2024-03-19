import {useDispatch} from "react-redux";
import {removeFromCart, reset} from "../shoppingCart/cartSlice";
import {Link} from "react-router-dom";
import styles from "./CheckoutSuccess.module.css"
import {BaseButton} from "../common/button.styles";

const CheckoutSuccess = () => {
    const dispatch = useDispatch();
    dispatch(reset())
    return (
        <div className={styles.checkoutSuccessDiv}>
            <p>Thank you! Your order was successful</p>
            <Link to="/"><BaseButton>Back to homepage</BaseButton></Link>
        </div>
    )
}

export default CheckoutSuccess;