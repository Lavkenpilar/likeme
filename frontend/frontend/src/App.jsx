import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";
import Post from "./components/Post";

const urlBaseServer = "http://localhost:3000";

function App() {
  const [titulo, setTitulo] = useState("");
  const [imgSrc, setImgSRC] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await axios.get(urlBaseServer + "/registros");
    setPosts(data.rows);
  };

  const agregarPost = async () => {

 if (!titulo.trim() || !imgSrc.trim() || !descripcion.trim()) {
    alert("Todos los campos son obligatorios");
    return;
  }
    const post = { titulo, img: imgSrc, descripcion, likes:0 };
    await axios.post(urlBaseServer + "/registros", post);
    getPosts();
  };

  // este método se utilizará en el siguiente desafío
  /*const like = async (id) => {
    await axios.put(urlBaseServer + `/posts/like/${id}`);
    getPosts();
  };

  // este método se utilizará en el siguiente desafío
  const eliminarPost = async (id) => {
    await axios.delete(urlBaseServer + `/posts/${id}`);
    getPosts();
  };*/

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>
      <div className="row">
        <div className="col-md-4">
          <Form
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
          />
        </div>
        <div className="col-md-8 d-flex flex-wrap justify-content-start gap-3">
          {posts.filter((post) => post.img && post.titulo && post.descripcion)
          .map((post, i) => (
            <Post
              key={i}
              post={post}
             // like={like}
             // eliminarPost={eliminarPost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
