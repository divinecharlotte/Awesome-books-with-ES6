const handleTime = () => {
  const dateContainer = document.querySelector('.date-container');
  const dateFunc = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = dateFunc.getFullYear();
  const month = months[dateFunc.getMonth()];
  let currentDate = dateFunc.getDate();
  const hour = dateFunc.getHours();
  const minutes = dateFunc.getMinutes();
  const second = dateFunc.getSeconds();
  if (currentDate === 1) currentDate = 'first';
  else if (currentDate === 2) currentDate = 'second';
  else if (currentDate === 3) currentDate = 'third';
  else currentDate += 'th';

  const time = (hour < 12) ? `${month} ${currentDate} ${year}, ${hour} ${minutes} ${second} AM`
    : `${month} ${currentDate} ${year}, ${hour} ${minutes} ${second} PM`;
  dateContainer.innerHTML = time;
};
export default handleTime;
