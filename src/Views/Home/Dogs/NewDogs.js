import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AddPup from '../../../components/Header/AddPup';
import { newDog } from '../../../services/fetchDogs'; 
import './NewDogs.css';

export default function Admin() {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = async () => {
    try {
      await newDog({ name, image, breed, bio, age });
      alert('Yeah Pup Added');
      history.push('/dogs');
    } catch (e) {
      setError('Oops, something went wrong!');
    }

    setName('');
    setImage('');
    setBreed('');
    setBio('');
    setAge(0);
      
  };

  return (
    <div>
      {error && (
        <p>
          {error} <span onClick={() => setError('')}></span>
        </p>
      )}
      <AddPup {...{ name, setName, image, setImage, breed, setBreed, bio, setBio, age, setAge, handleSubmit }}/>
    </div>
  );
}
