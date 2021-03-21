import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import map from '../../images/Map.png';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


const Book = () => {
    const { vehicleType } = useParams();
    document.title ="Book";
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h1>Let's book a {vehicleType} </h1>
                <p>Want a <Link to="/home">different vehicle?</Link> </p>
            </div>
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Pick From</Form.Label>
                        <Form.Control type="email" placeholder="Your Location" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Pick To</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Destination" />
                    </Form.Group>
                    <Form.Label>Departure</Form.Label>
                            <Form.Control class="inp-style" type="date" name=""></Form.Control>
                    <Button variant="primary" type="submit"  > Search</Button>
                </Form>
            </div>
            <div className="image" style={{ textAlign: 'center' }}>
                <img src={map} alt="" />
                
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.328095156318!2d90.36650911479761!3d23.80692939253182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1616165912080!5m2!1sen!2sbd" width="600" height="450" style="border:0;" ></iframe> */}
            </div>
        </div>

    );
};

export default Book;