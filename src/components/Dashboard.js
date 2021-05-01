import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import NavbarMenu from './Navbar'
import Avatar from 'react-avatar';
import axios from 'axios';
import Loading from './Loading';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export default function Dashboard() {

    // const [loading, setLoading] = React.useState(false)

    const [search, setSearchTerm] = React.useState('');

    const [ren, setRen] = useState({})

    const [sellerData, setSellerData] = React.useState([])

    let update = 0


    // seller data fetch
    useEffect(() => {
        axios.get('http://localhost:4200/users')
            .then(res => {
                // console.log(res);
                // console.log(res.data);
                setSellerData(res.data)
            })
            .catch(res => {
                console.log('Error')
            })
    }, [ren])


    // true booking
    const onCLickBook = (item) => {
        item.book = true
        axios.put(`http://localhost:4200/users/${item.id}`, item)
            .then(res => {
                setRen(res)
                toast.success("Seller has booked", { position: toast.POSITION.TOP_CENTER });
            })
            .catch(err => console.log(err))
    }


    // false booking
    const onCLickBookCancel = (item) => {
        item.book = false
        axios.put(`http://localhost:4200/users/${item.id}`, item)
            .then(res => {
                setRen(res)
                toast.error("Seller has cancelled", { position: toast.POSITION.TOP_CENTER });
            })
            .catch(err => console.log(err))
    }


    return (
        <>

            {/* navbar */}
            <NavbarMenu />

            <div style={{ marginTop: 50 }}></div>


            {/* test with api */}
            <Container fluid>
                {/* see all seller list */}
                <nav className="navbar navbar-light">
                    <div className="navbar-brand" style={{ fontSize: 25 }}>See all seller</div>
                    <div className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search by name" aria-label="Search" onChange={event => { setSearchTerm(event.target.value) }} />
                    </div>
                </nav>


                <Row className="mt-5 p-4">
                    {
                        sellerData.filter((item) => {
                            if (search == "") {
                                return item
                            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                                return item
                            }
                        }).map((item, index) => (

                            <Col sm={3} className="mb-3">
                                <Card>
                                    <Card.Body>
                                        <div className="d-flex">
                                            <div>
                                                <Card.Title><Avatar name={item.name} size={70} /></Card.Title>
                                            </div>
                                            <div className="mx-2"></div>
                                            <div>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Time {item.time}</Card.Subtitle>
                                            </div>
                                        </div>
                                        {
                                            item.book ?
                                                <button type="button" class="btn btn-outline-danger btn-sm" onClick={() => onCLickBookCancel(item)}>Cancel</button> :
                                                <button type="button" class="btn btn-outline-secondary btn-sm"
                                                    onClick={() => onCLickBook(item)}>Request to book</button>
                                        }

                                    </Card.Body>
                                </Card>
                            </Col>

                        ))
                    }
                </Row>


            </Container>




        </>
    )
}
