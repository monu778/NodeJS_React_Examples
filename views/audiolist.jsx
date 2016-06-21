var React = require("react");
//var ReactDOM = require("react-dom");


module.exports = React.createClass({

    handleSubmit: function (e) {
        // e.preventDefault();
        alert("dgfdg");
        var fd = new FormData();
        fd.append( 'file', this.refs.file.getDOMNode().files[0] );

        $.ajax({
            url: url,
            type: "POST",
            data: this.state.data_uri,
            success: function(data) {
                // do stuff
            }.bind(this),
            error: function(xhr, status, err) {
                // do stuff
            }.bind(this)
        });
        return false;

    },
    render:function() {
        return(
            <html>
            <head>

                <title>csv file upload</title>
                <link href="lib/bootstrap-css/css/bootstrap.min.css" rel="stylesheet"></link>
                <script src="lib/jquery/dist/jquery.min.js"></script>
            </head>
            <body>
            <div className="panel panel-default">
                <div className="panel-heading">
                    CSV file data
                </div>
                <div className="panel-body">
                    <div>
                        {
                            this.props.list
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
