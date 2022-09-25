import { Button } from "react-bootstrap";

export default function Navigation() {
  return (
    <div className="contact-form">
    <h4>correo:</h4>
    <input type="text" placeholder="name@Example.com" />
    <h4>Descripcion:</h4>
    <input type="text" className="description" />
    <Button className="btn btn-dark">Enviar</Button>
    </div>
  );
}
