/**
 * Created by sravan on 17/01/17.
 */

import Circle from './Circle';
//const ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom'

class CircleGraph extends React.Component {
    render() {
        return (
        <html>
        <head>
            <title>Circle Graph</title>
            <link href="/javascripts/lib/bootstrap-css/css/bootstrap.min.css" rel="stylesheet"></link>
            <script src="./lib/jquery/dist/jquery.min.js"></script>
        </head>
        <body>
        <div className="panel panel-default">
            <div className="panel-heading">
                Showing graph
            </div>
            <div className="panel-body">
                <div><Circle strokeWidth="2" percent="58" /></div>
                <div><Circle strokeWidth="2" percent="8" /></div>
                <div><Circle strokeWidth="2" percent="12" /></div>
            </div>
        </div>
        <script dangerouslySetInnerHTML={{__html: `
`}} />
        </body>
        </html>
        );
    }
}
export default CircleGraph;
