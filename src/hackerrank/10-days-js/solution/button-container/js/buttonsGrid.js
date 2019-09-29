const buttonLabelList = [1, 2, 3, 6, 9, 8, 7, 4];

const mapToDisplayOrder = buttonLabelList => [
    buttonLabelList[0],
    buttonLabelList[1],
    buttonLabelList[2],
    buttonLabelList[7],
    buttonLabelList[3],
    buttonLabelList[6],
    buttonLabelList[5],
    buttonLabelList[4],
];

const rotateButtonLabel = buttons => {
    const last = buttons.pop();
    buttons.unshift(last);
    return buttons;
};

document.getElementById("btn5").onclick = () => {
    const rotatedButtons = rotateButtonLabel(buttonLabelList);
    const orderedButtons = mapToDisplayOrder(rotatedButtons);
    [1, 2, 3, 4, 6, 7, 8, 9].forEach((id, index) => {
        if (id === 5) return;
        document.getElementById(`btn${id}`).innerHTML = orderedButtons[index];
    });
};
