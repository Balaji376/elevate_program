const employees = [
    { id: 1, name: "Alice", department: "HR", salary: 50000, status: "active" },
    { id: 2, name: "Bob", department: "Engineering", salary: 80000, status: "inactive" },
    { id: 3, name: "Charlie", department: "HR", salary: 60000, status: "active" },
    { id: 4, name: "David", department: "Engineering", salary: 90000, status: "active" },
    { id: 5, name: "Eve", department: "Marketing", salary: 70000, status: "active" }
  ];
  
  const departmentBudgets = {
    HR: 150000,
    Engineering: 200000,
    Marketing: 100000
  };
  
  
  let activeEmployees=employees.filter((ele)=>{
    if(ele.status=='active'){
        return ele;
    }
  })
  console.log(activeEmployees)

  let groupby=activeEmployees.reduce((acc,curr)=>{
    let dept=curr.department;
    if(!acc[dept]){
      acc[dept]=[];
    }
    acc[dept].push(curr);
    return acc; 
  },{})

  let sortedEmployees=activeEmployees.sort((a,b)=>b.salary-a.salary)

  console.log(sortedEmployees)

  