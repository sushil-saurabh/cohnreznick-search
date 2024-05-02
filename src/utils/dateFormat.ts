const dateFormat = (date: string) => {
  if (date) {
    const [day, month, year] = date.split(' ');
    return {
      day,
      month,
      year,
    };
  }
  return {
    day: '',
    month: '',
    year: '',
  };
};
export default dateFormat;
