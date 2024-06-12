import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div className="about-us">
              <h2 className='text-center'>About Us</h2>
              <p>
                Pixel Derma is a website that checks the skin of a person and
                detects the type of disease the person has. This website is
                for educational purposes only and should not be used as a
                substitute for professional medical advice, diagnosis or
                treatment. We use A.I to detect the type of disease and
                recommend some treatments.
              </p>
              <b className='rec'>We recommend you to consult a doctor before doing any treatment</b>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
