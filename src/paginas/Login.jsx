import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <>
      <div className="container">
        <div
          classname="d-flex flex-column  mx-auto"
          style={{ width: 500 }}
        ></div>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresar correo" />
            <Form.Text className="text-muted">
            No compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
         
          <Button variant="primary" type="submit">
            Registrar
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Login;
