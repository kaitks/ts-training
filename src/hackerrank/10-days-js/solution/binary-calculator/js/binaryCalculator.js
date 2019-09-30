let input = [];

const operatorList = ["*", "/", "+", "-"];

const drawResult = () => {
    document.getElementById("res").innerHTML = input.join("");
};

const handleNumberInput = number => {
    const numberStr = number.toString();
    const lastInput = input[input.length - 1];
    if (
        operatorList.includes(lastInput) ||
        lastInput === undefined ||
        lastInput === "0"
    )
        input.push(numberStr);
    else {
        input[input.length - 1] = lastInput + numberStr;
    }
    drawResult();
};

const handleOperatorInput = operator => {
    input.push(operator);
    drawResult();
};

const calculateResult = () => {
    const calList = input.map(element => {
        if (operatorList.includes(element)) return element;
        return Number.parseInt(element, 10);
    });
    // eslint-disable-next-line no-eval
    input = [eval(calList.join("")).toString(2)];
    drawResult();
};

const clearInput = () => {
    input = [];
    drawResult();
};

document.getElementById("btn0").onclick = () => handleNumberInput(0);
document.getElementById("btn1").onclick = () => handleNumberInput(1);
document.getElementById("btnSum").onclick = () => handleOperatorInput("+");
document.getElementById("btnSub").onclick = () => handleOperatorInput("-");
document.getElementById("btnMul").onclick = () => handleOperatorInput("*");
document.getElementById("btnDiv").onclick = () => handleOperatorInput("/");
document.getElementById("btnClr").onclick = () => clearInput();
document.getElementById("btnEql").onclick = () => calculateResult();
