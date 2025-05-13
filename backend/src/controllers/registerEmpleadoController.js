import EmployeeModel from "../models/empleados.js";
import bcryptjs from "bcryptjs"; //para encriptar
import jsonwebtoken from "jsonwebtoken"; //para generar token
import { config } from "../config.js";

const registerEmpleadoController = {};

registerEmpleadoController.register = async (req, res) => {
  const {
    name,
    lastName,
    birthday,
    email,
    address,
    password,
    hireDate,
    telephone,
    dui,
    isVerified,
    issnumber,
  } = req.body;

  try {
    //Verificamos si el empleado ya existe
    const existEmpleado = await empleadoModel.findOne({ email });
    if (existEmpleado) {
      return res.json({ message: "Empleado ya existe" });
    }

    // Encriptar la contraseña
    const passwordHash = await bcryptjs.hash(password, 10);

    // Guardemos el empleado nuevo
    const newEmpleado = new empleadoModel({
      name,
      lastName,
      birthday,
      email,
      address,
      password: passwordHash,
      hireDate,
      telephone,
      dui,
      isVerified,
      issnumber,
    });

    await newEmpleado.save();

    // --> TOKEN <--
    jsonwebtoken.sign(
      //1-Que voy a guardar
      { id: newEmpleado._id },
      //2-secreto
      config.JWT.secret,
      //3- cuando expira
      { expiresIn: config.JWT.expiresIn },
      //4- funcion flecha
      (error, token) => {
        if (error) console.log(error);
        res.cookie("authToken", token);
        res.json({message: "Empleado registrado"})
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default registerEmpleadoController;