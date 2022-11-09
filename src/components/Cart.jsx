import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import HorizontalCard from './HorizontalCard'
import Menu from './Menu'

const Cart = () => {

    const defaultValue = {
        items: [],
        totalValue: 0,
        totalQuantity: 0
    }

    const [cartValue, setCartValue] = useState(defaultValue);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("cart") !== null) {
            setCartValue(JSON.parse(localStorage.getItem("cart")))
        }

    }, [])

    const clearCart = () => {
        setCartValue(defaultValue)
        localStorage.setItem("cart", JSON.stringify(defaultValue))
    }

    return (
        <>
            <Menu cartValue={cartValue} />
            <div className="container mb-4">
                <div className="row">
                    <div className="col">
                        {cartValue.items.length === 0 ? <h1 className='text-center mt-5'>No Items</h1> :

                            <div className="d-flex flex-wrap justify-content-center my-5">
                                {cartValue.items.map((item, i) => {
                                    return <HorizontalCard key={i} item={item} />
                                })}
                            </div>
                        }

                    </div>

                </div>

                {cartValue.items.length !== 0 &&

                    <div className="row">

                        <div className="col">
                            <div className="d-flex justify-content-center align-items-center">
                                <h4 className='text-center mx-2 mt-2'>Total Cart Value :  ₹ {cartValue.totalValue}</h4>
                                <button className='btn btn-success mx-2 px-4' onClick={() => setShowModal(!showModal)}>Purchase</button>
                            </div>
                        </div>
                    </div>

                }
            </div>

            <div className="modal modal-lg" style={{ display: showModal ? "block" : "none", top: 0, background: "#000000c2" }} id="purchaseModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered wrap">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cart Values</h5>
                            <button type="button" className="btn-close" onClick={() => setShowModal(!showModal)} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>{JSON.stringify(cartValue)}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning text-light" onClick={clearCart}>Clear Cart</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(!showModal)} >Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Cart