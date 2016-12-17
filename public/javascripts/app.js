function validateForm1(evento) {
    var userName = document.getElementById('user').value;

    if (userName == '') {
        alert('Inserisci il campo Username');
    } else {
        if (userName.length <= 3) {
            alert('Inserisci un Username di almeno 4 lettere');
        }
    }

}
function validateForm2(evento) {

    var userName = document.getElementById('email').value;

    if (userName == '') {
        alert('Inserisci il campo Email');
    } else {
        if (userName.length <= 4) {
            alert('Inserisci una mail valida');
        }
    }


}
function validateForm3(evento) {
    var userName = document.getElementById('pwd').value;

    if (userName == '') {
        alert('Inserisci il campo Password');
    } else {
        if (userName.length <= 5) {
            alert('Inserisci un Password di almeno 6 caratteri');
        }
    }

}

function validateSelect() {
    var verifica = document.getElementById('Sel_ct').value;

    if (verifica == "Nessuna") {
        alert('Seleziona una Regione');
        return false;
    }
    return true;
}

function riepilogoDati() {
    alert
}

function validateFormAll() {
    validateForm1();
    console.log('valide 1 all green');
    validateForm2();
    console.log('valide 2 all green');
    validateForm3();
    console.log('valide 3 all green');
    validateSelect();
    console.log('valide Sel all green');
    riepilogoDati();
    console.log('riepilogo all green');
}

/*window.addEventListener('load', function () {

    //validateFormAll();



    console.log('valide all ready');
});*/

$(document).ready(function () {
    $(".p3").hide();
    $('#Im1').fadeIn(1500);
    $('#Im2').fadeIn(2000);
    $('#Im3').fadeIn(2500);
    $('#Im4').fadeIn(3000);
    $('#Im5').fadeIn(3500);
    $('#Im6').fadeIn(4000);
    $('#Im7').fadeIn(4500);
    $('#Im8').fadeIn(5000);
    $('#Im9').fadeIn(5500);
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 100) {
        $('#Ig1, #Ig2, #Ig3, #Ig4, #Ig5, #Ig6, #To1').fadeIn();
    } else {
        $('#Ig1, #Ig2, #Ig3, #Ig4, #Ig5, #Ig6, #To1').fadeOut();
    }
});

$( function() {
    var availableTags = [
      "Film",
      "Cinema",
      "Talent",
      "Serie Tv",
      "Documentari",
      "Musica",
      "Cucina",
      "Bambini",
      "Intrattenimento",
      "Life Style",
      "Spider-man",
      "Calcio",
      "Basket",
      "MotoGp",
      "Formula1",
      "Inception",
      "The Invitation",
      "Gomorra",
      "Il Trono Di Spade",
      "SuperQuark",
      "Pulp Fiction",
      "Serrentimon"
    ];

    $("#spotlight").autocomplete({
		source: availableTags,
		appendTo: $("form:first")
	});

	$("#spotlight").data( "ui-autocomplete" )._renderMenu = function( ul, items ) {
		var that = this;
		ul.attr("class", "nav nav-pills nav-stacked");
		$.each( items, function( index, item ) {
			that._renderItemData( ul, item );
		});
	};

});



var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
$.getJSON( flickrAPI, {
	/* cosa cercare*/
	tags: "Pulp Fiction",
	/* risposta della chiamata */
	format: "json"  
})

.done(function( data ) {
/* per ogni elemento nell'array ciclo */
  $.each( data.items, function( i, item ) {
	/* navigo all'interno del json e recupero il title, la sorgente dell'immagine, ecc. */
	$( "<img>" ).attr( "src", item.media.m ).appendTo( "#imgTag" );
	/* esco dal ciclo quando dopo 4 immagini*/
	if ( i === 0 ) {
	  return false;
	}         
  });
});	

	