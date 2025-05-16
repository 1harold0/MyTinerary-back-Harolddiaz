import "dotenv/config.js"
import "../../config/dataBase.js"
import User from "../User.js"

let users = [
    {
      name: "Lucía Martínez",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "lucia.martinez@example.com",
      password: "password123",
      rol: "user",
      age: "29"
    },
    {
      name: "Carlos Gómez",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "carlos.gomez@example.com",
      password: "passcarlos",
      rol: "admin",
      age: "35"
    },
    {
      name: "María Rodríguez",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "maria.rod@example.com",
      password: "mariapass",
      rol: "user",
      age: "24"
    },
    {
      name: "Juan Pérez",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "juan.perez@example.com",
      password: "Juanpass12.",
      rol: "user",
      age: "30"
    },
    {
      name: "Sofía Ramírez",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "sofia.ramirez@example.com",
      password: "sofiapass",
      rol: "user",
      age: "26"
    },
    {
      name: "Andrés Herrera",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "andres.herrera@example.com",
      password: "andres123",
      rol: "admin",
      age: "40"
    },
    {
      name: "Valentina López",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "valentina.lopez@example.com",
      password: "valepass",
      rol: "user",
      age: "22"
    },
    {
      name: "Diego Torres",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "diego.torres@example.com",
      password: "diegopass",
      rol: "user",
      age: "33"
    },
    {
      name: "Camila Ruiz",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "camila.ruiz@example.com",
      password: "camilapass",
      rol: "user",
      age: "27"
    },
    {
      name: "Luis Mendoza",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "luis.mendoza@example.com",
      password: "luism123",
      rol: "admin",
      age: "38"
    },
    {
      name: "Ana Torres",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "ana.torres@example.com",
      password: "anapass",
      rol: "user",
      age: "31"
    },
    {
      name: "Mateo Salazar",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "mateo.salazar@example.com",
      password: "mateopass",
      rol: "user",
      age: "29"
    },
    {
      name: "Isabella Navarro",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "isabella.n@example.com",
      password: "isapass",
      rol: "user",
      age: "25"
    },
    {
      name: "Fernando Castro",
      photo: "https://img.freepik.com/psd-premium/hombre-dibujos-animados-sonriente-3d-avatar_975163-755.jpg?w=740",
      email: "fernando.castro@example.com",
      password: "ferpass",
      rol: "admin",
      age: "34"
    },
    {
      name: "Paula Vega",
      photo: "https://img.freepik.com/fotos-premium/avatar-digital-administrador-cuentas-ia-generativa_934475-9386.jpg?w=740",
      email: "paula.vega@example.com",
      password: "paulapass",
      rol: "user",
      age: "28"
    }
  ]
  
  User.insertMany(users)