/*
You volunteered to help out teaching a preschool in your area. You were
given an array of all students and some important data about them, grouped
by teacher. Create a function that will ungroup every student so you can
look at their details individually.

### I/O
The input is an array of objects.
  Each object has two properties: "teacher" and "data".
    The "data" property's value is another array.
      The elements of this array are objects representing students.

For the output, we're going to create a new array.
  The elements of this array will be the objects from the "data" arrays
  in the input.
  - however, we will add a property to each of these objects: the teacher
    (from the outer object).

### Data Structures
- an array for output

### Algorithm
- initialize empty array for output
- loop through the input array (each "teacherGroup")
  - loop through the array value of the "data" property (each "student")
    - create a new object with the same properties as the current student
    - give this new object another property: same as the "teacher"
      property of the current "teacherGroup"
    - push this new object to the output array
- return the output array
*/

function ungroupStudents(teacherGroups) {
  let studentDetails = [];

  teacherGroups.forEach(group => {
    group.data.forEach(student => {
      let entry = {teacher: group.teacher};
      Object.assign(entry, student);
      studentDetails.push(entry);
    });
  });

  return studentDetails;
}

console.log(ungroupStudents([
  {
    teacher: 'Ms. Car',
    data: [
      {
        name: 'James',
        emergencyNumber: '617-771-1082',
      },
      {
        name: 'Alice',
        allergies: ['nuts', 'carrots'],
      },
    ],
  },
  {
    teacher: 'Mr. Lamb',
    data: [
      {
        name: 'Aaron',
        age: 3,
      },
    ],
  },
]));

console.log(ungroupStudents([
  {
    teacher: 'Ms. Sherman',
    data: [
      {
        name: 'Carmen',
        feildTripConsentSlipSigned: false,
      },
    ],
  },
  {
    teacher: 'Mr. Shoe',
    data: [
      {
        name: 'Braden',
        favoriteBook: 'Where the Wild Things Are',
      },
      {
        name: 'Angelo',
        playsSports: true,
      },
    ],
  },
]));
