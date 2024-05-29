export default function Footer(props) {
    const { setShowModal, data } = props;
  
    return (
      <footer>
        <div className="bgGradient"></div>
        <div>
          <h1>APOD PROJECT</h1>
          <h2>{data?.title}</h2>
        </div>
        <button>
          <i
            onClick={() => setShowModal(true)}
            className="fa-solid fa-circle-info"
          ></i>
        </button>
      </footer>
    );
  }
  