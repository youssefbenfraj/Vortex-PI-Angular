import { Compaign } from "./compaign";

export class Donation {
    id_donation!: number;
    amount_donation!: number;
    desc_donation!: string;
    date_donation!: Date;
    compaign!: Compaign;
}
