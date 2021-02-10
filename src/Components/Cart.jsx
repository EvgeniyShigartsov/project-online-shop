import React from 'react'
import CartIcon from './CartIcon.jsx'
import Card from './Card.jsx'
import DeliveryForm from './DeliveryForm.jsx'
import { connect } from 'react-redux'
import { removeProductFromCart } from '../store/index.js'

const mapStateToProps = (state) => ({ cartList: state.cartList, cartSum: state.cartSum })

export const Cart = connect(mapStateToProps, { removeProductFromCart })((props) => {
    const allProducts = props.allProducts
    const modalFields = {
        header: 'Удаление из корзины',
        text: 'Удалить этот товар из корзины ?',
        btnText: {
            ok: 'Удалить',
            cancel: 'Назад',
        },
    }
    const cartList = props.cartList.map((product, _, cartList) => (
        <Card
            name={product.name}
            description={product.description}
            src={product.url}
            price={product.price}
            article={product.article}
            key={product.url}
            showBtn={true}
            showStar={true}
            isFavorite={product.isFavorite}
            cardBtnText="Удалить"
            btnBackground="#6c757d"
            onBtnClick={() => props.removeProductFromCart(cartList, product.name)}
            onStarClick={() => props.onStarClick(allProducts, product.name)}
            modalFields={modalFields}
        />
    ))
    return (
        <section className="container">
            <h3 className="section-headers">Корзина</h3>
            <div className="cart-items">{cartList.length ? cartList : <span>Корзина пуста.</span>}</div>
            <div className="delivery-box">
                <div className="icon-box">
                    <CartIcon />
                    <div>Сумма: {props.cartSum}$</div>
                </div>
                <DeliveryForm />
            </div>
        </section>
    )
})
export default Cart
