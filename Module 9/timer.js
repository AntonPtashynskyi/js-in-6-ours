// const timer = {
//   start() {
//     const startTime = Date.now();
//     setInterval(() => {
//       const currentTime = Date.now();

//       console.log(currentTime - startTime);
//     }, 1000);
//   },
// };

// timer.start();

let company = {
  // тот же самый объект, сжатый для краткости
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 600 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}

sumSalaries(company.development);
