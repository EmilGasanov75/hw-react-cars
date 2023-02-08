import styles from "./Header.module.css"
import { Link } from "react-router-dom"
const data = [
    {
      title: 'Latest Competitions',
      link: '/competitions'
    },
    {
      title: 'Entry Lists',
      link: '/lists'
    },
    {
      title: 'Live Draws',
      link: '/draws'
    },
    {
      title: 'Winners',
      link: '/winners'
    },
    {
      title: 'Gift Cards',
      link: '/cards'
    },
    {
      title: 'How it Works',
      link: '/how-it-works'
    }
  ]
function Header() {
    return(
        <div>
            <nav>
            {data.map((dB,i) => {
                    return <Link key={i} to={dB.link}>{dB.title}</Link>
                }
                )}
            </nav>
        </div>
    )
}

export default Header