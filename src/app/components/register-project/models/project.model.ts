import Tray from "../../list-trays/models/tray.model";

export default class Project {
    projectId!: string;
    cultiveType!: string;
    trays: Tray[] = [];
    initDate!: Date;
}