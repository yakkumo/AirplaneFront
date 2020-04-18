
export class AprovacaoMetasFinanceiras {
    id: number;
    uf: string;
    nome: string;
    cargo: string;
    observacao: string;
    indicadores: IndicadorAprovacaoMetasFinanceiras[];

    constructor(){
        this.indicadores = new Array<IndicadorAprovacaoMetasFinanceiras>();
    }
}

export class IndicadorAprovacaoMetasFinanceiras {
    id: number;
    metaReceita: string;
    valorRecebimento: string;
}