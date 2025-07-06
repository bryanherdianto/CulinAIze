'use client'

import React, { useState } from 'react'
import { Greeting } from '@/components/greeting'
import { PaperclipIcon, ArrowUpIcon } from '@/components/icons'

function ChatPage() {
    const [message, setMessage] = useState('')

    const handleSendMessage = () => {
        if (message.trim()) {
            console.log('Sending message:', message)
            setMessage('')
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
                {/* Greeting */}
                <Greeting />
            </div>

            {/* Message Input - Fixed at bottom */}
            <div className="w-full px-4 pb-4">
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-gray-900 rounded-lg border border-gray-900 focus-within:border-gray-800">
                        <div className="flex items-center p-4">
                            <button className="flex-shrink-0 p-2 text-gray-400 hover:text-white transition-colors mr-3">
                                <PaperclipIcon size={20} />
                            </button>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Send a message..."
                                className="flex-1 bg-transparent text-white placeholder-gray-500 resize-none outline-none min-h-[24px] max-h-32"
                                rows={1}
                            />
                            <button
                                onClick={handleSendMessage}
                                className="flex-shrink-0 p-2 ml-3 bg-gray-900 hover:bg-gray-800 rounded-full transition-colors"
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