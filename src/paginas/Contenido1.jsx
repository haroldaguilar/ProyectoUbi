import imagenInicio from "../img/inicio.png";
import figura01 from "../img/figura01.jpg";
import figura02 from "../img/figura02.jpg";
import figura03 from "../img/figura03.jpg";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
const Contenido1 = () => {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={imagenInicio} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Header>
            <h1>Super Album Digital Coleccionable</h1>
          </Card.Header>
          <Card.Text>
            Descubre la belleza del planeta Tierra y el espacio exterior con
            este álbum digital coleccionable de 50 cartas exclusivas.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br />
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={figura01} />
          <Card.Body>
            <Card.Title>Abre 3 sobres por día</Card.Title>
            <Card.Text>
              Podrás reclamar tres sobres cada día y un sobre contiene cinco
              figuras digitales.
            </Card.Text>
          </Card.Body>
 
        </Card>
        <Card>
          <Card.Img variant="top" src={figura02} />
          <Card.Body>
            <Card.Title>¡Accede desde cualquier navegador!</Card.Title>
            <Card.Text>
            Con nuestro álbum digital, puedes coleccionar las 50 cartas exclusivas desde cualquier dispositivo con conexión a internet.

Desde tu tableta en el sofá.
Tu televisor en la sala .
tu celular en el camino.{" "}
            </Card.Text>
          </Card.Body>

        </Card>
        <Card>
          <Card.Img variant="top" src={figura03} />
          <Card.Body>
            <Card.Title>¿Cómo coleccionar cartas digitales?</Card.Title>
            <Card.Text>
            Colecciona cartas digitales del planeta Tierra y el espacio exterior y conviértete en un experto en astronomía... o al menos en un coleccionista muy orgulloso.
            </Card.Text>
          </Card.Body>

        </Card>
      </CardGroup>
      <br />
      <br />
      <div className="container">
      <div className="row gy-4">
      <div className="col-lg-5 col-md-12 footer-info">
          <p>
            ¡Síguenos en las redes sociales para estar al día de las últimas novedades del álbum espacial!
            
            Descubre nuevas cartas, participa en concursos y gana premios, y mucho más.
            
            ¡No te lo pierdas!</p>
        
          </div>
          </div>
        </div>



    </>
  );
};

export default Contenido1;
