import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function SmallCard({sourceId, sourceName, description, category, language, country}) {
    const link = `/search/${sourceId}`;
    return (
        <>
            <Card style={{width: '25rem', margin: '10px 10px'}}>
                <Link to={link}>
                    <Card.Body>
                        <Card.Title>{sourceName}</Card.Title>
                        {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Link href="#">{category}</Card.Link>
                        <Card.Link href="#">{language}</Card.Link>
                        <Card.Link href="#">{country}</Card.Link>
                    </Card.Body>
                </Link>
            </Card>
        </>
    )
}