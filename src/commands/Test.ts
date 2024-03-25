import { ApplicationCommandOptionType, CacheType, ChatInputCommandInteraction, PermissionsBitField } from "discord.js";
import Command from "../classes/Command";
import CustomClient from "../classes/CustomClient";
import Category from "../enums/Category";

export default class Test extends Command {
    constructor(client: CustomClient) {
        super(client, {
            name: "test",
            description: "My test command",
            category: Category.Utilities,
            userPermissions: PermissionsBitField.Flags.UseApplicationCommands,
            dmPermissions: false,
            cooldown: 3,
            development: true,
            options: [
                {
                    name: "one",
                    description: "A",
                    type: ApplicationCommandOptionType.Subcommand
                },
                {
                    name: "two",
                    description: "A",
                    type: ApplicationCommandOptionType.Subcommand
                }
            ]
        });
    }

    // Execute(interaction: ChatInputCommandInteraction) {
    //     interaction.reply({ content: "Test command has been ran!", ephemeral: true })
    // }
}