import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({ modal: state.modal })

export const Modal = connect(
    mapStateToProps,
    null
)((props) => {
    const content = props.modal.content

    return (
        props.modal.isOpen && (
            <div id="modal-wrapper" className="modal-wrapper" onClick={content.actions.onWrapperClick}>
                <div className="modal-pop-up">
                    <div className="modal-content">
                        <h3 className="modal-header">{content.modalFields.header}</h3>
                        <div className="modal-body">
                            <p>{content.modalFields.text}</p>
                            <div className="modal-children">
                                <div className="card-info">
                                    <div className="title-group card-field">
                                        <h4 className="card-title">{content.modalContent.productName}</h4>
                                    </div>
                                    <p className="card-field">{content.modalContent.description}</p>
                                    <p className="card-field">
                                        Цена: {content.modalContent.price}
                                        <span>$</span>
                                    </p>
                                    <p className="card-field">Код товара: {content.modalContent.article}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Button classList="btn" backgroundColor="#6c757d" text={content.modalFields.btnText.cancel} onClick={content.actions.onCancelBtnClick} />
                            <Button classList="btn" backgroundColor="#28a745" text={content.modalFields.btnText.ok} onClick={content.actions.onConfrimBtnClick} />
                        </div>
                    </div>
                </div>
            </div>
        )
    )
})
export default Modal

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onWrapperClick: PropTypes.func,
    onCancelBtnClick: PropTypes.func,
    onConfrimBtnClick: PropTypes.func,
    header: PropTypes.string,
    text: PropTypes.string,
    back: PropTypes.string,
    add: PropTypes.string,
}
