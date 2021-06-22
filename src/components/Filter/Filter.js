import {Container, Row, Form} from "react-bootstrap";
import SearchForm from "../Search/SearchForm";
import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {categories, countries, languages} from "../../constatnts/constatns";


export default function Filter() {
    const [searchValue, setSearchValue] = useState('');

    const [category, setCategory] = useState([]);
    const [language, setLanguage] = useState([]);
    const [country, setCountry] = useState([]);


    useEffect(() => {
        console.log(categories)
        console.log(languages)
        console.log(countries)
    }, [])

    useEffect(() => {
        console.log(country)

    }, [country])

    let history = useHistory();
    // const handleSearchOnChange = (event) => {
    //     event.preventDefault();
    //     setSearchValue(event.target.value);
    // }
    // const handleSearchSubmit = (event) => {
    //     event.preventDefault()
    //     const path = `/search/searchValue/${searchValue}`
    //     history.push(path)
    // }


    const onCategoryClick = (c) => {
        setCategory(c);
    }

    return (
        <Container>
            <Row>
                {/*<SearchForm handleOnChange={handleSearchOnChange} handleSubmit={handleSearchSubmit} />*/}
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