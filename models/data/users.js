import "dotenv/config.js"
import "../../config/dataBase.js"
import User from "../User.js"

let users = [
    {
      name: "Lucía Martínez",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "lucia.martinez@example.com",
      paswore: "password123",
      rol: "user",
      age: "29"
    },
    {
      name: "Carlos Gómez",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "carlos.gomez@example.com",
      paswore: "passcarlos",
      rol: "admin",
      age: "35"
    },
    {
      name: "María Rodríguez",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "maria.rod@example.com",
      paswore: "mariapass",
      rol: "user",
      age: "24"
    },
    {
      name: "Juan Pérez",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "juan.perez@example.com",
      paswore: "juanpass",
      rol: "user",
      age: "30"
    },
    {
      name: "Sofía Ramírez",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "sofia.ramirez@example.com",
      paswore: "sofiapass",
      rol: "user",
      age: "26"
    },
    {
      name: "Andrés Herrera",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "andres.herrera@example.com",
      paswore: "andres123",
      rol: "admin",
      age: "40"
    },
    {
      name: "Valentina López",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "valentina.lopez@example.com",
      paswore: "valepass",
      rol: "user",
      age: "22"
    },
    {
      name: "Diego Torres",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "diego.torres@example.com",
      paswore: "diegopass",
      rol: "user",
      age: "33"
    },
    {
      name: "Camila Ruiz",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "camila.ruiz@example.com",
      paswore: "camilapass",
      rol: "user",
      age: "27"
    },
    {
      name: "Luis Mendoza",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "luis.mendoza@example.com",
      paswore: "luism123",
      rol: "admin",
      age: "38"
    },
    {
      name: "Ana Torres",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "ana.torres@example.com",
      paswore: "anapass",
      rol: "user",
      age: "31"
    },
    {
      name: "Mateo Salazar",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "mateo.salazar@example.com",
      paswore: "mateopass",
      rol: "user",
      age: "29"
    },
    {
      name: "Isabella Navarro",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "isabella.n@example.com",
      paswore: "isapass",
      rol: "user",
      age: "25"
    },
    {
      name: "Fernando Castro",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "fernando.castro@example.com",
      paswore: "ferpass",
      rol: "admin",
      age: "34"
    },
    {
      name: "Paula Vega",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "paula.vega@example.com",
      paswore: "paulapass",
      rol: "user",
      age: "28"
    }
  ]
  
  User.insertMany(users)