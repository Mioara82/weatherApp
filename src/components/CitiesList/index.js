import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { UnorderedList, Img, ListItem, Button, ButtonWrap, LinkCont } from '../Styled';

const City = ({ item, handleRemove}) => {
  const uppercasedWord = (word) => {
    return word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : '';
  };
  return (
    <ListItem>
      <Img small marginRight src={`https://flagsapi.com/${item.country}/shiny/64.png`} />
      <LinkCont >
        <Link 
          style={{ textDecoration: 'none', color: '#edede9' }}
          to={`/city/${item.name}`}
        >
          {uppercasedWord(item.name)}
        </Link>
      </LinkCont>
      <div>{item.temp}°C</div>
      <ButtonWrap>
          <Button hover small onClick={() => handleRemove(item)}>
            <FontAwesomeIcon style={{ margin: 'auto' }} icon={faTrash} />
          </Button>
        </ButtonWrap>
    </ListItem>
  );
};

const CitiesList = ({ cities, handleRemove }) => {
  return (
    <UnorderedList col>
      {cities.map((city) => (
        <City
          key={city.id}
          item={city}
          handleRemove={handleRemove}
          link={`/city/${city}`}
        />
      ))}
    </UnorderedList>
  );
};

export default CitiesList;
