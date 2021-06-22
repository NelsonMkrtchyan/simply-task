import {Container, Navbar, Form, FormControl, Button} from "react-bootstrap";

export default function SearchForm({handleOnChange,handleSubmit}) {

    return (
        <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={handleOnChange}
            />
            <Button variant="outline-dark" type='submit'> Search </Button>
        </Form>

    );
}