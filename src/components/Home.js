import React from 'react';

class Home extends React.Component
{
    render () {
        return (
            React.createElement(
                'div',
                {},
                React.createElement(
                    'h1',
                    {},
                    'Hello this is Home page!!'
                )
            )
        );
    }
}

export default Home;