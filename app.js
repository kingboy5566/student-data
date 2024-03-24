var student =[ {
         id : 101,
         datails :{
        name1 : 'muhammad ilyas',
        age :    33,
        class: ["web", "css"]}},



        
   { id :102,

    datails :{
   name1 : 'muhammad yous',
   age :    28,
   class: ["web", "css"]}},

      
   { id :103,

    datails :{
   name1 : 'muhammad shahid',
   age :    30,
   class: ["web", "css" ,"java"]}},

   { id :104,

      datails :{
     name1 : 'muhammad usman',
     age :    31,
     class: ["web", "css" ,"java"]}}
]
// var rollNum = parseInt(prompt('inter your id number'));
var dropDown = document.getElementById('dropdown')
dropDown.addEventListener('change', function(){
 var selectValue = dropDown.value

   
   
var nameNode = document.getElementById('name');
var age = document.getElementById('age');
var class1 = document.getElementById('class');
for(var i=0 ; i<student.length; i++){
   if (student[i].id === parseInt( selectValue)){
      nameNode.innerText = student[i].datails.name1
      age.innerText = student[i].datails.age
      class1.innerText = student[i].datails.class
   }
   
}
})


// var nameNode = document.getElementById('name');
// var age = document.getElementById('age');
// var class1 = document.getElementById('class');
// for(var i=0 ; i<student.length; i++){
//    if (student[i].id === rollNum){
//       nameNode.innerText = student[i].datails.name1
//       age.innerText = student[i].datails.age
//       class1.innerText = student[i].datails.class
//    }
   
// }


 

// console.log(student[2].datails.age);




