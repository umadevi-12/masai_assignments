function studentGrade(studentScores) {
    for (let student in studentScores) {
        let score = studentScores[student]; 

        if (score >= 90) {
            console.log(`${student} - A`);
        } else if (score >= 80 && score < 90) {
            console.log(`${student} - B`);
        } else if (score >= 70 && score < 80) {
            console.log(`${student} - C`);
        } else if (score >= 60 && score < 70) {
            console.log(`${student} - D`);
        } else if (score < 60) {
            console.log(`${student} - F`);
        }
    }
}

// Example usage:
let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
};

studentGrade(studentScores);
