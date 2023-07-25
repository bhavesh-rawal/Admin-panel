import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Swal from 'sweetalert2';


const Hearder = () => {
    const navigate = useNavigate();


    const Log_Out = () => {
        localStorage.removeItem('login_data');
        navigate("/log");
        Swal.fire({
            icon: 'success',
            title: 'Log-Out!',
            text: `Go To Login Page...`,
        })
    };
    return (<>

        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container fluid >
                <Navbar.Brand href="#home">Shopy Admin Panel</Navbar.Brand>

                <button type="submit" className="bg-transparent border-0 option" onClick={Log_Out}>
                    <i className="fa-solid fa-right-from-bracket fs-3"></i>
                </button>

            </Container>
        </Navbar>

    </>);
};
export default Hearder;;