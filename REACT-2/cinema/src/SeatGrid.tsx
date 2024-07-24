import Seat from './Seat';
import './SeatGrid.css';

interface SeatGridProps {
    rows: number;
    cols: number;
  }

const SeatGrid = ({ rows, cols }: SeatGridProps) => {
    const seats = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
        const seatId = `${String.fromCharCode(65 + i)}${j}`;
        seats.push(
            <div key={seatId} className="seat-item">
            <p className="seat-id">{seatId}</p>
            <Seat />
            </div>
        );
        }
    }

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, auto)`,
        gap: '10px',
        justifyContent: 'center',
        alignItems: 'center',
      };
    
      return <div className="seats-grid" style={gridStyle}>{seats}</div>;
};

export default SeatGrid;
