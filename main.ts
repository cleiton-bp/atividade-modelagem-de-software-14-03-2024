import { Aluno } from "./atividades/Aluno";
import { Praia } from "./atividades/Praia";
import { Voo } from "./atividades/Voo";

let aluno1: Aluno = new Aluno("cleiton", 23, 12345, "ads");
let aluno2: Aluno = new Aluno("test 1", 20, 23456, "ads");
let aluno3: Aluno = new Aluno("test 2", 27, 34567, "ads");

aluno1.mostrarInformacoes()
aluno2.mostrarInformacoes()
aluno3.mostrarInformacoes()


let praia1: Praia = new Praia("Torres", "RS", 22, "fina")
let praia2: Praia = new Praia("Passo de Torres", "SC", 22, "fina")

praia1.informacoesPraia()
praia2.informacoesPraia()

let voo1: Voo = new Voo("Latan", "Porto Alegre", "New York, EUA","14/03/2024",4000.00)
let voo2: Voo = new Voo("Air Canada", "Sao Paulo", "Toronto, Canadá","14/03/2024",3000.00)

voo1.informacoesVoo()
voo2.informacoesVoo()