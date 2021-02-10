import React, { useEffect } from 'react'
import { Route, Link } from 'react-router-dom'
import Favorite from './Favorite.jsx'
import ProductsList from './ProductsList.jsx'
import Cart from './Cart.jsx'
import { connect } from 'react-redux'
import { getData, toggleIsFavoriteProduct } from '../store/index.js'

const mapStateToProps = (state) => ({ products: state.products })

export const Pages = connect(mapStateToProps, { getData, toggleIsFavoriteProduct })((props) => {
    useEffect(() => props.getData(), [])

    return (
        <div>
            <nav className="navigation">
                <Link className="nav-link" to="/">
                    Каталог
                </Link>
                <Link className="nav-link" to="/cart">
                    Корзина
                </Link>
                <Link className="nav-link" to="/favorite">
                    Избранное
                </Link>
            </nav>
            <Route exact path="/">
                <ProductsList products={props.products} onStarClick={props.toggleIsFavoriteProduct} />
            </Route>
            <Route exact path="/cart">
                <Cart allProducts={props.products} onStarClick={props.toggleIsFavoriteProduct} />
            </Route>
            <Route exact path="/favorite">
                <Favorite products={props.products} onStarClick={props.toggleIsFavoriteProduct} />
            </Route>
        </div>
    )
})
export default Pages
