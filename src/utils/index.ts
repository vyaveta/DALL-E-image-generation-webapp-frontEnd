import { surpriseMePrompts } from "@/constants";

export function getRandomPrompt(prompt : string): string{
    const randomIndex: number = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPromt: string = surpriseMePrompts[randomIndex]
    if(randomPromt === prompt) return getRandomPrompt(randomPromt)
    return randomPromt
}