import {useEffect, useState} from "react";
import {fetchData, generateApi} from "../../functions/functions";
import BigCard from "../BigCard/BigCard";
import {Col, Container, Row, Button} from "react-bootstrap";
import Filter from "../Filter/Filter";


export default function Search({match}) {
    const sourceId = match.params.sourceId
    const searchValue = match.params.searchValue

    const [news, setNews] = useState({})
    const [api, setApi] = useState(generateApi('everything', sourceId))

    useEffect(() => {
        fetchData(api, setNews, 'articles');

    }, [api])

    useEffect(() => {
        if (!sourceId)
            setApi(generateApi('everything', undefined, searchValue))
    }, [match])

    return (
        <>
            <Container>
                <Row className='justify-content-between' style={{margin: '10px 0px 10px 0px'}}>
                    <Col sm={1}>
                        <Button variant="dark">Clear</Button>
                    </Col>
                    <Col sm={2}>
                        Sort By: smth
                    </Col>

                </Row>
                <Row>
                    <Col sm={4}>
                        <Filter/>
                    </Col>
                    <Col sm={8}>
                        {news && Object.values(news).map((n, key) => {
                            return (
                                <BigCard
                                    key={key}
                                    title={n.title}
                                    content={n.content}
                                    date={n.publishedAt}
                                    urlToImage={n.urlToImage}
                                />
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </>
    )
}