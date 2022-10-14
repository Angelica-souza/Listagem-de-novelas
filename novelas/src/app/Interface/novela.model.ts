export class NovelaModel{
    id: number
    titulo: string;
    emissora: string;
    ano: string;
    imagem?:string;

    constructor(){
        this.id = 1;
        this.titulo = '';
        this.emissora = '';
        this.ano = '';
        this.imagem = '';
    }
}