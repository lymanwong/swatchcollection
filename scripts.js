// scripts.js
$(document).ready(function() {
  // ========== Filter Functionality ==========
  $(".filter-button").click(function() {
    // Remove active class from all buttons
    $(".filter-button").removeClass("active");
    // Add active class to clicked button
    $(this).addClass("active");

    const filterValue = $(this).data('filter');
    if (filterValue === 'all') {
      $('.filter').show(1000);
    } else {
      $('.filter').hide(1000);
      $(`.filter.${filterValue}`).show(1000);
    }
  });

  // ========== Modal Tabs Functionality ==========
  function handleModalTabs(evt, tabName) {
    // Get modal context
    const modal = $('#image-gallery');

    // Remove active class from all tabs
    modal.find('.tablink').removeClass('w3-light-grey');
    // Hide all tab content
    modal.find('.city').hide();

    // Show selected tab and add active class
    $(`#${tabName}`).show();
    $(evt.currentTarget).addClass('w3-light-grey');
  }

  // ========== Modal Initialization ==========
  $('#image-gallery').on('show.bs.modal', function(event) {
    const trigger = $(event.relatedTarget);
    const modal = $(this);

    // Set main content
    modal.find('#image-gallery-title').text(trigger.data('title'));
    modal.find('#image-gallery-image').attr('src', trigger.data('image'));

    // Set tab content
    modal.find('#image-gallery-description').html(trigger.data('description'));
    modal.find('#image-gallery-features').html(trigger.data('features'));
    modal.find('#image-gallery-specifications').html(trigger.data('specifications'));

    // Initialize first tab
    modal.find('.city').hide();
    modal.find('#Description').show();
    modal.find('.tablink').first().addClass('w3-light-grey');
  });

  // ========== Tab Click Handlers ==========
  $(document).on('click', '.tablink', function(e) {
    e.preventDefault();
    const tabName = $(this).attr('onclick').match(/'([^']+)'/)[1];
    handleModalTabs(e, tabName);
  });

  // ========== Cleanup on Modal Close ==========
  $('#image-gallery').on('hidden.bs.modal', function() {
    $(this).find('.tablink').removeClass('w3-light-grey');
    $(this).find('.city').hide();
  });
});