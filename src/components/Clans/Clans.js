import React from 'react';
import {Nav} from 'react-bootstrap';

function Clans() {
    return(
        <div className="clans">
            <h1>...</h1>
            <Nav variant="pills" defaultActiveKey="/home" className="d-flex">
                <Nav.Item className="mx-auto">
                    <Nav.Link className="ml-auto" href="/home">All Post</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-auto">
                    <Nav.Link eventKey="disabled">Technology</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-auto">
                    <Nav.Link eventKey="disabled">Internships</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-auto">
                    <Nav.Link eventKey="disabled">Genral Knowledge</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-auto">
                    <Nav.Link eventKey="disabled">Web Development</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Clans;
