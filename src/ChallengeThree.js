let day = 3;
let dayname = '';

switch (day) {
  case 1:
    dayname = 'Sunday';
    break;
  case 2:
    dayname = 'Monday';
    break;
  case 3:
    dayname = 'Tuesday';
    break;
  case 4:
    dayname = 'Wednesday';
    break;
  case 5:
    dayname = 'Thursday';
    break;
  case 6:
    dayname = 'Friday';
    break;
  case 7:
    dayname = 'Saturday';
    break;
  default:
    dayname = 'Invalid day';
    break;
}

console.log(dayname);

//2
// let date = new Date();
// let daysname = date.getDay();

// switch (daysname + 1) {
//   case 1:
//     daysname = 'Sunday';
//     break;
//   case 2:
//     daysname = 'Monday';
//     break;
//   case 3:
//     daysname = 'Tuesday';
//     break;
//   case 4:
//     daysname = 'Wednesday';
//     break;
//   case 5:
//     daysname = 'Thursday';
//     break;
//   case 6:
//     daysname = 'Friday';
//     break;
//   case 7:
//     daysname = 'Saturday';
//     break;
//   default:
//     break;
// }
// console.log(daysname);
