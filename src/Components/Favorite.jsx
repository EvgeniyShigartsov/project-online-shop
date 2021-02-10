import React from 'react'
import CarCard from './Card'

export const Favorite = (props) => {
    const favorites = []

    props.products.forEach((product, _, products) => {
        if (product.isFavorite) {
            favorites.push(
                <CarCard
                    name={product.name}
                    description={product.description}
                    src={product.url}
                    price={product.price}
                    article={product.article}
                    key={product.url}
                    showBtn={false}
                    showStar={true}
                    isFavorite={product.isFavorite}
                    onStarClick={() => props.onStarClick(products, product.name)}
                />
            )
        }
    })

    return (
        <section className="container favorite-section">
            <h3 className="section-headers">Избранные товары</h3>
            <div className="favorite-items">{favorites.length ? favorites : <span>Список пуст</span>}</div>
        </section>
    )
}

export default Favorite
