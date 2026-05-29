import { isCancel, select } from "@clack/prompts";
import chalk from "chalk";


export async function runCliMode() {
    while(true){
        const mode = await select({
            message:"choose cli sub-mode",
            options:[
                {value:"agent",label:"Agent Mode"},
                {value:"plan",label:"plan Mode"},
                {value:"ask",label:"ask Mode"},
                {value:"Back",label:"Back to main menu"},
                
            ]
        })
        if (isCancel(mode) || mode =="Back") return 
        if(mode == "agent"){}
        if(mode == "plan"){}
        if(mode == "ask"){}
        if(mode != "agent" && mode != "plan" && mode == "ask"){
            console.log(chalk.yellow("\n what node is not implement yet \n"))
        }









    }

}