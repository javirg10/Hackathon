import React, { useEffect, useState } from 'react';
import 'src/app/globals.css';

export default function Home() {
    const [points, setPoints] = useState()
    
    useEffect(() => {
        setPoints(parseInt(sessionStorage.getItem("points")) || 0);
        
    })

    
    if (points > 6) {
        if(sessionStorage.getItem("number")!=null){
            const stored= parseInt(sessionStorage.getItem("number"))
            return(
                <main style={{ position: 'relative'}}>
                <div className="flex flex-col items-center min-h-screen py-2">
                    <img
                        src="\Logo_FHJ_rgb-removebg.png"
                        alt="Mi Imagen"
                        height={100}
                        width={300}
                        style={{ marginBottom: '150px' }}
                    />
                    <h1 className="text-4xl font-bold">Quiz: AI vs Human Generated Content</h1>

                    <div className="alert alert-success max-w-screen-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Good job!</span>
                        <span>Your number is {stored}</span>
                    </div>
                </div>
            </main>
            )
        }
        const date = new Date();
        const year = date.getFullYear();
        const minuts = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        const number = Number(`${year}${minuts}${seconds}`);
        sessionStorage.setItem("number", number)
        console.log(number)
        return (
            <main style={{ position: 'relative'}}>
                <div className="flex flex-col items-center min-h-screen py-2">
                    <img
                        src="\Logo_FHJ_rgb-removebg.png"
                        alt="Mi Imagen"
                        height={100}
                        width={300}
                        style={{ marginBottom: '150px' }}
                    />
                    <h1 className="text-4xl font-bold">Quiz: AI vs Human Generated Content</h1>

                    <div className="alert alert-success max-w-screen-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Good job!</span>
                        <span>Your number is {number}</span>
                    </div>                </div>
            </main>
        )
    } else {
        return (
            <main style={{ position: 'relative' }} >
                <div className="flex flex-col items-center min-h-screen py-2 " >
                    <img
                        src="\Logo_FHJ_rgb-removebg.png"
                        alt="Mi Imagen"
                        height={100}
                        width={300}
                        style={{ marginBottom: '150px' }}
                    />
                    <h1 className="text-4xl font-bold">Quiz: AI vs Human Generated Content</h1>

                    <div className="alert alert-error max-w-screen-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Try again!</span>
                        <span>No number is given</span>
                    </div>
                </div>
            </main>
        )

    }

}
