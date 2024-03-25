import { ApplicationCommandOptionType, CacheType, ChatInputCommandInteraction, PermissionsBitField } from "discord.js";
import Command from "../classes/Command";
import CustomClient from "../classes/CustomClient";
import Category from "../enums/Category";
import SubCommand from "../classes/SubCommand";

export default class TestTwo extends SubCommand {
    constructor(client: CustomClient) {
        super(client, {
            name: "test.two"
        });
    }

    Execute(interaction: ChatInputCommandInteraction) {
        interaction.reply({ content: "Test two command has been ran!", ephemeral: true })
    }
}