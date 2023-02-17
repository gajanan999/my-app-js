
import React from 'react';
import '../components/UITheme.css';
import { useState } from 'react';
import axios from "axios";
import { saveAs } from 'file-saver';

//import XLSX from "xlsx";


import { Formik, Field, Form } from "formik";

import $ from 'jquery';

//import {ExcelJS} from 'exceljs';


function UITheme() {

    const [posts, setPosts] = useState([]);

//const workbook = new ExcelJS.Workbook();

    $(".j-button").on('click', function () {
        console.log("JQuery Worked");
        let blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });

        saveAs(blob, "hello world.txt");
        //let bstr 
       // const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
    });

    function callAPI() {
        axios({

            // Endpoint to send files
            url: "https://jsonplaceholder.typicode.com/posts?_limit=10",
            method: "GET",
        })

            // Handle the response from backend here
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })

            // Catch errors if any
            .catch((err) => {

                console.log('Error in axios');
            });

        // fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        // .then((response) => response.json())
        // .then((data) => {
        //    console.log(data);
        //     setPosts(data);
        // });
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">React App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/features">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/featureOne">FeatureOne</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/cspFeature">CspFeature</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/testing">Testing</a>
                </li>
                </ul>
            </div>
            </nav>
    );

}

export default UITheme;