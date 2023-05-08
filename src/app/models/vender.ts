export class Vender {
    public venderId: number;
        public venderName: string;
        public createdAt:Date;
        constructor(venderId: number,venderName: string,createdAt:Date ){
        this.venderId=venderId;
        this.venderName=venderName;
        this.createdAt=createdAt;
        }
}
