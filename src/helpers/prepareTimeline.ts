export const insertDaySeparators = (messages: any, outPreviousDay: any = null) => {
  const result: any = [];
  let previousDay: any = new Date(outPreviousDay * 1000).toLocaleDateString();

  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];
    const currentDay = new Date(message.timestamp * 1000).toLocaleDateString();
    //console.log('message', message, currentDay);  
    // Если день сообщения отличается от предыдущего, добавляем разделитель
    if (currentDay !== previousDay) {

      result.push({
        isSeparator: true,
        day: currentDay, // Можно использовать локальную дату, если необходимо
        text: currentDay,
        type: 'system.date',
      });
      previousDay = currentDay;
    }
    result.push(message); // Добавляем сообщение
  }
  return result;
}

const messages = [
  {timestamp: '1727027959',},
  {timestamp: '1726916359',},
  {timestamp: '1726830251',},
  {timestamp: '1726829959',},
  {timestamp: '1726743559',},
];

// console.log('t', insertDaySeparators(messages));
