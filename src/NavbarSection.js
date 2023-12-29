import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';


function NavbarSection(){
    return(
        <div>
             <Navbar expand="lg" className="navbg" style={{backgroundColor:'#d1c2c2 !important'}} >
             <Container>
                <Navbar.Brand href="#">Movies List</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex" style={{width:'70%'}}>
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-dark">Search</Button>
                </Form>
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <Button variant="danger">Signin</Button>
                </Nav>
                </Navbar.Collapse>
      </Container>
    </Navbar>



    <Container>
        <Carousel style={{margin:"40px  0"}}>
        <Carousel.Item interval={1000}>
            <img  src='https://assets-in.bmscdn.com/promotions/cms/creatives/1700994295451_web.jpg' alt='imre'/>
            
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1701344395471_ccc1240x300.jpg' alt='imf'/>
        
        </Carousel.Item>
        <Carousel.Item>
            <img src='https://assets-in.bmscdn.com/promotions/cms/creatives/1702568831037_flashsaleweb.jpg' alt='imf'/>
        </Carousel.Item>
        </Carousel>

    </Container>
   
        </div>
    )
}

export default NavbarSection;