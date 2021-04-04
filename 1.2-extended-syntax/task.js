"use strict";
function getResult(a, b, c) {
    let d = (b ** 2) - 4 * a * c;
    let xOne;
    let xSecond;
    let arrayX = [];

    if (d < 0) {
        arrayX.push("корней нет");
        return arrayX;
    } else if (d === 0) {
        xOne = (-b + (d ** (1 / 2))) / (2 * a);
        arrayX.push(xOne.toFixed(2));
        return arrayX;
    } else if (d > 0) {
        xOne = (-b + (d ** (1 / 2))) / (2 * a);
        xSecond = (-b - (d ** (1 / 2))) / (2 * a);
        arrayX.push(xOne.toFixed(2), xSecond.toFixed(2));
        return arrayX;
    }
}


function getAverageMark(marks) {
    let sumMark;
    if (marks === []) {
        averageMark = 0;
        return averageMark;
    } else if (marks.length <= 5) {
        for (let i = 0; i < marks.length; i++) {
            sumMark=0;
            sumMark += marks[i];
            averageMark = sumMark / marks.length;
        }
        return averageMark;
    } else if (marks.length > 5) {
        console.log("Количество оценок больше 5");
        let newMarks = marks.slice([0], [5]);
        for (let i = 0; i < newMarks.length; i++) {
            sumMark=0;
            sumMark += newMarks[i];
            averageMark = sumMark / newMarks.length;
        }
        return averageMark;
    }
}


function askDrink(name, dateOfBirthday) {
    let now = new Date();
    let yearToday = new Date().getFullYear();
    if ((yearToday - dateOfBirthday) >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
        return result;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предлодить вам замечательный клюквенный компот!`;
        return result;
    }
}

