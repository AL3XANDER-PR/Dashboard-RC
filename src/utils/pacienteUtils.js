export const avatarText = (value) => {
  if (!value) return "";
  const nameArray = value.split(" ");
  const arr = nameArray.map((word) => word.charAt(0).toUpperCase());
  if (arr.length > 1) return arr[0] + arr[1];
  return  arr[0];
};

