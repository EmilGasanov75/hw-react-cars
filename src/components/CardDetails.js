import { useParams } from 'react-router-dom'
import { data } from './CardList/CardList'
import { useMemo } from 'react'
function CardDetails ( ) {
    const params = useParams()
    const details = useMemo(() => {
        console.log(data);
        return(
            data.find((item) => {
                return(`${item.key}` === params.id)
            })
        )
        
    }, [params, data])
    console.log(details)
    return(
        <div>
            <img src={details.img}></img>
            <h1>
                {details.model}
            </h1>
        </div>
    )
}
export default CardDetails