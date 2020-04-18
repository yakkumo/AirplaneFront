
export class AprovacaoIndividual {
    id: number;
    uf: string;
    nome: string;
    cargo: string;
    observacao: string;
    metas: MetasAprovacaoIndividual[];

    constructor(){
        this.metas = new Array<MetasAprovacaoIndividual>();
    }
}

export class MetasAprovacaoIndividual {
    id: number;
    indicador: string;
    meta: string;
    unidadeMedida: string;
    metaAno: string;
    min: string;
    max: string;
}

