import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
const Contenido2 = () => {
  return (
    <>
      <Card className="text-center">
        <Card.Header>Album coleccionable</Card.Header>
        <Card.Body>
          <Card.Title>
            Acerca del álbum de figuras coleccionable digital
          </Card.Title>
          <Card.Text>
            <p>
              El álbum de figuras coleccionable digital es un formato de juego
              que permite a los jugadores coleccionar y intercambiar figuras
              digitales. Las figuras suelen estar disponibles en diferentes
              rarezas y ediciones, y los jugadores pueden intercambiarlas entre
              sí para completar sus colecciones.
            </p>
            <p>
              Los álbumes de figuras coleccionable digital suelen estar
              disponibles en formato web o aplicación. Los jugadores pueden
              crear una cuenta y empezar a coleccionar figuras.
            </p>
            <p>
              Las figuras digitales suelen estar disponibles en una variedad de
              estilos y temas. Los jugadores pueden coleccionar figuras de
              personajes de películas, anime, videojuegos, deportes y más.
            </p>
            <p>
              Las figuras digitales se pueden comprar con dinero real o con
              monedas del juego. Los jugadores pueden ganar monedas del juego
              completando misiones o participando en eventos.
            </p>
            <p>
              Las ventajas de los álbumes de figuras coleccionable digital
              incluyen:
            </p>
            

            <ListGroup>
              <ListGroup.Item>
                Confort: Las figuras digitales se pueden coleccionar y
                intercambiar desde cualquier lugar.
              </ListGroup.Item>
              <ListGroup.Item>
                Accesibilidad: Los álbumes de figuras coleccionable digital son
                más asequibles que los álbumes de figuras coleccionable físicos.
              </ListGroup.Item>
              <ListGroup.Item>
                Diversidad: Hay una gran variedad de figuras digitales
                disponibles.
              </ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Bolvia - 2023</Card.Footer>
      </Card>
    </>
  );
};
export default Contenido2;
