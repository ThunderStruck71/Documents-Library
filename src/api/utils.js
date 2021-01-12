const formatDate = (date) => {
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear();

  return `${yy}-${mm}-${dd}`;
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomFromArray = (array) => {
  const index = getRandomInt(0, array.length - 1);
  return array[index];
};

export const generateName = (template) => {
  const adj1 = Math.floor(Math.random() * template[0].length);
  const adj2 = Math.floor(Math.random() * template[1].length);
  const adj3 = Math.floor(Math.random() * template[2].length);
  const adjective1 = template[0][adj1];
  const adjective2 = template[1][adj2];
  const adjective3 = template[2][adj3];

  return `${adjective1} ${adjective2} ${adjective3}`;
};

export const generateRandomDescription = (template) => {
  const result = [];
  for (let i = 0; i < getRandomInt(1, 7); i++) {
    result.push(randomFromArray(template));
  }

  return result.join(",");
};

export const generateDate = () => {
  const maxDaysGap = getRandomInt(1, 365);
  const daysGap = getRandomInt(-maxDaysGap, maxDaysGap);
  let currentDate = new Date();

  currentDate.setHours(23, 59, 59, 999);

  currentDate.setDate(currentDate.getDate() + daysGap);

  currentDate = new Date(currentDate);

  return formatDate(currentDate);
};