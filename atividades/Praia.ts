export class Praia {
  constructor(
    public nome: String,
    public localizacao: string,
    public temperaturaAgua: number,
    public tipoAreia: string
  ) { }

  informacoesPraia():void {
    console.log(' ')
    console.log('-----------------informações da Praia-----------------')
    console.log(`1 - Nome da Praia -----: ${this.nome}`)
    console.log(`2 - Localizacao -------: ${this.localizacao}`)
    console.log(`3 - Tipo de Areia -----: ${this.tipoAreia}`)
    console.log(`4 - Temperatura da Agua: ${this.temperaturaAgua}`)
  }
}