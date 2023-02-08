import {useState, useRef, useEffect} from 'react';
import { useUser } from '../../App';
import { useNavigate } from 'react-router-dom';
import ModalImg from '../ModalImg/ModalImg';
import style from './Card.module.css'
function Card({ img, model, text, id  }) {
const [onHover, setOnHover] = useState(false);
const [onModule, setOnModule] = useState(false);
const textWrap = useRef()
const textInner = useRef()
const { username } = useUser()
useEffect(() => {
    const heigth = textInner.current.getBoundingClientRect().height
    if(onHover){
    textWrap.current.style.height = `${heigth}px`
}else{
    textWrap.current.style.height = `56px`
}
}, [onHover]);
const ModalImgFunc = (e) => {
  e.stopPropagation()
  setOnModule(true)
}
const navigate = useNavigate()
function RedirectFunction() {
  if (username) {
    return(navigate("/product/"+id))
  }
  return(navigate("/login", {state: {url: "/product/"+id}}))

}
  return (
    <>
    <div onClick={RedirectFunction} className={style.carItemWrap}>
    <div className={style.CardItem} onMouseOver={(event) =>{setOnHover(true)}} onMouseLeave={(event) =>{setOnHover(false)}} >
        <img src={img} onClick={ModalImgFunc}alt="model of car" className={style.carImg} />
        <div className={style.carDesription}>
        <h2 className={style.carModel}>{model}</h2>
        <div ref={textWrap} className={style.carTextWrap}>
            <p ref={textInner} className={style.carText}>{text}</p>
        </div>
        </div>
    </div>
    </div>
    {onModule ? <ModalImg img={img}/> : null}
    </>
  )
}
export default Card