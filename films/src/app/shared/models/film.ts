export class Film {
    id? : string ;
    nom? : string;
    description? : string;
    descVisible? : boolean;
    constructor(args: Partial<Film> = {}) {
        this.id=args.id || '0';
        this.nom = args.nom || '';
        this.description = args.description || '';
        this.descVisible = args.descVisible ;
        
        }
    afficheDesc():void{
        this.descVisible=true;
     }
     cacherDesc(): void{
        this.descVisible=false;
     
     }
    }    