"use strict";

function formatDate(dateStr) {
  var date = new Date(dateStr);
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '  ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

;
module.exports = {
  formatDate: formatDate
};