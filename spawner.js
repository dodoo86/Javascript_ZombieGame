export default class Spawner {
    constructor({create}){
        const spawnInterval = 1000; //in ms
        this.maxSpawns = 10;
        this.create = create;
        this.spawns = [];
        setInterval(() => this.spawn(),spawnInterval);
    }
    
    spawn(){
        if(this.spawns.lengt >= this.maxSpawns) return;
        let s = this.create();
        this.spawns.push(s);
    }
}