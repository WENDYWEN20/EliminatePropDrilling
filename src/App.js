import { useState } from 'react';
import {useContext} from 'react';
import ImageSizeContent from './Context';
import { places } from './data.js';
import { getImageUrl } from './utils.js';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);

  const imageSize = isLarge ? 150 : 100;
  return (
    <>
    <ImageSizeContent.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />

      </ImageSizeContent.Provider>
    </>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
        
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place}) {
  return (
    <>
      <PlaceImage
        place={place}

      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place}) {
  const imageSize=useContext(ImageSizeContent)
  console.log('From Context', imageSize)
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
