export const validateIntegerNumber = (str) => {
  let string = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (typeof +str[i] === "number") {
      string += str[i];
    }
  }
  return string;
};
