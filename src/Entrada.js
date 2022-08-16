import React from 'react';

class Entrada extends React.Component{

    render(){
        return (
            <form className='d-flex'>
                <input type='number' required className='form-control'
                     placeholder='Mínimo' name='minimo'/>
                <input type='number' required className='form-control'
                     placeholder='Máximo' name='maximo'/>
                <input type='submit' className='btn btn-secondary'
                    value='Gerar'/>
            </form>
        );
    }
}


export default Entrada;