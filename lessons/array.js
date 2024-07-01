
// map, filter, find.

const students = [
   {
      name: 'Iyiola Ebenezer',
      isActive: true,
      favLanguage: 'JavaScript',
      gradeOutOfTen: 9,
    },
    {
      name: 'David Ochieng',
      isActive: false,
      favLanguage: 'Java',
      gradeOutOfTen: 8.7,
    },
    {
      name: 'Mark Wanjiru',
      isActive: true,
      favLanguage: 'JavaScript',
      gradeOutOfTen: 9.2,
    }
  ];
  const numbersArr = [1, 2, 3, 4, 5]
  //map
  //const arrayMapLogic = (arr) => {
    //for (const element of arr){
      //  newArr.push(element);
       // console.log(element);
    //}
  //}
  const multiplyNumbers = numbersArr.map((num) => num * 2);

  const studentsNames = students.map ((student) => student.name);
  console.log(studentsNames);
  // filter
  const printActveStudents = (arr,language) => {
    for (const student of arr){
        if (student.isActive){
            console.log(student);
        }
    } 
  }