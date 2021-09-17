export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin:IOrigin;
    location: ILocation;
    image: string;
    
}

export interface IOrigin {
    name:string;
    url:string;
}

export interface ILocation {
    name:string;
    url:string;
}

export interface ICharacterCommand {
    info: ICharacterInfo;
    results: ICharacter[];
}

export interface ICharacterInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}