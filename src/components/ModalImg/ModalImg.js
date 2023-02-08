import {useState} from 'react'
import style from './ModalImg.module.css'

function ModalImg({ img }) {
    const [onHider, setOnHider] = useState(true);
    const Hider = () =>{
        setOnHider(false);
    }
    if(onHider){
  return (
    <div onClick={Hider} className={style.ModalImgSect}>
        <img src={img} alt="model of car scaled"  className={style.ModalImg}/>
    </div>
    )
    }else{
        return null;
    }
}
export default ModalImg