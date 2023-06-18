import React, { useState, useEffect } from 'react';
import '../assets/scss/people-list.scss'

const PeopleList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in')
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPeople = people.filter((person) =>
    person.name.first.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='chat--list__wrapper'>
      <div className='chat--search'>
      <h1 className="h1--head">Messages</h1>
      <input
        className='chat--search__input'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      </div>
      {isLoading ? (
        <p className='chat--status-loading'></p>
      ) : (
        <ul className='chat--list'>
          {filteredPeople.length === 0 ? (
            <p className='chat--status-text'>No people found</p>
          ) : (
            filteredPeople.map((person) => (
              <li className='chat--item' key={person.id.value}>
                <div className='chat--item__left'>
                <img src={person.picture.medium} alt={person.name.first} />
                </div>
                <div className='chat--item__right'>
                  <h3>{`${person.name.title}, ${person.name.first} ${person.name.last}`}</h3>
                  <p>{person.cell}</p>
                  {/* <p>{person.id.value}</p> */}
                </div>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default PeopleList;