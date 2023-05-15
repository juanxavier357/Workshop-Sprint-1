import PropTypes from "prop-types"
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from "react"
import "./ProductCard.scss"

function ProductCard(props) {

    const { id, image, title, price, description, category, rating_rate, rating_count } = props

    const navigate = useNavigate()
    let azar = Math.round(Math.random() + 1)
    const [seconds, setSeconds] = useState(59)
    const [minutes, setMinutes] = useState(azar)
    const timer = useRef()

    const handleClick = (event) => {
        let index = event.target.id
        if (seconds === 0 && minutes === 0) {
            let btn = document.getElementById(index);
            btn.disabled = true;
        } else {
            navigate(`/productdetail/${index}`)
        }
    }

    useEffect(() => {
        timer.current = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            } else if (seconds === 0) {
                if (minutes > 0) {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                }
            }
        }, 1000)
        return () => clearInterval(timer.current)
    },)

    return (
        <>
            <div id="crecer" className="content__card">
                <div className="content__card--image">
                    <img src={image} alt={title} width="100px" height="100px" />
                </div>
                <h3>{title}</h3>
                <div id="cambiar" className={"content__card--time"}>
                    <h4>{minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}</h4>
                    <button id={`${id}`} onClick={handleClick}>Go To Detail</button>
                </div>
                <div className="content__card--info">
                    <p><strong>{price}</strong></p>
                    <p>{description}</p>
                    <div className="content__card--info--small">
                        <p>{category}</p>
                        <p>{rating_rate}</p>
                        <p>{rating_count}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

ProductCard.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    rating_rate: PropTypes.number,
    rating_count: PropTypes.number,
}

export default ProductCard