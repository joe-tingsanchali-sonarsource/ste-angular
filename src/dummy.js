i=1;
j=2323;
k=0230202;

aouwoaioa=09239823892;
aoweoawe=2222222;

l=0;
oiawef=92983;
oiaeoiajoief=2398;
const aofeoia="aweofia";

// Example of insecure code using eval()
function executeUserInput(userInput) {
    eval(userInput); // This is insecure and can lead to code injection
}

// Example usage
const userInput = "alert('This is a test');";
executeUserInput(userInput);

const arr = [4, 3, 2, 1];

for (let value in arr) {  // Noncompliant
  console.log(value);  // logs 0, 1, 2, 3
}

function calculateComplexScore(data) {
    let score = 0;

    if (!data) {
        return -1; // Path 1
    }

    if (Array.isArray(data)) {
        if (data.length === 0) {
            score += 1; // Path 2
        } else if (data.length < 5) {
            score += 5; // Path 3
            for (let i = 0; i < data.length; i++) {
                if (typeof data[i] === 'number') {
                    if (data[i] > 100) {
                        score += 3; // Path 4
                    } else if (data[i] > 50) {
                        score += 2; // Path 5
                    } else {
                        score += 1; // Path 6
                    }
                } else if (typeof data[i] === 'string') {
                    if (data[i].length > 10) {
                        score += 4; // Path 7
                    } else {
                        score += 2; // Path 8
                    }
                } else if (typeof data[i] === 'boolean') {
                    if (data[i]) {
                        score += 2; // Path 9
                    } else {
                        score += 1; // Path 10
                    }
                } else {
                    score += 0.5; // Path 11
                }
            }
        } else {
            score += 10; // Path 12
            for (let i = 0; i < data.length; i++) {
                switch (typeof data[i]) {
                    case 'number':
                        if (data[i] % 2 === 0) {
                            score += 2; // Path 13
                        } else {
                            score += 1; // Path 14
                        }
                        break;
                    case 'string':
                        if (data[i].includes('special')) {
                            score += 5; // Path 15
                        } else {
                            score += 3; // Path 16
                        }
                        break;
                    case 'object':
                        if (data[i] && Object.keys(data[i]).length > 0) {
                            score += 4; // Path 17
                        } else {
                            score += 1; // Path 18
                        }
                        break;
                    default:
                        score += 0.2; // Path 19
                }
            }
        }
    } else if (typeof data === 'object' && data !== null) {
        if (Object.keys(data).length === 0) {
            score += 2; // Path 20
        } else {
            // This path also contributes to complexity, but for brevity,
            // I'm not adding more nested conditions here.
            score += Object.keys(data).length;
        }
    } else {
        score += 0; // Path 21
    }

    return score;
}
