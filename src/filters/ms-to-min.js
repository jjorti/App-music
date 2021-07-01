const msToMin = (value) => {
  if (!value) {
    return " 0 minutos";
  }
  const minutes = Math.floor(value / 60000);
  const seconds = ((value % 60000) / 1000).toFixed(0);
  return `${minutes} : ${seconds < 10 ? "0" + seconds : "" + seconds}  min.`;
};

export { msToMin };
