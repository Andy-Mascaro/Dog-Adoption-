
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
  const [message, setMessage] = useState('');

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



  const goBack = async () => {
    history.push(`/dogs/${params.id}`);
  };

  const handleSubmit = async () => {
    try {
      await editPup({ id: params.id, name, image, breed, bio, age });
      setMessage('Pup was edited');
    } catch (e) {
      setError('Make sure all blanks are filled in.');
      
    }
  };
  return (
    <> 
      <div className='edit'>
        <p>{message}</p>
      
        {error && (
          <p>
            {error} <span onClick={() => setError('')}></span>
          </p>
        
        
        )}
    
        <AddPup {...{ name, setName, image, setImage, breed, setBreed, bio, setBio, age, setAge, handleSubmit, goBack }}/>
      Edit Dog Page
      </div>
    
      <button onClick={goBack}>Go back to dog</button>
    </>
  );
}
