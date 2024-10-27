const calculator = {
    op1: "",
    op2: "",
    operation: null,

    isOperable() {
        return this.op1.length > 0 && this.op2.length > 0 && this.operation !== null;
    },

    addDigitToOperand(digit) {
        let targetOp = this.operation === null ? "op1" : "op2";
        if (digit === "0" && this[targetOp].length == 0) return;
        this[targetOp] += digit;
    },

    clear() {
        this.op1 = this.op2 = "";
        this.operation = null;
    },

    add() {
        return Number(this.op1) + Number(this.op2);
    },

    subtract() {
        return Number(this.op1) - Number(this.op2);
    },

    multiply() {
        return Number(this.op1) * Number(this.op2);
    },

    divide() {
        return Number(this.op1) / Number(this.op2);
    },
}