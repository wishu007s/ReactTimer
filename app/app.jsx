/* global $*/

var React           = require("react"),
    ReactDOM        = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main            = require("Main"),
    About           = require("About"),
    Timer           = require("Timer"),
    Countdown       = require("Countdown");
    
    
// Load foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// Load custom scss
require("style!css!sass!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="countdown" component={Countdown}/>
            <IndexRoute component={Timer}/>
        </Route>
    </Router>,
    document.getElementById("app")
    );