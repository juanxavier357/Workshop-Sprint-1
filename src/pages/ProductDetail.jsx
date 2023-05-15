import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import ProductCard from '../components/ProductCard'
import './ProductDetail.scss'

function ProductDetail() {

  const { id } = useParams()
  const [card, setCard] = useState({})
  const [newcard, setNewCard] = useState({})

  useEffect(() => {
    const fetchCards = async () => {
      const url = `https://fakestoreapi.com/products/${id}`
  
      try {
        const response = await fetch(url)
        const data = await response.json()
        setCard(data)
        setNewCard(data.rating)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCards()
  }, [id])

  useEffect(() => {
    let prop1 = document.getElementById("cambiar");
    prop1.style.display = "none";

    let prop2 = document.getElementById("crecer");
    prop2.style.height = "390px";
  })


  return (
    <>
      <h2>Product Detail {id}</h2>
      <div className="container__product">
        <ProductCard
          image={card.image}
          title={card.title}
          price={card.price}
          description={card.description}
          category={card.category}
          rate={newcard.rate}
          count={newcard.count}
        />
      </div>
    </>
  )
}

export default ProductDetail