  // Section 1: Array Destructuring

  const books = ["fiction", ["horror", "literary"], "science"];

  // TODO: Use destructuring to create the variables fiction horror literary and science
  var fiction,horror,literary,science;
[fiction,horror,literary,science] = [books[0],...books[1],books[2]]

  console.log(fiction)
  console.log(horror)
  console.log(literary)
  console.log(science)
  
  
  
  // Section 2: Object Destructuring
  
  const Student = {
    firstName: "Joe",
    university: "MIT",
    studentInfo: {
      studentid: 555,
    },
  };
  
  // TODO: Use destructuring to create the variables firstName university and studentid
  let firstName,university,studentid;
  ({firstName,university,studentid}={...Student,...Student.studentInfo})
  console.log(firstName);
  console.log(university);
  console.log(studentid)
  
  //don't change this line
  if (typeof module !== "undefined") {
    module.exports = {
      fiction,
      horror,
      literary,
      science,
      firstName,
      university,
      studentid,
    };
  }