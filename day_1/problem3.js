const students = [
    { id: 1, name: "Alice", courseId: 201, score: 85 },
    { id: 2, name: "Bob", courseId: 202, score: 65 },
    { id: 3, name: "Charlie", courseId: 201, score: 90 },
    { id: 4, name: "David", courseId: 203, score: 75 }
  ];
  
  const courses = {
    201: { name: "Mathematics", instructor: "Dr. Smith" },
    202: { name: "Physics", instructor: "Dr. Brown" },
    203: { name: "Chemistry", instructor: "Dr. White" }
  };
  

  const score=students.filter((ele)=>{
    return ele.score > 70
  })

  const soretedStudent=score.sort((a,b)=>{
    return a.score - b.score
  })