$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});
//
//var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>"
//    , parser = new DOMParser()
//    , doc = parser.parseFromString(xmlString, "text/xml");


window.onload = function() {
    var galCont = document.getElementById("galleryContainer");
    //<div class='col-sm-4 col-xs-6 col-md-3 col-lg-3'>
    //    <a class="thumbnail fancybox" rel='ligthbox' href='http://placehold.it/300x320.png'>
    //        <img class='img-responsive' alt='' src='http://placehold.it/320x320' />
    //        <div class='text-right'>
    //            <small class='text-muted'>Image Title</small>
    //        </div>
    //    </a>
    //</div>
    var xmlString = "<div class='col-sm-4 col-xs-6 col-md-3 col-lg-3'><a class='thumbnail fancybox' rel='ligthbox' href='http://placehold.it/300x320.png'> <img class='img-responsive' alt='' src='http://placehold.it/320x320' /> <div class='text-right'> <small class='text-muted'>Image Title</small> </div> </a> </div>";

    for (i = 0; i < 10; i++) {
        var div = document.createElement("div");
        div.innerHTML = xmlString;
        galCont.appendChild(div);
    }


    galCont.appendChild(div2);

    //galCont.elements.add
};

