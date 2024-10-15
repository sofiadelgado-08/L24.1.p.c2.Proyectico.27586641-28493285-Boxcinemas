export default class Cl_mCine {
    constructor(dineroinicial) {
        this.dineroinicial = dineroinicial;
        this.acummontoapagar = 0;
        this.mayorpago = 0;
        this.totalfinal = 0;
        this.contdia = 0;
        this.contdialunes = 0;
    }

procesarCliente(cliente) {
    this.acummontoapagar += cliente.montoapagar();
}

pagomayor() {
    return this.acummontoapagar;
}

prompagolunes() {
    if (this.contdia === 1)
        this.contdialunes = this.acummontoapagar;
    else 
    return 0;
}

totalfinal(){
    return (this.dineroinicial + this.acummontoapagar);
}
}

