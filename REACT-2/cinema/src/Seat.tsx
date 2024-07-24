import { useState } from 'react';
import seatImageAvailable from '/src/assets/seat.png';
import seatImageReserved from '/src/assets/seatReserved.png';
import './styles/Seat.css';

type SeatState = 'available' | 'reserved';

function Seat() {
  const [seatState, setSeatState] = useState<SeatState>('available');

  const changeState =() => {
    setSeatState(prevState => prevState === 'available' ? 'reserved' : 'available');
  };  

  const seatImage = seatState === 'reserved' ? seatImageReserved : seatImageAvailable;

  return (
    <div className="seat-container" onClick={changeState}>
      <img 
        src={seatImage} 
        alt="Seat" 
        className='seat'/>
      <p className='seat-status'>{seatState}</p>
    </div>
  );
}

export default Seat;
