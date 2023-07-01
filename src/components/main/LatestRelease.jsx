import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleBook from "./SingleBook";



//const LatestRelease = () => {
const LatestRelease = ({ query }) => {
    const [books, setBooks] = useState([]);

    const getBooksFromApi = async () => {
        try{
            const data = await fetch("https://epibooks.onrender.com/");
            const response = await data.json();
            setBooks(response);
        } catch (error) {
            console.log(error);
        }
        
    };

useEffect(() => {
    getBooksFromApi();
}, []);

const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );
        return (
           <>
           {/* <SearchBar books = {books} setBooks = {setBooks} getBooks = {getBooksFromApi} /> */}
            <Container>
                <Row>
                    <Col className="d-flex flex-wrap gap-3">
                        
                    {filteredBooks &&
                        filteredBooks.map((book) => (
                            
                        
                                <SingleBook
                                key = {book.asin}
                                img = {book.img}
                                asin = {book.asin}
                                category = {book.category}
                                title = {book.title}
                                price = {book.price}
                                />
                        ))};
                    
                    </Col>
                </Row>
            </Container>
         </>
        );
    
};
export default LatestRelease;