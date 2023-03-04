interface IRoles{
    roles:'Support'|'Carry'|'Durable'|'Initiator'|'Disabler'|'Nuker'|'Jungler'|'Pusher'
}
export interface IHero{
    id:number;
    icon:string;
    roles:IRoles[];
    attack_type:"Ranged"|"Melee";
    primary_attr:"agi"|"int"|"str";
    img:string;
    localized_name:string;
}
