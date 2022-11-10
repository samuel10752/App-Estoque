import { Guid } from "guid-typescript";

export interface Produto{
    id:Guid
    nome:String
    valor: number
    quantidade:number
    validade:String
}