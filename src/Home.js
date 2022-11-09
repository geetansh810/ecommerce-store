import React, { useEffect, useState } from 'react'
import { data } from './api'
import Card from './components/Card';
import Menu from './components/Menu';
import Footer from './components/Footer';


const Home = () => {

    const [cartValue, setCartValue] = useState({
        items: [],
        totalValue: 0,
        totalQuantity: 0
    });

    const addToCart = (itemDetails) => {
        const list = [...cartValue.items, itemDetails];
        const temp = {
            items: list,
            totalValue: cartValue.totalValue + itemDetails.value,
            totalQuantity: cartValue.totalQuantity + itemDetails.quantity
        }
        console.log(temp)
        localStorage.setItem("cart", JSON.stringify(temp))
        setCartValue(temp);

    }

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState(data);

    useEffect(() => {
        const cat = data.map((item) => {
            return item.category
        })

        // console.log()
        setCategories([...new Set(cat)])

        if (localStorage.getItem("cart") !== null) {
            setCartValue(JSON.parse(localStorage.getItem("cart")))
        }

    }, [])

    const [searchText, setSearchText] = useState("");
    const changeSearch = (value) => {
        setSearchText(value)
    }

    const categoryFilter = (name) => {


        if (name === "all") {
            setProducts(data);
            return;
        }

        const categoryItems = data.filter((item) => {
            return item.category === name
        })
        setProducts(categoryItems)
    }


    return (
        <>

            <Menu cartValue={cartValue} search={changeSearch} />

            <div className="container mt-3">
                <div className="navbar navbar-expand-lg navbar-light">
                    <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 text-center d-flex flex-row">
                        <li className="nav-item pt-4 mx-2" onClick={() => categoryFilter("all")}>
                            <p className="nav-link btn btn-outline-success px-4 fs-6">All</p>
                        </li>

                        {categories.map((item, i) => {
                            return (
                                <li className="nav-item pt-4 mx-2" key={i} onClick={() => categoryFilter(item)}>
                                    <p className="nav-link btn btn-outline-secondary px-4 fs-6">{item}</p>
                                </li>
                            )
                        })}

                    </ul>
                </div>



            </div >


            <div className="container">
                <div className="row">
                    <div className="d-lg-flex flex-wrap g-3 justify-content-evenly">

                        {products.filter((each) => { return searchText !== "" ? each.name.toLowerCase().includes(searchText.toLowerCase()) : each }).map((item, i) => {
                            return (
                                <Card key={i} item={item} add={addToCart} />
                            )
                        })}

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home