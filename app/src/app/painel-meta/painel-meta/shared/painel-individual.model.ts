
export class PainelIndividual {
    gerentes: LinhaIndividualGerente[];
    supervisores: LinhaIndividualSupervisor[];
    consultores: LinhaIndividualConsultor[];

    constructor(){
        this.gerentes = new Array<LinhaIndividualGerente>();
        this.supervisores = new Array<LinhaIndividualSupervisor>();
        this.consultores = new Array<LinhaIndividualConsultor>();
    }
}

export class LinhaIndividualGerente {
    id: number;
    uf: string;
    nome: string;
    status: boolean;
}

export class LinhaIndividualSupervisor {
    id: number;
    uf: string;
    nome: string;
    status: boolean;
}

export class LinhaIndividualConsultor {
    id: number;
    uf: string;
    nome: string;
    status: boolean;
}

