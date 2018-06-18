// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
//var loginCorrecto = Ti.App.Properties.getBool("loginCorrecto");
var imageViewImagen = Ti.UI.createImageView({
    width: "200",
    height: "200",
    backgroundColor: "blue",
    top: "10"
});
$.camara.add(imageViewImagen);


var movie = Titanium.Media.createVideoPlayer({
    movieControlStyle: Titanium.Media.VIDEO_CONTROL_EMBEDDED,
    width: "200",
    height: "200",
    top: "180",
    backgroundColor: "#000",
    autoplay: false
});
$.camara.add(movie);

function camaraFoto() {
    Titanium.Media.showCamera({

        saveToPhotoGallery: true,
        allowEditing: false,
        autohide: false, //Important!

        success: function(event) {
          imageViewImagen.image = event.media;

        },

    });

}

function camaraVideo() {
    Ti.Media.showCamera({
        autohide: false,
        animated: false,
        allowEditing: false,
        saveToPhotoGallery: true,
        success: function(event) {

            movie.url = event.media.nativePath;
        },
        cancel: function(event) {
            console.log("error");
        },
        error: function(error) {
            alert('error');
        },
        mediaTypes: [Titanium.Media.MEDIA_TYPE_VIDEO],
        videoMaximumDuration: 5000,
        videoQuality: Titanium.Media.QUALITY_HIGH
    });

}

function capturaFoto(e) {

    if (!Ti.Media.hasCameraPermissions()) {

        // request permissions to capture media
        Ti.Media.requestCameraPermissions(function(e) {

            // success! we can capture media!
            if (e.success) {
                camaraFoto();
                // oops! could not obtain required permissions...
            } else {
                Ti.API.error('No se pueden obtener permisos de la camara.');
            }
        });
    } else {
        // yay! we already have permissions!
        //Ti.Media.showCamera({ ... });
        camaraFoto();
    }
}

function capturaVideo(e) {

    if (!Ti.Media.hasCameraPermissions()) {

        // request permissions to capture media
        Ti.Media.requestCameraPermissions(function(e) {

            // success! we can capture media!
            if (e.success) {
                camaraVideo();
            } else {
                Ti.API.error('No se pueden obtener permisos de la camara.');
            }
        });
    } else {
        camaraVideo();
    }
}
//$.camara.open();
