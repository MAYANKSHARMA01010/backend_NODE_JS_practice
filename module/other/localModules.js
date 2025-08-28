const Add = (a,b) => {
    return a + b;
}

const Subtract = (a,b) => {
    return a - b;
}

const Multiply = (a,b) => {
    return a * b;
}

const Divide = (a,b) => {
    return a / b;
}

const Random = () => {
    return Math.random() * 100;
}

module.exports = { 
    Add, 
    Subtract, 
    Multiply, 
    Divide, 
    Random 
};