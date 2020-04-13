export const addItemToCart = (cartItems, itemToBeAdded) => {
    const existingCartItem = cartItems.find(item => item.id === itemToBeAdded.id)
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === itemToBeAdded.id ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
        } : cartItem);
    }
    return [...cartItems, {...itemToBeAdded, quantity: 1}];
}

export const removeItemFromCart = (cartItems, itemToBeRemoved) => {
    const existingCartItem = cartItems.find(item => item.id === itemToBeRemoved.id)
    if (existingCartItem.quantity === 1) {
        return clearItemFromCart(cartItems, itemToBeRemoved);
    }
    return cartItems.map(cartItem => cartItem.id === itemToBeRemoved.id ? {
        ...cartItem,
        quantity: cartItem.quantity - 1
    } : cartItem);
}

export const clearItemFromCart = (cartItems, itemToBeCleared) => {
    return cartItems.filter(item => item.id !== itemToBeCleared.id);
}