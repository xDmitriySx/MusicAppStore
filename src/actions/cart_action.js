export const addToCart = object => ({
    type: 'ADD_MUSIC_TO_CART',
    payload: object
});

export const removeFromCart = id => ({
    type: 'REMOVE_MUSIC_FROM_CART',
    payload: id
}); // это action для удаления из поп-апа корзины всех скопом товаров, имеющих один и тот же id.

export const removeFromCartComponent = ind => ({
    type: 'REMOVE_MUSIC_FROM_CART_COMPONENT',
    payload: ind
}); // это action для удаления каждого товара из компонента корзины по отдельности. 

