var args = $.args;
var Cloud = require('ti.cloud');
var image1 = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'imagen.jpg');
//var loader = Alloy.Globals.cargarLoader;

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
          //loader.open();
            imageViewImagen.image = event.media;
            // Create the file in the application directory
            var imageSave = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'imagen.jpg');
            imageSave.write(imageViewImagen.image); // write to the f
            ////Guardar imagen
            Cloud.Photos.create({
                photo: imageSave
            }, function(e) {
                if (e.success) {
                    var photo = e.photos[0];
                    Ti.App.Properties.setString('photoID', photo.id);
                    //loader.close();
                    alert("Imagen se subió correctamente al servidor.");
                } else {
                    //loader.close();
                    alert('Error:\n' +
                        ((e.error && e.message) || JSON.stringify(e)));
                }
            });

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
buscarImagen()

function buscarImagen() {
    var photoID = Ti.App.Properties.getString('photoID');
    loader.open();
    if (!Titanium.Network.online) {
        imageViewImagen.image = image1.read();
        loader.close();
        alert('No tienes conexion a internet');
        Ti.API.info("No tienes conexion a internet");
    } else {

        Cloud.Photos.show({
            photo_id: photoID
        }, function(e) {
            if (e.success) {
                    var photo = e.photos[0];
                    imageViewImagen.image = photo.urls.original;
                    loader.close();
                    alert('Imagen descargada desde el servidor.');

            } else {
                loader.close();
                alert('Error:\n' +
                    ((e.error && e.message) || JSON.stringify(e)));
            }
        });
    }
}
