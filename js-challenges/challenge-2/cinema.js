class Seat {
    #isAvailable;
    #code;
    
    constructor(code) {
        this.#isAvailable = true;
        this.#code = code;
    }

    reserve() {
        if (this.#isAvailable) {
            this.#isAvailable = false;
            return true;
        }
        return false;
    }

    get state() {
        return this.#isAvailable ? 'available' : 'reserved';
    }

    get code() {
        return this.#code;
    }
}

class Cinema {
    constructor(columns, rows, rowLabels) {
        this.columns = columns;
        this.rows = rows;
        this.rowLabels = rowLabels;
        this.seats = this.createSeats(columns, rows);
    }

    createSeats(columns, rows) {
        const seats = [];
        for (let row = 0; row < rows; row++) {
            const rowSeats = [];
            for (let col = 0; col < columns; col++) {
                const code = this.generateSeatCode(row, col);
                rowSeats.push(new Seat(code));
            }
            seats.push(rowSeats);
        }
        return seats;
    }

    generateSeatCode(row, col) {
        return `${this.rowLabels[row]}${col + 1}`;
    }

    reserveSeat(column, row) {
        const seat = this.seats[row][column];
        if (seat.reserve()) {
            console.log(`Seat ${seat.code} reserved.`);
        } else {
            console.log(`Seat ${seat.code} is already reserved.`);
        }
    }

    displaySeats() {
        console.log('\nScreen\n');

        let headerRow = '   ';
        for (let col = 0; col < this.columns; col++) {
            headerRow += ` ${col + 1} `;
        }
        console.log(headerRow);

        for (let row = 0; row < this.rows; row++) {
            let rowStr = `${this.rowLabels[row]}  `;
            for (let col = 0; col < this.columns; col++) {
                rowStr += this.seats[row][col].state === 'available' ? ' A ' : ' R ';
            }
            console.log(rowStr);
        }

        console.log('\n');
    }
}

const rowLabels = ['A', 'B', 'C', 'D', 'E'];
const cine = new Cinema(5, 5, rowLabels);
cine.reserveSeat(2, 2);
cine.displaySeats();
cine.reserveSeat(0, 0);
cine.displaySeats();
cine.reserveSeat(2, 2);
