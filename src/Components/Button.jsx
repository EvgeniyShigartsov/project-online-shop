import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
    return (
        <button className={props.classList} style={{ backgroundColor: props.backgroundColor }} onClick={props.onClick}>
            {props.text || props.children}
        </button>
    )
}
export default Button

Button.defaultProps = {
    onClick: () => null,
}

Button.propTypes = {
    classList: PropTypes.string,
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}
