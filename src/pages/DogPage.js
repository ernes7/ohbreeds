import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../App.css';

export default function DogPage() {
  let { slug } = useParams();
  const [breedImages, setBreedImages] = React.useState([]);

  React.useEffect(() => {
    getImages();
  }, []);


  // Slug comes in the form "breed subBreed", needs to be breed/subBreed for request
  const getImages = () => {
    fetch(`https://dog.ceo/api/breed/${slug.replace(' ', '/')}/images/random/4`)
      .then((response) => response.json())
      .then((response) => setBreedImages(response.message));
  };

  return (
    <div className='breedContainer'>
      <div>
        <h1>{slug || 'No Breed To Show'}</h1>
      </div>
      <div>
        <Link to='/'>
          <Button variant='contained' color='secondary'>
            Back Home
          </Button>
        </Link>
      </div>
      <div>
        {breedImages.map((bi) => {
          return <img src={bi} alt={bi} />;
        })}
      </div>
    </div>
  );
}
