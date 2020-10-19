jQuery( '.top' ).click( function() {
    var htmloffset = jQuery( 'html' ).offset();
    jQuery( 'html, body' ).animate( { scrollTop : htmloffset.top }, 400 );
});


//목표설정으로 직접연결 <a href="#header" class="top"></a>