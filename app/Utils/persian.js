const digits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export const toPersianDigits = (value) =>
  String(value).replace(/\d/g, (d) => digits[d]);