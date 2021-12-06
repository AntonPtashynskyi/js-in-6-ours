const greet = () => {
  console.log('Hello!');
};
const timerId = setTimeout(greet, 1000);
clearTimeout(timerId);

const date = new Date();
console.log(date.toString());
console.dir(date);

console.log(new Date().getTime());

const meetingTime = new Date('March 10, 2022 14:30');
console.log(meetingTime);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());

meetingTime.setMinutes(59);
meetingTime.setHours(22);

console.log(meetingTime);
console.log(meetingTime.toDateString());
