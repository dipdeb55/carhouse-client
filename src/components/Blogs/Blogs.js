import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h2>Blogs</h2>
            <Accordion className='w-50 mx-auto'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between javascript and nodejs</Accordion.Header>
                    <Accordion.Body>
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                        On the other hand Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> When should you use nodejs and when should you use mongodb</Accordion.Header>
                    <Accordion.Body>
                        Node.js is a type of javascript that facilitates the users to run the program in run-time in an environment on external system other than the browser as a vessel. This advantageous Node.js javascript is widely used in chat rooms, real-time applications, for collection of data, data processing, browser games, in high-speed applications, the databases that are expected to be scalable.MongoDB is a document database used to build highly available and scalable internet applications. With its flexible schema approach. Offering drivers for all major programming languages, MongoDB allows you to immediately start building your application without spending time configuring a database.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> Differences between sql and nosql databases</Accordion.Header>
                    <Accordion.Body>
                        SQL databases are primarily called as Relational Databases  whereas NoSQL database are primarily called as non-relational or distributed database.SQL databases defines and manipulates data based structured query language. Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries.A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;