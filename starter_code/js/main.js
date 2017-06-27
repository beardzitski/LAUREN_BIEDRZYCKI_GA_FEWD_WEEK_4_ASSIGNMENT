$(document).ready(toDoWhenReady);

function toDoWhenReady() {
  $('.readmore').click(showMore)

  function showMore(event) {
    event.preventDefault();
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
  }

  $('.readless').click(showLess)

  function showLess(event) {
    event.preventDefault();
    $('#show-this-on-click').slideUp();
  }

    $('.learnmore').click(learnMore)

  function learnMore(event) {
    event.preventDefault();
    $('#learnmoretext').slideDown();
    $('.learnmore').hide();
  }
}
