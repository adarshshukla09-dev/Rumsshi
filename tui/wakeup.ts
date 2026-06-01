import { select , isCancel} from "@clack/prompts"
import chalk from "chalk"
import figlet from "figlet"
import { runCliMode } from "../modes/cli";
import { runTelegramMode } from "../modes/Telegram";

const BANNER_FONT = 'ANSI Shadow';
const SHADOW = chalk.hex('#f61509');
const FACE = chalk.hex('#de410c').bold;

function printBannerWithShadow(ascii: string) {

  const bannerLines = ascii.replace(/\s+$/, '').split('\n');
  const maxLen = Math.max(...bannerLines.map((l) => l.length), 0);
  const rowWidth = maxLen + 2;

  for (const line of bannerLines) {
    console.log(SHADOW(('  ' + line).padEnd(rowWidth)));
  }
  process.stdout.write(`\x1b[${bannerLines.length}A`);
  for (const line of bannerLines) {
    console.log(FACE(line.padEnd(rowWidth)));
  }
  console.log();
}

export async function runWakeup() {
       let ascii:string;
    try {
        ascii = figlet.textSync("Rumsshi" , {font:BANNER_FONT})
    } catch (error) {
        ascii = figlet.textSync("Rumsshi" , {font:"Standard"})
    }

    printBannerWithShadow(ascii)

    const mode = await select({
        message:"which mode you want to proceed with",
        options:[
            {value:"cli",label:"CLI"},
            {value:"telegram",label:"Telegram"},
            {value:"exit",label:"exit"},
            ]
    })

    if(isCancel(mode || mode=="exit")){
        console.log(chalk.dim('\n Goodbye \n'))
        return;
           }
    if(mode === "cli"){
        console.log(chalk.dim("cli mode"))
        runCliMode()
    }
    else if(mode ==="telegram"){
        console.log(chalk.dim("telegram"))
        runTelegramMode()
    }
   
}