import { Card, CardContent, CardHeader } from '@/components/ui/card'
import logo from '@/public/profile.png'
import { Badge } from '@/src/components/ui/badge'
import Image from 'next/image'

function Bio() {
  return (
    <section className="flex items-center md:gap-6">
      <Image
        className="scale-75 md:scale-100"
        src={logo}
        alt="Dayong Lee"
        width={125}
        height={125}
      />
      <div className="flex flex-col gap-2 md:gap-4">
        <h1 className="text-2xl font-bold md:text-4xl">이다용 / Dayong Lee</h1>
        <p>
          <b>세상에 도움이 되는 것</b>들을 만들고 싶고 <b>생각하는 것</b>을
          좋아하는 대학생입니다!
        </p>
        <div className="flex gap-2">
          <Badge variant="outline">#frontend engineer</Badge>
          <Badge variant="outline">#undergrauate</Badge>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Bio />
      <div className="grid grid-cols-1 gap-8">
        <h2 className="border-b border-b-gray-200 pb-3 font-bold">
          Latest posts
        </h2>
        <div className="flex flex-col gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Badge>ETC</Badge>
                <h3 className="text-lg font-bold">안녕하세요!</h3>
              </div>
              <p className="line-clamp-2 text-sm text-gray-500">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className="text-sm text-gray-500">2024년 01월 01일</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
