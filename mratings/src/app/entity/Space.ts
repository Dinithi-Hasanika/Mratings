export class Space{
    id:string;
    spaceName: string;
    description: string;
    origin:string;
    movies:number;
    followers:number;

    constructor(id:string, spaceName: string, description: string, origin:string, movies:number, followers:number ){
        this.id = id;
        this.spaceName = spaceName;
        this.description = description;
        this.origin = origin;
        this.movies = movies;
        this.followers = followers;
    }
}