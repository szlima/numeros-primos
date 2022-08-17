import React from 'react';

import Entrada from './Entrada';

class Principal extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            minimo: '',
            maximo: ''
        };
    }

    digitar= campo => this.setState({ 
        [campo.target.name]: parseInt(campo.target.value, 10)
    });

    render(){
        return (
            <main>
                <h1>Números primos</h1>

                <Entrada campoMinimo={this.state.minimo} campoMaximo={this.state.maximo}
                    funcaoCampo={this.digitar}/>
            </main>
        );
    }
}

export default Principal;