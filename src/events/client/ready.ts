import { Events } from "discord.js";
import CustomClient from "../../classes/CustomClient";
import Event from "../../classes/Event";

export default class Ready extends Event {
    constructor(client: CustomClient) {
        super(client, {
            name: Events.ClientReady,
            description: "ClientReady Event",
            once: true
        })
    }

    Execute() {
        console.log(`Logged as ${this.client.user?.tag}`)
    }
}