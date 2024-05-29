import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import SideBar from './components/Sidebar';

function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    async function fetchAPIData() {
      const url =
        'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log('Fetched from cache today');
        return;
      }
      localStorage.clear();
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched from API today');
        localStorage.setItem(localKey, JSON.stringify(data));
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <SideBar data={data} setShowModal={setShowModal} />}
      {data && <Footer data={data} setShowModal={setShowModal} />}
    </>
  );
}

export default App;
