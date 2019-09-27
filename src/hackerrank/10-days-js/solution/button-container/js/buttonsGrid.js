const buttons = Object.entries({
    btn1: 1,
    btn2: 2,
    btn3: 3,
    btn6: 6,
    btn9: 9,
    btn8: 8,
    btn7: 7,
    btn4: 4,
});

const container = document.querySelector("#btns");

const drawButtons = buttons => {
    const buttonElementList = buttons.map(([k, v]) => {
        const element = document.createElement("button");
        element.id = k;
        element.innerHTML = v;
        return element;
    });

    return buttonElementList;
};

const rotateButtons = buttons => {
    const last = buttons.pop();
    buttons.unshift(last);
    return buttons;
};

const drawTable = buttons => {
    container.innerHTML = "";
    const orderedButtons = [
        buttons[0],
        buttons[1],
        buttons[2],
        buttons[7],
        buttons[3],
        buttons[6],
        buttons[5],
        buttons[4],
    ];
    orderedButtons.splice(4, 0, ["btn5", 5]);
    const buttonElementList = drawButtons(orderedButtons);
    buttonElementList.forEach(element => container.appendChild(element));

    document.getElementById("btn5").onclick = () => {
        const rotatedButtons = rotateButtons(buttons);
        drawTable(rotatedButtons);
    };
};

drawTable(buttons);
