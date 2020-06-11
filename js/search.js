$("#box").on('keyup', function () {
    var matcher = new RegExp($(this).val(), 'gi');
    $('.flex-row').show().not(function () {
        return matcher.test($(this).find('h1').text())
    }).hide();
});
