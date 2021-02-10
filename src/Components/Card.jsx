import { connect } from 'react-redux'
import { modalHandler } from '../store/index.js'

import React from 'react'
import PropTypes from 'prop-types'
import StarSvg from './StarSvg.jsx'
import Button from './Button.jsx'

const mapStateToProps = (state) => ({ modal: state.modal })

export const CarCard = connect(mapStateToProps, { modalHandler })((props) => {
    const modalWrapperHandler = (e) => {
        if (e.target.id !== 'modal-wrapper') return
        props.modalHandler(null)
    }

    const modalObj = {
        modalFields: props.modalFields,
        modalContent: {
            productName: props.name,
            description: props.description,
            price: props.price,
            article: props.article,
        },
        actions: {
            onWrapperClick: modalWrapperHandler,
            onCancelBtnClick: () => props.modalHandler(null),
            onConfrimBtnClick: props.onBtnClick,
        },
    }

    return (
        <div className="card-wrapper">
            <img className="card-img" src={props.src} alt={props.name} />
            <div className="card-info">
                <div className="title-group card-field">
                    <h4 className="card-title">{props.name}</h4>
                    {props.showStar && <StarSvg isFavorite={props.isFavorite} onStarClick={props.onStarClick} />}
                </div>
                <p className="card-field">{props.description}</p>
                <p className="card-field">
                    Цена: {props.price}
                    <span>$</span>
                </p>
                <p className="card-field">Код товара: {props.article}</p>
                {props.showBtn && <Button classList="btn-card card-field" onClick={() => props.modalHandler(modalObj)} backgroundColor={props.btnBackground} text={props.cardBtnText} />}
            </div>
        </div>
    )
})
export default CarCard
CarCard.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    article: PropTypes.number,
}
