const ClienteController = {};
import clienteModel from "../models/cliente.js";

// SELECT
ClienteController.getCliente = async (req, res) => {
  const Cliente = await clienteModel.find();
  res.json(Cliente);
};

// INSERT
ClienteController.createCliente = async (req, res) => {
  const { nombre, correo, telefono, direccion, activo } = req.body;
  const newCliente = new clienteModel({ nombre, correo, telefono, direccion, activo });
  await newCliente.save();
  res.json({ message: "Cliente save" });
};

// DELETE
ClienteController.deleteCliente = async (req, res) => {
const deleteCliente = await branchesModel.findByIdAndDelete(req.params.id);
  if (!deleteCliente) {
    return res.status(404).json({ message: "Cliente dont find" });
  }
  res.json({ message: "Cliente deleted" });
};

// UPDATE
ClienteController.updateCliente = async (req, res) => {
  // Solicito todos los valores
  const { nombre, correo, telefono, direccion, activo } = req.body;
  // Actualizo
  await clienteModel.findByIdAndUpdate(
    req.params.id,
    {
        nombre, 
        correo, 
        telefono, 
        direccion,
         activo
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "Cliente update" });
};

export default ClienteController;