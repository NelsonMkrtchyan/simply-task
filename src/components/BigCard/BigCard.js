import {Card, Col, Row} from "react-bootstrap";


export default function BigCard({title, content, date, urlToImage}) {
    return (
        <>
            <Card style={{margin: '10px 10px'}}>
                <Row>
                    <Card.Img style={{width: '20rem',  margin: '5px'}} variant="left" src={urlToImage}/>
                    <Col>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {content}
                            </Card.Text>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    {date}
                                </small>
                            </footer>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    )
}