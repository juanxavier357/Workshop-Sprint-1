import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import ProductCard from '../components/ProductCard'
import './ProductDetail.scss'

function ProductDetail() {

  const itemId = useParams().id
  const [card, setCard] = useState({})

  useEffect(() => {
    const fetchCards = async () => {
      const url = `https://fakestoreapi.com/products/${itemId}`

      try {
        const response = await fetch(url)
        const data = await response.json()
        setCard(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCards()
  }, [itemId])

  let prop1 = document.getElementById("cambiar");
  prop1.style.display = "none";

  let prop2 = document.getElementById("crecer");
  prop2.style.height = "390px";

  return (
    <>
      <h2>Product Detail {itemId}</h2>
      <div className="container__product">
        <ProductCard
          id={card.id}
          image={card.image}
          title={card.title}
          price={card.price}
          description={card.description}
          category={card.category}
          rating_rate={card.rate}
          rating_count={card.count}
        />
      </div>
    </>
  )
}

export default ProductDetail