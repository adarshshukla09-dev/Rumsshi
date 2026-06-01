import type { Telegraf } from "telegraf";
import { isOwner } from "./auth";
import { WELCOME } from "./constants";
import { commandArg } from "./text";


export function registerHandlers(bot: Telegraf) {
    bot.command("start",async (ctx) =>{
        if(!isOwner(ctx.chat.id.toString())) return;
        await ctx.reply(WELCOME,{parse_mode:"MarkdownV2"});
    });
    
    bot.command("ask",async (ctx) =>{
       if(!isOwner(ctx.chat.id.toString())) return;
        const q= commandArg(ctx.message.text,"ask")
        if(!q) return ctx.reply("Usage : /ask <question>",{
            parse_mode:"Markdown"
        });
await ctx.reply("research your questios ...")
void runask(ctx,q).catch(console.error);
       });
    bot.command("agent",async (ctx) =>{
        if(!isOwner(ctx.chat.id.toString())) return;
        const q= commandArg(ctx.message.text,"agent")

    });
    bot.command("plan",async (ctx) =>{
        if(!isOwner(ctx.chat.id.toString())) return;
    });
}