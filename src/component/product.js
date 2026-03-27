import one from "../asset/images/one.png"
import two from "../asset/images/two.png"
import three from "../asset/images/three.png"
//Product component
function Product(){
  return(
    <div class="products">
            <div class="box">
                        <img src={one} alt="one"></img>
                        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
            <div class="box">
                <img src={two} alt="villain"></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div class="box">
                <img src={three} alt="Designs Club"></img>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>
        </div>
  )
}
export default Product