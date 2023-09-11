import { Col, Row } from 'react-bootstrap';
import hoja_vida from '../assets/img/cv.pdf';

export const Newsletter = () => {
  const descargarArchivo = () => {
    const url = hoja_vida;

    const link = document.createElement('a');
    link.href = url;
    link.download = 'Currículum Vitae Saul Leiva.pdf';
    link.click();
  };

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
                <button id="descargarBtn" type="" onClick={descargarArchivo}>
                  Descargar Hoja de Vida
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
