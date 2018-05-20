
const cursos = ["java","java", "c#", "php", "go"]


console.log(cursos.find(curso => curso == "java"));

console.log(cursos.find(curso => curso == "python"));

console.log(cursos.find(curso => curso == "vb.net"));

console.log(cursos.find(curso => curso == "go"));

let resultado = cursos.find(curso => curso == "c#");

console.log(resultado);