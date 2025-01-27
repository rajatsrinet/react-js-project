import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';

function App() {
   
  return (
    <div className="App">
      <Header email = "test@gmail.com"/>
       <Container fluid>
        <Container>
          <Row>
            <Col className='col-12'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
       </Container> 
      <Footer/>
       
    </div>
  );
}

export default App;
