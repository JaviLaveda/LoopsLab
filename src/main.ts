import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo" | "Otros";

interface Paciente {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Paciente[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//Apartado 1A: lista pacientes pediatria
const muestraPaciente = (paciente: Paciente) => {
  const div = document.getElementById("elenco-pacientes");
  const id = document.createElement("p");
  const nombre = document.createElement("p");
  const apellidos = document.createElement("p");
  const temperatura = document.createElement("p");
  const frecuenciaCardiaca = document.createElement("p");
  const especialidad = document.createElement("p");
  const edad = document.createElement("p");
  const cardDiv = document.createElement("div");

  id.textContent = "Número paciente:" + "     " + paciente.id.toString();
  nombre.textContent = "Nombre:" + "      " + paciente.nombre;
  apellidos.textContent = "Apellidos:" + "      " + paciente.apellidos;
  temperatura.textContent =
    "Temperatura:" + "      " + paciente.temperatura.toString();
  frecuenciaCardiaca.textContent =
    "Frecuencia cardíaca:" + "      " + paciente.frecuenciaCardiaca.toString();
  especialidad.textContent = "Especialidad:" + "      " + paciente.especialidad;
  edad.textContent = "Edad:" + "      " + paciente.edad.toString();
  cardDiv.setAttribute("class", "card");

  if (div && div instanceof HTMLDivElement) {
    div.appendChild(cardDiv);
    cardDiv.appendChild(id);
    cardDiv.appendChild(nombre);
    cardDiv.appendChild(apellidos);
    cardDiv.appendChild(temperatura);
    cardDiv.appendChild(frecuenciaCardiaca);
    cardDiv.appendChild(especialidad);
    cardDiv.appendChild(edad);
  } else throw new Error("error HTMLDivElement");
};

const obtenPacientesAsignadosPorEspecialidad = (
  listadoPacientes: Paciente[],
  especialidad: Especialidad
): Paciente[] => {
  let listadoPacientesEspecialidad: Paciente[] = [];

  for (let i = 0; i < listadoPacientes.length; i++) {
    if (listadoPacientes[i].especialidad === especialidad) {
      // listadoPacientesEspecialidad.push(listadoPacientes[i])
      listadoPacientesEspecialidad = [
        ...listadoPacientesEspecialidad,
        listadoPacientes[i],
      ];
    }
  }
  return listadoPacientesEspecialidad;
};

const pacientesPediatria: Paciente[] = obtenPacientesAsignadosPorEspecialidad(
  pacientes,
  "Pediatra"
);

const muestraListadoPacientes = (pacientesEspecialidad: Paciente[]) => {
  for (let i = 0; i < pacientesEspecialidad.length; i++) {
    muestraPaciente(pacientesEspecialidad[i]);
  }
};

muestraListadoPacientes(pacientesPediatria);

//Apartado 1B: lista pacientes pediatria menores de 10 años
const obtenPacientesAsignadosMenos10años = (
  listadoPacientes: Paciente[]
): Paciente[] => {
  let listadoPacientesMenosDiezAños: Paciente[] = [];

  for (let i = 0; i < listadoPacientes.length; i++) {
    if (listadoPacientes[i].edad < 10) {
      // listadoPacientesEspecialidad.push(listadoPacientes[i])
      listadoPacientesMenosDiezAños = [
        ...listadoPacientesMenosDiezAños,
        listadoPacientes[i],
      ];
    }
  }
  return listadoPacientesMenosDiezAños;
};

const pacientesPediatriaMenos10: Paciente[] =
  obtenPacientesAsignadosMenos10años(pacientesPediatria);

muestraListadoPacientes(pacientesPediatriaMenos10);

//Apartado 2: Activar protocolo urgencia
const activarProtocoloUrgencia = (pacientes: Paciente[]): boolean => {
  let activarProtocolo = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 38
    ) {
      activarProtocolo = true;
      break;
    }
  }
  return activarProtocolo;
};

console.log(activarProtocoloUrgencia(pacientes));

//Apartado 3: asignar pacientes de Pediatría a Médico de familia
const reasignaPacientesAMedicoFamilia = (
  listadoPacientes: Paciente[]
): Paciente[] => {
  let pacientesReasignados: Paciente[] = [];

  for (let i = 0; i < listadoPacientes.length; i++) {
    listadoPacientes[i].especialidad = "Medico de familia";
  }
  return pacientesReasignados;
};

reasignaPacientesAMedicoFamilia(pacientesPediatria);

const pacientesMedicoFamilia: Paciente[] =
  obtenPacientesAsignadosPorEspecialidad(pacientes, "Medico de familia");

muestraListadoPacientes(pacientesMedicoFamilia);

//Apartado 4: comprobar si hay pacientes asignados a Pediatría
const HayPacientesDePediatria = (pacientes: Paciente[]): boolean => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      return true;
    }
  }
  return false;
};

console.log(HayPacientesDePediatria(pacientes));

//Apartado 5: contar pacientes por especialidad
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Paciente[]
): NumeroPacientesPorEspecialidad => {
  let totalPacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  for (let i = 0; i < pacientes.length; i++) {
    switch (pacientes[i].especialidad) {
      case "Medico de familia":
        totalPacientes.medicoDeFamilia++;
        break;
      case "Pediatra":
        totalPacientes.pediatria++;
        break;
      case "Cardiólogo":
        totalPacientes.cardiologia++;
        break;
    }
  }
  return totalPacientes;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
