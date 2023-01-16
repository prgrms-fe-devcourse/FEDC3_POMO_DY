export const calcEndTime = (startTime: string, interval: number) => {
  const [startHour, startMinute] = startTime.split(':');
  const endHour = String(parseInt(startHour) + interval).padStart(2, '0');
  return `${endHour}:${startMinute}`;
};
