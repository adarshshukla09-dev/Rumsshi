import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export function getAgentModel(){
const provider = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY!,
});

const model= process.env.OPENROUTER_DEFAULT_MODEL!

return provider(model)
}
