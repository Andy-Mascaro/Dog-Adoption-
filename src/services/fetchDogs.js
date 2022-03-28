import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs').select('*');
  console.log(resp);
  return checkError(resp);
}

export async function fetchDogId(id) {
  const resp = await client.from('dogs').select('*').match({ id }).single();
  return checkError(resp);
}

