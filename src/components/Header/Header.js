import {React} from 'react'
import {useSelector} from 'react-redux'
import './Header.css'

const Header = () => {
  const { name} = useSelector(state => state.user)
  return (
    <div className='header'>
        <h1>Coderz Academy</h1>
        <p>Hello {name}</p>
    </div>
  )
}

export default Header