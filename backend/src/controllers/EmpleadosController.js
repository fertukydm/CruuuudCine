const EmpleadoController = {};
import empleadoModel from "../models/empleados.js";

// SELECT
EmpleadoController.getEmpleado = async (req, res) => {
  const empleados = await empleadoModel.find();
  res.json(empleados);
};

// INSERT
EmpleadoController.createEmpleado = async (req, res) => {
  const { nombre, correo, telefono, direccion, puesto, contra, fecha_contratacion, salario, activo } = req.body;
  const newEmpleado= new empleadoModel({ nombre, correo, telefono, direccion, puesto, contra, fecha_contratacion, salario, activo });
  await newEmpleado.save();
  res.json({ message: "Empleado save" });
};

// DELETE
EmpleadoController.deleteEmpleado = async (req, res) => {
const deleteEmpleado = await empleadoModel.findByIdAndDelete(req.params.id);
  if (!deleteEmpleado) {
    return res.status(404).json({ message: "Empleado dont find" });
  }
  res.json({ message: "Empleado deleted" });
};

// UPDATE
EmpleadoController.updateEmpleado = async (req, res) => {
  // Solicito todos los valores
  const { nombre, correo, telefono, direccion, puesto, contra, fecha_contratacion, salario, activo  } = req.body;
  // Actualizo
  await employeeModel.findByIdAndUpdate(
    req.params.id,
    {
        nombre,
         correo, 
         telefono,
          direccion, 
          contra,
           fecha_contratacion,
            salario, 
            activo 
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "Empleado update" });
};

export default EmpleadoController;
