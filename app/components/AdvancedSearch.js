import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
const AdvancedSearch = () => {
  return (
    <div>
    <div id="home-advanced-search" className="open">
    <Container>
    <Row>
        <div className="form-group">
        <div id="opensearch"></div>
            <Form>
                <Row>
                <Col>
                <Form.Control type="date" placeholder="Pick date" />
                </Col>
                <Col>
                    <Form.Select>
                    <option value="">Stay...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col>
                <Form.Select>
                    <option value="defaultValue">Stay...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                </Col>
                <Col>
                    <Form.Control type="text" placeholder="Normal text" />
                </Col>
                <Col>
                    <Button type="submit" className="btn btn-fullcolor">Search</Button>
                </Col>
                </Row>
            </Form>
        </div>
    </Row>
    </Container>
    </div>

    </div>
  )
}

export default AdvancedSearch