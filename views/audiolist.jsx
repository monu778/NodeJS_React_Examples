var React = require("react");
//var ReactDOM = require("react-dom");


module.exports = React.createClass({

    render:function() {
        var list  = this.props.list;
        return(

            <html>
            <head>

                <title>csv file upload</title>
                <link href="/javascripts/lib/bootstrap-css/css/bootstrap.min.css" rel="stylesheet"></link>
                <script src="/javascripts/lib/jquery/dist/jquery.min.js"></script>
            </head>
            <body>
            <div className="panel panel-default">
                <div className="panel-heading">
                    CSV file data
                </div>
                <div className="panel-body">

                        <div class="container">
                        {
                            this.props.list.map(function (value,i) {
                                 if(i%5==0) {
                                    return (
                                        <div className="row">
                                            <div className="col-md-2"><img src={list[i].artworkUrl100}></img>
                                                <br/>{list[i].collectionName}<br/>{list[i].artistName}</div>
                                            <div className="col-md-2"><img src={list[i + 1].artworkUrl100}></img>
                                                <br/>{list[i + 1].collectionName}<br/>{list[i + 1].artistName}</div>

                                            <div className="col-md-2"><img src={list[i + 2].artworkUrl100}></img>
                                                <br/>{list[i + 2].collectionName}<br/>{list[i + 2].artistName}</div>

                                            <div className="col-md-2"><img src={list[i + 3].artworkUrl100}></img>
                                                <br/>{list[i + 3].collectionName}<br/>{list[i + 3].artistName}</div>

                                            <div className="col-md-2"><img src={list[i + 4].artworkUrl100}></img>
                                                <br/>{list[i + 4].collectionName}<br/>{list[i + 4].artistName}</div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            <script dangerouslySetInnerHTML={{__html: ""}}></script>
            </body>
            </html>
        )
    }
});
