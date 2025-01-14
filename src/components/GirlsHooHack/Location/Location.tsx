import {Row, Col} from 'react-bootstrap';
import { isMobile } from 'react-device-detect';


function Location() {
  return (
    <div>
        <Row className="bg-hack-grey justify-content-center pb-5 pt-5">
            <Col className={isMobile ? "ml-3" : "pl-5 ml-5"}>
                <h2 className="text-orange font-weight-bold pb-3">Location</h2>
                <p className="mono font-weight-bold">3 Elliewood, Charlottesville, 22903</p>
            </Col>
        </Row>
    </div>
  );
}

export default Location;
