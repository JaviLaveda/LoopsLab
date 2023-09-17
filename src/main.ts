import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo" | "Otros";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
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

const muestraPaciente = (paciente: Pacientes) => {
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
  }
};

const obtenPacientesAsignadosAPediatria = (
  listadoPacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < listadoPacientes.length; i++) {
    if (listadoPacientes[i].especialidad === "Pediatra") {
      muestraPaciente(listadoPacientes[i]);
      console.log(listadoPacientes[i]);
    }
  }
  return listadoPacientes;
};

obtenPacientesAsignadosAPediatria(pacientes);

// const pacientesPediatria: Pacientes[] =
//   obtenPacientesAsignadosAPediatria(pacientes);

// // muestraPaciente(pacientesPediatria);

// muestraPaciente(listaPacientes)

// const pacientesPediatria: Pacientes[] =
//   obtenPacientesAsignadosAPediatria(pacientes);

// const obtenPacientesAsignadosAPediatriaMenos10años = (
//   pacientes: Pacientes[]
// ): Pacientes[] => {
//   for (let i = 0; i < pacientes.length; i++) {
//     if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
//       muestraPaciente(pacientes[i]);
//     }
//   }
//   return pacientes;
// };

// obtenPacientesAsignadosAPediatria(pacientes);
// obtenPacientesAsignadosAPediatriaMenos10años(pacientes);

// const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
//   let activarProtocolo = false;
//   for (let i = 0; i < pacientes.length; i++) {
//     if (
//       pacientes[i].frecuenciaCardiaca > 100 &&
//       pacientes[i].temperatura > 38
//     ) {
//       activarProtocolo = true;
//     }
//   }
//   return activarProtocolo;
// };

// activarProtocoloUrgencia(pacientes);
// console.log(activarProtocoloUrgencia(pacientes));

// const reasignaPacientesAMedicoFamilia = (
//   pacientes: Pacientes[]
// ): Pacientes[] => {
//   for (let i = 0; i < pacientes.length; i++) {
//     pacientes[i].especialidad = "Medico de familia";
//   }
//   return pacientes;
// };

// console.log(reasignaPacientesAMedicoFamilia(pacientesPediatria));
