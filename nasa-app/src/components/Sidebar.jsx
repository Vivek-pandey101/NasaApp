export default function SideBar(props) {
    const { setShowModal, data } = props;
  
    return (
      <div className="sidebar">
        <div className="bgOverlay" onClick={() => setShowModal(false)}></div>
        <div className="sidebarContents">
          <h2>{data?.title}</h2>
          <div className="descriptionContainer">
            <p className="descriptionTitle">{data?.date}</p>
            <p>{data?.explanation}</p>
          </div>
          <button>
            <i
              onClick={() => setShowModal(false)}
              className="fa-solid fa-arrow-right"
            ></i>
          </button>
        </div>
      </div>
    );
  }
  