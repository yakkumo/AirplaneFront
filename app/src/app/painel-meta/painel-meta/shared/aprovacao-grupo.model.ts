export class AprovacaoGrupo {
    id: number;
    observacao: string;
    linha: LinhaAprovacaoGrupo[];

    constructor(){
        this.linha = new Array<LinhaAprovacaoGrupo>();
    }
}

export class LinhaAprovacaoGrupo {
    id: number;
    indicador: string;
    meta: string;
    sistema: string;
    campo: string;
    peso: string;
}
