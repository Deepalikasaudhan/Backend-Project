import Container from 'react-bootstrap/Container';

import './Navbar.css'

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
          
           
           
   <header>
      <nav>
        <div className="center">

          <div className="navlogo">
            <img src="https://www.bluefly.com/cdn/shop/files/BLUEFLY-LOGO-11-20.png?v=1613183141" alt="" />
        </div>
        </div>
        <div className='right'>
          <div className="icon">
            <span className="icon"><ion-icon name="search"></ion-icon>Search</span>
            <span className='icon'><ion-icon name="person"></ion-icon></span>
            <span className='icon'><ion-icon name="heart-empty"></ion-icon></span>
            <span className="icon"><ion-icon name="appstore"></ion-icon></span>
          </div>

        </div>
      </nav>
      


    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <NavDropdown title="CLOTHING" id="basic-nav-dropdown">
            
           <img src="https://www.bluefly.com/cdn/shop/files/women.jpg?v=1613619704" alt="" style={{height:130}} />
           
            <div className="right">
            <NavDropdown.Item href="#action/3.1">MEN'S CLOTHING</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Activewear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Casual Button-Down Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Coats & Jackets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dress Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jeans & Denim</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Pants</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Polo Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shorts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sport Coats & Blazers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Suits & Separates</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sweaters</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sweatshirts & Hoodies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Swimwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">T-Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Underwear & Socks</NavDropdown.Item>
              

            </div>
            <div className="left">
            
              <NavDropdown.Item href="#action/3.1">WOMEN'S CLOTHING</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Activewear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Coats & Jackets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Dresses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Jeans & Denim</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jumpsuits & Rompers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Lingerie & Hosiery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Loungewear & Sleepwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pants & Leggings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Skirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sweaters</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sweatshirts & Hoodies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Swimwear & Coverups</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Coats & Jackets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Dresses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Jeans & Denim</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jumpsuits & Rompers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Lingerie & Hosiery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Loungewear & Sleepwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pants & Leggings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tops & Tees</NavDropdown.Item>
             </div>
              
            </NavDropdown>
           

            <NavDropdown title="SHOES" id="basic-nav-dropdown">
            <div className="right1">
              <NavDropdown.Item href="#action/3.3">WOMEN'S DESIGNERS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Alexander McQueen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Balenciaga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bottega Veneta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Christian Louboutin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dolce & Gabbana</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fendi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gianvito Rossi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gucci</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jimmy Choo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Manolo Blahnik</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Saint Laurent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Stuart Weitzman</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Salvatore Ferragamo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Valentino</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">VEJA</NavDropdown.Item>
              </div>
              <div className="left1">
              <NavDropdown.Item href="#action/3.1">WOMEN'S SHOES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Boots</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Espadrilles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Flats</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mules & Slides</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Oxfords & Loafers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pumps & Heels</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sandals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Slippers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sneakers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Wedges</NavDropdown.Item>
              </div>
              <div className="rig">
              <NavDropdown.Item href="#action/3.3">MEN'S SHOES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Boots</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Drivers, Loafers & Slip-Ons</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Oxford & Derby Shoes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sandals & Flip Flops</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Slippers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sneakers</NavDropdown.Item>
              
              </div>
              <div className="right2">
              <NavDropdown.Item href="#action/3.3">MEN'S DESIGNERS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Alexander McQueen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Balenciaga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bottega Veneta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Burberry</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Christian Louboutin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Common Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dolce & Gabbana</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Giuseppe Zanotti</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Golden Goose</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gucci</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Off-White</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Saint Laurent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Salvatore Ferragamo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Valentino</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Versace</NavDropdown.Item>
              
              </div>
           <NavDropdown.Divider />
              
            </NavDropdown>
            <NavDropdown title=" HANDBAGS" id="basic-nav-dropdown">
              <img src="https://www.bluefly.com/cdn/shop/files/handbag2.jpg?v=1613619716" alt="" style={{height:160}} />
              <div className="li1">
              <NavDropdown.Item href="#action/3.1">ALL HANDBAGS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Backpacks</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.1">Bucket Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Clutches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Crossbody Bags</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.1">Hobo Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Satchels</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shoulder Bags</NavDropdown.Item> 
              <NavDropdown.Item href="#action/3.1">Tote Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Travel Bags & Luggage</NavDropdown.Item>
               
              </div>
              <div className="li2">
              <NavDropdown.Item href="#action/3.1">TOP DESIGNERS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Balenciaga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Bottega Veneta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Burberry</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Celine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Chloe</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dolce & Gabbana</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fendi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Givenchy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gucci</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mario Valentino</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Prada</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Saint Laurent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Salvatore Ferragamo</NavDropdown.Item>
              </div>
              <div className="li3">
              <NavDropdown.Item href="#action/3.3">PRE-OWNED</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bucket Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Clutches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Crossbody Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hobo Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Satchels</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shoulder Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tote Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Wallets & Cardholders</NavDropdown.Item>
              
              </div>
              
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="DESIGNERS" id="basic-nav-dropdown">
              <img src="https://www.bluefly.com/cdn/shop/files/handbag.jpg?v=1613619701" alt="" style={{height:"150px"}}/>
              <div className="lig2">
              <NavDropdown.Item href="#action/3.2">Off-White</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Palm Angels</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Prada</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Saint Laurent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Salvatore Ferragamo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Stella McCartney</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Stuart Weitzman</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tom Ford</NavDropdown.Item>
              </div>
              <div className="lig1">
            <NavDropdown.Item href="#action/3.3">FEATURED DESIGNERS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Alexander McQueen</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Balenciaga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bottega Veneta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Burberry</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Celine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Chloe</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Christian Louboutin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dior</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Dolce & Gabbana</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fendi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gianvito Rossi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Givenchy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gucci</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jimmy Choo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Manolo Blahnik</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mario Valentino</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Moschino</NavDropdown.Item>
              </div>
              
            </NavDropdown>
            <NavDropdown title="SUNGLASSES" id="basic-nav-dropdown">
              <div className="list1">
              <NavDropdown.Item href="#action/3.3">WOMEN'S SUNGLASSES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Balenciaga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Celine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dior</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Emilio Pucci</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fendi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Givenchy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gucci</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jimmy Choo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Oliver Peoples</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Prada</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Roberto Cavalli</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Saint Laurent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Salvatore Ferragamo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tom Ford</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Versace</NavDropdown.Item>
              </div>
              <div className="list2">
              <NavDropdown.Item href="#action/3.3">MEN'S SUNGLASSES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Burberry</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Carrera</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dior</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ermenegildo Zegna</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Givenchy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gucci</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jimmy Choo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Montblanc</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Persol</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Prada</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ray Ban</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Saint Laurent</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Salvatore Ferragamo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tom Ford</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Versace</NavDropdown.Item>
              </div>
            </NavDropdown>
            <NavDropdown title=" JEWELRY & WATCHES" id="basic-nav-dropdown">
              <div className="jewlery1">
              <NavDropdown.Item href="#action/3.1">JEWELRY</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bracelets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Brooches & Pins</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Earrings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Rings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Necklaces</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Watches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Men's Jewelry</NavDropdown.Item>
              </div>
              <div className="jewlery2">
              <NavDropdown.Item href="#action/3.1">FEATURED DESIGNER WATCHES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Calvin Klein</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">CCCP</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">CT Scuderia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Daniel Wellington</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Diesel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Esprit</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Glycine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gucci</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hamilton</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Invicta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Jacques Lemans</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jacy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Juicy Couture</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Michael Kors</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mido</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pierre Cardin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Redo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Red Line</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Salvatore Ferragamo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Seiko</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">TechnoMarine</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Thomas Earnshaw</NavDropdown.Item>
              </div>
              <NavDropdown.Divider />
              
            </NavDropdown>
            <NavDropdown title="ACCESSORIES" id="basic-nav-dropdown">
              <div className="ass1">
              <NavDropdown.Item href="#action/3.1">WOMEN'S ACCESSORIES</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bag Charms, Straps, & Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Belts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cosmetic Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hats</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Gloves</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Scarves & Wraps</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Optical & Reading Glasses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Sunglasses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Travel Bags & Luggage</NavDropdown.Item>
              </div>
              
              <NavDropdown.Divider />
      
            </NavDropdown>
            <NavDropdown title=" HOME" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">HOME</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Luggage & Travel Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">BEAUTY</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Perfume</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
            <NavDropdown title=" UNDER $50" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SHOP BY PRICEPOINT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shop All Under $50</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Under $25</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">$25-$49.99</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SHOP BY CATEGORY</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mens</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jewelry</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Handbags & Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
            {/* <NavDropdown title=" CLEARANCE" id="basic-nav-dropdown">
              </NavDropdown> */}
              <div className="nav">
            <a href="./CLEARANCE">CLEARANCE</a>
            </div>
          
      </Container>
    </Navbar>
    </header>
  );
}

export default BasicExample;