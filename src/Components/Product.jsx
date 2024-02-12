import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Product.css'


function Responsive() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider-container">
        <div className="heading">
       <h1 style={{textAlign:"center"}}>RECOMMENDED PRODUCTS</h1>


        </div>
        <Slider {...settings}>
          <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/568612-ZABWZ-1000__00002__1_6bcb45ee-a509-4d39-b29e-fb9f1f66b6be_1800x1800.jpg?v=1707085952" alt="" />
            <div className="card-body">
            <p>GUCCI MENS LABEL COTTON POPLIN TROUSERS</p>
            </div>
          </div>
          <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/569770-XDAS9-2273__90136__1_1800x1800.jpg?v=1694528600" alt="" />
            <div className="card-body">
            <p>GUCCI MENS CREST LOGO PANTS</p>
            </div>
          </div>
          <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/568598-ZABWY-4265__40053__1_bf921799-c902-4407-9692-7a98ed5144b1_1800x1800.jpg?v=1707080273" alt="" />
            <div className="card-body">
            <p>GUCCI MENS EMBROIDERED LOGO PANTS</p>
            </div>
          </div>
          <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/569557-ZABPM-4307__40001__1_26a18bdf-b6ec-4b33-915d-0c77362e3164_1800x1800.jpg?v=1706738868" alt="" />
            <div className="card-body">
            <p>GUCCI MENS STRIPED WOOL-BLEND CREPE TRACK PANTS</p>
            </div>
          </div>
          <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/568770-ZAA5R-2185__20009__1_1800x1800.jpg?v=1707084788" alt="" />
            <div className="card-body">
            <p>GUCCI MENS CHECKED LINEN CROPPED TROUSERS</p>
            </div>
          </div>
          <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/568612-ZABWZ-1902__90124__1_1800x1800.jpg?v=1704045653" alt="" />
            <div className="card-body">
            <p>GUCCI MENS POPLIN PANT</p>
            </div>
          </div>
          <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/572728-XJA4Y-4823__40053__1_1800x1800.jpg?v=1707083609" alt="" />
            <div className="card-body">
            <p>GUCCI MENS HORSEBIT AND BASKETWEAVE COTTON SHORTS</p>
            </div>
          </div>
          <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/546443-Z3786-2055__20443__1_1800x1800.jpg?v=1707081299" alt="" />
            <div className="card-body">
            <p>GUCCI MENS COTTON DRILL PANTS</p>
            </div>
          </div>
          <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/572616-XDAKY-4206__40001__1_1800x1800.jpg?v=1694530984" alt="" />
            <div className="card-body">
             <p>GUCCI MENS DENIM DRAWSTRING PANT</p>
            </div>
          </div>
          <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/576547-XDAQB-9192__10231__1_1800x1800.jpg?v=1692252361" alt="" />
            <div className="card-body">
            <p>GUCCI MENS BI-MATERIAL JOGGING PANTS</p>
            </div>
          </div>
          <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/562248-XJAT2-6417__60013__1_1800x1800.jpg?v=1707078564" alt="" />
            <div className="card-body">
            <p>GUCCI MENS PATTERN JOGGERS</p>
            </div>
            </div>
            <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/573276-XJA6N-3134__90813__1_1800x1800.jpg?v=1707061963" alt="" />
            <div className="card-body">
            <p>GUCCI MENS GEOMETRIC TRACK PANT</p>
            </div>
            </div>
            
            <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/572621-XDAKY-4206__40001__1_1800x1800.jpg?v=1707061589" alt="" />
            <div className="card-body">
            <p>GUCCI MENS CORDUROY PATCH SHORTS</p>
            </div>
            </div>
            <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/576548-XDAM2-4009__40061__1_1800x1800.jpg?v=1707074123" alt="" />
            <div className="card-body">
            <p>GUCCI MENS DISTRESSED DENIM SHORTS</p>
            </div>
            </div>
            <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/575776-XJBBG-6208__60145__1_522750f0-61d1-46f4-acea-f481c207d7f0_1800x1800.jpg?v=1683894632" alt="" />
            <div className="card-body">
            <p>GUCCI MENS STRIPED JOGGING PANT</p>
            </div>
            </div>
            <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/572666-XDAOT-1082__00002__1_934a8ce6-50c2-468d-9af5-57be2a94a568_1800x1800.jpg?v=1707081978" alt="" />
            <div className="card-body">
            <p>GUCCI MENS MIXED MEDIA TRACK JACKET</p>
            </div>
            </div>
            <div className="card">
            <img src="https://www.bluefly.com/cdn/shop/files/572725-XJA4Y-3129__90813__1_959fc7e3-f45b-42b3-ae02-b085ee512db5_1800x1800.jpg?v=1706139512" alt="" />
            <div className="card-body">
            <p>GUCCI MENS MIXED MEDIA TRACK JACKET</p>
            </div>
          </div>
          
        </Slider>
      </div>
      
    );
  }
  
  export default Responsive;
  