import React from 'react'
import { Container } from 'react-bootstrap'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function Loading() {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <div className="d-flex justify-content-center align-items-center">
                    <Loader type="ThreeDots"
                        color="#00BFFF"
                        height={80}
                        width={80}
                        timeout={3000} //3 secs
                    />
                </div>
            </div>
        </Container>
    )
}
