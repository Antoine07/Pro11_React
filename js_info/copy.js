const students = [
  { name: "Alan", age: 45 },
  { name: "Alice", age: 43 },
  { name: "Bernard", age: 48 },
];

const newStudents = [...students];

newStudents[0].name = "Sophie";

console.log(students);

console.log(newStudents);

// Le spread operator fait une copie peu profonde shallow copy

// const studentsDeepCopy = students.map( s => {

//     // on retourne un nouvel objet pour chaque student
//     return { ...s }
// } );

// une syntaxe équivalente à la syntaxe ci-dessus (  ) permet de retourner une expression
const studentsDeepCopy = students.map((s) => ({ ...s }) );

studentsDeepCopy[0].name = "Albert";

console.log(studentsDeepCopy);
