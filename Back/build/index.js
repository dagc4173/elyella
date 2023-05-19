"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const perosna_rourer_1 = __importDefault(require("./routes/perosna.rourer"));
const rol_rourer_1 = __importDefault(require("./routes/rol.rourer"));
const articulo_rourer_1 = __importDefault(require("./routes/articulo.rourer"));
const categoria_rourer_1 = __importDefault(require("./routes/categoria.rourer"));
const cliente_rourer_1 = __importDefault(require("./routes/cliente.rourer"));
const detalleIngreso_rourer_1 = __importDefault(require("./routes/detalleIngreso.rourer"));
const detalleVenta_rourer_1 = __importDefault(require("./routes/detalleVenta.rourer"));
const ingreso_rourer_1 = __importDefault(require("./routes/ingreso.rourer"));
const subcategoria_rourer_1 = __importDefault(require("./routes/subcategoria.rourer"));
const usuario_rourer_1 = __importDefault(require("./routes/usuario.rourer"));
const venta_rourer_1 = __importDefault(require("./routes/venta.rourer"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/persona', perosna_rourer_1.default);
app.use('/api/rol', rol_rourer_1.default);
app.use('/api/articulo', articulo_rourer_1.default);
app.use('/api/categoria', categoria_rourer_1.default);
app.use('/api/cliente', cliente_rourer_1.default);
app.use('/api/detalleIngreso', detalleIngreso_rourer_1.default);
app.use('/api/detalleVenta', detalleVenta_rourer_1.default);
app.use('/api/ingreso', ingreso_rourer_1.default);
app.use('/api/subcategoria', subcategoria_rourer_1.default);
app.use('/api/usuario', usuario_rourer_1.default);
app.use('/api/venta', venta_rourer_1.default);
app.listen(port, () => {
    console.log(`El servidor esta escuchando el puerto ${port}`);
});
