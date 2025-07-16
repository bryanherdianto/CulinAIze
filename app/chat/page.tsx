'use client'

import React, { useState, useRef, useEffect } from 'react'
import { PaperclipIcon, ArrowUpIcon } from '@/components/icons'
import { Bot, User, X, Loader2 } from 'lucide-react'
import { createClient, Session } from '@supabase/supabase-js'

const supabaseUrl = 'https://xovecwyuxzopohszmtfx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvdmVjd3l1eHpvcG9oc3ptdGZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA5NjM4NDYsImV4cCI6MjAzNjUzOTg0Nn0.sb_publishable_ESraJ_8BhDs7zFoJyION0Q_IKc3J0QG';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  imagePreview?: string
}

function ChatPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pastedImage, setPastedImage] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const sendMessageWebhookUrl = 'https://echoes.app.n8n.cloud/webhook/e053181d-499f-45d1-aaa5-bd8c61ba8e06';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const imageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = event => resolve(event.target?.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => { autoResize() }, [message]);
  useEffect(() => { scrollToBottom() }, [messages, isLoading]);

  useEffect(() => {
    const handlePaste = async (event: ClipboardEvent) => {
      if (!event.clipboardData) return;
      const imageItem = Array.from(event.clipboardData.items).find(item => item.type.startsWith('image/'));
      if (imageItem) {
        const file = imageItem.getAsFile();
        if (file) {
          const base64String = await imageToBase64(file);
          setPastedImage(base64String);
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const base64String = await imageToBase64(file);
      setPastedImage(base64String);
    }
  };

  const handleAttachmentClick = () => fileInputRef.current?.click();

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if ((!message.trim() && !pastedImage) || isLoading) return;

    setIsLoading(true);
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message.trim(),
      sender: 'user',
      imagePreview: pastedImage ?? undefined,
    };
    setMessages(prev => [...prev, userMessage]);

    const imageToSend = pastedImage;
    setMessage('');
    setPastedImage(null);

    if (!session) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Oui Oui! Who are you? Introduction please by signing in via the homepage!",
        sender: 'ai',
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
      return;
    }

    try {
      const n8nRequestBody = {
        message: userMessage.text,
        image: imageToSend,
      };
      const n8nResponse = await fetch(sendMessageWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify(n8nRequestBody),
      });

      if (n8nResponse.ok) {
        const data = await n8nResponse.json();
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.output?.text || data.message || "I've received your request.",
          sender: 'ai',
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        throw new Error('n8n webhook response was not ok.');
      }
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Pardonnez-moi, the kitchen seems to be closed. Please try again later.",
        sender: 'ai',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (session === undefined) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-white"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className='absolute top-2 left-2'>
        <a href="/">
          <span className="text-lg font-semibold px-2 hover:bg-gray-800 rounded-md cursor-pointer">
            ← Go Back
          </span>
        </a>
      </div>
      <div className="mt-5 flex-1 flex flex-col px-4 py-8 pb-32">
        <div className="flex-1 overflow-y-auto max-w-4xl mx-auto w-full">
          <div className="space-y-6 pb-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && <Bot className="h-6 w-6 flex-shrink-0" />}
                <div
                  className={`max-w-md px-4 py-2 rounded-lg ${msg.sender === 'user'
                    ? 'bg-white text-black'
                    : 'bg-gray-900 text-white'
                  }`}
                >
                  {msg.imagePreview && (
                    <img src={msg.imagePreview} alt="Pasted content" className="rounded-lg mb-2 max-h-48" />
                  )}
                  {msg.text && <p className="text-sm whitespace-pre-wrap">{msg.text}</p>}
                </div>
                {msg.sender === 'user' && <User className="h-6 w-6 flex-shrink-0" />}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <Bot className="h-6 w-6 flex-shrink-0" />
                <div className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center">
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  <span className="text-sm">Chef is thinking...</span>
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 w-full px-4 pb-4 bg-black">
        <div className="max-w-4xl mx-auto">
          {pastedImage && (
            <div className="relative w-24 h-24 p-2 border border-gray-700 bg-gray-900 rounded-lg mb-2">
              <img src={pastedImage} alt="Pasted preview" className="w-full h-full object-cover rounded" />
              <button
                onClick={() => { setPastedImage(null); }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
          <div className="relative bg-gray-900 rounded-lg border border-gray-900 focus-within:border-gray-800">
            <div className="flex items-center p-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <button 
                onClick={handleAttachmentClick}
                className="flex-shrink-0 p-2 text-gray-400 hover:text-white transition-colors mr-3 self-end"
              >
                <PaperclipIcon size={20} />
              </button>
              <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                  autoResize()
                }}
                onKeyDown={handleKeyPress}
                placeholder="Send a message or paste an image..."
                className="flex-1 bg-transparent text-white placeholder-gray-500 resize-none outline-none min-h-[24px] max-h-64 overflow-y-auto"
                rows={1}
                disabled={isLoading}
              />
              <button
                onClick={() => handleSendMessage()}
                className="flex-shrink-0 p-2 ml-3 text-black bg-white hover:bg-gray-300 rounded-full transition-colors self-end disabled:bg-gray-600 disabled:cursor-not-allowed"
                disabled={(!message.trim() && !pastedImage) || isLoading}
              >
                <ArrowUpIcon size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
