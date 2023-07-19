'use client'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card'
import { Input } from './ui/input'
import { useChat } from 'ai/react'
import { ScrollArea } from './ui/scroll-area'
import Balancer from 'react-wrap-balancer'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: 'api/chat',
  })

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>

        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="mb-4 flex gap-3 text-sm text-slate-600"
            >
              {message.role === 'user' && (
                <Avatar>
                  <AvatarFallback>FO</AvatarFallback>
                  <AvatarImage src="https://github.com/Felipstein.png" />
                </Avatar>
              )}

              {message.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback>RS</AvatarFallback>
                  <AvatarImage src="https://github.com/rocketseat.png" />
                </Avatar>
              )}

              <p className="prose prose-sm leading-relaxed">
                <span className="block font-bold text-slate-800">
                  {message.role === 'user' ? 'Usuário' : 'Rocketseat'}:
                </span>

                <Balancer>{message.content}</Balancer>
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />

          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
