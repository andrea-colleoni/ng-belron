export class Post {
    userId: number;
    id: number;
    title: string;
    body: string;

    nuovaProp: string;

    get abstract(): string {
        return (this.body ? this.body.substring(0, 50) : '');
    }
}
