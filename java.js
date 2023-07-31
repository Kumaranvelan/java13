const students = [
{name: "Ram", section: "A",
marks: {tamil: 100, english: 78, maths: 63, science: 70, social: 89} },
{name: "Som", section: "B",
marks: {tamil: 48, english: 40, maths: 33, science: 30, social: 59} },
{name: "Kumar", section: "A",
marks: {tamil: 88, english: 75, maths: 81, science: 95, social: 90} },
{name: "Ahile", section: "A",
marks: {tamil: 92, english: 86, maths: 91, science: 95, social: 100} },
{name: "Rajesh", section: "B",
marks: {tamil: 58, english: 68, maths: 45, science: 61, social: 78} }
]
let t;

const studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);

const sub = students.flatMap( student => student.marks.tamil);
const arr = sub.reduce((a,b) => a+b, 0)
t=arr/students.length;
console.log( "tamil:"+t);

const eng = students.flatMap( student => student.marks.english);
const earr = eng.reduce((a,b) => a+b, 0)
t=earr/students.length;
console.log( "english:"+t);

const mat = students.flatMap( student => student.marks.maths);
const marr = mat.reduce((a,b) => a+b, 0)
t=marr/students.length;
console.log("maths:"+t);

const sci = students.flatMap( student => student.marks.science);
const sarr = sci.reduce((a,b) => a+b, 0)
t=sarr/students.length;
console.log("science"+t);

const soc = students.flatMap( student => student.marks.social);
const ssarr = soc.reduce((a,b) => a+b, 0)
t=ssarr/students.length;
console.log("social:"+t);

const section = students.filter(student => student.section == "A");
console.log(section);

const tm = students.find(student => student.marks == "Ram");
console.log(tm);




  
