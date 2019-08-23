let calculateGrade = function(score, total) {
    let percent = score / total * 100;
    let grade;
    if (percent >= 90) {
        grade = "A";
    }
    else if (percent >= 80) {
        grade ="B";
    }
    else if (percent >= 70) {
        grade = "C";
    }
    else if (percent >= 60) {
        grade = "D"
    }
    else {
        grade = "F"
    }
    return `${score}/${total} -> You got a ${grade} (${percent}%!)`;
}

console.log(calculateGrade(18, 20));
