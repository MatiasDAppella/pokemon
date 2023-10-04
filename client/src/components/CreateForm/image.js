const endpoint = 'https://pokemon-api-yo6q.onrender.com/image'

export const imageRequest = async (setImage) => {
  
  return await fetch(endpoint)
  .then(res => res.json())
  .then(data => setImage(data.image))
}
