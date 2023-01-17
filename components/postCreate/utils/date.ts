export const calcTodayDateKST = () => {
  const todayDate = new Date().toLocaleDateString().split('.');
  if (!todayDate) return '';

  const [year, month, date]: string[] = todayDate.slice(0, -1).map((v) => v.trim());
  if (!year || !month || !date) return '';

  return `${year}-${month.padStart(2, '0')}-${date.padStart(2, '0')}`;
};
