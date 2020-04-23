import React from 'react';
import {Card} from 'react-bootstrap';
import content from './content.jpg'
import profile from './profile.png'

function Content(){
   return ( 
        <div className="Content">

            <Card style={{ width: '23rem' }} className="shadow mt-4 mx-auto">
                <Card.Header className="d-flex">
                    <img src={profile} width="40" height="40" className="d-inline-block align-top" alt="Profile logo" />
                    <p className="mt-2">Preetam</p>
                    <p className="ml-auto mt-2">Jobs</p>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={content} />
                <Card.Footer>
                    <small className="d-flex">
                        <a className=" mx-auto" href="#like"><i className="fa fa-thumbs-up fa-lg"></i></a>
                        <a className=" mx-auto" href="#unlike"><i className="fa fa-thumbs-down fa-lg"></i></a>
                        <a className=" mx-auto" href="#comment"><i className="fa fa-comment fa-lg"></i></a>
                        <a className=" mx-auto" href="#seen"><i className="fa fa-eye fa-lg"></i></a>
                        <a className=" mx-auto" href="#share"><i className="fa fa-share fa-lg"></i></a>
                    </small>
                </Card.Footer>
            </Card>

            <Card style={{ width: '23rem' }} className="shadow mt-4 mx-auto">
                <Card.Header className="d-flex">
                    <img src={profile} width="40" height="40" className="d-inline-block align-top" alt="Profile logo" />
                    <p className="mt-2">Preetam</p>
                    <p className="ml-auto mt-2">Jobs</p>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={content} />
                <Card.Footer>
                    <small className="d-flex">
                        <a className=" mx-auto" href="#like"><i className="fa fa-thumbs-up fa-lg"></i></a>
                        <a className=" mx-auto" href="#unlike"><i className="fa fa-thumbs-down fa-lg"></i></a>
                        <a className=" mx-auto" href="#comment"><i className="fa fa-comment fa-lg"></i></a>
                        <a className=" mx-auto" href="#seen"><i className="fa fa-eye fa-lg"></i></a>
                        <a className=" mx-auto" href="#share"><i className="fa fa-share fa-lg"></i></a>
                    </small>
                </Card.Footer>
            </Card>

            <Card style={{ width: '23rem' }} className="shadow mt-4 mx-auto">
                <Card.Header className="d-flex">
                    <img src={profile} width="40" height="40" className="d-inline-block align-top" alt="Profile logo" />
                    <p className="mt-2">Preetam</p>
                    <p className="ml-auto mt-2">Jobs</p>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={content} />
                <Card.Footer>
                    <small className="d-flex">
                        <a className=" mx-auto" href="#like"><i className="fa fa-thumbs-up fa-lg"></i></a>
                        <a className=" mx-auto" href="#unlike"><i className="fa fa-thumbs-down fa-lg"></i></a>
                        <a className=" mx-auto" href="#comment"><i className="fa fa-comment fa-lg"></i></a>
                        <a className=" mx-auto" href="#seen"><i className="fa fa-eye fa-lg"></i></a>
                        <a className=" mx-auto" href="#share"><i className="fa fa-share fa-lg"></i></a>
                    </small>
                </Card.Footer>
            </Card>

            <Card style={{ width: '23rem' }} className="shadow mt-4 mx-auto">
                <Card.Header className="d-flex">
                    <img src={profile} width="40" height="40" className="d-inline-block align-top" alt="Profile logo" />
                    <p className="mt-2">Preetam</p>
                    <p className="ml-auto mt-2">Jobs</p>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={content} />
                <Card.Footer>
                    <small className="d-flex">
                        <a className=" mx-auto" href="#like"><i className="fa fa-thumbs-up fa-lg"></i></a>
                        <a className=" mx-auto" href="#unlike"><i className="fa fa-thumbs-down fa-lg"></i></a>
                        <a className=" mx-auto" href="#comment"><i className="fa fa-comment fa-lg"></i></a>
                        <a className=" mx-auto" href="#seen"><i className="fa fa-eye fa-lg"></i></a>
                        <a className=" mx-auto" href="#share"><i className="fa fa-share fa-lg"></i></a>
                    </small>
                </Card.Footer>
            </Card>

            <h1>....</h1>
        </div>
   );
}

export default Content;