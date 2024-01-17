export const avatarText = (value) => {
  if (!value) return "";
  const nameArray = value.split(" ");
  const arr = nameArray.map((word) => word.charAt(0).toUpperCase());
  if (arr.length > 1) return arr[0] + arr[1];
  return arr[0];
};

export const formatPhoneNumber = (phoneNumberString) => {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return null;
};
