import {GrupoInput, IconoValidacion, Input, Label, LeyendaError} from '../../elementos/Formularios';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

const ComponenteInput = ({estado, cambiarEstado, tipo, label, name, leyendaError, expresionRegular, funcion}) => {
	const onChange = (e) => {
		cambiarEstado({...estado, campo: e.target.value});
	}

	const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
				cambiarEstado({...estado, valido: 'true'});
			} else {
				cambiarEstado({...estado, valido: 'false'});
			}
		}

		if(funcion){
			funcion();
		}
	}

	return (
		<div>
			<Label htmlFor={name} valido={estado.valido}>{label}</Label>
			<GrupoInput>
				<Input 
					type={tipo}
					name={name}
					value={estado.campo}
					onChange={onChange}
					onKeyUp={validacion}
					onBlur={validacion}
					valido={estado.valido}
				/>
				<IconoValidacion 
					icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
					valido={estado.valido}
				/>
			</GrupoInput>
			<LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
		</div>
	);
}
 
export default ComponenteInput;