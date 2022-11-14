import { Guid } from 'guid-typescript';

export interface Produto {
    id: Guid, 
    nome: string, 
    validade: string, 
    fornecedor: string,
    valor: string,
    quantidade: string,
    entrega:String,
    desc:String,
    saida:String,
}