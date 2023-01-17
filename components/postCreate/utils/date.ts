export const calcTodayDateKST = () => {
  const [year, month, date]: string[] = new Date()
    .toLocaleDateString()
    .split('.')
    .slice(0, -1)
    .map((v) => v.trim());

  return `${year}-${month.padStart(2, '0')}-${date.padStart(2, '0')}`;
};
