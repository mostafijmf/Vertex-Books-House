import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='vc-container'>
            <div className="row blogs my-5 align-items-center justify-content-center">
                <div className="col-lg-2 col-md-1 col-sm-0"></div>
                <div className="col-lg-8 col-md-10 col-sm-0">
                    <div className="accordion shadow" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button fs-2 vc-bg3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    1- Difference between javascript and nodejs
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    <code>JavaScript </code>
                                    is a simple programming language that is primarily used for client-side scripting. It creates dynamic and interactive web content like applications and browsers. Over 97% of websites use JavaScript for web page behavior on the client-side. On the other hand, <code>Node.js </code>is an open-source server-side scripting language that runs on the V8 engine and executes code outside a web browser. It is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button vc-bg3 fs-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    2- When should use nodejs and when should use mongodb?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    <code>Node.js </code>is a fast and high-performance language. It is very easy to learn from other languages if you know javascript. Nowadays, developers can use the same solution through one language for both front-end and back-end server-side web development. Node.js environment is faster and easier. <code> MongoDB </code>is very good at storing and finding data  scaling and sharing data. With MongoDB, developers can store structured or unstructured data easily. It uses JSON-like data. This is very fast and efficient so you should use it when you have key-value pair to store.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button vc-bg3 fs-2 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Differences between sql and nosql databases.
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    <code>SQL </code>is a relational database management system. It stores data according to the table. SQL databases are vertically scalable. SQL databases have a static schema. On the other hand, <code>NoSQL </code> is a non-relational or distributed database system. It stores data like objects without structure. NoSQL databases have dynamic schema.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-0"></div>
            </div>
        </div>
    );
};

export default Blogs;