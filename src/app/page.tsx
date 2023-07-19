import { Chat } from '@/components/Chat'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-900 bg-[radial-gradient(at_83%_91%,rgb(147,51,234)_0,transparent_95%),radial-gradient(at_12%_70%,rgb(243,244,246)_0,transparent_94%),radial-gradient(at_10%_31%,rgb(79,70,229)_0,transparent_72%),radial-gradient(at_48%_33%,rgb(134,25,143)_0,transparent_26%),radial-gradient(at_66%_1%,rgb(22,78,99)_0,transparent_64%),radial-gradient(at_15%_33%,rgb(255,237,213)_0,transparent_44%),radial-gradient(at_64%_85%,rgb(120,113,108)_0,transparent_59%),radial-gradient(at_20%_45%,rgb(21,128,61)_0,transparent_54%),radial-gradient(at_33%_89%,rgb(23,23,23)_0,transparent_43%)]">
      <Chat />
    </div>
  )
}
