export const saveStartDate = (date) => {
  localStorage.setItem("startDate", date.toISOString());
};

export const getStartDate = () => {
  const value = localStorage.getItem("startDate");
  return value ? new Date(value) : null;
};

export const getStartDateFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const dateStr = params.get("start");
  return dateStr ? new Date(dateStr) : null;
};
