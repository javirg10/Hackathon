import React, { useState } from 'react';
import Image from 'next/image';
import 'src/app/globals.css';
import { useSearchParams } from 'next/navigation'

export default function Home() {
    const success = false;

    const searchParams = useSearchParams()
    const points = searchParams.get('points')

    if (points > 2) {
        return (
            <main style={{ position: 'relative' }} >
                <div className="flex flex-col items-center justify-center min-h-screen py-2">
                    <img
                        src="\Logo_FHJ_rgb.jpg"
                        alt="Mi Imagen"
                        height={100}
                        width={300}
                    />
                    <h1 className="text-4xl font-bold">Quiz: AI vs Human Generated Content</h1>

                    <div className="alert alert-success max-w-screen-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Good job!</span>
                    </div>                </div>
            </main>
        )
    } else {
        return (
            <main style={{ position: 'relative' }} >
                <div className="flex flex-col items-center justify-center min-h-screen py-2 " >
                    <img
                        src="\Logo_FHJ_rgb.jpg"
                        alt="Mi Imagen"
                        height={100}
                        width={300}
                    />
                    <h1 className="text-4xl font-bold">Quiz: AI vs Human Generated Content</h1>

                    <div className="alert alert-error max-w-screen-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Try again!</span>
                    </div>
                </div>
            </main>
        )

    }

}
