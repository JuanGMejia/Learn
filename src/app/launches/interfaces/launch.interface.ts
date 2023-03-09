export interface ILaunch {
    flight_number: number;
    mission_name: string;
    details: string;
    links: {
        mission_patch: string;
    }
}