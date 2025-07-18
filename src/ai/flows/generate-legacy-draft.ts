'use server';

/**
 * @fileOverview An AI agent for generating a draft of a digital legacy.
 *
 * - generateLegacyDraft - A function that handles the legacy draft generation process.
 * - GenerateLegacyDraftInput - The input type for the generateLegacyDraft function.
 * - GenerateLegacyDraftOutput - The return type for the generateLegacyDraft function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLegacyDraftInputSchema = z.object({
  prompt: z.string().describe('A prompt describing the user\'s life and memories.'),
});
export type GenerateLegacyDraftInput = z.infer<typeof GenerateLegacyDraftInputSchema>;

const GenerateLegacyDraftOutputSchema = z.object({
  draft: z.string().describe('A draft of the user\'s digital legacy.'),
});
export type GenerateLegacyDraftOutput = z.infer<typeof GenerateLegacyDraftOutputSchema>;

export async function generateLegacyDraft(input: GenerateLegacyDraftInput): Promise<GenerateLegacyDraftOutput> {
  return generateLegacyDraftFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLegacyDraftPrompt',
  input: {schema: GenerateLegacyDraftInputSchema},
  output: {schema: GenerateLegacyDraftOutputSchema},
  prompt: `You are a digital legacy creation assistant.  Your job is to take a simple prompt describing a person's life, and generate a draft of their digital legacy.

Prompt: {{{prompt}}}`,
});

const generateLegacyDraftFlow = ai.defineFlow(
  {
    name: 'generateLegacyDraftFlow',
    inputSchema: GenerateLegacyDraftInputSchema,
    outputSchema: GenerateLegacyDraftOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
