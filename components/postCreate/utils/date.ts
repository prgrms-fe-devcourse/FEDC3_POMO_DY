export const calcTodayDate = () => {
  const nowUTC = Date.now();
  const timeOff = new Date().getTimezoneOffset() * 60000;
  const today = new Date(nowUTC - timeOff).toISOString().split('T')[0];
  return today;
};
