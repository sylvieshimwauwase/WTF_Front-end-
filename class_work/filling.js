function processScores(scores) {
    // Step 1: Double the scores using map
    const doubledScores = scores.map(score => score * 2);

    // Step 2: Filter out scores less than 50 using filter
    const filteredScores = scores.filter(score => score >= 50);
  
    // Step 3: Calculate the average of the remaining scores using reduce
    const sum = filteredScores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = filteredScores.length > 0 ? sum / filteredScores.length : 0;
  
    // Step 4: Find the highest score among the remaining scores using reduce
    const highestScore = filteredScores.reduce((max, score) => (score > max ? score : max), 0);
  
    // Step 5: Calculate the difference between the highest score and each remaining score using map
    const differences = filteredScores.map(score => highestScore - score);
  
    return {
      average,
      highestScore,
      differences,
    };
  }
  
  
  // Example usage:
  const studentScores = [30, 45, 60, 75, 90];
  const result = processScores(studentScores);
  console.log(result);