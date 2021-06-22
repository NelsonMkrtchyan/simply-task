import SmallCard from "../SmallCard/SmallCard";
import {Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {fetchData, generateApi} from "../../functions/functions";

export default function Home() {
    const [sources, setSources] = useState([]);
    const api = generateApi('sources')

    useEffect(() => {
        fetchData(api, setSources, 'sources')
    }, [])
    return (
        <>
            <Container>
                <Row>
                    <h1>
                        Home
                    </h1>
                </Row>
                <Row>
                    {sources && sources.map((source, key) => {
                        return (
                            <SmallCard
                                key={key}
                                sourceId={source.id}
                                sourceName={source.name}
                                description={source.description}
                                category={source.category}
                                language={source.language}
                                country={source.country}
                            />
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}