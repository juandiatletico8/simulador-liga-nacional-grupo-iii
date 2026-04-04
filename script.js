const equipos = [
  "CYD Leonesa",
  "Puente Castro",
  "Parquesol",
  "San Agustín",
  "Diocesanos",
  "Salamanca UDS",
  "Numancia",
  "Vista Alegre",
  "Gª Segoviana",
  "Burgos B",
  "CIA",
  "Sur",
  "Victoria",
  "Valladolid B",
  "Santa Marta",
  "La Virgen del Camino"
];

const escudos = {
  "CYD Leonesa": "escudos/cyd_leonesa.png",
  "Puente Castro": "escudos/puente_castro.png",
  "Parquesol": "escudos/parquesol.png",
  "San Agustín": "escudos/san_agustin.png",
  "Diocesanos": "escudos/diocesanos.png",
  "Salamanca UDS": "escudos/salamanca_uds.png",
  "Numancia": "escudos/numancia.png",
  "Vista Alegre": "escudos/vista_alegre.png",
  "Gª Segoviana": "escudos/gimnastica_segoviana.png",
  "Burgos B": "escudos/burgos_b.png",
  "CIA": "escudos/cia.png",
  "Sur": "escudos/sur.png",
  "Victoria": "escudos/victoria.png",
  "Valladolid B": "escudos/valladolid_b.png",
  "Santa Marta": "escudos/santa_marta.png",
  "La Virgen del Camino": "escudos/la_virgen_camino.png"
};

 const partidos = [
// Jornada 1
{ jornada: 1, local: "CYD Leonesa", visitante: "Puente Castro", gLocal: 3, gVis: 1 },
{ jornada: 1, local: "Parquesol", visitante: "San Agustín", gLocal: 0, gVis: 3 },
{ jornada: 1, local: "Diocesanos", visitante: "Salamanca UDS", gLocal: 3, gVis: 2 },
{ jornada: 1, local: "Numancia", visitante: "Vista Alegre", gLocal: 0, gVis: 1 },
{ jornada: 1, local: "Gª Segoviana", visitante: "Burgos B", gLocal: 1, gVis: 1 },
{ jornada: 1, local: "CIA", visitante: "Sur", gLocal: 3, gVis: 0 },
{ jornada: 1, local: "Victoria", visitante: "Valladolid B", gLocal: 0, gVis: 2 },
{ jornada: 1, local: "Santa Marta", visitante: "La Virgen del Camino", gLocal: 5, gVis: 0 },

// Jornada 2
{ jornada: 2, local: "Vista Alegre", visitante: "CIA", gLocal: 0, gVis: 1 },
{ jornada: 2, local: "Numancia", visitante: "Valladolid B", gLocal: 2, gVis: 1 },
{ jornada: 2, local: "Sur", visitante: "Diocesanos", gLocal: 2, gVis: 2 },
{ jornada: 2, local: "San Agustín", visitante: "Burgos B", gLocal: 1, gVis: 6 },
{ jornada: 2, local: "Puente Castro", visitante: "Santa Marta", gLocal: 2, gVis: 3 },
{ jornada: 2, local: "Gª Segoviana", visitante: "Victoria", gLocal: 4, gVis: 2 },
{ jornada: 2, local: "La Virgen del Camino", visitante: "Parquesol", gLocal: 2, gVis: 1 },
{ jornada: 2, local: "Salamanca UDS", visitante: "CYD Leonesa", gLocal: 2, gVis: 0 },

// Jornada 3
{ jornada: 3, local: "Diocesanos", visitante: "Vista Alegre", gLocal: 0, gVis: 1 },
{ jornada: 3, local: "Parquesol", visitante: "Puente Castro", gLocal: 4, gVis: 1 },
{ jornada: 3, local: "CYD Leonesa", visitante: "Santa Marta", gLocal: 4, gVis: 0 },
{ jornada: 3, local: "Salamanca UDS", visitante: "Sur", gLocal: 1, gVis: 3 },
{ jornada: 3, local: "Burgos B", visitante: "La Virgen del Camino", gLocal: 2, gVis: 0 },
{ jornada: 3, local: "Numancia", visitante: "Gª Segoviana", gLocal: 0, gVis: 0 },
{ jornada: 3, local: "CIA", visitante: "Valladolid B", gLocal: 2, gVis: 0 },
{ jornada: 3, local: "Victoria", visitante: "San Agustín", gLocal: 1, gVis: 2 },

// Jornada 4
{ jornada: 4, local: "Vista Alegre", visitante: "Salamanca UDS", gLocal: 2, gVis: 2 },
{ jornada: 4, local: "Valladolid B", visitante: "Diocesanos", gLocal: 4, gVis: 2 },
{ jornada: 4, local: "San Agustín", visitante: "Numancia", gLocal: 1, gVis: 3 },
{ jornada: 4, local: "La Virgen del Camino", visitante: "Victoria", gLocal: 4, gVis: 1 },
{ jornada: 4, local: "Puente Castro", visitante: "Burgos B", gLocal: 1, gVis: 0 },
{ jornada: 4, local: "Gª Segoviana", visitante: "CIA", gLocal: 2, gVis: 3 },
{ jornada: 4, local: "Sur", visitante: "CYD Leonesa", gLocal: 2, gVis: 1 },
{ jornada: 4, local: "Santa Marta", visitante: "Parquesol", gLocal: 1, gVis: 0 },

// Jornada 5
{ jornada: 5, local: "Burgos B", visitante: "Santa Marta", gLocal: 1, gVis: 2 },
{ jornada: 5, local: "CYD Leonesa", visitante: "Parquesol", gLocal: 0, gVis: 0 },
{ jornada: 5, local: "Diocesanos", visitante: "Gª Segoviana", gLocal: 1, gVis: 2 },
{ jornada: 5, local: "Sur", visitante: "Vista Alegre", gLocal: 3, gVis: 2 },
{ jornada: 5, local: "Numancia", visitante: "La Virgen del Camino", gLocal: 1, gVis: 2 },
{ jornada: 5, local: "CIA", visitante: "San Agustín", gLocal: 0, gVis: 0 },
{ jornada: 5, local: "Salamanca UDS", visitante: "Valladolid B", gLocal: 1, gVis: 1 },
{ jornada: 5, local: "Victoria", visitante: "Puente Castro", gLocal: 2, gVis: 1 },

// Jornada 6
{ jornada: 6, local: "San Agustín", visitante: "Diocesanos", gLocal: 0, gVis: 0 },
{ jornada: 6, local: "Vista Alegre", visitante: "CYD Leonesa", gLocal: 0, gVis: 1 },
{ jornada: 6, local: "Santa Marta", visitante: "Victoria", gLocal: 3, gVis: 0 },
{ jornada: 6, local: "Gª Segoviana", visitante: "Salamanca UDS", gLocal: 0, gVis: 1 },
{ jornada: 6, local: "La Virgen del Camino", visitante: "CIA", gLocal: 2, gVis: 0 },
{ jornada: 6, local: "Valladolid B", visitante: "Sur", gLocal: 4, gVis: 2 },
{ jornada: 6, local: "Puente Castro", visitante: "Numancia", gLocal: 1, gVis: 1 },
{ jornada: 6, local: "Parquesol", visitante: "Burgos B", gLocal: 3, gVis: 3 },

// Jornada 7
{ jornada: 7, local: "CYD Leonesa", visitante: "Burgos B", gLocal: 2, gVis: 0 },
{ jornada: 7, local: "Vista Alegre", visitante: "Valladolid B", gLocal: 1, gVis: 4 },
{ jornada: 7, local: "Victoria", visitante: "Parquesol", gLocal: 0, gVis: 1 },
{ jornada: 7, local: "Sur", visitante: "Gª Segoviana", gLocal: 3, gVis: 5 },
{ jornada: 7, local: "Diocesanos", visitante: "La Virgen del Camino", gLocal: 3, gVis: 1 },
{ jornada: 7, local: "CIA", visitante: "Puente Castro", gLocal: 3, gVis: 2 },
{ jornada: 7, local: "Numancia", visitante: "Santa Marta", gLocal: 1, gVis: 0 },
{ jornada: 7, local: "Salamanca UDS", visitante: "San Agustín", gLocal: 2, gVis: 0 },

// Jornada 8
{ jornada: 8, local: "San Agustín", visitante: "Sur", gLocal: 0, gVis: 2 },
{ jornada: 8, local: "Parquesol", visitante: "Numancia", gLocal: 0, gVis: 1 },
{ jornada: 8, local: "Gª Segoviana", visitante: "Vista Alegre", gLocal: 0, gVis: 0 },
{ jornada: 8, local: "Burgos B", visitante: "Victoria", gLocal: 4, gVis: 1 },
{ jornada: 8, local: "La Virgen del Camino", visitante: "Salamanca UDS", gLocal: 1, gVis: 2 },
{ jornada: 8, local: "Puente Castro", visitante: "Diocesanos", gLocal: 2, gVis: 2 },
{ jornada: 8, local: "Santa Marta", visitante: "CIA", gLocal: 2, gVis: 1 },
{ jornada: 8, local: "Valladolid B", visitante: "CYD Leonesa", gLocal: 3, gVis: 4 },

// Jornada 9
{ jornada: 9, local: "Valladolid B", visitante: "Gª Segoviana", gLocal: 4, gVis: 0 },
{ jornada: 9, local: "Vista Alegre", visitante: "San Agustín", gLocal: 2, gVis: 1 },
{ jornada: 9, local: "Sur", visitante: "La Virgen del Camino", gLocal: 7, gVis: 1 },
{ jornada: 9, local: "Salamanca UDS", visitante: "Puente Castro", gLocal: 2, gVis: 1 },
{ jornada: 9, local: "Diocesanos", visitante: "Santa Marta", gLocal: 1, gVis: 1 },
{ jornada: 9, local: "CIA", visitante: "Parquesol", gLocal: 3, gVis: 4 },
{ jornada: 9, local: "Numancia", visitante: "Burgos B", gLocal: 1, gVis: 1 },
{ jornada: 9, local: "CYD Leonesa", visitante: "Victoria", gLocal: 3, gVis: 0 },

// Jornada 10
{ jornada: 10, local: "Burgos B", visitante: "CIA", gLocal: 4, gVis: 1 },
{ jornada: 10, local: "San Agustín", visitante: "Valladolid B", gLocal: 0, gVis: 3 },
{ jornada: 10, local: "Parquesol", visitante: "Diocesanos", gLocal: 1, gVis: 1 },
{ jornada: 10, local: "Victoria", visitante: "Numancia", gLocal: 0, gVis: 0 },
{ jornada: 10, local: "La Virgen del Camino", visitante: "Vista Alegre", gLocal: 5, gVis: 0 },
{ jornada: 10, local: "Gª Segoviana", visitante: "CYD Leonesa", gLocal: 0, gVis: 5 },
{ jornada: 10, local: "Puente Castro", visitante: "Sur", gLocal: 1, gVis: 2 },
{ jornada: 10, local: "Santa Marta", visitante: "Salamanca UDS", gLocal: 2, gVis: 1 },

// Jornada 11
{ jornada: 11, local: "Vista Alegre", visitante: "Puente Castro", gLocal: 2, gVis: 0 },
{ jornada: 11, local: "Salamanca UDS", visitante: "Parquesol", gLocal: 0, gVis: 2 },
{ jornada: 11, local: "Valladolid B", visitante: "La Virgen del Camino", gLocal: 2, gVis: 3 },
{ jornada: 11, local: "Sur", visitante: "Santa Marta", gLocal: 1, gVis: 0 },
{ jornada: 11, local: "Diocesanos", visitante: "Burgos B", gLocal: 0, gVis: 1 },
{ jornada: 11, local: "Gª Segoviana", visitante: "San Agustín", gLocal: 2, gVis: 3 },
{ jornada: 11, local: "CIA", visitante: "Victoria", gLocal: 2, gVis: 0 },
{ jornada: 11, local: "CYD Leonesa", visitante: "Numancia", gLocal: 2, gVis: 0 },

// Jornada 12
{ jornada: 12, local: "Parquesol", visitante: "Sur", gLocal: 0, gVis: 0 },
{ jornada: 12, local: "Numancia", visitante: "CIA", gLocal: 2, gVis: 1 },
{ jornada: 12, local: "San Agustín", visitante: "CYD Leonesa", gLocal: 0, gVis: 5 },
{ jornada: 12, local: "Victoria", visitante: "Diocesanos", gLocal: 0, gVis: 2 },
{ jornada: 12, local: "Burgos B", visitante: "Salamanca UDS", gLocal: 2, gVis: 2 },
{ jornada: 12, local: "La Virgen del Camino", visitante: "Gª Segoviana", gLocal: 6, gVis: 1 },
{ jornada: 12, local: "Santa Marta", visitante: "Vista Alegre", gLocal: 1, gVis: 0 },
{ jornada: 12, local: "Puente Castro", visitante: "Valladolid B", gLocal: 1, gVis: 1 },

// Jornada 13
{ jornada: 13, local: "Sur", visitante: "Burgos B", gLocal: 1, gVis: 0 },
{ jornada: 13, local: "Vista Alegre", visitante: "Parquesol", gLocal: 0, gVis: 2 },
{ jornada: 13, local: "Salamanca UDS", visitante: "Victoria", gLocal: 0, gVis: 0 },
{ jornada: 13, local: "CYD Leonesa", visitante: "CIA", gLocal: 5, gVis: 0 },
{ jornada: 13, local: "Valladolid B", visitante: "Santa Marta", gLocal: 0, gVis: 3 },
{ jornada: 13, local: "San Agustín", visitante: "La Virgen del Camino", gLocal: 1, gVis: 1 },
{ jornada: 13, local: "Diocesanos", visitante: "Numancia", gLocal: 3, gVis: 3 },
{ jornada: 13, local: "Gª Segoviana", visitante: "Puente Castro", gLocal: 3, gVis: 1 },

// Jornada 14
{ jornada: 14, local: "Burgos B", visitante: "Vista Alegre", gLocal: 3, gVis: 1 },
{ jornada: 14, local: "Numancia", visitante: "Salamanca UDS", gLocal: 1, gVis: 2 },
{ jornada: 14, local: "Parquesol", visitante: "Valladolid B", gLocal: 1, gVis: 1 },
{ jornada: 14, local: "Victoria", visitante: "Sur", gLocal: 0, gVis: 2 },
{ jornada: 14, local: "CYD Leonesa", visitante: "La Virgen del Camino", gLocal: 0, gVis: 0 },
{ jornada: 14, local: "CIA", visitante: "Diocesanos", gLocal: 0, gVis: 2 },
{ jornada: 14, local: "Puente Castro", visitante: "San Agustín", gLocal: 5, gVis: 0 },
{ jornada: 14, local: "Santa Marta", visitante: "Gª Segoviana", gLocal: 4, gVis: 1 },

// Jornada 15
{ jornada: 15, local: "Valladolid B", visitante: "Burgos B", gLocal: 4, gVis: 0 },
{ jornada: 15, local: "Vista Alegre", visitante: "Victoria", gLocal: 3, gVis: 0 },
{ jornada: 15, local: "San Agustín", visitante: "Santa Marta", gLocal: 3, gVis: 1 },
{ jornada: 15, local: "Sur", visitante: "Numancia", gLocal: 1, gVis: 0 },
{ jornada: 15, local: "Diocesanos", visitante: "CYD Leonesa", gLocal: 1, gVis: 1 },
{ jornada: 15, local: "La Virgen del Camino", visitante: "Puente Castro", gLocal: 2, gVis: 0 },
{ jornada: 15, local: "Gª Segoviana", visitante: "Parquesol", gLocal: 2, gVis: 1 },
{ jornada: 15, local: "Salamanca UDS", visitante: "CIA", gLocal: 1, gVis: 0 },

// Jornada 16
{ jornada: 16, local: "Salamanca UDS", visitante: "Diocesanos", gLocal: 2, gVis: 0 },
{ jornada: 16, local: "Vista Alegre", visitante: "Numancia", gLocal: 1, gVis: 3 },
{ jornada: 16, local: "Valladolid B", visitante: "Victoria", gLocal: 2, gVis: 1 },
{ jornada: 16, local: "Sur", visitante: "CIA", gLocal: 2, gVis: 4 },
{ jornada: 16, local: "San Agustín", visitante: "Parquesol", gLocal: 0, gVis: 1 },
{ jornada: 16, local: "La Virgen del Camino", visitante: "Santa Marta", gLocal: 0, gVis: 2 },
{ jornada: 16, local: "Puente Castro", visitante: "CYD Leonesa", gLocal: 0, gVis: 1 },
{ jornada: 16, local: "Burgos B", visitante: "Gª Segoviana", gLocal: 5, gVis: 0 },

// Jornada 17
{ jornada: 17, local: "Victoria", visitante: "Gª Segoviana", gLocal: 0, gVis: 3 },
{ jornada: 17, local: "Parquesol", visitante: "La Virgen del Camino", gLocal: 1, gVis: 0 },
{ jornada: 17, local: "Valladolid B", visitante: "Numancia", gLocal: 3, gVis: 2 },
{ jornada: 17, local: "CIA", visitante: "Vista Alegre", gLocal: 1, gVis: 0 },
{ jornada: 17, local: "Diocesanos", visitante: "Sur", gLocal: 3, gVis: 1 },
{ jornada: 17, local: "CYD Leonesa", visitante: "Salamanca UDS", gLocal: 2, gVis: 2 },
{ jornada: 17, local: "Santa Marta", visitante: "Puente Castro", gLocal: 3, gVis: 2 },
{ jornada: 17, local: "Burgos B", visitante: "San Agustín", gLocal: 5, gVis: 4 },

// Jornada 18
{ jornada: 18, local: "Vista Alegre", visitante: "Diocesanos", gLocal: 0, gVis: 1 },
{ jornada: 18, local: "Valladolid B", visitante: "CIA", gLocal: 3, gVis: 3 },
{ jornada: 18, local: "Sur", visitante: "Salamanca UDS", gLocal: 2, gVis: 2 },
{ jornada: 18, local: "San Agustín", visitante: "Victoria", gLocal: 3, gVis: 0 },
{ jornada: 18, local: "La Virgen del Camino", visitante: "Burgos B", gLocal: 1, gVis: 3 },
{ jornada: 18, local: "Puente Castro", visitante: "Parquesol", gLocal: 1, gVis: 2 },
{ jornada: 18, local: "Gª Segoviana", visitante: "Numancia", gLocal: 2, gVis: 1 },
{ jornada: 18, local: "Santa Marta", visitante: "CYD Leonesa", gLocal: 1, gVis: 1 },

// Jornada 19
{ jornada: 19, local: "Burgos B", visitante: "Puente Castro", gLocal: 2, gVis: 0 },
{ jornada: 19, local: "Diocesanos", visitante: "Valladolid B", gLocal: 4, gVis: 0 },
{ jornada: 19, local: "Numancia", visitante: "San Agustín", gLocal: 1, gVis: 0 },
{ jornada: 19, local: "Victoria", visitante: "La Virgen del Camino", gLocal: 1, gVis: 2 },
{ jornada: 19, local: "CIA", visitante: "Gª Segoviana", gLocal: 3, gVis: 1 },
{ jornada: 19, local: "Salamanca UDS", visitante: "Vista Alegre", gLocal: 1, gVis: 0 },
{ jornada: 19, local: "CYD Leonesa", visitante: "Sur", gLocal: 2, gVis: 0 },
{ jornada: 19, local: "Parquesol", visitante: "Santa Marta", gLocal: 1, gVis: 0 },

// Jornada 20
{ jornada: 20, local: "Vista Alegre", visitante: "Sur", gLocal: 2, gVis: 2 },
{ jornada: 20, local: "Valladolid B", visitante: "Salamanca UDS", gLocal: 1, gVis: 1 },
{ jornada: 20, local: "Parquesol", visitante: "CYD Leonesa", gLocal: 1, gVis: 2 },
{ jornada: 20, local: "San Agustín", visitante: "CIA", gLocal: 0, gVis: 3 },
{ jornada: 20, local: "Santa Marta", visitante: "Burgos B", gLocal: 1, gVis: 0 },
{ jornada: 20, local: "Gª Segoviana", visitante: "Diocesanos", gLocal: 3, gVis: 0 },
{ jornada: 20, local: "La Virgen del Camino", visitante: "Numancia", gLocal: 0, gVis: 0 },
{ jornada: 20, local: "Puente Castro", visitante: "Victoria", gLocal: 3, gVis: 2 },

// Jornada 21
{ jornada: 21, local: "Numancia", visitante: "Puente Castro", gLocal: 2, gVis: 1 },
{ jornada: 21, local: "CYD Leonesa", visitante: "Vista Alegre", gLocal: 2, gVis: 1 },
{ jornada: 21, local: "Salamanca UDS", visitante: "Gª Segoviana", gLocal: 0, gVis: 0 },
{ jornada: 21, local: "Burgos B", visitante: "Parquesol", gLocal: 2, gVis: 1 },
{ jornada: 21, local: "Victoria", visitante: "Santa Marta", gLocal: 1, gVis: 2 },
{ jornada: 21, local: "Diocesanos", visitante: "San Agustín", gLocal: 4, gVis: 0 },
{ jornada: 21, local: "Sur", visitante: "Valladolid B", gLocal: 4, gVis: 1 },
{ jornada: 21, local: "CIA", visitante: "La Virgen del Camino", gLocal: 1, gVis: 0 },

// Jornada 22
{ jornada: 22, local: "Valladolid B", visitante: "Vista Alegre", gLocal: 1, gVis: 0 },
{ jornada: 22, local: "San Agustín", visitante: "Salamanca UDS", gLocal: 0, gVis: 2 },
{ jornada: 22, local: "Santa Marta", visitante: "Numancia", gLocal: 1, gVis: 2 },
{ jornada: 22, local: "Gª Segoviana", visitante: "Sur", gLocal: 2, gVis: 2 },
{ jornada: 22, local: "La Virgen del Camino", visitante: "Diocesanos", gLocal: 2, gVis: 0 },
{ jornada: 22, local: "Burgos B", visitante: "CYD Leonesa", gLocal: 1, gVis: 4 },
{ jornada: 22, local: "Puente Castro", visitante: "CIA", gLocal: 0, gVis: 0 },
{ jornada: 22, local: "Parquesol", visitante: "Victoria", gLocal: 4, gVis: 1 },

// Jornada 23
{ jornada: 23, local: "Vista Alegre", visitante: "Gª Segoviana", gLocal: 1, gVis: 0 },
{ jornada: 23, local: "Sur", visitante: "San Agustín", gLocal: 6, gVis: 3 },
{ jornada: 23, local: "Diocesanos", visitante: "Puente Castro", gLocal: 0, gVis: 0 },
{ jornada: 23, local: "Victoria", visitante: "Burgos B", gLocal: 3, gVis: 2 },
{ jornada: 23, local: "CIA", visitante: "Santa Marta", gLocal: 1, gVis: 4 },
{ jornada: 23, local: "Numancia", visitante: "Parquesol", gLocal: 0, gVis: 0 },
{ jornada: 23, local: "CYD Leonesa", visitante: "Valladolid B", gLocal: 3, gVis: 2 },
{ jornada: 23, local: "Salamanca UDS", visitante: "La Virgen del Camino", gLocal: 6, gVis: 3 },

// Jornada 24
{ jornada: 24, local: "Burgos B", visitante: "Numancia", gLocal: 3, gVis: 1 },
{ jornada: 24, local: "San Agustín", visitante: "Vista Alegre", gLocal: 1, gVis: 1 },
{ jornada: 24, local: "Parquesol", visitante: "CIA", gLocal: 2, gVis: 0 },
{ jornada: 24, local: "Santa Marta", visitante: "Diocesanos", gLocal: 3, gVis: 1 },
{ jornada: 24, local: "Gª Segoviana", visitante: "Valladolid B", gLocal: 0, gVis: 2 },
{ jornada: 24, local: "La Virgen del Camino", visitante: "Sur", gLocal: 3, gVis: 1 },
{ jornada: 24, local: "Puente Castro", visitante: "Salamanca UDS", gLocal: 2, gVis: 3 },
{ jornada: 24, local: "Victoria", visitante: "CYD Leonesa", gLocal: 2, gVis: 3 },

// Jornada 25
{ jornada: 25, local: "Valladolid B", visitante: "San Agustín", gLocal: 2, gVis: 1 },
{ jornada: 25, local: "Diocesanos", visitante: "Parquesol", gLocal: 2, gVis: 4 },
{ jornada: 25, local: "Vista Alegre", visitante: "La Virgen del Camino", gLocal: 1, gVis: 1 },
{ jornada: 25, local: "CYD Leonesa", visitante: "Gª Segoviana", gLocal: 6, gVis: 1 },
{ jornada: 25, local: "Sur", visitante: "Puente Castro", gLocal: 1, gVis: 3 },
{ jornada: 25, local: "Salamanca UDS", visitante: "Santa Marta", gLocal: 1, gVis: 1 },
{ jornada: 25, local: "Numancia", visitante: "Victoria", gLocal: 4, gVis: 0 },
{ jornada: 25, local: "CIA", visitante: "Burgos B", gLocal: 3, gVis: 2 },

// Jornada 26
{ jornada: 26, local: "San Agustín", visitante: "Gª Segoviana", gLocal: null, gVis: null },
{ jornada: 26, local: "Victoria", visitante: "CIA", gLocal: null, gVis: null },
{ jornada: 26, local: "Burgos B", visitante: "Diocesanos", gLocal: null, gVis: null },
{ jornada: 26, local: "La Virgen del Camino", visitante: "Valladolid B", gLocal: null, gVis: null },
{ jornada: 26, local: "Puente Castro", visitante: "Vista Alegre", gLocal: null, gVis: null },
{ jornada: 26, local: "Numancia", visitante: "CYD Leonesa", gLocal: null, gVis: null },
{ jornada: 26, local: "Parquesol", visitante: "Salamanca UDS", gLocal: null, gVis: null },
{ jornada: 26, local: "Santa Marta", visitante: "Sur", gLocal: null, gVis: null },

// Jornada 27
{ jornada: 27, local: "Sur", visitante: "Parquesol", gLocal: null, gVis: null },
{ jornada: 27, local: "Salamanca UDS", visitante: "Burgos B", gLocal: null, gVis: null },
{ jornada: 27, local: "Diocesanos", visitante: "Victoria", gLocal: null, gVis: null },
{ jornada: 27, local: "CIA", visitante: "Numancia", gLocal: null, gVis: null },
{ jornada: 27, local: "CYD Leonesa", visitante: "San Agustín", gLocal: null, gVis: null },
{ jornada: 27, local: "Vista Alegre", visitante: "Santa Marta", gLocal: null, gVis: null },
{ jornada: 27, local: "Valladolid B", visitante: "Puente Castro", gLocal: null, gVis: null },
{ jornada: 27, local: "Gª Segoviana", visitante: "La Virgen del Camino", gLocal: null, gVis: null },

// Jornada 28
{ jornada: 28, local: "La Virgen del Camino", visitante: "San Agustín", gLocal: null, gVis: null },
{ jornada: 28, local: "Puente Castro", visitante: "Gª Segoviana", gLocal: null, gVis: null },
{ jornada: 28, local: "Santa Marta", visitante: "Valladolid B", gLocal: null, gVis: null },
{ jornada: 28, local: "Parquesol", visitante: "Vista Alegre", gLocal: null, gVis: null },
{ jornada: 28, local: "Burgos B", visitante: "Sur", gLocal: null, gVis: null },
{ jornada: 28, local: "Victoria", visitante: "Salamanca UDS", gLocal: null, gVis: null },
{ jornada: 28, local: "Numancia", visitante: "Diocesanos", gLocal: null, gVis: null },
{ jornada: 28, local: "CIA", visitante: "CYD Leonesa", gLocal: null, gVis: null },

// Jornada 29
{ jornada: 29, local: "Sur", visitante: "Victoria", gLocal: null, gVis: null },
{ jornada: 29, local: "Salamanca UDS", visitante: "Numancia", gLocal: null, gVis: null },
{ jornada: 29, local: "Valladolid B", visitante: "Parquesol", gLocal: null, gVis: null },
{ jornada: 29, local: "San Agustín", visitante: "Puente Castro", gLocal: null, gVis: null },
{ jornada: 29, local: "Gª Segoviana", visitante: "Santa Marta", gLocal: null, gVis: null },
{ jornada: 29, local: "Vista Alegre", visitante: "Burgos B", gLocal: null, gVis: null },
{ jornada: 29, local: "La Virgen del Camino", visitante: "CYD Leonesa", gLocal: null, gVis: null },
{ jornada: 29, local: "Diocesanos", visitante: "CIA", gLocal: null, gVis: null },

// Jornada 30
{ jornada: 30, local: "Victoria", visitante: "Vista Alegre", gLocal: null, gVis: null },
{ jornada: 30, local: "Puente Castro", visitante: "La Virgen del Camino", gLocal: null, gVis: null },
{ jornada: 30, local: "Santa Marta", visitante: "San Agustín", gLocal: null, gVis: null },
{ jornada: 30, local: "Numancia", visitante: "Sur", gLocal: null, gVis: null },
{ jornada: 30, local: "CYD Leonesa", visitante: "Diocesanos", gLocal: null, gVis: null },
{ jornada: 30, local: "CIA", visitante: "Salamanca UDS", gLocal: null, gVis: null },
{ jornada: 30, local: "Burgos B", visitante: "Valladolid B", gLocal: null, gVis: null },
{ jornada: 30, local: "Parquesol", visitante: "Gª Segoviana", gLocal: null, gVis: null },

];

let jornadasDisponibles = [];
let jornadaActual = 26;
let posicionesBaseJornada = {};
let simulacionFinalizada = false;

function crearTablaBase() {
  const tabla = {};
  for (let i = 0; i < equipos.length; i++) {
    const e = equipos[i];
    tabla[e] = {
      equipo: e,
      PJ: 0,
      PG: 0,
      PE: 0,
      PP: 0,
      GF: 0,
      GC: 0,
      PTS: 0,
      directos: {}
    };
  }
  return tabla;
}

function asegurarDirecto(tabla, eq1, eq2) {
  if (!tabla[eq1].directos[eq2]) {
    tabla[eq1].directos[eq2] = {
      partidos: 0,
      puntos: 0,
      gf: 0,
      gc: 0
    };
  }
}

function partidoJugado(p) {
  return Number.isInteger(p.gLocal) && Number.isInteger(p.gVis);
}

function jornadaCompleta(numeroJornada) {
  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (p.jornada === numeroJornada && !partidoJugado(p)) {
      return false;
    }
  }
  return true;
}

function aplicarPartido(tabla, local, visitante, gl, gv) {
  const home = tabla[local];
  const away = tabla[visitante];

  home.PJ += 1;
  away.PJ += 1;

  home.GF += gl;
  home.GC += gv;
  away.GF += gv;
  away.GC += gl;

  asegurarDirecto(tabla, local, visitante);
  asegurarDirecto(tabla, visitante, local);

  tabla[local].directos[visitante].partidos += 1;
  tabla[visitante].directos[local].partidos += 1;

  tabla[local].directos[visitante].gf += gl;
  tabla[local].directos[visitante].gc += gv;
  tabla[visitante].directos[local].gf += gv;
  tabla[visitante].directos[local].gc += gl;

  if (gl > gv) {
    home.PG += 1;
    away.PP += 1;
    home.PTS += 3;
    tabla[local].directos[visitante].puntos += 3;
  } else if (gl < gv) {
    away.PG += 1;
    home.PP += 1;
    away.PTS += 3;
    tabla[visitante].directos[local].puntos += 3;
  } else {
    home.PE += 1;
    away.PE += 1;
    home.PTS += 1;
    away.PTS += 1;
    tabla[local].directos[visitante].puntos += 1;
    tabla[visitante].directos[local].puntos += 1;
  }
}

function compararPorGeneral(a, b) {
  const dgA = a.GF - a.GC;
  const dgB = b.GF - b.GC;

  if (dgB !== dgA) return dgB - dgA;
  if (b.GF !== a.GF) return b.GF - a.GF;

  return a.equipo.localeCompare(b.equipo, "es");
}

function compararDosEquipos(a, b) {
  if (b.PTS !== a.PTS) {
    return b.PTS - a.PTS;
  }

  const da = a.directos[b.equipo];
  const db = b.directos[a.equipo];

  if (da && db && da.partidos === 2 && db.partidos === 2) {
    if (db.puntos !== da.puntos) {
      return db.puntos - da.puntos;
    }

    const diffA = da.gf - da.gc;
    const diffB = db.gf - db.gc;
    if (diffB !== diffA) {
      return diffB - diffA;
    }

    if (db.gf !== da.gf) {
      return db.gf - da.gf;
    }
  }

  return compararPorGeneral(a, b);
}

function estanTodosLosPartidosMiniLiga(grupo) {
  const n = grupo.length;
  const partidosEsperadosPorEquipo = (n - 1) * 2;

  for (let i = 0; i < grupo.length; i++) {
    let jugados = 0;
    const eq = grupo[i];

    for (let j = 0; j < grupo.length; j++) {
      if (i === j) continue;
      const rival = grupo[j];

      if (eq.directos[rival.equipo]) {
        jugados += eq.directos[rival.equipo].partidos;
      }
    }

    if (jugados !== partidosEsperadosPorEquipo) {
      return false;
    }
  }

  return true;
}

function crearMiniClasificacion(grupo) {
  const mini = {};

  for (let i = 0; i < grupo.length; i++) {
    const e = grupo[i];
    mini[e.equipo] = {
      equipo: e.equipo,
      PTS: 0,
      GF: 0,
      GC: 0
    };
  }

  for (let i = 0; i < grupo.length; i++) {
    const e = grupo[i];

    for (let j = 0; j < grupo.length; j++) {
      if (i === j) continue;

      const rival = grupo[j];
      const dir = e.directos[rival.equipo];

      if (dir) {
        mini[e.equipo].PTS += dir.puntos;
        mini[e.equipo].GF += dir.gf;
        mini[e.equipo].GC += dir.gc;
      }
    }
  }

  return mini;
}

function ordenarGrupoEmpatado(grupo) {
  if (grupo.length === 1) return grupo;

  if (grupo.length === 2) {
    return grupo.slice().sort(compararDosEquipos);
  }

  if (estanTodosLosPartidosMiniLiga(grupo)) {
    const mini = crearMiniClasificacion(grupo);

    return grupo.slice().sort((a, b) => {
      const ma = mini[a.equipo];
      const mb = mini[b.equipo];

      if (mb.PTS !== ma.PTS) {
        return mb.PTS - ma.PTS;
      }

      const dgMiniA = ma.GF - ma.GC;
      const dgMiniB = mb.GF - mb.GC;
      if (dgMiniB !== dgMiniA) {
        return dgMiniB - dgMiniA;
      }

      if (mb.GF !== ma.GF) {
        return mb.GF - ma.GF;
      }

      return compararPorGeneral(a, b);
    });
  }

  return grupo.slice().sort(compararPorGeneral);
}

function ordenarClasificacionConEmpates(clasificacionBase) {
  const grupos = [];
  let grupoActual = [];

  for (let i = 0; i < clasificacionBase.length; i++) {
    const equipo = clasificacionBase[i];

    if (grupoActual.length === 0) {
      grupoActual.push(equipo);
      continue;
    }

    if (equipo.PTS === grupoActual[0].PTS) {
      grupoActual.push(equipo);
    } else {
      grupos.push(grupoActual);
      grupoActual = [equipo];
    }
  }

  if (grupoActual.length > 0) {
    grupos.push(grupoActual);
  }

  let resultado = [];
  for (let i = 0; i < grupos.length; i++) {
    resultado = resultado.concat(ordenarGrupoEmpatado(grupos[i]));
  }

  return resultado;
}

function obtenerPosicionesClasificacionActual() {
  const tabla = crearTablaBase();

  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (!partidoJugado(p)) continue;
    aplicarPartido(tabla, p.local, p.visitante, p.gLocal, p.gVis);
  }

  const clasificacionBase = Object.values(tabla).sort((a, b) => {
    if (b.PTS !== a.PTS) return b.PTS - a.PTS;
    return a.equipo.localeCompare(b.equipo, "es");
  });

  const clasificacion = ordenarClasificacionConEmpates(clasificacionBase);
  const posiciones = {};

  for (let i = 0; i < clasificacion.length; i++) {
    posiciones[clasificacion[i].equipo] = i + 1;
  }

  return posiciones;
}

function reiniciarReferenciaJornada() {
  posicionesBaseJornada = obtenerPosicionesClasificacionActual();
}

function construirListaJornadas() {
  jornadasDisponibles = [];
  for (let i = 0; i < partidos.length; i++) {
    if (!jornadasDisponibles.includes(partidos[i].jornada)) {
      jornadasDisponibles.push(partidos[i].jornada);
    }
  }
  jornadasDisponibles.sort(function (a, b) {
    return a - b;
  });
}

function obtenerPrimeraJornadaPendiente() {
  construirListaJornadas();

  for (let j = 0; j < jornadasDisponibles.length; j++) {
    const numeroJornada = jornadasDisponibles[j];

    for (let i = 0; i < partidos.length; i++) {
      const p = partidos[i];
      if (p.jornada === numeroJornada && !partidoJugado(p)) {
        return numeroJornada;
      }
    }
  }

  return jornadasDisponibles[jornadasDisponibles.length - 1];
}

function mostrarPartidos() {
  const contenedor = document.getElementById("partidos");
  if (!contenedor) return;

  construirListaJornadas();

  if (!jornadasDisponibles.includes(jornadaActual)) {
    jornadaActual = jornadasDisponibles[0];
  }

  contenedor.innerHTML = "";

  const titulo = document.getElementById("titulo-jornada");
  if (titulo) {
    titulo.textContent = "Jornada " + jornadaActual;
  }

  const bloque = document.createElement("div");
  bloque.className = "bloque-jornada";

  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (p.jornada !== jornadaActual) continue;

    const fila = document.createElement("div");
    fila.className = "fila-partido";

    const spanLocal = document.createElement("span");
    spanLocal.className = "equipo-local";
    spanLocal.innerHTML =
      `<img class="escudo" src="${obtenerEscudo(p.local)}" alt="${p.local}">
       <span>${p.local}</span>`;

    const inputLocal = document.createElement("input");
    inputLocal.type = "number";
    inputLocal.min = "0";
    inputLocal.id = "gl" + i;
    inputLocal.value = partidoJugado(p) ? p.gLocal : "";

    const guion = document.createElement("span");
    guion.className = "guion";
    guion.textContent = "-";

    const inputVis = document.createElement("input");
    inputVis.type = "number";
    inputVis.min = "0";
    inputVis.id = "gv" + i;
    inputVis.value = partidoJugado(p) ? p.gVis : "";

    const spanVis = document.createElement("span");
    spanVis.className = "equipo-visitante";
    spanVis.innerHTML =
      `<img class="escudo" src="${obtenerEscudo(p.visitante)}" alt="${p.visitante}">
       <span>${p.visitante}</span>`;

    fila.appendChild(spanLocal);
    fila.appendChild(inputLocal);
    fila.appendChild(guion);
    fila.appendChild(inputVis);
    fila.appendChild(spanVis);

    bloque.appendChild(fila);
  }

  contenedor.appendChild(bloque);

  const inputs = contenedor.querySelectorAll('input[type="number"]');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
      leerResultados();
      calcularClasificacion();
    });
  }

  actualizarBotonesJornada();
}

function leerResultados() {
  for (let i = 0; i < partidos.length; i++) {
    const gl = document.getElementById("gl" + i);
    const gv = document.getElementById("gv" + i);

    if (!gl || !gv) continue;

    const valorLocal = gl.value.trim();
    const valorVis = gv.value.trim();

    partidos[i].gLocal = valorLocal === "" ? null : parseInt(valorLocal, 10);
    partidos[i].gVis = valorVis === "" ? null : parseInt(valorVis, 10);
  }
}

function obtenerClasificacionActual() {
  const tabla = crearTablaBase();

  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (!partidoJugado(p)) continue;
    aplicarPartido(tabla, p.local, p.visitante, p.gLocal, p.gVis);
  }

  const clasificacionBase = Object.values(tabla).sort((a, b) => {
    if (b.PTS !== a.PTS) return b.PTS - a.PTS;
    return a.equipo.localeCompare(b.equipo, "es");
  });

  return ordenarClasificacionConEmpates(clasificacionBase);
}

function renderizarResumenFinal(clasificacion) {
  const contenedor = document.getElementById("partidos");
  if (!contenedor) return;

  const ascensoDirecto = clasificacion[0];
  const playoff = clasificacion.slice(1, 3);
  const arrastre = clasificacion.slice(11, 13);
  const descenso = clasificacion.slice(13, 16);

  function renderEquipoResumen(equipo) {
    return `
      <span class="equipo-resumen">
        <img class="escudo" src="${obtenerEscudo(equipo.equipo)}" alt="${equipo.equipo}">
        <span>${equipo.equipo}</span>
      </span>
    `;
  }

  contenedor.innerHTML = `
    <div class="resumen-final">
      <h3>Resumen final de la liga</h3>

      <div class="linea-resumen">
        <span class="punto-resumen punto-verde"></span>
        <div>
          <strong>Ascenso directo a 3ª RFEF:</strong>
          ${renderEquipoResumen(ascensoDirecto)}
        </div>
      </div>

      <div class="linea-resumen">
        <span class="punto-resumen punto-naranja"></span>
        <div>
          <strong>Play-off:</strong>
          ${playoff.map(renderEquipoResumen).join("")}
        </div>
      </div>

      <div class="linea-resumen">
        <span class="punto-resumen punto-morado"></span>
        <div>
          <strong>En peligro por arrastre:</strong>
          ${arrastre.map(renderEquipoResumen).join("")}
        </div>
      </div>

      <div class="linea-resumen">
        <span class="punto-resumen punto-rojo"></span>
        <div>
          <strong>Descenso a Provincial:</strong>
          ${descenso.map(renderEquipoResumen).join("")}
        </div>
      </div>
    </div>
  `;
}

function animarCambiosTabla(tbody, posicionesAntes) {
  const filas = tbody.querySelectorAll("tr");

  filas.forEach((fila) => {
    const equipo = fila.dataset.equipo;
    const topAntes = posicionesAntes[equipo];

    if (topAntes === undefined) return;

    const topDespues = fila.getBoundingClientRect().top;
    const deltaY = topAntes - topDespues;

    if (deltaY !== 0) {
      fila.classList.add("fila-animando");
      fila.style.transition = "none";
      fila.style.transform = `translateY(${deltaY}px)`;

      requestAnimationFrame(() => {
        fila.style.transition = "transform 500ms ease";
        fila.style.transform = "translateY(0)";
      });

      fila.addEventListener(
        "transitionend",
        () => {
          fila.classList.remove("fila-animando");
          fila.style.transition = "";
          fila.style.transform = "";
        },
        { once: true }
      );
    }
  });
}

function calcularClasificacion() {
  leerResultados();

  const clasificacion = obtenerClasificacionActual();
  const tbody = document.querySelector("#tabla-clasificacion tbody");

  const posicionesAntes = {};
  const filasActuales = tbody.querySelectorAll("tr");
  filasActuales.forEach((fila) => {
    posicionesAntes[fila.dataset.equipo] = fila.getBoundingClientRect().top;
  });

  tbody.innerHTML = "";

  for (let i = 0; i < clasificacion.length; i++) {
    const e = clasificacion[i];
    const tr = document.createElement("tr");
    tr.dataset.equipo = e.equipo;

   if (i === 0) {
  tr.classList.add("pos-ascenso");
} else if (i >= clasificacion.length - 2) {
  tr.classList.add("pos-descenso");
}
    let flecha = "";
    const posicionBase = posicionesBaseJornada[e.equipo];
    const posicionActual = i + 1;

    if (posicionBase !== undefined) {
      if (posicionActual < posicionBase) {
        flecha = '<span class="flecha-sube">▲</span>';
      } else if (posicionActual > posicionBase) {
        flecha = '<span class="flecha-baja">▼</span>';
      }
    }

    tr.innerHTML =
      `<td>${posicionActual} ${flecha}</td>
       <td>
         <div class="equipo-con-escudo">
           <img class="escudo" src="${obtenerEscudo(e.equipo)}" alt="${e.equipo}">
           <span>${e.equipo}</span>
         </div>
       </td>
       <td class="col-puntos">${e.PTS}</td>
       <td>${e.PJ}</td>
       <td>${e.PG}</td>
       <td>${e.PE}</td>
       <td>${e.PP}</td>
       <td>${e.GF}</td>
       <td>${e.GC}</td>
       <td>${e.GF - e.GC}</td>`;

    tbody.appendChild(tr);
  }

  requestAnimationFrame(() => {
    animarCambiosTabla(tbody, posicionesAntes);
  });

  const jugados = partidos.filter(partidoJugado).length;
  const estado = document.getElementById("estado");
  if (estado) {
    estado.textContent = "Clasificación actualizada. Partidos contabilizados: " + jugados;
  }
}

function actualizarBotonesJornada() {
  construirListaJornadas();

  const btnAnterior = document.getElementById("btn-anterior");
  const btnSiguiente = document.getElementById("btn-siguiente");

  if (!btnAnterior || !btnSiguiente) return;

  if (simulacionFinalizada) {
    btnAnterior.disabled = false;
    btnAnterior.style.display = "";
    btnSiguiente.style.display = "none";
    return;
  }

  const indice = jornadasDisponibles.indexOf(jornadaActual);

  btnAnterior.style.display = "";
  btnSiguiente.style.display = "";

  btnAnterior.disabled = indice <= 0;

  const esUltimaJornada = indice === jornadasDisponibles.length - 1;
  const ultimaJornadaCompleta = jornadaCompleta(jornadaActual);

  if (esUltimaJornada && ultimaJornadaCompleta) {
    btnSiguiente.disabled = false;
    btnSiguiente.textContent = "Finalizar";
  } else {
    btnSiguiente.textContent = "→";
    btnSiguiente.disabled = indice === -1 || indice >= jornadasDisponibles.length - 1;
  }
}

function irAJornadaAnterior() {
  construirListaJornadas();

  const btnSiguiente = document.getElementById("btn-siguiente");
  const botonCalcular = document.getElementById("calcular");

  if (simulacionFinalizada) {
    simulacionFinalizada = false;
    jornadaActual = jornadasDisponibles[jornadasDisponibles.length - 1];

    if (btnSiguiente) {
      btnSiguiente.style.display = "";
      btnSiguiente.textContent = "→";
    }

    if (botonCalcular) {
      botonCalcular.style.display = "";
    }

    reiniciarReferenciaJornada();
    mostrarPartidos();
    calcularClasificacion();
    return;
  }

  const indice = jornadasDisponibles.indexOf(jornadaActual);

  if (indice > 0) {
    jornadaActual = jornadasDisponibles[indice - 1];
    reiniciarReferenciaJornada();
    mostrarPartidos();
    calcularClasificacion();
  }
}

function finalizarSimulacion() {
  leerResultados();

  const clasificacion = obtenerClasificacionActual();
  simulacionFinalizada = true;

  const btnSiguiente = document.getElementById("btn-siguiente");
  if (btnSiguiente) {
    btnSiguiente.style.display = "none";
  }

  const titulo = document.getElementById("titulo-jornada");
  if (titulo) {
    titulo.textContent = "Resumen final";
  }

  const botonCalcular = document.getElementById("calcular");
  if (botonCalcular) {
    botonCalcular.style.display = "none";
  }

  renderizarResumenFinal(clasificacion);
  calcularClasificacion();

  const estado = document.getElementById("estado");
  if (estado) {
    estado.textContent = "Simulación finalizada.";
  }

  actualizarBotonesJornada();
}

function irAJornadaSiguiente() {
  construirListaJornadas();

  if (simulacionFinalizada) return;

  const indice = jornadasDisponibles.indexOf(jornadaActual);
  const esUltimaJornada = indice === jornadasDisponibles.length - 1;
  const ultimaJornadaCompleta = jornadaCompleta(jornadaActual);

  if (esUltimaJornada && ultimaJornadaCompleta) {
    finalizarSimulacion();
    return;
  }

  if (indice !== -1 && indice < jornadasDisponibles.length - 1) {
    jornadaActual = jornadasDisponibles[indice + 1];
    reiniciarReferenciaJornada();
    mostrarPartidos();
    calcularClasificacion();
  }
}

function obtenerEscudo(equipo) {
  return escudos[equipo] || "";
}

window.onload = function () {
  jornadaActual = obtenerPrimeraJornadaPendiente();
  reiniciarReferenciaJornada();
  mostrarPartidos();
  calcularClasificacion();

  const boton = document.getElementById("calcular");
  if (boton) {
    boton.addEventListener("click", calcularClasificacion);
  }

  const btnAnterior = document.getElementById("btn-anterior");
  if (btnAnterior) {
    btnAnterior.addEventListener("click", irAJornadaAnterior);
  }

  const btnSiguiente = document.getElementById("btn-siguiente");
  if (btnSiguiente) {
    btnSiguiente.addEventListener("click", irAJornadaSiguiente);
  }
};