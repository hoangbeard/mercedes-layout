document.getElementById('btnShowMore_news').onclick = function () {
  document.getElementById('show_more_news').style.display = 'none';
}
document.getElementById('btnShowMore_popular').onclick = function () {
  document.getElementById('show_more_popular').style.display = 'none';
}
document.getElementById('btnShowMore_videos').onclick = function () {
  document.getElementById('show_more_videos').style.display = 'none';
}

// Back to top button
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});

// Disable scroll
function disable_scroll() {
  var element = document.getElementById("myBody");
  element.classList.toggle("noscroll");
  var verticalMenu = document.getElementById("sub_Menu");
  verticalMenu.classList.toggle("OpacityHidden");
  var navBottomFixed = document.getElementById('navBottomFixed');
  navBottomFixed.classList.toggle("OpacityHidden");
}

//============================================================
$(document).ready(function domReady() {
  var $navigation = $(".myHeader");
  var navClass = "show-nav";

  var lastScrollTop = 0;

  function scrollDirection(scrollTop) {
    var direction = Math.sign(scrollTop - lastScrollTop);
    return direction < 0 ? "up" : "down";
  }
  function autoshowNav() {
    var scrollTop = $(window).scrollTop();
    var scrollDir = scrollDirection(scrollTop);
    lastScrollTop = scrollTop;

    $navigation.toggleClass(navClass, scrollDir === "up");
  }

  var hasScrolled = false;
  $(window).scroll(function scrollWindowHandler() {
    hasScrolled = true;
  });
  setInterval(function scrollChecker() {
    if (hasScrolled) {
      autoshowNav();
      hasScrolled = false;
    }
  }, 250);
});