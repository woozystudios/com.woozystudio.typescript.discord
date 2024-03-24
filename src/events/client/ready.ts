import { Collection, Events, REST, Routes } from "discord.js";
import CustomClient from "../../classes/CustomClient";
import Event from "../../classes/Event";
import Command from "../../classes/Command";

export default class Ready extends Event {
    constructor(client: CustomClient) {
        super(client, {
            name: Events.ClientReady,
            description: "ClientReady Event",
            once: true
        })
    }

    async Execute() {
        console.log(`Logged as ${this.client.user?.tag}`);

        const commands: object[] = this.GetJson(this.client.commands);

        const rest = new REST().setToken(this.client.config.token);

        const setCommands: any = await rest.put(Routes.applicationGuildCommands(this.client.config.discordClientId, this.client.config.guildId), {
            body: commands
        });

        console.log(`Successfully set ${setCommands.length} commands!`);
    }

    private GetJson(commands: Collection<string, Command>): object[] {
        const data: object[] = [];

        commands.forEach(command => {
            data.push({
                name: command.name,
                description: command.description,
                options: command.options,
                userPermissions: command.userPermissions.toString(),
                dmPermissions: command.dmPermissions,
            })
        });

        return data;
    }
}