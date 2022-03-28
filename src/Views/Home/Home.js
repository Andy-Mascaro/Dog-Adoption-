import { useEffect, useState } from 'react';
import { fetchDogs } from '../../services/fetchDogs';
import { Link } from 'react-router-dom';

export default function Home() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try { const data = await fetchDogs();
        setDogs(data);
      } catch (e) {
        alert(e.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='dog-list'>
      <h1>Hi We Wuv You</h1>
      {dogs.map((info) => (
        <div key={info.id}>
          <Link to={`/dogs/${info.id}`}> 
            <img src={info.image}/>
            {info.name}</Link>
        </div>
       
      ))}
    
    
    
    </div>
  );
}
