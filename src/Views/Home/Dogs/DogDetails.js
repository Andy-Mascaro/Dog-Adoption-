import { useState, useEffect } from 'react';
import { fetchDogId } from '../../../services/fetchDogs';
import { useParams } from 'react-router-dom';
import './DogDetails.css';

export default function DogDetails() {
  const params = useParams();
  const id = params.id;
  const [dogDetail, setDogDetail] = useState ([null]);

  useEffect (() => {
    const fetchData = async () => {
      const data = await fetchDogId(id);
      setDogDetail(data);
    };
    fetchData();

  }, [id]);



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
    </div>
  );
}
