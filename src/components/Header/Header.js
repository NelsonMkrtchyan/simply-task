import {Container, Navbar, Form, FormControl, Button} from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom'
import {useState} from "react";
import SearchForm from "../Search/SearchForm";

export default function Header() {
    const [searchValue, setSearchValue] = useState('');
    let history = useHistory();

    const handleOnChange = (event) => {
        event.preventDefault();
        setSearchValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const path = `/search/searchValue/${searchValue}`
        history.push(path)
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container className='justify-content-between'>
                <Link to='/'> <Navbar.Brand>News</Navbar.Brand> </Link>
                <SearchForm handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
            </Container>
        </Navbar>
    );
}