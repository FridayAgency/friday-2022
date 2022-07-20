/* jshint ignore:start */
//=include ../bower_components/jquery/dist/jquery.min.js
/* jshint ignore:end */
/*  ==========================================================================
    ==========================================================================

    Main JS
    1. Includes
    2. JQuery

    ==========================================================================
    ========================================================================== */
/*  ==========================================================================
    1. Includes
    ========================================================================== */
/* Place JS files for any modules in the includes/ directory and include them below
========================================================================== */
/*  ==========================================================================
    2. JQuery
    ========================================================================== */
jQuery(document).ready(function($) {
    var $signoff = $('#sig__signoff');
    var $fname = $("#sig__fname");
    var $sname = $("#sig__sname");
    var $pos = $("#sig__position");
    var $add = $("#sig__address");
    var $logo_url = $("input:radio[name ='logo_img']:checked").val();
    var $linkedin = $("#li__url");
    //init
    $('#signoff').html($($signoff).val());
    $('#fname').html($($fname).val());
    $('#fname2').html($($fname).val());
    $('#sname').html($($sname).val());
    $('#pos').html($($pos).val());
    $('#linkedin').attr("href", $($linkedin).val());
    $('#logo_img_url').attr("href", $($linkedin).val());
    $("#logo_img").attr("src", $logo_url);
    //live update
    $($signoff).keyup(function() {
        $('#signoff').html($(this).val());
        $("#generated_code__wrapper").fadeOut();
    });
    $($fname).keyup(function() {
        $('#fname').html($(this).val());
        $('#fname2').html($(this).val());
        $("#generated_code__wrapper").fadeOut();
    });
    $($sname).keyup(function() {
        $('#sname').html($(this).val());
        $("#generated_code__wrapper").fadeOut();
    });
    $($pos).keyup(function() {
        $('#pos').html($(this).val());
        $("#generated_code__wrapper").fadeOut();
    });
    $($add).keyup(function() {
        $('#address').html($(this).val());
        $("#generated_code__wrapper").fadeOut();
    });
    $('input[type=radio][name=logo_img]').change(function() {
        $("#logo_img").attr("src", $(this).val());
        $("#generated_code__wrapper").fadeOut();
    });
    $($linkedin).keyup(function() {
        $('#linkedin').attr("href", $(this).val());
        $("#generated_code__wrapper").fadeOut();
    });
    //generate
    $("#generate_code").click(function(e) {
        e.preventDefault();
        $("#generated_code_to_copy").text($('#code_to_generate').html());
         $("#generated_code__wrapper").fadeIn();
    });
    $('#copyCode').click(function() {
        SelectText('generated_code_to_copy');
    });

    $('#copyHtml').click(function() {
        SelectText('code_to_generate');
    });
});

function SelectText(element) {
    var doc = document,
        text = doc.getElementById(element),
        range, selection;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}