import { OpenAI } from "openai";
import { encoding_for_model } from "tiktoken";
const openai = new OpenAI();

//Check the working of the OpenAI API
async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: "How tall is Mount Everest?" }],
  });
  console.log(response.choices[0].message.content);
}

//Find the number of tokens
function encodePrompt() {
  const prompt = "How tall is Mount Everest?";
  const encoder = encoding_for_model("gpt-4o");
  const words = encoder.encode(prompt);
  console.log(words);
}

//Check the working of the OpenAI API with system role
async function compareRole() {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "You respond like a cool bro",
      },
      { role: "user", content: "How tall is Mount Everest?" },
    ],
  });
  console.log(response.choices[0].message.content);
}


//Check the working of the OpenAI API with system role and respond in json format
async function AnswerInJson() {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `You respond like a cool bro , and you respond in json format like this:
        coolnessLevel: 1-10,
         answer: your answer`
      },
      { role: "user", content: "How tall is Mount Everest?" },
    ],
  });
  console.log(response.choices[0].message.content);
}


//check the working of the OpenAI API with assistant role
async function RoleAssistant() {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `You respond like a cool bro , and you respond in json format like this:
        coolnessLevel: 1-10,
         answer: your answer`
      },
      { role: "user", content: "How tall is Mount Everest?" },
    ],
  });
  console.log(response.choices[0].message);
}
// main()
// encodePrompt()
// compareRole();
// AnswerInJson();
 RoleAssistant();
