import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { getUsers } from './service/api';

const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0 auto; 
`;
const Thead = styled(TableRow)`
     background: #4E6560;
     & > th{
      color: #fff;
      font-size:20px;
     }
`
const TBody = styled(TableRow)`
    
     & > td{
      font-size:20px;
     }
`

function All() {

  const [user, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };



  useEffect(() => {
    getUsersDetails();

  }, [])
  const getUsersDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response);
  }

  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedActive, setSelectedActive] = useState([]);

  const handleCityChange = (event) => {
    const city = event.target.value;
    if (selectedCities.includes(city)) {
      setSelectedCities(prevSelectedCities =>
        prevSelectedCities.filter(c => c !== city)
      );
    } else {
      setSelectedCities(prevSelectedCities => [...prevSelectedCities, city]);
    }
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    if (selectedCategories.includes(category)) {
      setSelectedCategories(prevSelectedCategories =>
        prevSelectedCategories.filter(c => c !== category)
      );
    } else {
      setSelectedCategories(prevSelectedCategories => [...prevSelectedCategories, category]);
    }
  };

  const handleTypeChange = (event) => {
    const type = event.target.value;
    if (selectedTypes.includes(type)) {
      setSelectedTypes(prevSelectedTypes =>
        prevSelectedTypes.filter(t => t !== type)
      );
    } else {
      setSelectedTypes(prevSelectedTypes => [...prevSelectedTypes, type]);
    }
  };

  const handleActiveChange = (event) => {
    const value = event.target.value;
    if (selectedActive.includes(value)) {
      setSelectedActive(prevSelectedActive =>
        prevSelectedActive.filter(a => a !== value)
      );
    } else {
      setSelectedActive(prevSelectedActive => [...prevSelectedActive, value]);
    }
  };
  
  const filteredItems = user.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCities.length === 0 || selectedCities.includes(item.city)) &&
    (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
    (selectedTypes.length === 0 || selectedTypes.includes(item.type)) &&
    (selectedActive.length === 0 || selectedActive.includes(item.active.toString())) 
  )


  return (
    <>
      <div style={{ display: "flex", marginLeft: "15%", marginTop: "2%", justifyContent: "space-between", maxWidth: "60%" }}>
        {/*    ==============City Filter=============== */}
        <div style={{ display: "flex" }}>
          <h3>City</h3>

          <div style={{ display: "block" }}>
            <div style={{ display: "flex" }}>
              <input
                type='checkbox'
                value='dallas'
                checked={selectedCities.includes('dallas')}
                onChange={handleCityChange}
              />
              <h5>dallas</h5>
            </div>
            <div style={{ display: "flex", marginTop: "-10%" }}>
              <input
                type='checkbox'
                value='san francisco'
                checked={selectedCities.includes('san francisco')}
                onChange={handleCityChange}
              />
              <h5>san francisco</h5>
            </div>

            <div style={{ display: "flex", marginTop: "-10%" }}>
              <input
                type='checkbox'
                value='denver'
                checked={selectedCities.includes('denver')}
                onChange={handleCityChange}
              />
              <h5>denver</h5>
            </div>

          </div>



        </div>

        {/*    ==============Category Filter=============== */}

        <div style={{ display: "flex", }}>
          <h3>Category</h3>

          <div style={{ display: "block" }}>
            <div style={{ display: "flex" }}>
              <input
                type='checkbox'
                value='one'
                checked={selectedCategories.includes('one')}
                onChange={handleCategoryChange}
              />
              <h5>one</h5>
            </div>
            <div style={{ display: "flex", marginTop: "-50%" }}>
              <input
                type='checkbox'
                value='two'
                checked={selectedCategories.includes('two')}
                onChange={handleCategoryChange}
              />
              <h5>two</h5>
            </div>
          </div>

        </div>

        {/*    ==============Type Filter=============== */}

        <div style={{ display: "flex", }}>
          <h3>Type</h3>

          <div style={{ display: "block" }}>
            <div style={{ display: "flex" }}>
              <input
                type='checkbox'
                value='A'
                checked={selectedTypes.includes('A')}
                onChange={handleTypeChange}
              />
              <h5>A</h5>
            </div>
            <div style={{ display: "flex", marginTop: "-80%" }}>
              <input
                type='checkbox'
                value='B'
                checked={selectedTypes.includes('B')}
                onChange={handleTypeChange}
              />
              <h5>B</h5>
            </div>


            <div style={{ display: "flex", marginTop: "-80%" }}>
              <input
                type='checkbox'
                value='C'
                checked={selectedTypes.includes('C')}
                onChange={handleTypeChange}
              />
              <h5>C</h5>
            </div>
          </div>

        </div>

        {/*    ==============Active Filter=============== */}

        <div style={{ display: "flex", }}>
          <h3>Active</h3>

          <div style={{ display: "block" }}>
            <div style={{ display: "flex" }}>
              <input
                type='checkbox'
                value='TRUE'
                checked={selectedActive.includes('TRUE')}
                onChange={handleActiveChange}
              />
              <h5>False</h5>
            </div>
            <div style={{ display: "flex", marginTop: "-50%" }}>
              <input
                type='checkbox'
                value='FALSE'
                checked={selectedActive.includes('FALSE')}
                onChange={handleActiveChange}
              />
              <h5>True</h5>
            </div>
          </div>

        </div>

        {/*    ==============Name Filter=============== */}

        <div style={{ display: "flex", }}>
          <h3>Name</h3>

          <div style={{ display: "block", marginTop: "10%", marginLeft: "5%" }}>
            <div style={{ display: "flex" }}>
              <input type='text' placeholder='Name' value={searchTerm}
                onChange={handleSearchChange} />
            </div>
          </div>

        </div>


      </div>

      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Active</TableCell>


          </Thead>
        </TableHead>
        <TableBody>
          {
            filteredItems.map(use => (
              <TBody>
                <TableCell>{use.id}</TableCell>
                <TableCell>{use.name}</TableCell>
                <TableCell>{use.city}</TableCell>
                <TableCell>{use.category}</TableCell>
                <TableCell>{use.type}</TableCell>
                <TableCell>{use.active.toString()}</TableCell>
              </TBody>


            ))
          }
        </TableBody>
      </StyledTable>
    </>


  )
}

export default All
