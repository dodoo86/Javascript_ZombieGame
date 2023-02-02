import GameState from "./game-state";
import Index from "./index.js";

export default class Spawner {
    constructor({app, create}) {
        this.app = app;
        Index.value;
        const spawnInterval = 400; //in ms
        this.maxSpawns =  10 * Index.value;
        
        this.create = create;
        this.spawns = [];
        setInterval(() => this.spawn(),spawnInterval);
    }
    
    spawn(){
        if(this.app.gameState !== GameState.RUNNING) return;
        if(this.spawns.lengt >= this.maxSpawns) return;
        let s = this.create();
        this.spawns.push(s);
    }
}