import React from 'react'
import {Carousel} from 'react-bootstrap'
import './Slider1.css'


function Slider1() {
  return(
 <>
 <Carousel>
 <Carousel.Item>
        <img
          className="d-block w-100"
          src="//www.bluefly.com/cdn/shop/files/shutterstock_773947222_97e3ce6e-89fa-4a0f-a5d5-d0d373ae995e_1400x.jpg?v=1660340662"alt=""
        />
        <Carousel.Caption>
          <h3>WORLD OF VALENTINO</h3>
          
          <h5>Shop Handbags, Shoes, Apparel, Accessories & More</h5>
          <button style={{width:"200px", height:"50px", }}><h5>SHOP VALENTINO</h5> </button>
        </Carousel.Caption>
      </Carousel.Item>
 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//www.bluefly.com/cdn/shop/files/shutterstock_1207523875_1400x.jpg?v=1660338294"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>GUCCI</h5>
         <h5>THIS ICONIC BRAND IS REPRESENTED WITH GREAT DESIGN & CONTEMPORARY LIFESTYLE</h5>
         <button style={{width:"200px", height:"50px", }}><h5>SHOP GUCCI</h5></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//www.bluefly.com/cdn/shop/files/shutterstock_2056290722_1400x.jpg?v=1660337209"
          alt="Third slide"
        />
        <Carousel.Caption>
         <h3>BOTTEGA VENETA</h3>
          <h5>UNSURPASSED CRAFTSMANSHIP & THE SIGNATURE WOVEN LEATHER</h5>
          <button style={{width:"200px", height:"50px", }}><h5>SHOP NOW</h5></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//www.bluefly.com/cdn/shop/files/shutterstock_324325775_1_1400x.jpg?v=1660337720"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>PRADA</h3>
          <h5>AN ITALIAN FASHION HOUSE MADE WITH GLASSIC & ECCENTRIC STYLE </h5>
          <button style={{width:"200px", height:"50px", }}><h5>SHOP PRADA</h5></button>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="//www.bluefly.com/cdn/shop/files/pietro-schellino-RMMmKR8RCoo-unsplash_1400x.jpg?v=1687447308"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>OFF-WHITE</h3>
          <h5>A TOP FASHION BRAND WITH CULTIVATES THE MOST ELEVATED DESIGN OF STYLE </h5>
          <button style={{width:"200px", height:"50px", }}><h5>SHOP NOW</h5></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="//www.bluefly.com/cdn/shop/files/shutterstock_390723769_4_7_1400x.jpg?v=1660348351"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>LUXE HANDBAGS</h3>
          <h5>Style from Gucci, Prada, Saint Laurent, Bottega Veneta, Fendi & More</h5>
          <button style={{width:"200px", height:"50px", }}><h5>SHOP HANDBAGS</h5></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.karousell.com/media/photos/products/2022/6/21/gucci_shoes_sneakers_women_pea_1655826380_f380b468_progressive.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>DESIGNER SHOES</h3>
          <h5>Step Into The New Season With New Designer Shoes</h5>
          <button style={{width:"200px", height:"50px" }}><h5>SHOP WOMEN</h5></button>
        </Carousel.Caption>
      </Carousel.Item>
     
 </Carousel>
 <div className="text">
        <div className="new">
            <h2>NEW ARRIVALS</h2>
        </div>
        <div className="button">
            <button>VIEW ALL</button>
        </div>
        </div>
  </>
  )
}

export default Slider1