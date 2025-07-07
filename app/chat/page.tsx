'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Greeting } from '@/components/greeting'
import { PaperclipIcon, ArrowUpIcon } from '@/components/icons'

interface Message {
    id: string
    text: string
    sender: 'user' | 'ai'
}

function ChatPage() {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<Message[]>([])
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const messagesEndRef = useRef<HTMLDivElement | null>(null)

    const handleSendMessage = () => {
        if (message.trim()) {
            // Add user message
            const userMessage: Message = {
                id: Date.now().toString(),
                text: message.trim(),
                sender: 'user',
            }

            setMessages(prev => [...prev, userMessage])
            setMessage('')

            // Add AI response
            setTimeout(() => {
                const aiMessage: Message = {
                    id: (Date.now() + 1).toString(),
                    text: "Hello, I'm a smart AI",
                    sender: 'ai',
                }
                setMessages(prev => [...prev, aiMessage])
            }, 1000)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    // Resize the textarea to fit content
    const autoResize = () => {
        const textarea = textareaRef.current
        if (textarea) {
            textarea.style.height = 'auto'
            textarea.style.height = `${textarea.scrollHeight}px`
        }
    }

    useEffect(() => {
        autoResize()
    }, [message])

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <div className='absolute top-2 left-2'>
                <a href="/">
                    <span className="text-lg font-semibold px-2 hover:bg-gray-800 rounded-md cursor-pointer">
                        Chatbot
                    </span>
                </a>
            </div>
            {/* Main Content */}
            <div className="mt-5 flex-1 flex flex-col px-4 py-8 pb-24">
                {messages.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center">
                        <Greeting />
                    </div>
                ) : (
                    <div className="flex-1 overflow-y-auto max-w-4xl mx-auto w-full">
                        <div className="space-y-4 pb-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-60 sm:max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.sender === 'user'
                                            ? 'bg-white text-black'
                                            : 'bg-gray-900 text-white'
                                            }`}
                                    >
                                        <p className="text-sm">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div ref={messagesEndRef} />
                    </div>
                )}
            </div>

            {/* Message Input - Fixed to bottom */}
            <div className="fixed bottom-0 left-0 right-0 w-full px-4 pb-4 bg-black">
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-gray-900 rounded-lg border border-gray-900 focus-within:border-gray-800">
                        <div className="flex items-center p-2">
                            <button className="flex-shrink-0 p-2 text-gray-400 hover:text-white transition-colors mr-3 self-end">
                                <PaperclipIcon size={20} />
                            </button>
                            <textarea
                                ref={textareaRef}
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                    autoResize()
                                }}
                                onKeyPress={handleKeyPress}
                                placeholder="Send a message..."
                                className="flex-1 bg-transparent text-white placeholder-gray-500 resize-none outline-none min-h-[24px] max-h-64 overflow-y-auto"
                                rows={1}
                            />
                            <button
                                onClick={handleSendMessage}
                                className="flex-shrink-0 p-2 ml-3 text-black bg-white hover:bg-gray-300 rounded-full transition-colors self-end"
                                disabled={!message.trim()}
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
