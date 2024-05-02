const dateFormat = (date: string) => {
  if (date) {
    const [day, month, year] = date.split(' ');
    console.log(day, month, year);
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
