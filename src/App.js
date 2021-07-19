import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, FormControl, Image, InputGroup, Row } from 'react-bootstrap';
import logoTop from './logo-top.svg';
import mockUp from './tablet-mockup.png';
import tweet from './tweet.svg';
import logoBottom from './logo-bottom.svg';
import globe from './globe.svg';
import twitter from './twitter.svg';
import insta from './insta.svg';
import mail from './mail.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <Container fluid>
      <Row noGutters>
        <Col sm={4} xs={4} lg={4}><Image src={logoTop} className="mx-4 my-3 logo-top" width="180"></Image></Col>
        <Col sm={8} xs={8} lg={8}className="d-flex justify-content-end">
          <Button className="primary px-5 my-3 mx-2 text-center text-primary border-white bg-white rounded-pill sign-in-btn">Sign In</Button>
          <Button className="primary px-5 my-3 me-3 text-center rounded-pill home-btn">Home</Button>
          <Button className="bg-white menu-btn"><FontAwesomeIcon icon={faBars}/></Button>
        </Col>
      </Row>
      <Row noGutters>
        <div className="div1-design"/>
        <Col lg={6}>
          <div className="head1">Become a true<span className="color-lb"> SUPERFAN</span></div>
          <div className="des1 text-wrap">Support your favourite creator by sharing their #TweetsFromHome wall with your loved ones and grow their community.</div>
          <div className="search mt-5">
            <InputGroup>
              <InputGroup.Text id="creatorName"><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
              <FormControl aria-label="creatorName" aria-describedby="creatorName" placeholder={"Search your favourite creator"}/>
            </InputGroup>
          </div>
          <Button className="primary px-3 my-5 mx-2 text-center rounded-pill btn-search">View Tweets from Home</Button>
        </Col>
        <Col lg={6} sm={12}>
          <Image src={mockUp} className="me-auto my-3 mockup"></Image>
        </Col>
      </Row>
      <Row className="my-5">
        <Col lg={12} className="text-center text-mid ">
          <span className="color-lb">Creators</span><span className="color-db"> are powerful</span>
        </Col>
      </Row>
      <Row >
        <div className="section2">
          <div className="div2-design" />
        </div>
        <Col lg={6} xs={12} className="d-flex">
          <Image src={tweet} className="image-center"/>
        </Col>
        <Col lg={6} xs={12} className="d-flex justify-content-end text-low">
          <div className="d-flex flex-column my-auto mx-3">
            <div className="cl-lb text-end">CREATORS SHAPE CULTURE.</div>
            <div className="fs-48 text-wrap text-end">2 in 3 twitter users agree that creators change and shape culture</div>
            <div className="d-flex justify-content-end my-3 tags-container">
              <div className="ms-auto">
                <div className="my-2 d-flex justify-content-end">
                  <Button className="mx-2 px-5 text-center tags rounded-pill child-1">#HiArmy</Button>
                  <Button className="mx-2 px-5 text-center tags rounded-pill child-2">#everydays</Button>
                </div>
                <div className="my-2 d-flex justify-content-end">
                  <Button className="mx-2 px-5 text-center tags rounded-pill child-3">#teamtrees</Button>
                  <Button className="mx-2 px-5 text-center tags rounded-pill child-4">#BTS</Button>
                </div>
                <div className="my-2 d-flex justify-content-end">
                  <Button className="mx-2 px-5 text-center tags rounded-pill child-5">#botarmy</Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="mt-200 mb-50 d-flex justify-content-center fs-48">
          <div className="w-60 text-center text-wrap fw-700 color-db2">
            With #TweetsFromHome, express your love for your favourite creator.
          </div>
        </Col>
        <Col lg={12} className="mt-5 mb-2 px-5 fw-700 fs-24 text-wrap text-center">
          Choose the top tweets that you absolutely admire to create your version of their #TweetsFromHome wall and simply share on Twitter.
        </Col>
        <Col lg={12} className="d-flex flex-column justify-content-center">
          <div className="d-flex flex-column mx-auto w-25">
            <div className="search-bottom">
              <InputGroup>
                <InputGroup.Text><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
                <FormControl aria-label="creatorName" aria-describedby="creatorName" placeholder={"Search your favourite creator"}/>
              </InputGroup>
            </div>
            <div className="mx-auto">
              <Button className="text-center px-5 py-1 rounded-pill my-2 fw-400 btn-bottom my-5 bg-lb color-white">Sign In to continue</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={3} className="my-5 d-flex flex-column justify-content-center ">
          <div className="mx-auto" >
            <Image src={logoBottom}/>
          </div>
          <div className="d-flex justify-content-center my-2">
            <Image src={globe} className="mx-2" width={20}/>
            <Image src={twitter} className="mx-2" width={20}/>
            <Image src={insta} className="mx-2" width={20}/>
            <Image src={mail} className="mx-2" width={20}/>
          </div>
        </Col>
        <Col lg={6} className="d-flex text-center">
          <span className="color-gradient mt-auto mb-5 mx-auto">Get early access for Bread <FontAwesomeIcon icon={faArrowRight} className="cb"/></span>
        </Col>
        <Col lg={3} className="d-flex justify-content-end px-3">
          <div className="ml-auto mt-auto">
            <div className="fs-16 fw-400 font-Helvetica my-2">
              📄 Privacy Policy
            </div>
            <div className="fs-16 fw-400 font-Helvetica my-2">
              📃 Terms of Use
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

