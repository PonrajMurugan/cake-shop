import React from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/redux/cartSlice';
import './productDetails.css'


    const productData =[
        {
        id: 1,
        type: "CAKES",
        card: [
          {
            id: 1,
            card_img: "https://assets.winni.in/product/primary/2023/3/83221.jpeg?dpr=1&w=400",
            about:"Delicious Chocolate Cake",
            price:"550",
         
          },
          {
            id: 2,
            card_img: "https://assets.winni.in/product/primary/2024/3/94562.jpeg?dpr=1&w=400",
            about:"Delicious Pinapple Cake",
            price:"599",
         
          },
          {
            id: 3,
            card_img: "https://assets.winni.in/product/primary/2023/3/83233.jpeg?dpr=1&w=400",
            about:"Delicious Black Forest Cake",
            price:"549",
           
          },
          {
            id: 4,
            card_img: "https://assets.winni.in/product/primary/2024/3/94560.jpeg?dpr=1&w=400",
            about:"Butterscotch Flavoursome Cake",
            price:"550",
          },
          {
            id:5,
            card_img: "https://assets.winni.in/product/primary/2014/8/45289.jpeg?dpr=1&w=400",
            about:"Tempting Ferro Rocher Cake",
            price:"1250",
        },
        {
            id:6,
            card_img: "https://assets.winni.in/product/primary/2024/3/94609.jpeg?dpr=1&w=400",
            about:"Delicious Butterscotch Cake",
            price:"1050",
          
        },
        {
            id:7,
            card_img: "https://assets.winni.in/product/primary/2024/3/94564.jpeg?dpr=1&w=400",
            about:"Marble Crunch Cake",
            price:"850",
          
        },
        {
            id:8,
            card_img: "https://assets.winni.in/product/primary/2024/3/94572.jpeg?dpr=1&w=400",
            about:"Frosting Red Velvet Cake",
            price:"900",
          
        }
        ]
      },
      {
        id: 2,
        type: "GIFT-HAMPER",
        card: [
          {
            id: 1,
            card_img: "https://assets.winni.in/product/primary/2023/4/84207.jpeg?dpr=1&w=400",
            about:"Personalized Mens Wallet",
            price:"550",
         
          },
          {
            id: 2,
            card_img: "https://assets.winni.in/product/primary/2024/1/93237.jpeg?dpr=1&w=400",
            about:"Joy Sweet And Savoury Sweet Hamper",
            price:"599",
         
          },
          {
            id: 3,
            card_img: "https://assets.winni.in/product/primary/2022/5/60804.jpeg?dpr=1&w=400",
            about:"Initial Coffee Name Mug",
            price:"549",
           
          },
          {
            id: 4,
            card_img: "https://assets.winni.in/product/primary/2024/5/95469.jpeg?dpr=1&w=400",
            about:"Park Avenue Luxury Hamper",
            price:"550",
          },
          {
            id:5,
            card_img: "https://assets.winni.in/product/primary/2024/5/95537.jpeg?dpr=1&w=400",
            about:"Sleek Silicon Covered Glass Bottle",
            price:"1250",
        },
        {
            id:6,
            card_img: "https://assets.winni.in/product/primary/2024/6/95836.jpeg?dpr=1&w=400",
            about:"Personalized Accessory Gift For Men",
            price:"1050",
          
        },
        {
            id:7,
            card_img: "https://assets.winni.in/product/primary/2014/10/53130.jpeg?dpr=1&w=400",
            about:"Lyrics Photo Frame",
            price:"850",
          
        },
        {
            id:8,
            card_img: "https://assets.winni.in/product/primary/2014/6/34501.jpeg?dpr=1&w=400",
            about:"Sweet Bouquet With Cake",
            price:"900",
          
        }
        ]
      },
      {
        id: 3,
        type: "FLOWER-BOUQUET",
        card: [
          {
            id: 1,
            card_img: "https://assets.winni.in/product/primary/2023/1/82086.jpeg?dpr=1&w=400",
            about:"Blooming Insight",
            price:"660",
         
          },
          {
            id: 2,
            card_img: "https://assets.winni.in/product/primary/2023/1/82313.jpeg?dpr=1&w=400",
            about:"8 Pink Roses",
            price:"549",
         
          },
          {
            id: 3,
            card_img: "https://assets.winni.in/product/primary/2022/9/73371.png?dpr=1&w=400",
            about:"Mixed Roses Arrangements",
            price:"1299",
           
          },
          {
            id: 4,
            card_img: "https://assets.winni.in/product/primary/2014/6/29518.jpeg?dpr=1&w=400",
            about:"Modern Romance",
            price:"630",
          },
          {
            id:5,
            card_img: "https://assets.winni.in/product/primary/2014/8/46844.jpeg?dpr=1&w=400",
            about:"Bold Beauty Of Love",
            price:"1099",
        },
        {
            id:6,
            card_img: "https://assets.winni.in/product/primary/2023/1/82027.jpeg?dpr=1&w=400",
            about:"Hypnotic Red Roses Box",
            price:"550",
          
        },
        {
            id:7,
            card_img: "https://assets.winni.in/product/primary/2023/1/82083.jpeg?dpr=1&w=400",
            about:"8 Red Roses Bouquet",
            price:"850",
          
        },
        {
            id:8,
            card_img: "https://assets.winni.in/product/primary/2023/1/81897.jpeg?dpr=1&w=400",
            about:"Luxe Love Roses Bouquet",
            price:"900",
          
        }
        ]
      },
      {
        id: 4,
        type: "PLANTS",
        card: [
          {
            id: 1,
            card_img: "https://assets.winni.in/product/primary/2024/4/95304.jpeg?dpr=1&w=400",
            about:"Personalized 2 Layer Bamboo Plant",
            price:"999",
         
          },
          {
            id: 2,
            card_img: "https://assets.winni.in/product/primary/2022/9/74184.jpeg?dpr=1&w=400",
            about:"Stress Reliever Green Money Plant",
            price:"549",
         
          },
          {
            id: 3,
            card_img: "https://assets.winni.in/product/primary/2023/6/85354.jpeg?dpr=1&w=400",
            about:"White Potted Table Kamini Plant",
            price:"649",
           
          },
          {
            id: 4,
            card_img: "https://assets.winni.in/product/primary/2014/10/50378.jpeg?dpr=1&w=400",
            about:"Double Layer Lucky Bamboo Plant",
            price:"630",
          },
          {
            id:5,
            card_img: "https://assets.winni.in/product/primary/2023/6/85448.jpeg?dpr=1&w=400",
            about:"Pleasing Peace Lily With Cute Monks",
            price:"749",
        },
        {
            id:6,
            card_img: "https://assets.winni.in/product/primary/2014/6/33474.jpeg?dpr=1&w=400",
            about:"Lucky With Ficus Bonsai And Buddha",
            price:"1150",
          
        },
        {
            id:7,
            card_img: "https://assets.winni.in/product/primary/2023/6/85572.jpeg?dpr=1&w=400",
            about:"Good Lucky Money With Beautiful Aglaonema",
            price:"650",
          
        },
        {
            id:8,
            card_img: "https://assets.winni.in/product/primary/2022/6/61486.jpeg?dpr=1&w=400",
            about:"Natural Combo Of Live Indoor Plants",
            price:"1200",
          
        }
        ]
      },
      {
        id: 5,
        type: "CHOCOLATE BOUQUET",
        card: [
          {
            id: 1,
            card_img: "https://assets.winni.in/product/primary/2023/4/84368.jpeg?dpr=1&w=400",
            about:"Elegant Love Sensation Chocolate Bouquet",
            price:"999",
         
          },
          {
            id: 2,
            card_img: "https://assets.winni.in/product/primary/2024/2/93766.jpeg?dpr=1&w=400",
            about:"Teddy Treats Love Combo Bouquet",
            price:"549",
         
          },
          {
            id: 3,
            card_img: "https://assets.winni.in/product/primary/2014/8/35073.jpeg?dpr=1&w=400",
            about:"Ferrero Rocher Chocolate Bouquet",
            price:"649",
           
          },
          {
            id: 4,
            card_img: "https://assets.winni.in/product/primary/2022/6/61655.jpeg?dpr=1&w=400",
            about:"Charismatic Rose And Teddy Arrangements",
            price:"630",
          },
          {
            id:5,
            card_img: "https://assets.winni.in/product/primary/2021/10/55169.jpeg?dpr=1&w=400",
            about:"Luxuru Style Chocolate Bouquet",
            price:"749",
        },
        {
            id:6,
            card_img: "https://assets.winni.in/product/primary/2024/2/93754.jpeg?dpr=1&w=400",
            about:"Ferror Royale Chocolate Bouquet",
            price:"1150",
          
        },
        {
            id:7,
            card_img: "https://assets.winni.in/product/primary/2023/9/89276.jpeg?dpr=1&w=400",
            about:"Delightful Chocolates Wrapped With Sunshine",
            price:"650",
          
        },
        {
            id:8,
            card_img: "https://assets.winni.in/product/primary/2022/6/61643.jpeg?dpr=1&w=400",
            about:"Wonderful Chocolate With Pink Roses Display",
            price:"1200",
          
        }
        ]
      },
      {
        id: 6,
        type: "FRAMES",
        card: [
          {
            id: 1,
            card_img: "https://assets.winni.in/product/primary/2022/11/77910.jpeg?dpr=1&w=400",
            about:"Customised Photo Frame Painting",
            price:"589",
         
          },
          {
            id: 2,
            card_img: "https://assets.winni.in/product/primary/2014/10/48093.jpeg?dpr=1&w=400",
            about:"Birthday Wishes Quality Photo Frame",
            price:"409",
         
          },
          {
            id: 3,
            card_img: "https://assets.winni.in/product/primary/2022/11/77920.jpeg?dpr=1&w=400",
            about:"Vinyl Personalized Photo Frame",
            price:"1509",
           
          },
          {
            id: 4,
            card_img: "https://assets.winni.in/product/primary/2024/4/95390.jpeg?dpr=1&w=400",
            about:"Personalized Loving Mother Frame",
            price:"850",
          },
          {
            id:5,
            card_img: "https://assets.winni.in/product/primary/2022/1/57709.jpeg?dpr=1&w=400",
            about:"Persinalized Quality Love Photo Frame",
            price:"779",
        },
        {
            id:6,
            card_img: "https://assets.winni.in/product/primary/2014/10/53186.jpeg?dpr=1&w=400",
            about:"Round Wood Framed Personalized Clock",
            price:"1450",
          
        },
        {
            id:7,
            card_img: "https://assets.winni.in/product/primary/2023/12/92092.jpeg?dpr=1&w=400",
            about:"Everlasting Love Personalized Photo Lamp",
            price:"1350",
          
        },
        {
            id:8,
            card_img: "https://assets.winni.in/product/primary/2014/10/48086.jpeg?dpr=1&w=400",
            about:"Happy Birthday Wishes Photo Frame ",
            price:"1700",
          
        }
        ]
      },
      {
        id: 7,
        type: "CHOCOLATE HAMPER",
        card: [
          {
            id: 1,
            card_img: "https://assets.winni.in/product/primary/2023/6/85387.jpeg?dpr=1&w=400",
            about:"Confectionary Delights Overloaded Chocolates",
            price:"5589",
         
          },
          {
            id: 2,
            card_img: "https://assets.winni.in/product/primary/2023/1/81611.jpeg?dpr=1&w=400",
            about:"All In One Chocolate Combo Luxury",
            price:"1409",
         
          },
          {
            id: 3,
            card_img: "https://assets.winni.in/product/primary/2014/8/37567.jpeg?dpr=1&w=400",
            about:"True Chocolate Desire Luxury Combo",
            price:"8509",
           
          },
          {
            id: 4,
            card_img: "https://assets.winni.in/product/primary/2023/6/85376.jpeg?dpr=1&w=400",
            about:"Blissful Chocolate Golden Surprise Hamper",
            price:"2850",
          },
          {
            id:5,
            card_img: "https://assets.winni.in/product/primary/2014/6/31618.jpeg?dpr=1&w=400",
            about:"Weaving Love Luxury Combo Chocolates",
            price:"2779",
        },
        {
            id:6,
            card_img: "https://assets.winni.in/product/primary/2014/6/31472.jpeg?dpr=1&w=400",
            about:"Put Magic In Your Bond Luxury Combo",
            price:"2450",
          
        },
        {
            id:7,
            card_img: "https://assets.winni.in/product/primary/2023/2/82662.jpeg?dpr=1&w=400",
            about:"Cocomae Luxury Chocolate Hamper Combo",
            price:"4350",
          
        },
        {
            id:8,
            card_img: "https://assets.winni.in/product/primary/2014/6/31480.jpeg?dpr=1&w=400",
            about:"Desire Of Hearts Luxury Choco Combo",
            price:"1900",
          
        }
        ]
      },
      {
        id: 8,
        type: "CHOCOLATE AND FLOWERS",
        card: [
          {
            id: 1,
            card_img: "https://assets.winni.in/product/primary/2022/6/61658.jpeg?dpr=1&w=400",
            about:"Adorable Expressions",
            price:"589",
         
          },
          {
            id: 2,
            card_img: "https://assets.winni.in/product/primary/2014/8/36346.jpeg?dpr=1&w=400",
            about:"Premium Gift",
            price:"1409",
         
          },
          {
            id: 3,
            card_img: "https://assets.winni.in/product/primary/2014/8/40352.jpeg?dpr=1&w=400",
            about:"Genetic Red Star",
            price:"609",
           
          },
          {
            id: 4,
            card_img: "https://assets.winni.in/product/primary/2022/6/61643.jpeg?dpr=1&w=400",
            about:"Wonderful Pink Roses",
            price:"850",
          },
          {
            id:5,
            card_img: "https://assets.winni.in/product/primary/2014/6/30536.jpeg?dpr=1&w=400",
            about:"Glowing With Love",
            price:"779",
        },
        {
            id:6,
            card_img: "https://assets.winni.in/product/primary/2023/1/81903.jpeg?dpr=1&w=400",
            about:"Love Affairs Of Roses",
            price:"850",
          
        },
        {
            id:7,
            card_img: "https://assets.winni.in/product/primary/2022/9/73371.png?dpr=1&w=400",
            about:"Mixed Rose Arrangements",
            price:"1350",
          
        },
        {
            id:8,
            card_img: "https://assets.winni.in/product/primary/2022/7/65056.jpeg?dpr=1&w=400",
            about:"Sweet Combo Love One",
            price:"1800",
          
        }
        ]
      }
      
     
    ];


    const ProductDetails = () => {
      const { id } = useParams();
      const dispatch = useDispatch();
      const product = productData.find(p => p.id === parseInt(id));
      
      if (!product) {
        return <div>Product not found</div>;
      }
      
      const handleAddToCart = (item) => {
        dispatch(addToCart(item)); 
        
      };
      
      return (
        <div  data-aos="flip-down" className="product-details-container">
          <div className="product-details-section">
            <h2 className="product-type-title">{product.type}</h2>
            <div className="product-details-grid">
              {product.card.map((item) => (
                <div key={item.id} className="product-card">
                  <img src={item.card_img} alt={item.about} className="product-card-img" />
                  <h3 className="product-card-title">{item.about}</h3>
                  <p className="product-card-price">Price: {item.price}</p>
                  <button 
                    className='btn btn-primary'
                    onClick={() => handleAddToCart(item)} 
                  >
                    Add Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default ProductDetails;