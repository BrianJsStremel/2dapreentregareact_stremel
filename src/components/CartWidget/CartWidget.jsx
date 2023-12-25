import { Icon } from '@iconify/react';

const CartItems = 3;
const CartWidget = () => {
    return(
        <>
        <Icon className='cart-icon display-6' icon="raphael:cart" />
        {CartItems}
        </>
    )
}

export default CartWidget