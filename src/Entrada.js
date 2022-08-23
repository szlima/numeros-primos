import React from 'react';
import PropTypes from 'prop-types';

class Entrada extends React.Component{

    render(){
        return (
            <form className='d-flex' onSubmit={this.props.funcaoBotao}>
                <input type='number' required className='form-control' onChange={this.props.funcaoCampo}
                     placeholder='Mínimo' name='minimo' value={this.props.campoMinimo}/>
                <input type='number' required className='form-control' onChange={this.props.funcaoCampo}
                     placeholder='Máximo' name='maximo' value={this.props.campoMaximo}/>
                <input type='submit' className='btn btn-secondary'
                    value='Gerar'/>
            </form>
        );
    }
}

Entrada.propTypes= {
    funcaoCampo: PropTypes.func.isRequired,
    funcaoBotao: PropTypes.func.isRequired
};

export default Entrada;