import React from 'react'
import "./Home.css"
import Product from './Product'
function Banner() {
    return (
        <div className = "home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M01/RV2_MegaOffer/RV3MO_PriceChange/P38631710_IN_WLME_SamsungGalaxy_MO1_New_Launch_Tall_hero_1500x600._CB407208581_.jpg" 
                 className="home__image"
                 alt=""/> 
            <div className="home__row">
                <Product
                    id="12112"
                    title="Allen Solly Men's Polo "
                    price={699.00}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41i3y9UIw8L._AC_SY200_.jpg"
                />
                  <Product
                    id="12112"
                    title="Jockey Men's Regular Fit T-Shirt "
                    price={395.00 }
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/315cw9RHhYL._AC_SY200_.jpg"
                />
                   <Product
                    id="12112"
                    title="Jockey Men's Cotton T-Shirt
                    "
                    price={398.00}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/31pFqgaohBL._AC_SY200_.jpg"
                />
                   <Product
                    id="12112"
                    title="BASE 41 Women's Regular Fit Top and T-Shirt"
                    price={11}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/4149a5Lr3fL._AC_SY200_.jpg"
                />
                   <Product
                    id="12112"
                    title="BANAS Women’s Rayon Festive "
                    price={11}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/31RQqT49V6L._AC_SY200_.jpg"
                />
                
            </div>
            <div className="home__row">
                <Product
                    id="12112"
                    title="Mediweave KN95 (Equivalent to N95, FFP2) Mask/Respirator"
                    price={399.00}
                    rating={3}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41EBT4D7bXL._AC_SY200_.jpg"
                />
                  <Product
                    id="12112"
                    title=" Mask with 2 sided Peel Off Layer, Pack of 3"
                    price={649}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41GVBt2qODL._AC_SY200_.jpg"
                />
                <Product
                    id="12112"
                    title="Men's Fase Visor"
                    price={709}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/417Dd-a6wYL._AC_SY200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12112"
                    rating={0}
                    image="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
                />
             
                
            </div>
            <div className="home__row">
            <Product
                    id="12112"
                    title=" Zip 500 On-Ear Deep Bass Foldable Headphones"
                    price={399.00}
                    rating={3}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Amazon_Payments/XCM_CUTTLE_1238747_1263407_IN_INPD2020_3230513_372x232_2X_en_IN._SY116_CB408008325_.jpg"
                />
                <Product
                    id="12112"
                    title="Infinity (JBL) Glide 500 Wireless On-Ear "
                    price={399.00}
                    rating={3}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41lWYD5RnaL._AC_US160_FMwebp_QL70_.jpg"
                />
                 <Product
                    id="12112"
                    title="JBL Tune 500BT Powerful Bass Wireless On-Ear Headphones with Mic (Blue)"
                    price={1,100 }
                    rating={3}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41MSuaN67HL._AC_US160_FMwebp_QL70_.jpg"
                />
                 <Product
                    id="12112"
                    title="Mediweave KN95 (Equivalent to N95, FFP2) Mask/Respirator"
                    price={399.00}
                    rating={3}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41SiEffOhmL._AC_US160_FMwebp_QL70_.jpg"
                />
             
            
              
            </div>
        </div>
    )
}
export default Banner
