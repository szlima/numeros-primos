import React from 'react';
import PropTypes from 'prop-types';

class Saida extends React.Component{

    render(){

        return (<div>
            {
                this.props.dados.map(item => `${item} `)
            }
            </div>
        );
    }
}

Saida.propTypes= {
    dados: PropTypes.array.isRequired
};

export default Saida;