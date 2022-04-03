import { useState, useEffect } from 'react';
import { deleteDog, fetchDogId } from '../../../services/fetchDogs';
import { useParams } from 'react-router-dom';
import './DogDetails.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


export default function DogDetails({ currentUser }) {
  const params = useParams();
  const id = params.id;
  const [dogDetail, setDogDetail] = useState ([null]);
  const history = useHistory();
  const [loading, setLoading] = useState('true');

  useEffect (() => {
    const fetchData = async () => {
      const data = await fetchDogId(id);
      setDogDetail(data);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    };
    fetchData();

  }, [id]);

  const removeDog = async () => {
    await deleteDog(id);
    history.push('/');

  };
  

  if (loading) return <div className='loader'>CHECKING ON DOGS</div>;


  return (
    <div className="dog-id">
      <h1>Hi I am </h1>
      <div key={dogDetail.id}>
        <h2> {dogDetail.name}</h2>
        <img src={dogDetail.image}/>
        <h3>Breed: {dogDetail.breed}</h3>
        <h3>Bio: {dogDetail.bio}</h3>
        <h3>Age: {dogDetail.age}</h3>
      </div>
      {currentUser && (
        <>
     
          <Link to={`/dogs/${params.id}/edit`}>Edit Dog</Link>
          <button onClick={removeDog}>Remove Dog</button>
        </>
      )}
    </div>
  );
}
