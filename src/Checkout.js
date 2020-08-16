import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import {useStateValue} from './StateProvider';
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket}] = useStateValue();
    return (  
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/OHL/PD20/Herotators/updated2/Prime-day_Fans_Header_1500x300_Home_PC-copy.jpg"
                alt=""/>
                {basket?.length===0?(
                    <div>
                        <h2>Your Shopping Cart is Empty</h2>
                        <p>
                            You have no items in your list .To buy one or more items click on 
                            "Add to basket " next to the item
                        </p>
                    </div>
                ):(
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>  
                    {
                        basket?.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )

                        )
                    }
                </div>

            )}
            </div>
            {
                basket.length>0 && (
                    <div className="checkout__right">
                        <h1>Subtotal</h1>
                        <Subtotal/>
                    </div>
                )
            }
        </div>
    )
}

export default Checkout  
