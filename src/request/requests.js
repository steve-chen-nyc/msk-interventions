import { host, version } from '../constants/api';

export const getInterventions = async (name) => {
  const cachedData = localStorage.getItem(name);

  if (cachedData) {
    try {
      return JSON.parse(cachedData)
    } catch(err) {
      console.warn('Error retrieving intervention from cache:', err)
      throw err;
    }
  }

  try {
    const interventions = await fetch(`${host}/${version}/interventions?name=${name}`);
    const json = await interventions.json();

    localStorage.setItem(name, JSON.stringify(json));

    return json;
  } catch(err) {
    console.warn('Error fetching interventions:', err)
    throw err;
  }
}
