export class Aluno {

  constructor(
    public nome: string,
    public idade: number,
    public matricula: number,
    public curso: string,
  ) { }

  mostrarInformacoes(): void {
    console.log(' ')
    console.log('-----------------informações do Aluno-----------------')
    console.log(`1 Nome do Aluno -----: ${this.nome}`)
    console.log(`2 Idade do Aluno ----: ${this.idade}`)
    console.log(`3 Nome do Curso -----: ${this.curso}`)
    console.log(`4 Numero da matricula: ${this.matricula}`)
  }
}