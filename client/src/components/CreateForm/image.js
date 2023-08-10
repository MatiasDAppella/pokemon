const endpoint = 'http://localhost:3001/image'

export const imageRequest = async (setImage) => {
  
  return await fetch(endpoint)
  .then(res => res.json())
  .then(data => setImage(data.image))
}