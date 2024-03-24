import { ChatInputCommandInteraction, CacheType } from "discord.js";
import ISumCommand from "../interfaces/ISubCommand";
import CustomClient from "./CustomClient";
import ISubCommandOptions from "../interfaces/ISubCommandOptions";

export default class SubCommand implements ISumCommand {
    client: CustomClient;
    name: string;

    constructor(client: CustomClient, options: ISubCommandOptions) {
        this.client = client;
        this.name = options.name;
    }

    Execute(interaction: ChatInputCommandInteraction<CacheType>): void {
    }
    
}