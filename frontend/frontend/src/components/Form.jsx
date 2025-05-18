import { Form, Button } from 'react-bootstrap'

function PostForm({ setTitulo, setImgSRC, setDescripcion, agregarPost }) {
  return (
    <div className="mt-5" style={{ marginLeft: '100px' }}>
    <Form className=" p-5 border rounded bg-primary text-white fw-bold" style={{ width: '400px' }}>
      <h6><strong>Agregar post</strong></h6>

      <Form.Group className="mb-3" controlId="formTitulo">
        <Form.Label>Título</Form.Label>
        <Form.Control type="text" onChange={(e) => setTitulo(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formImg">
        <Form.Label>URL de la imagen</Form.Label>
        <Form.Control type="text" onChange={(e) => setImgSRC(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(e) => setDescripcion(e.target.value)} />
      </Form.Group>

      <div className="d-flex">
        <Button variant="light" className="m-auto" onClick={agregarPost}>
          Agregar
        </Button>
      </div>
    </Form>
    </div>
  );
}

export default PostForm;
