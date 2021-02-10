import * as Yup from 'yup'
import React from 'react'
import { Formik, Field, Form } from 'formik'
import { connect } from 'react-redux'
import { clearCart, saveBuyerData } from '../store/index.js'

const validationShema = Yup.object().shape({
    name: Yup.string().trim().required('Необходимое поле'),
    surename: Yup.string().trim().required('Необходимое поле'),
    adress: Yup.string().trim().required('Необходимое поле'),
    phone: Yup.string().trim().required('Необходимое поле').min(5, 'Слишком короткий номер'),
    age: Yup.number().required('Необходимое поле').positive('Are you seriously ?').integer('Число должно быть целым'),
})

const mapStateToProps = (state) => ({ cartList: state.cartList })

export const DeliveryForm = connect(mapStateToProps, { clearCart, saveBuyerData })((props) => {
    return (
        <div className="form-container">
            <h3 className="delivery-header">Контакты для доставки</h3>
            <Formik
                initialValues={{
                    name: '',
                    surename: '',
                    age: '',
                    adress: '',
                    phone: '',
                }}
                validationSchema={validationShema}
                onSubmit={(values, { resetForm }) => {
                    if (props.cartList.length === 0) {
                        resetForm()
                        alert('Заказ не принят, корзина пуста.')
                        return
                    }

                    console.log(values)
                    console.log(props.cartList)
                    props.clearCart(props.cartList)
                    props.saveBuyerData(values)
                    resetForm()
                    alert('Заказ успешно создан!')
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <Field name="name" placeholder="Имя" type="text" />
                            {errors.name && touched.name && <div className="field-error">{errors.name}</div>}
                        </div>
                        <div>
                            <Field name="surename" placeholder="Фамилия" type="text" />
                            {errors.surename && touched.surename && <div className="field-error">{errors.surename}</div>}
                        </div>
                        <div>
                            <Field name="age" placeholder="Возвраст" type="number" />
                            {errors.age && touched.age && <div className="field-error">{errors.age}</div>}
                        </div>
                        <div>
                            <Field name="adress" placeholder="Адрес доставки" type="text" />
                            {errors.adress && touched.adress && <div className="field-error">{errors.adress}</div>}
                        </div>
                        <div>
                            <Field name="phone" placeholder="Номер телефона" type="text" />
                            {errors.phone && touched.phone && <div className="field-error">{errors.phone}</div>}
                        </div>
                        <button type="submit">Отправить</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})

export default DeliveryForm
