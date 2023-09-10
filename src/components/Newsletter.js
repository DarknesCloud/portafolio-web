import { Col, Row } from 'react-bootstrap';

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Click aqui para descargar <br></br>Mi Hoja de Vida{' '}
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <form>
              <div className="new-email-bx">
                <button type="">Decargar</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
