export class Player {
    private username: string;
    private score: number;

    constructor(playername: string, score: number) {
        this.username = playername;
        this.score = score;
    }

    public getUsername(): String {
        return this.username;
      }
      public setUsername(username): void {
        this.username = username;
      }
}