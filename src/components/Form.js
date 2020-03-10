import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({ dataForm, setDataForm, setConsumeAPI }) => {     // Destructuting Props

    /** Define State */
    const [ error, setError ] = useState( false );

    const { city, country } = dataForm;     // Destructuring State 'data'

    /** Agrega datos del formulario en el State */
    const handleChange = event => {
        setDataForm({
            ...dataForm,
            [ event .target .name ]: event .target .value       /** Valores de los campos del Formulario */
        });
    }

    /** Enviar datos del formulario */
    const handleSubmit = event => {
        event .preventDefault();

        /** Validate fields */
        if( city .trim() === '' || country .trim() === '' ) {
            setError( true );
            return;
        }
        setError( false );

        /** Send data to the main component */
        setConsumeAPI( true );

    }

    return (
        <form 
            className="col s12"
            onSubmit={ handleSubmit }
        >
            { error 
                ?   <Error msg="Todos los campos son obligatorios" />
                :   null
            }
            <div className="row">
                <div className="input-field col s12">
                    <input 
                        id="city" 
                        name="city"
                        type="text" 
                        className="validate" 
                        value={ city }
                        onChange={ handleChange }
                    />
                    <label htmlFor="city">Ciudad</label>
                </div>
                <div className="input-field col s12">
                    <select 
                        id="country" 
                        name="country"
                        value={ country }
                        onChange={ handleChange }
                    >
                        <option value="">Seleccione...</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                    <label htmlFor="country">País</label>
                </div>
                <div className="input-field col s12">
                    <button 
                        type="submit"
                        className="waves-effect waves-light btn btn-block btn-large yellow accent-4"
                    >Consultar</button>
                </div>
            </div>
        </form>
    );
}

/** Verificación de Tipos */
Form .propTypes = {
    dataForm: PropTypes .object .isRequired, 
    setDataForm: PropTypes .func .isRequired, 
    setConsumeAPI: PropTypes .func .isRequired
}

export default Form;