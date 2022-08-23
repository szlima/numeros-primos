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

    enviar= botao => {
        botao.preventDefault();

        let primosCopia= [];
        for(let i=this.state.minimo; i<=this.state.maximo; i++){
            if(i===2 || (i > 2 && i%2!==0)){

                let dividiu= false;
                for(let j=3; j<=Math.sqrt(i); j++)
                    if(i%j===0){
                        dividiu= true;
                        break;
                    }
                
                if(!dividiu)
                    primosCopia.push(i);
            } 
        }        
        
        console.log(primosCopia);//
    };

    render(){
        return (
            <main>
                <h1>Números primos</h1>

                <Entrada campoMinimo={this.state.minimo} campoMaximo={this.state.maximo}
                    funcaoCampo={this.digitar} funcaoBotao={this.enviar}/>
            </main>
        );
    }
}

export default Principal;