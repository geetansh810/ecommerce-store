import React, { useState } from 'react'
const Card = (item) => {
    const data = item.item;
    const defaultValues = {
        ...data,
        quantity: 0,
        value: 0
    }
    const [quantity, setQuantity] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    const addToCart = () => {

        if (totalValue === 0) {
            alert("No item selected")
            return
        }

        const newValues = {
            ...defaultValues,
            value: totalValue,
            quantity: quantity
        }
        console.log(newValues)
        item.add(newValues)
        setQuantity(0)
        setTotalValue(0)
        alert("Product added to cart")
    }

    const updateValue = (val) => {

        if (val === 0) {
            if (quantity === 0)
                setQuantity(0)
            else {
                setQuantity(quantity - 1)
                setTotalValue(totalValue - data.price)
            }
        } else {
            if (quantity === 10)
                alert("Cannot add more then 10")
            else {
                setQuantity(quantity + 1)
                setTotalValue(totalValue + data.price)
            }
        }
    }

    return (
        <div className="food-card">
            <div className="food-card_img">
                <img src={data.image} alt="" />
                <a href="#!"><i className="far fa-heart"></i></a>
            </div>
            <div className="food-card_content">
                <div className="food-card_title-section">
                    <h5 className="food-card_title">{data.name}</h5>
                    <h6 className="text-muted">{data.vendor}</h6>
                </div>
                <div className="food-card_bottom-section">
                    <div className="space-between">
                        <div className='food-card_price fw-bold fs-5'>
                            <span className='text-muted fs-6'>Price :</span> ₹ {data.price}
                        </div>
                        <div className="pull-right">
                            <span className="badge bg-success">{data.category}</span>
                        </div>
                    </div>
                    <hr />
                    <div className="space-between">
                        <div className="food-card_price fs-4 text-dark">
                            <span className="text-muted ">Total : </span>
                            ₹ {totalValue}
                        </div>
                        <div className="food-card_order-count">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-danger minus-btn" type="button" id="button-addon1" onClick={() => updateValue(0)}><i className="">-</i></button>
                                </div>
                                <input type="text" className="form-control input-manulator" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={quantity} onChange={() => {}}/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-success add-btn" type="button" id="button-addon1" onClick={() => updateValue(1)}><i className="">+</i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {data.available === 1 ? <button className='btn btn-success w-100' onClick={addToCart}>Add to cart</button> : <button className='btn btn-secondary w-100' disabled>Out of stock</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card