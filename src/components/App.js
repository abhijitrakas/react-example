import React from 'react';
import {Link} from 'react-router-dom';

class App extends React.Component
{
    render () {
        return (
            React.createElement(
                'nav',
                {},
                React.createElement(
                    Link,
                    {to: '/'},
                    'Home'
                ),
                React.createElement(
                    Link,
                    {to: '/about'},
                    'About'
                )
            )
        );
    }
}

export default App;