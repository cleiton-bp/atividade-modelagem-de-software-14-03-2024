export class Voo {
  constructor(
    public companhiaAerea: string,
    public origem: string,
    public destino: string,
    public dataPartida: string,
    public precoPassagem: number,
  ) { }

  informacoesVoo() :void {
    console.log(' ')
    console.log('-----------------informações do VOO-------------------')
    console.log(`1 - Nome da Companhia Aerea -----: ${this.companhiaAerea}`)
    console.log(`2 - Data da Partida -------------: ${this.dataPartida}`)
    console.log(`3 - Origem ----------------------: ${this.origem}`)
    console.log(`4 - Destino ---------------------: ${this.destino}`)
    console.log(`5 - Preço da Passagem -----------: ${this.precoPassagem}`)
  }
}