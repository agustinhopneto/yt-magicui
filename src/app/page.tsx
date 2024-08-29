'use client';

import BlurIn from '@/components/magicui/blur-in';
import { ConfettiButton } from '@/components/magicui/confetti';
import Meteors from '@/components/magicui/meteors';
import ShineBorder from '@/components/magicui/shine-border';
import ShinyButton from '@/components/magicui/shiny-button';

export default function Home() {
  return (
    <main className="w-full">
      <section className="mx-auto flex w-full max-w-screen-md flex-col items-center justify-center gap-12 p-12">
        <BlurIn
          word="Hello Magic UI"
          duration={1}
          className="text-foreground text-4xl font-bold"
        />

        <div className="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
          <Meteors number={30} />
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
            Meteors
          </span>
        </div>

        <ShineBorder
          className="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        >
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Shine Border
          </span>
        </ShineBorder>

        <div className="relative">
          <ConfettiButton>Confetti 🎉</ConfettiButton>
        </div>

        <ShinyButton text="Shiny Button" />
      </section>
    </main>
  );
}
