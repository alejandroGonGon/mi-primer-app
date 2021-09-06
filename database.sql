create database peliculas;
use peliculas;
create table pelicula(idPelicula INT NOT NULL AUTO_INCREMENT, nombre VARCHAR(100) NOT NULL, img VARCHAR(200), activo TINYINT(1)  NOT NULL  DEFAULT '1', PRIMARY KEY(idPelicula));

INSERT INTO pelicula(nombre,img) VALUES("Indiana Jones", "https://images-na.ssl-images-amazon.com/images/I/71vYVW4tY0L._AC_SY679_.jpg");
INSERT INTO pelicula(nombre,img) VALUES("Avatar", "https://images-na.ssl-images-amazon.com/images/I/61ADl6omqPL._AC_SL1500_.jpg");
INSERT INTO pelicula(nombre,img) VALUES("Los Vengadores Infinity War", "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/4Y7BR725AZGPFBS25X54JCZKXE.jpg");
