import { Guid } from "guid-typescript";

export interface Produto{
    id:Guid
    nome:String
    valor: String
    quantidade:String
    validade:String
    fornecedor:String
}