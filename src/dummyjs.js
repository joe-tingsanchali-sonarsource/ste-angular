i=0;
console.log("whatever");
k=0;
j=0;


for (var i = 1; i <= 10; i++) {  // Noncompliant - 2 continue - one might be tempted to add some logic in between
  if (i % 2 == 0) {
    continue;
  }

  if (i % 3 == 0) {
    continue;
  }

  alert("i = " + i);
}
