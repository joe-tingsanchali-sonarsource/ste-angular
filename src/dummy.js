i=1;
j=2323;
k=0230202;
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
