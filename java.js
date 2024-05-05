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

const sub = students.flatMap( student => student.marks);
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

const mrks = students.slice(0,1);
console.log(mrks);

let avg;
const k =  {name: 'Ram',
section: 'A',
marks: { tamil: 100, english: 78, maths: 63, science: 70, social: 89}
}
const ku = (Object.values(k.marks));
const kum = ku.reduce((a,b) => a+b, 0);
console.log("ram total mark: "+kum);
avg5 =kum/students.length;
console.log("average :"+avg5);

  
const u = {name: "Som", section: "B",
marks: {tamil: 48, english: 40, maths: 33, science: 30, social: 59} }
const um = (Object.values(u.marks));
const uma = um.reduce((a,b) => a+b ,0)
console.log("som total marks :"+uma);
avg4 = uma/students.length;
console.log("average: "+ avg4);

const m = {name: "Kumar", section: "A",
marks: {tamil: 88, english: 75, maths: 81, science: 95, social: 90} }
const ma =(Object.values(m.marks));
const mar =ma.reduce((a,b) => a+b,0);
console.log("kumar total marks :"+mar);
avg3 = mar/students.length;
console.log("average:"+avg3);

const a = {name: "Ahile", section: "A",
marks: {tamil: 92, english: 86, maths: 91, science: 95, social: 100} };
const ar =(Object.values(a.marks));
const ara =ar.reduce((a,b)=> a+b,0);
console.log("Ahile total mark :"+ara);
avg2 = ara/students.length;
console.log("average :"+avg2);

const r ={name: "Rajesh", section: "B",
marks: {tamil: 58, english: 68, maths: 45, science: 61, social: 78} }
const ra = (Object.values(r.marks));
const rav =ra.reduce((a,b)=> a+b,0);
console.log("rajesh total mark :"+rav);
avg1 = rav/students.length;
console.log("average :"+avg1);

console.log(ara ),console.log(rav),console.log(kum),console.log(uma),console.log(mar);

const total = [kum,uma,mar,rav,ara];
console.log(total);
let average = [avg1,avg2,avg3,avg4,avg5];
console.log("q.no:18 "+average);

let toppers = total.filter((topper,student) => (total>students? student:topper),students[0])
console.log(toppers);