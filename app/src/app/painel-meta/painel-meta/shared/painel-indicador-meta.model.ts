
export class PainelIndicadorMeta {
    linhas: LinhaIndicadorMeta[];

    constructor(){
        this.linhas = new Array<LinhaIndicadorMeta>();
    }
}

export class LinhaIndicadorMeta {
    id: number;
    grupo: string;
    status: boolean;
}
