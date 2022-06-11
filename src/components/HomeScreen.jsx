import { Link } from 'react-router-dom';
import image from '../components/flowersOnTable.jpg';

function HomeScreen() {
  return (
    <>
    <div className='homeContainer'>
      <div className='mainHomeContainer'>
        <img className='frontImg' src={image} alt='flowers on table' width="850" height="520"></img>
      </div>
      <div className='titleHomeContainer'>
        <h2 className='messageTitle'>Bouquets for every occasion!</h2>
        <p className='messageHome'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat imperdiet sed. Mauris nunc congue
            nisi vitae suscipit tellus. A condimentum vitae sapien pellentesque  tellus. A condimentum vitae sapien pellentesque Mauris nunc congue Maur Mauris.
          </p>
          <Link to='/shop' className='orderBtn'>Order now</Link>
      </div>
    </div>
    </>
  )
}

export default HomeScreen
