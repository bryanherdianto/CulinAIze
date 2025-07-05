import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { google } from '@ai-sdk/google';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model': google('gemini-2.0-flash-exp'),
        'chat-model-reasoning': wrapLanguageModel({
          model: google('gemini-2.0-flash-thinking-exp'),
          middleware: extractReasoningMiddleware({ tagName: 'thinking' }),
        }),
        'title-model': google('gemini-1.5-flash'),
        'artifact-model': google('gemini-2.0-flash-exp'),
      },
    });