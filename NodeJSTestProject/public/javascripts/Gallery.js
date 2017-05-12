function SomeMethod() {
    var searchText = document.getElementById('searchField').value;
    window.location.href = 'http://localhost:3000/gallery?tag='+searchText;
    //searchField
    //$.get("http://localhost:3000/gallery?tag=tag1", function (data) {
    //    alert("Data Loaded");
    //});
}

///**
// * Created by Russkov.Alexander on 2/18/2017.
// */
//function FindPaintings() {
//    alert("123");
//    //  httpGetAsync(())
//    //$.get( "ajax/test.html", function( data ) {
//    //    $( ".result" ).html( data );
//    //    alert( "Load was performed." );
//    //});
//
//    //$.get( "test.cgi", { name: "John", time: "2pm" } )
//    //    .done(function( data ) {
//    //        alert( "Data Loaded: " + data );
//    //    });
//
//    //$.get("http://localhost:3000/gallery?tag=tag1", function(data) {
//    //
//    //    alert("Data Loaded: " + data);
//    //
//    //});
//}

