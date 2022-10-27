const { format } = require('date-fns');

function dbFormat(date, delimiter = '/') {
  date = toUTC(date);
  if (!date) return null;

  return format(date, `y${delimiter}MM${delimiter}dd`);
}

function toUTC(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);

    if (isNaN(date)) return false;
  }

  return new Date(date.getTime() + (date.getTimezoneOffset() * 60 * 1000));
}

module.exports = {
  dbFormat,
  toUTC
};
