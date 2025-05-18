function Post({ post }) {
  const { id, titulo, img, descripcion, likes } = post;

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={img}
        alt={titulo}
        className="card-img-top"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/286x180?text=Sin+imagen";
        }}
        style={{ height: '180px', objectFit: 'cover' }}
      />

      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <div className="d-flex justify-content-between">
           <span>{likes}</span>
           <i className="fa-solid fa-x"></i>
        </div>
      </div>
    </div>
  );
}

export default Post;