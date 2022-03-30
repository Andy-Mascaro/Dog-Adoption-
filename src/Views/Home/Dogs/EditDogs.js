
import { useEffect, useState } from 'react';
import { editPup, fetchDogId } from '../../../services/fetchDogs';
import { useParams, useHistory } from 'react-router-dom';
import AddPup from '../../../components/Header/AddPup';

export default function EditDogs() {
  const params = useParams();
  const history = useHistory();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogId(params.id);
      setName(data.name);
      setImage(data.image);
      setBreed(data.breed);
      setBio(data.bio);
      setAge(data.age);
          
    };
    fetchData();
  }, [params.id]);



  
  const handleSubmit = async () => {
    try {
      await editPup({ id: params.id, name, image, breed, bio, age });
      alert('Pup was edited');
      history.push(`/dogs/${params.id}`);
    } catch (e) {
      setError('Make sure all blanks are filled in.');
      
    }
  };
  return (
    <div className='edit'>
      {error && (
        <p>
          {error} <span onClick={() => setError('')}></span>
        </p>
      )}
    
      <AddPup {...{ name, setName, image, setImage, breed, setBreed, bio, setBio, age, setAge, handleSubmit }}/>
      Edit Dog
    </div>
    
  );
}
