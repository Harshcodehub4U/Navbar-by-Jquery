// Show the dropdown on mouseenter
$('nav ul li.container').on('mouseenter', function() {
    $(this).find('.courses-options').stop(true, true).slideDown("slow");
});

// Hide the dropdown on mouseleave
$('nav ul li.container').on("mouseleave", function() {
    $(this).find('.courses-options').stop(true, true).slideUp("slow");
});
