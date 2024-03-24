import Category from "../enums/Category";

export default interface ICommandsOptions {
    name: string;
    description: string;
    category: Category;
    options: object;
    userPermissions: bigint;
    dmPermissions: boolean;
    cooldown: number;
}