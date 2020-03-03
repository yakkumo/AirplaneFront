import { Airplane } from './Airplane';

export class ResultDto
{
    codigo : string;
    sucesso : boolean;
    mensagem : string;
    campo : string;
    mensagens : string;
    data : Airplane;
    validationResult : string;
}