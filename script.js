const element = document.getElementById('data');

const showCounter = function() {
    const current = new Date();
    const year = current.getFullYear();
    const month = 4;
    const day = 6;
    const hour = 10;

    const promotionDate = new Date(year, month -1, day, hour);
    console.log(promotionDate)
    const msInDay = 24 * 60 * 60 * 1000;

    const timeDifference = (promotionDate.getTime() - current.getTime());

    const theDaysToDate = timeDifference / msInDay;
    const daysToDate = Math.floor(theDaysToDate);

    let daysToDateFix = (daysToDate < 1)? 1 : daysToDate;

    const theHoursToDate = (theDaysToDate % daysToDateFix) * 24;
    const hoursToDate = Math.floor(theHoursToDate);

    const theMinutesToDate = (theHoursToDate - hoursToDate) * 60;
    const minutesToDate = Math.floor(theMinutesToDate);

    let counter = null;

    if(daysToDate > 0 && hoursToDate > 0){
         counter = ` Do końca pozostało: 
        ${daysToDate} dni
        ${hoursToDate} godzin
        ${minutesToDate} minut  `;
        } else if(daysToDate === 0 && hoursToDate > 0) {
            counter = ` Do końca pozostało: 
           ${hoursToDate} godzin `;
        } else if(daysToDate === 0 && hoursToDate === 0) {
            counter = `Do końca pozostało: 
           ${minutesToDate} minuty `;
        }

    const timeEnd = promotionDate - current;
    if (timeEnd < 0) {
        element.innerHTML = "Promocja skończyła się";
    } else {
        element.innerHTML = counter;
        window.requestAnimationFrame(showCounter);
    }
}

window.requestAnimationFrame(showCounter);