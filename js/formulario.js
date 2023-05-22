const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('.form-container input');
const comensalesSelect = document.getElementById('comensales');
const sucursalesSelect = document.getElementById('sucursales');
const horarioSelect = document.getElementById('horario');
const fechaInput = document.getElementById('fecha');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	celular: /^\d{7,14}$/ 
}

const campos = {
	nombre: false,
	correo: false,
    celular: false,
	comensales: false,
	sucursal: false,
	horario: false,
	fecha: false
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`form-${campo}`).classList.remove('form-container-incorrecto');
		document.getElementById(`form-${campo}`).classList.add('form-container-correcto');
		document.querySelector(`#form-${campo} i`).classList.add('fa-circle-check');
		document.querySelector(`#form-${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#form-${campo} .validacion-error`).classList.remove('validacion-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`form-${campo}`).classList.add('form-container-incorrecto');
		document.getElementById(`form-${campo}`).classList.remove('form-container-correcto');
		document.querySelector(`#form-${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#form-${campo} i`).classList.remove('fa-circle-check');
		document.querySelector(`#form-${campo} .validacion-error`).classList.add('validacion-error-activo');
		campos[campo] = false;
	}
}

const validarCamposVacios = () => {
    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        document.getElementById(`form-${input.name}`).classList.add('form-container-incorrecto');
        document.querySelector(`#form-${input.name} .validacion-error`).classList.add('validacion-error-activo');
        document.querySelector(`#form-${input.name} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#form-${input.name} i`).classList.remove('fa-circle-check');
      }
    });
};  

const validarSelect = (selectElement, containerId, campo) => {
    const selectedOption = selectElement.value;
    const containerElement = document.getElementById(containerId);
    if (selectedOption === '0') {
        containerElement.classList.add('form-container-incorrecto');
        containerElement.classList.remove('form-container-correcto');
        document.querySelector(`#${containerId} i` ).classList.add('fa-circle-xmark');
        document.querySelector(`#${containerId} i` ).classList.remove('fa-circle-check');
        document.querySelector(`#${containerId} .validacion-error` ).classList.add('validacion-error-activo');
		campos[campo] = false;
    } else {
        containerElement.classList.remove('form-container-incorrecto');
        containerElement.classList.add('form-container-correcto');
        document.querySelector(`#${containerId} i` ).classList.add('fa-circle-check');
        document.querySelector(`#${containerId} i` ).classList.remove('fa-circle-xmark');
        document.querySelector(`#${containerId} .validacion-error` ).classList.remove('validacion-error-activo');
		campos[campo] = true;
    }
};

const validarFecha = () => {
	const fechaSeleccionada = fechaInput.value.trim();
	const opciones = { year: 'numeric', month: 'numeric', day: 'numeric' };
	var fechaActual = new Date();
	var year = fechaActual.toLocaleString("default",{year: "numeric"});
	var month = fechaActual.toLocaleString("default",{month: "2-digit"});
	var day = fechaActual.toLocaleString("default",{day: "2-digit"});
	var fechaFormat = year + "-" + month + "-" + day;
	
	if (fechaSeleccionada === '' || new Date(fechaSeleccionada) < new Date(fechaFormat)) {
		document.getElementById('form-fecha').classList.add('form-container-incorrecto');
		document.getElementById('form-fecha').classList.remove('form-container-correcto');
		document.querySelector(`#form-fecha i`).classList.add('fa-circle-xmark');
		document.querySelector(`#form-fecha i`).classList.remove('fa-circle-check');
		document.querySelector(`#form-fecha .validacion-error`).classList.add('validacion-error-activo');
		campos.fecha = false;
		
	  } else {
		document.getElementById('form-fecha').classList.remove('form-container-incorrecto');
		document.getElementById('form-fecha').classList.add('form-container-correcto');
		document.querySelector(`#form-fecha i`).classList.add('fa-circle-check');
		document.querySelector(`#form-fecha i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#form-fecha .validacion-error`).classList.remove('validacion-error-activo');
		campos.fecha = true;
	}
  }; 

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "celular":
			validarCampo(expresiones.celular, e.target, 'celular');
		break;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
comensalesSelect.addEventListener('change', () => {
    validarSelect(comensalesSelect, 'form-comensales');
});
sucursalesSelect.addEventListener('change', () => {
    validarSelect(sucursalesSelect, 'form-sucursales');
});
horarioSelect.addEventListener('change', () => {
    validarSelect(horarioSelect, 'form-horario');
});
fechaInput.addEventListener('change', validarFecha);

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
    if (validarCamposVacios() || validarSelect(comensalesSelect, 'form-comensales', 'comensales') || validarSelect(sucursalesSelect, 'form-sucursales', 'sucursal') || validarSelect(horarioSelect, 'form-horario', 'horario')  || validarFecha() || !terminos.checked )  {
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
        document.getElementById('terminos').classList.add('terminos-estado');
        return; 
    }

	if (campos.nombre && campos.correo && campos.celular && campos.fecha && campos.comensales && campos.sucursal && campos.horario  && terminos.checked){
		formulario.reset();

        document.getElementById('terminos').classList.remove('terminos-estado');
        document.getElementById('mensaje-error').classList.remove('mensaje-error-activo');
		document.getElementById('mensaje-exito').classList.add('mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('mensaje-exito').classList.remove('mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.form-container-correcto').forEach((icono) => {
			icono.classList.remove('form-container-correcto');
		});
	} else {
		document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
	}
});

