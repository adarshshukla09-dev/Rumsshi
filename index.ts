#!/usr/bin/env bun
// called as shebang
import {Command} from "commander"
import { runWakeup } from "./tui/wakeup";

const  program = new Command();

program
.name("Rumsshi")
.description(" Rumsshi cli tool")
.version("0.0.1");

program
.command("wakeup")
.description("show the banner and options")
.action(
    async()=>{
        console.log("waking upp....")
        runWakeup()
    })


await program.parseAsync(process.argv)