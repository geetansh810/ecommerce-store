import React from 'react'
import banana from "../images/banana.jpg"

const HorizontalCard = (props) => {

    return (
        <div className="food-card food-card--vertical">
            <div className="food-card_img">
                <img src={props.item.image} alt="" />
                <a href="#!"><i className="far fa-heart"></i></a>
            </div>
            <div className="food-card_content">
                <div className="food-card_title-section">
                    <h5 className="food-card_title">{props.item.name}</h5>
                    <h6 className="text-muted">{props.item.vendor}</h6>
                </div>
                <div className="food-card_bottom-section">
                    <div className="space-between">
                        <div className='food-card_price fw-bold fs-5'>
                            <span className='text-muted fs-6'>Total :</span> ₹ {props.item.price} x {props.item.quantity}
                            <span> = ₹ {props.item.value}</span>
                        </div>
                        <div className="pull-right">
                            <span className="badge bg-success">{props.item.category}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard