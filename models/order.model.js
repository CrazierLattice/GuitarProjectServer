const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'user' },
    cart_id: { type: Schema.Types.ObjectId, ref: 'cart' },
    total_price: { type: Number, required: true },
    delivery_city: { type: String, required: true },
    delivery_street: { type: String, required: true },
    delivery_date: { type: String, required: true },
    card_digits: { type: String, minlength: 4, maxlength: 4, required: true }

})

const orderModel = model(orderSchema, 'order')

module.exports = { orderModel }