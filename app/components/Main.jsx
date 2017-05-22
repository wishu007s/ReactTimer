var React       = require("react"),
    Nav         = require("Nav");

var Main    = (props) =>{
        return (
            <div>
                <Nav/>
                <div className="row">
                    <div className="column medium-6 large-4 small-centered">
                        <p>Main.jsx is rendered</p>
                        {props.children}
                    </div>
                </div>
            </div>
            );
};

module.exports = Main;