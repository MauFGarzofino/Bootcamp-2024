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
    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
        this.rowLabels = this.generateRowLabels(rows);
        this.seats = this.createSeats(columns, rows);
    }

    generateRowLabels(rows) {
        const labels = [];
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        for (let i = 0; i < rows; i++) {
            let label = '';
            let index = i;
            label = alphabet[index % 26] + label;
            labels.push(label);
        }
        return labels;
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

const cine = new Cinema(4, 45);
cine.reserveSeat(2, 2);
cine.displaySeats();
cine.reserveSeat(0, 0);
cine.displaySeats();
cine.reserveSeat(2, 2);