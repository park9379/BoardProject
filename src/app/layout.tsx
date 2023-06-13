import { getServerSession } from 'next-auth'
import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from './providers'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body>
                {/* 만든 Provider로 자식 컴포넌트 감싸 모든 컴포넌트 guard를 담당합니다.*/}
                <NextAuthProvider>{children}</NextAuthProvider>
            </body>
        </html>
    )
}
