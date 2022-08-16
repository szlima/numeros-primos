import React from 'react';

import Entrada from './Entrada';

class Principal extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <main>
                <h1>Números primos</h1>

                <Entrada />
            </main>
        );
    }
}

export default Principal;