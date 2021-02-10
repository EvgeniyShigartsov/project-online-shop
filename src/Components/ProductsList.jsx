import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import { addProductToCart } from '../store/index.js'

export const ProductsList = connect(null, { addProductToCart })((props) => {
    const modalFields = {
        header: 'Добавление в корзину',
        text: 'Добавить этот товар в корзину ?',
        btnText: {
            ok: 'Добавить в корзину',
            cancel: 'Назад',
        },
    }
    return (
        <div className="container">
            <h3 className="section-headers">Каталог товаров</h3>
            <div className="card-gallery">
                {props.products.map((product, _, products) => (
                    <Card
                        name={product.name}
                        description={product.description}
                        src={product.url}
                        price={product.price}
                        article={product.article}
                        key={product.url}
                        showStar={true}
                        isFavorite={product.isFavorite}
                        onStarClick={() => props.onStarClick(products, product.name)}
                        onBtnClick={() => props.addProductToCart(products, product.name, product.price)}
                        showBtn={true}
                        cardBtnText="Добавить в корзину"
                        btnBackground="#28a745"
                        modalFields={modalFields}
                    />
                ))}
            </div>
        </div>
    )
})
export default ProductsList
