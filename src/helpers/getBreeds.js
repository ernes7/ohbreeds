/**
 * This turns the response into a list. Which is easier to work with.
 */
const fetch = require('node-fetch')

const getBreeds = () =>
  fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then(({ message }) =>
      Object.entries(message).reduce((acc, [breed, subbreeds]) => {
        if (subbreeds.length) {
          for (const subbreed of subbreeds) {
            acc.push(`${breed} ${subbreed}`)
          }
        } else {
          acc.push(breed)
        }
        return acc
      }, [])
    )

export default getBreeds;
