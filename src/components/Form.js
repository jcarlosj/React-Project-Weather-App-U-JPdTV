import React from 'react';

const Form = () => {
    return (
        <form className="col s12">
            <div className="row">
                <div className="input-field col s12">
                    <input id="city" type="text" className="validate" />
                    <label htmlFor="city">Ciudad</label>
                </div>
                <div className="input-field col s12">
                    <select id="country" id="country">
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