import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';

// Context Sample
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import User from './components/context/User';
import Counter from './components/class/Counter';
import Profile from './components/auth/Profile';
import Private from './components/auth/Private';
import List from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import Toast from './components/templateliterals/Toast';
import CustomButton from './components/html/Button';
import CustomInput from './components/html/Input';
import { CustomComponents } from './components/html/CustomComponents';
import { Text } from './components/polymorphic/Text';

function App() {
  const names = {
	  first: "Asrii",
	  last: "Dev"
  }

  const namesList = [
	{
	  first: "Asrii",
	  last: "Dev"
    },
	{
	  first: "JMD",
	  last: "Dev"
    },
	{
	  first: "KKK",
	  last: "Dev"
    }
  ]

  return (
    <div className="App">
      {/* <Header title="Test" color="red" />
	  <Greet name="Asrii" messageCount={10} isLoggedIn={true} />
	  <Person name={names}/>
	  <PersonList names={namesList} />
	  <Status status="loading"/>
	  <Button handleClick={(event, id) => {
		  console.log('Button clicked', event, id);
	  }}/>
	  <Input value="" handleChange={event => console.log(event)} />
	  <Container styles={{border: '1px solid black', padding: '1rem'}} /> */}


	  {/* Context Tuts */}
	  {/* <ThemeContextProvider>
		  <Box />
	  </ThemeContextProvider>

	  <UserContextProvider>
		  <User />
	  </UserContextProvider> */}

	  {/* Class */}
	  {/* <Counter message='The count value is' /> */}

	  {/* Component props */}
	  {/* <Private isLoggedIn={true} component={Profile} /> */}

	  {/* Generic Props */}
	  {/* <List 
	  	items={['Batman','Superman','Wonder Woman']}
		onClick={item => console.log(item)}
	  />

	  <List 
	  	items={[1,2,3]}
		onClick={item => console.log(item)}
	  />

	  <List 
	  	items={[1,'Asrii',true]}
		onClick={item => console.log(item)}
	  /> */}

	  {/* <List 
	  	items={[
		  {
			id: 1,
			first: 'Asrii1',
			last: 'Radam',
		  },
		  {
			id: 2,
			first: 'Asrii2',
			last: 'Radam',
		  },
		  {
			id: 3,
			first: 'Asrii3',
			last: 'Radam',
		  }
		]}
		onClick={item => console.log(item)}
	  /> */}

	  {/* Restricting Props */}
	  {/* <RandomNumber value={10} isPositive /> */}

	  {/* Template Literals & Exclude */}
	  {/* <Toast position='center' /> */}

	  {/* Wrapping HTML Elements */}
	  {/* <CustomButton variant='primary' onClick={() => console.log('clicked')}>
		  Primary Button
	 </CustomButton> */}
	  {/* <CustomInput /> */}

	  {/* Extracting a Components Prop Type*/}
	  {/* <CustomComponents name='Asrii' messageCount={5} isLoggedIn/> */}

	 {/* Polymorphic Components */}
	  <Text as='h1' size='lg'>Heading</Text>
	  <Text as='p' size='md'>Paragraph</Text>
	  <Text as='label' htmlFor='someId' size='sm' color="secondary">Label</Text>
    </div>
  );
}

export default App;
