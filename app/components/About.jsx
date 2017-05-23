var React       = require("react");


var About = React.createClass({
   render: function(){
        return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a Timer application build on React. I have built this
                for the Complete React Web App Developer Course.</p>
            <p>Here are the some of Tools I Used:</p>
            <ul>
                <li>
                    <a href="http://facebook.github.io/React">React</a> - JavaScript framework.
                </li>
                <li>
                    <a href="http://foundation.zurb.com">Foundation</a> - Responsive FrontEnd framework.
                </li>
            </ul>
        </div>
        );
   } 
});

module.exports = About;