
export class PainelMetaFinanceira {
    gerentes: LinhaMetaFinanceiraGerente[];
    supervisores: LinhaMetaFinanceiraSupervisor[];
    consultores: LinhaMetaFinanceiraConsultor[];

    constructor(){
        this.gerentes = new Array<LinhaMetaFinanceiraGerente>();
        this.supervisores = new Array<LinhaMetaFinanceiraSupervisor>();
        this.consultores = new Array<LinhaMetaFinanceiraConsultor>();
    }
}

export class LinhaMetaFinanceiraGerente {
    id: number;
    uf: string;
    nome: string;
    status: boolean;
}

export class LinhaMetaFinanceiraSupervisor {
    id: number;
    uf: string;
    nome: string;
    status: boolean;
}

export class LinhaMetaFinanceiraConsultor {
    id: number;
    uf: string;
    nome: string;
    status: boolean;
}