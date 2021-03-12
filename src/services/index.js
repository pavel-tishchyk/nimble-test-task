import moment from "moment";

export const saveToLocalStorage = (trackersData) => {
  localStorage.setItem('trackersData', JSON.stringify(trackersData));
}

export const getTimeInterval = (date) => {
  let diff = date / 1000;
  let hours = Math.trunc(diff / 3600); 
  let minutes = Math.trunc((diff % 3600) / 60);
  let seconds = Math.trunc((diff % 3600) % 60); 

  hours = hours < 10 ? '0' + hours : hours; 
  minutes = minutes < 10 ? '0' + minutes : minutes; 
  seconds = seconds < 10 ? '0' + seconds : seconds; 

  return `${hours}:${minutes}:${seconds}`;
}

export const getTimeDiff = (date, stopDate) => (
  stopDate
    ? moment(stopDate).diff(moment(date))
    : moment().diff(moment(date))
)
