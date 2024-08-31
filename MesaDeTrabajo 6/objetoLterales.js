//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
// podes continuar tu codigo a partir de aca!
//ejercicio 2
let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (titular) {
    let clienteEncontrado = this.clientes.find(
      (cliente) => cliente.titularCuenta == titular
    );
    if (clienteEncontrado.titularCuenta != titular) {
      console.log("no se encontro el cliente buscado");
    } else {
      console.log(clienteEncontrado);
    }
    //return clienteEncontrado;
  },
  deposito: function (titular, dineroADepositar) {
    let clienteEncontrado = this.consultarCliente(titular);
    clienteEncontrado.saldoEnPesos += dineroADepositar;
    return clienteEncontrado;
  },
  extraccion: function (titular, dineroAextraer) {
    let clienteEncontrado = this.consultarCliente(titular);
    if (clienteEncontrado.saldoEnPesos - dineroAextraer < 0) {
      console.log("saldo insuficiente");
    } else {
      clienteEncontrado.saldoEnPesos -= dineroAextraer;
      console.log("su nuevo saldo es: $" + clienteEncontrado.saldoEnPesos);
    }
    //return clienteEncontrado;
  },
};
banco.consultarCliente("Ramon Connell");
