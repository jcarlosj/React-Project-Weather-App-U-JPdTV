import React, { useState } from 'react';

const Form = () => {

    /** Define State */
    const [ data, setData ] = useState({
        city: '',
        country: ''
    });

    const { city, country } = data;     // Destructuring State 'data'

    /** Agrega datos del formulario en el State */
    const handleChange = event => {
        setData({
            ...data,
            [ event .target .name ]: event .target .value       /** Valores de los campos del Formulario */
        });
    }

    return (
        <form className="col s12">
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
            </div>
        </form>
    );
}

export default Form;