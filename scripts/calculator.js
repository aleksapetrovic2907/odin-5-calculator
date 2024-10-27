const calculator = {
    op1: "",
    op2: "",
    operation: null,

    isOperable() {
        return this.op1.length > 0 && this.op2.length > 0 && this.operation !== null;
    },

    clear() {
        this.op1 = this.op2 = "";
        this.operation = null;
    },

    add() {
        return this.op1 + this.op2;
    },

    subtract() {
        return this.op1 - this.op2;
    },

    multiply() {
        return this.op1 * this.op2;
    },

    divide() {
        return this.op1 / this.op2;
    },
}