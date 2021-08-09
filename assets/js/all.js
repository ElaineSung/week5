"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
$('#js-open-editor').click(function (e) {
  e.preventDefault();
  $('.editor').addClass('active');
});
$('#js-close-editor').click(function (e) {
  e.preventDefault();
  $('.editor').removeClass('active');
});
//# sourceMappingURL=all.js.map
