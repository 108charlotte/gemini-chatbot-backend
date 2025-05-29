import { google, generateText } from '@ai-sdk/google'

const model = google('gemini-1.5-pro-latest')

export default async function handler(req, res) {
    const { response } = await generateText({
    model,
    prompt: req.body,
    })
    res.status(200).json({answer: response})
}