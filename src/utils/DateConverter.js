class DateConverter{
    // timeFromFormat = Math.floor(startDate.getTime() / 1000) - 25200; 
    
    // передаем старт в виде Дате(), конец в виде СПИСОК
    // получаем в виде Дате()
    static getSubtractDates(startDate, endDate) {
        const resultDate = new Date(
          startDate.getFullYear() - endDate[2],
          startDate.getMonth() - endDate[1],
          startDate.getDate() - endDate[0],
          startDate.getHours() - endDate[3],
          startDate.getMinutes() - endDate[4],
          startDate.getSeconds() - endDate[5]
        );
        return resultDate;
      }
    
    // передаю в виде Дате() верну СЕКУНДЫ (инт)
    static getSeconds(dateFormat){
        let sec = Math.floor(dateFormat / 1000);
        sec -= 25200; // перевеодим время в местный формат
        return sec;
    }

      // передаем в виде СПИСКА и получаем в виде СТРОКИ
    static getStringFormatDate(list){
        return list[2] + '-'+list[1]+'-'+list[0]+'T'+list[3]+':'+list[4]+':'+list[5]+'Z';
      }

    // передаем в виде Дате() и возвращаем в виде СПИСКА  
    static getCurrentDate(date) {
        const currentDate = date || new Date();
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear().toString();
        const hour = currentDate.getHours().toString().padStart(2, '0');
        const minute = currentDate.getMinutes().toString().padStart(2, '0');
        const second = currentDate.getSeconds().toString().padStart(2, '0');

        return [day, month, year, hour, minute, second];
    }

}

export default DateConverter;