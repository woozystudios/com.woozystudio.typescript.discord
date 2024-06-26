import { Collection, Events, REST, Routes } from "discord.js";
import CustomClient from "../../classes/CustomClient";
import Event from "../../classes/Event";
import Command from "../../classes/Command";
import 'colors';

export default class Ready extends Event {
    constructor(client: CustomClient) {
        super(client, {
            name: Events.ClientReady,
            description: "ClientReady Event",
            once: true
        })
    }

    async Execute() {
        console.log(`Logged as ${this.client.user?.tag}`.green);

        const clientId = this.client.developmentMode ? this.client.config.devDiscordClientId : this.client.config.discordClientId;
        const rest = new REST().setToken(this.client.config.token);

        if(!this.client.developmentMode) {
            const globalCommands: any = await rest.put(Routes.applicationCommands(clientId), {
                body: this.GetJson(this.client.commands.filter(command => !command.development))
            });

            console.log(`Successfully loaded ${globalCommands.length} global application commands.`.yellow)
        }

        const devCommands: any = await rest.put(Routes.applicationGuildCommands(clientId, this.client.config.devGuildId), {
            body: this.GetJson(this.client.commands.filter(command => command.development))
        });

        console.log(`Successfully loaded ${devCommands.length} development application commands.`.blue)


        /* const commands: object[] = this.GetJson(this.client.commands);

        const setCommands: any = await rest.put(Routes.applicationGuildCommands(this.client.config.discordClientId, this.client.config.guildId), {
            body: commands
        });

        console.log(`Successfully set ${setCommands.length} commands!`.yellow); */
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