import { GoogleGenAI } from '@google/genai'

const client = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY!,
})

export async function generateNanoBananaImage(prompt: string) {
  const result = await client.models.generateContent({
    model: 'gemini-2.0-flash-exp',
    contents: prompt,
  })

  return result
}
