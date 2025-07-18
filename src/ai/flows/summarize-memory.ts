// Summarize Memory Flow
'use server';
/**
 * @fileOverview Summarizes uploaded memories or documents to quickly review and categorize them.
 *
 * - summarizeMemory - A function that handles the summarization process.
 * - SummarizeMemoryInput - The input type for the summarizeMemory function.
 * - SummarizeMemoryOutput - The return type for the summarizeMemory function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeMemoryInputSchema = z.object({
  memoryText: z.string().describe('The text content of the memory to be summarized.'),
});
export type SummarizeMemoryInput = z.infer<typeof SummarizeMemoryInputSchema>;

const SummarizeMemoryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the provided memory text.'),
});
export type SummarizeMemoryOutput = z.infer<typeof SummarizeMemoryOutputSchema>;

export async function summarizeMemory(input: SummarizeMemoryInput): Promise<SummarizeMemoryOutput> {
  return summarizeMemoryFlow(input);
}

const summarizeMemoryPrompt = ai.definePrompt({
  name: 'summarizeMemoryPrompt',
  input: {schema: SummarizeMemoryInputSchema},
  output: {schema: SummarizeMemoryOutputSchema},
  prompt: `Summarize the following memory text into a concise summary:

{{{memoryText}}}`,
});

const summarizeMemoryFlow = ai.defineFlow(
  {
    name: 'summarizeMemoryFlow',
    inputSchema: SummarizeMemoryInputSchema,
    outputSchema: SummarizeMemoryOutputSchema,
  },
  async input => {
    const {output} = await summarizeMemoryPrompt(input);
    return output!;
  }
);
