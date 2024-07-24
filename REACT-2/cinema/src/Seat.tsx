import { useState } from 'react';
import './Seat.css';

type SeatState = 'available' | 'reserved';

function Seat() {
  const [seatState, setSeatState] = useState<SeatState>('available');

  const changeState = () => {
    setSeatState(prevState => prevState === 'available' ? 'reserved' : 'available');
  }

  const seatImage = seatState === 'reserved' ? "/src/assets/seatReserved.png" : "/src/assets/seat.png";

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
