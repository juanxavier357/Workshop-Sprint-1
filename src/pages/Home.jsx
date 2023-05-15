import { useEffect, useState } from "react"
import ProductCard from '../components/ProductCard'
import './Home.scss'

function Home() {

  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchCards = async () => {
      const url = 'https://fakestoreapi.com/products'

      try {
        const response = await fetch(url)
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCards()
  }, [])

  return (
    <>
      <h1>Products</h1>
      <div className="container__products">
        {products.map((card, index) => (
          <ProductCard
            id={card.id}
            image={card.image}
            title={card.title}
            key={index}
          />
        ))}
      </div>
    </>
  )
}

export default Home