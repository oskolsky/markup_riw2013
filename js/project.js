// DOM READY
// ----------------------------------------------------------------------------------------------------
$(function() {

  $.stickyFooter(80);

  $('.background-img').fullscreenBackground({fillOnResize: true});

  // Main menu hover
  $('.navigation-menu_i').hover(function() {
    var cols = $(this).attr('data-cols');
    showCols(cols, this);
  }, function() {
    hideCols();
  });

  // Image caption
  $('.cnt').find('img').each(function() {
    var 
        title = $(this).attr('title'),
        tpl = '';
    if (title) {
      tpl = '<span class="img-caption">' + title + '</span>'
      $(this).parent('p').append(tpl);
    }
  });

  // Filter toggle
  $('.program-filter_toggle').click(function() {
    var _this = $(this);
    if ($(this).hasClass('__current')) {
      $('.program-filter_form').slideUp(400, function() {
        _this.removeClass('__current').text('Фильтр');
      });
    } else {
      $('.program-filter_form').slideDown(400, function() {
        _this.addClass('__current').text('Закрыть');
      });
    }
    return false;
  });

  // Scroll to
  $('a[data-scroll]').click(function() {
    var
      elID = $(this).attr('href');
      destination = $(elID).offset().top;
    $('html, body').animate({scrollTop: destination - 60}, 500);
    return false;
  });

  // Dialogs
  /* Open dialog */
  $('[data-dialog]').click(function() {
    var
      $this = $(this),
      id = $this.data('dialog');
    $.arcticmodal({
      type: 'ajax',
      url: '/views/dialogs/_' + id + '.html'
    });
    return false;
  });
  /* Close dialog */
  $(document).on('click', '.dialog_close', function() {
    $.arcticmodal('close');
    return false;
  });

  // DOCUMENT SCROLL
  // ----------------------------------------------------------------------------------------------------
  $(window).scroll(function() {});

  // WINDOW LOAD
  // ----------------------------------------------------------------------------------------------------
  $(window).load(function() {});

  // WINDOW RESIZE
  // ----------------------------------------------------------------------------------------------------
  $(window).resize(function() {
    $.stickyFooter(80);
  });

});

function showCols(cols, _this) {
  console.log(cols);
  $(_this).find('.navigation-menu-dropdown').show();
  $('.background-cols').addClass('__hovered');
  $('.background-cols').find('.__current').removeClass('__current');
  $('.background-cols_i.__' + cols).addClass('__current');
}

function hideCols() {
  $('.navigation-menu-dropdown').hide();
  $('.background-cols').removeClass('__hovered');
  $('.background-cols').find('.__current').removeClass('__current');
}