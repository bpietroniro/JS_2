let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  const studentScoreData = Object.keys(scores).map(student => scores[student].scores);
  const examScores = studentScoreData.map(record => record.exams);

  return {
    studentGrades: getStudentGrades(studentScoreData),
    exams: getExamData(examScores),
  }
}

function getStudentGrades(studentRecords) {
  return studentRecords.map(student => {
    let numericScore = calculateGrade(student);
    return `${numericScore} (${getLetterGrade(numericScore)})`;
  });
}

function calculateGrade(student) {
  let examAverage = getAverage(student.exams);
  let exerciseTotal = sum(student.exercises);

  return Math.round(0.65 * examAverage + 0.35 * exerciseTotal);
}

function getAverage(numberList) {
  return sum(numberList) / numberList.length;
}

function sum(numberList) {
  return numberList.reduce((sum, currentValue) => sum + currentValue);
}

function getLetterGrade(numericScore) {
  if (numericScore >= 93) {
    return 'A';
  } else if (numericScore >= 85) {
    return 'B'; 
  } else if (numericScore >= 77) {
    return 'C';
  } else if (numericScore >= 69) {
    return 'D';
  } else if (numericScore >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function getExamData(scoreListsByStudent) {
  let scoreListsByExam = [];

  scoreListsByStudent.forEach(studentScoreList => {
    for (let examNumber = 0; examNumber < studentScoreList.length; examNumber += 1) {
      scoreListsByExam[examNumber] = scoreListsByExam[examNumber] || [];
      scoreListsByExam[examNumber].push(studentScoreList[examNumber]);
    }
  });
  
  return scoreListsByExam.map(examScores => {
    return {
      average: parseFloat(getAverage(examScores).toFixed(1)),
      minimum: getMinimum(examScores),
      maximum: getMaximum(examScores),
    };
  });
}

function getMinimum(numberList) {
  return numberList.reduce((runningMinimum, currentValue) => {
    return (currentValue < runningMinimum) ? currentValue : runningMinimum;
  }, 100);
}

function getMaximum(numberList) {
  return numberList.reduce((runningMaximum, currentValue) => {
    return (currentValue > runningMaximum) ? currentValue : runningMaximum;
  }, 0);
}

console.log(generateClassRecordSummary(studentScores));
