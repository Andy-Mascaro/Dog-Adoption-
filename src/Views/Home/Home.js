import { useEffect, useState } from 'react';
import { fetchDogs } from '../../services/fetchDogs';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState('true');
  useEffect(() => {
    const fetchData = async () => {
      try { const data = await fetchDogs();
        setDogs(data);
      } catch (e) {
        alert(e.message);
      }
      setTimeout(() => {
        setLoading(false);
      }, 200);
    
    };
    fetchData();
  }, []);

  if (loading) return <div className='loader'>CHECKING ON DOGS</div>;

  return (
    <div className='dog-list'>
      <h1 className='text'>Click on an Image to learn more about the dog.</h1>
      {dogs.map((info) => (
        <div key={info.id}>
          <Link to={`/dogs/${info.id}`}> 
            <img src={info.image}/>
          </Link>
        </div>
       
      ))}
    
    
    
    </div>
  );
}
