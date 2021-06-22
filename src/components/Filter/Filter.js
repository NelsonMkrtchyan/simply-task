import {Container, Row, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import {categories, countries, languages} from "../../constatnts/constatns";


export default function Filter() {

    const [category, setCategory] = useState([]);
    const [language, setLanguage] = useState([]);
    const [country, setCountry] = useState([]);


    useEffect(() => {

    }, [])

    return (
        <Container>
            <Row>
                SearchBox
            </Row>
            <Row>
                <h2>Country</h2>
                <Form>
                    <div key={`inline-checkbox`} className="mb-3">
                        {countries.map((c, key) => {
                            return (
                                <Form.Check
                                    onClick={() => {
                                        if (!country.includes(c.name)) {
                                            setCountry(old => [...old, c.name]);
                                        } else {
                                            setCountry(old => country.filter((elem) => elem !== c.name));
                                        }
                                    }}
                                    key={key} inline label={c.name} name="group1" type='checkbox'
                                />
                            )
                        })}
                    </div>
                </Form>
            </Row>
            <Row>
                <h2>Category</h2>
                <Form>
                    <div key={`inline-checkbox`} className="mb-3">
                        {categories.map((c, key) => {
                            return (
                                <Form.Check
                                    onClick={() => {
                                        if (!category.includes(c)) {
                                            setCategory(old => [...old, c]);
                                        } else {
                                            setCategory(old => category.filter((elem) => elem !== c));
                                        }
                                    }}
                                    key={key} inline label={c} name="group1" type='checkbox'
                                />
                            )
                        })}
                    </div>
                </Form>
            </Row>
            <Row>
                <h2>Source</h2>
            </Row>
            <Row>
                <h2>Term</h2>
            </Row>
        </Container>
    )
}