import Bag1 from "./bag.webp";
import Bag2 from "./bag1.webp";
import Bag3 from "./bag2.webp";
import Bag4 from "./bag3.webp";
import Bag5 from "./bag4.webp";
import Cloth1 from "./cloth.webp";
import Cloth2 from "./cloth1.webp";
import Cloth3 from "./cloth3.webp";
import Cloth4 from "./cloth4.webp";
import Cloth5 from "./cloth5.webp";
import Cloth6 from "./popular1.jpg";
import Cloth7 from "./popular4.jpg";
import Cloth8 from "./popular6.jpg";
import Cloth9 from "./popular6.jpg";
import Glass1 from "./glass.webp";
import Glass2 from "./glass1.webp";
import Glass3 from "./sunglass.webp";
import Glass4 from "./popular3.jpg";
import Raincoat from "./raincoat.webp";
import Shoe1 from "./shoe.webp";
import Shoe2 from "./shoe1.webp";
import Shoe3 from "./shoe2.webp";
import Shoe4 from "./shoe3.webp";
import Shoe5 from "./shoe4.webp";
import Shoe6 from "./shoe5.webp";
import Shoe7 from "./shoe6.webp";
import Shoe8 from "./shoe7.webp";
import Shoe9 from "./popular5.jpg";
import WhitePant from "./popular2.jpg";

const Data = [
      {
        id: 1,
        name: 'Loro Piana',
        imgSrc:Cloth6 ,
        price: 29,
        description: ' dolor sit, consectetur adipiscing.',
        category:'man',
        rating: 3,
        itemCategory:'cloth',
        quantity:1
      },
      {
        id: 2,
        name: 'Cargo Pants',
        imgSrc: WhitePant,
        price: 39,
        description: 'Pellentesque hmes turpis egestas.',
        category:'man',
        rating: 4,
        itemCategory:'cloth',
        quantity:1
        
      },
      {
        id: 3,
        name: 'Biddha Glasses',
        imgSrc: Glass4,
        price: 49,
        description: ' purus volutpat iaculis. facilisi.',
        category:'man',
        rating: 3,
        itemCategory:'glass',
        quantity:1
      },
      {
        id: 4,
        name: 'Brown Bomber',
        imgSrc: Cloth7,
        price: 59,
        description: 'Maecenas venenatis in vel odio.',
        category:'man',
        rating: 3,
        itemCategory:'cloth',
        quantity:1
      },
      {
        id: 5,
        name: 'Leather Shoes',
        imgSrc: Shoe9,
        price: 69,
        description: 'Vivamus ris at tincidunt accumsan.',
        category:'women',
        rating: 3,
        itemCategory:'shoe',
        quantity:1
      },
      {
        id: 6,
        name: 'Tshirt',
        imgSrc: Cloth9,
        price: 68,
        description: 'arius semper eu at orci.',
        category:'man',
        rating: 3,
        itemCategory:'cloth',
        quantity:1
      },{
        id: 7,
        name: "Leather Bag",
        price: 110,
        description: "Un sac en cuir élégant pour tous les jours.",
        imgSrc: Bag1,
        category:'man',
        rating: 4,
        itemCategory:'bag',
        quantity:1
      },
      {
        id: 8,
        name: "Traveler's Backpack",
        price: 119,
        description: "Un sac à dos idéal pour les aventures.",
        imgSrc: Bag2,
        category:'man',
        rating: 3,
        itemCategory:'bag',
        quantity:1
      },
      {
        id: 9,
        name: "Tote Bag",
        price: 139,
        description: "Sac fourre-tout à la mode pour toutes les occasions.",
        imgSrc: Bag3,
        category:'man',
        rating: 3,
        itemCategory:'bag',
        quantity:1
      },
      {
        id: 10,
        name: "Classic Bag",
        price: 159,
        description: "Un sac messager classie pour le travail.",
        imgSrc: Bag4,
        category:'women',
        rating: 3,
        itemCategory:'bag',
        quantity:1
      },
      {
        id: 11,
        name: "Duffel Bag",
        price: 169,
        description: "Un sac de sport pour vos séances d'entraînement.",
        imgSrc: Bag5,
        category:'kid',
        rating: 3,
        itemCategory:'bag',
        quantity:1
      },
      {
        id: 13,
        name: "Casual T-shirt",
        price: 19,
        description: "T-shirt décontracté en coton",
        imgSrc: Cloth1,
        category:'women',
        rating: 3,
        itemCategory:'cloth',
        quantity:1
      },
      {
        id: 14,
        name: "Denim Jacket",
        price: 169,
        description: "Veste en jean élégante",
        imgSrc: Cloth2,
        category:'women',
        rating: 4,
        itemCategory:'cloth',
        quantity:1
      },
      {
        id: 15,
        name: "Striped Dress",
        price: 149,
        description: "Robe à rayures chic",
        imgSrc: Cloth3,
        category:'women',
        rating: 3,
        itemCategory:'cloth',
        quantity:1
      },
      {
        id: 16,
        name: "Summer Shorts",
        price: 134,
        description: "Shorts d'été confortables",
        imgSrc: Cloth4,
        category:'women',
        rating: 3,
        itemCategory:'cloth',
        quantity:1
      },
      {
        id: 17,
        name: "Formal Blouse",
        price: 39,
        description: "Chemisier formel élégant",
        imgSrc: Cloth5,
        category:'women',
        rating: 4,
        itemCategory:'cloth',
        quantity:1
      },
      {
        id: 18,
        name: "Tshirt",
        price: 64,
        description: "Jupe élégante pour toutes les occasions",
        imgSrc: Cloth9,
        category:'man',
        rating: 3,
        itemCategory:'cloth',
        quantity:1
      },
      {
        id: 19,
        name: "Classic Glasses",
        price: 99,
        description: "Des lunettes classiques élégantes pour toutes les occasions.",
        imgSrc: Glass1,
        category:'women',
        rating: 4,
        quantity:1,
        itemCategory:'glass'
      },
      {
        id: 20,
        name: "Modern Eyewear",
        price: 79,
        description: "Des lunettes modernes un design avant-gardiste.",
        imgSrc: Glass2,
        category:'women',
        rating: 3,
        quantity:1,
        itemCategory:'glass'
      },
      {
        id: 21,
        name: "Fashion Sunglasses",
        price: 77,
        description: "Des lunettes de soleil à la pour un style ultime.",
        imgSrc: Glass3,
        category:'man',
        rating: 4,
        quantity:1,
        itemCategory:'glass'
      },
      {
        id: 22,
        name: "Raincoat",
        price: 154,
        description: "Pull populaire en laine",
        imgSrc: Raincoat,
        category:'man',
        rating: 3,
        quantity:1,
        itemCategory:'cloth'
      },
      {
      id: 23,
      name: "Nike",
      price: 123,
      description: "Chaussure élégante pour toutes les occasions.",
      imgSrc: Shoe1,
      category:'man',
      rating: 4,
      quantity:1,
      itemCategory:'shoe'
    },
    {
      id: 24,
      name: "Adidas",
      price: 179,
      description: "Confortable et idéal pour le sport.",
      imgSrc: Shoe2,
      category:'kid',
      rating: 3,
      quantity:1,
      itemCategory:'shoe'
    },
    {
      id: 25,
      name: "Boot",
      price: 89,
      description: "Design moderne avec une touche de style.",
      imgSrc: Shoe3,
      category:'women',
      rating: 4,
      quantity:1,
      itemCategory:'shoe'
    },
    {
      id: 26,
      name: "New Balance",
      price: 109,
      description: "Pour ceux qui recherchent la performance.",
      imgSrc: Shoe4,
      category:'kid',
      rating: 3,
      quantity:1,
      itemCategory:'shoe'
    },
    {
      id: 27,
      name: "Reebok",
      price: 69,
      description: "Léger et idéal pour les activités physiques.",
      imgSrc: Shoe5,
      category:'kid',
      rating: 4,
      quantity:1,
      itemCategory:'shoe'
    },
    {
      id: 28,
      name: "Vans",
      price: 59,
      description: "Un style décontracté qui ne se démode jamais.",
      imgSrc: Shoe6,
      category:'man',
      rating: 3,
      quantity:1,
      itemCategory:'shoe'
    },
    {
      id: 29,
      name: "Converse",
      price: 49,
      description: "L'icône intemporelle du style décontracté.",
      imgSrc: Shoe7,
      category:'man',
      rating: 4,
      quantity:1,
      itemCategory:'shoe'
    },
    {
      id: 30,
      name: "Under Armour",
      price: 119,
      description: "Performance et durabilité pour les athlètes.",
      imgSrc: Shoe8,
      category:'women',
      rating: 3,
      quantity:1,
      itemCategory:'shoe'
    },
    {
      id: 31,
      name: "Lancer",
      price: 129,
      description: "La marque populaire du moment.",
      imgSrc: Shoe9,
      category:'women',
      rating: 3,
      quantity:1,
      itemCategory:'shoe'
    },
]

export default Data;