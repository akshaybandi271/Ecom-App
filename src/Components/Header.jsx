import './Components.css'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
        <header className="header">

            <h1 className='heading'>Apperal Kart</h1>

            <nav className='header-navBar'>

                <p className='page-link'>
                   <Link to='/' className='link'>Home</Link> 
                </p>

                <p className='page-link'>
                   <Link to='/cart' className='link'>Cart</Link> 
                </p>

            </nav>
        </header>
  )
}
