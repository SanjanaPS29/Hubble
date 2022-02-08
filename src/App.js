
import './App.css';
import Header from './components/Header'
import { Container } from './components/styles/Container.style';
import content from './content';
import Card  from './components/Card';
import {StyledFooter } from './components/styles/Footer'


function App() {
  return (
<div>
<Header/>
<Container>
</Container>
{
content.map((item,index)=>(
<Card key={index}  item={item}/>
))
}
<StyledFooter>&copy; All rights reserved </StyledFooter>
    </div>
  );
}

export default App;
