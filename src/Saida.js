import React from 'react';
import PropTypes from 'prop-types';

class Saida extends React.Component{

    render(){

        return (this.props.dados.primos.length === 0 ?
            ((this.props.dados.minimo === '' && this.props.dados.maximo === '') ?
                <p></p> : 
                <p>Não há números primos no intervalo informado.</p> 
            ) :
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th className='bg-secondary text-white'>
                            Números primos entre {this.props.dados.minimo} e {this.props.dados.maximo}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.dados.primos.map((item, indice) => 
                            <tr key={indice} className='bg-light'>
                                <td>{item}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

Saida.propTypes= {
    dados: PropTypes.object.isRequired
};

export default Saida;