$('#btn-show-tabs').on('click', function(){
    if($('#tab-list').is(".hide")){
        $('#tab-list').removeClass( "hide" ).addClass( "show" );
    }else if($('#tab-list').is(".show")){
        $('#tab-list').removeClass( "show" ).addClass( "hide" );
    }
});
$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');
    var valTab = $(this).text();

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');

    $('#tab-list').removeClass( "show" ).addClass( "hide" );
    $("#btn-show-tabs span").text(valTab)
});