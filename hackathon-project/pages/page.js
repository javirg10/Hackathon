import React, { useState } from 'react';
import Image from 'next/image';
/*import Image1 from '/Image1.png';
import Image2 from '/Image2.jpg';
import Image3 from '/Image3.jpeg';
import Image4 from '/Image4.png';//*/
import 'src/app/globals.css';
import { useRouter } from 'next/navigation';
import Question from 'components/question';

export default function Home() {

    const [result1, setResult1] = useState("Human");
    const [result2, setResult2] = useState("Human");
    const [result3, setResult3] = useState("Human");
    const [result4, setResult4] = useState("Human");
    const [result5, setResult5] = useState("Human");
    const [result6, setResult6] = useState("Human");
    const [result7, setResult7] = useState("Human");
    const [result8, setResult8] = useState("Human");
    const [result9, setResult9] = useState("Human");
    const [result10, setResult10] = useState("Human");
    const [result11, setResult11] = useState("Human");
    const [result12, setResult12] = useState("Human");
    const [result13, setResult13] = useState("Human");


    function verifyResults() {
        let points = 0;
        console.log("points: ", points);
        if (result1 === "AI")
            points++;
        if (result2 === "Human")
            points++;
        if (result3 === "Human")
            points++;
        if (result4 === "AI")
            points++;
        if (result5 === "AI")
            points++;
        if (result6 === "AI")
            points++;
        if (result7 === "Human")
            points++;
        if (result8 === "Human")
            points++;
        if (result9 === "AI")
            points++;
        if (result10 === "Human")
            points++;
        if (result11 === "AI")
            points++;
        if (result12 === "Human")
            points++;
        if (result13 === "AI")
            points++;

        if (points > 2)
            console.log("Code Generated");
        console.log("points: ", points);
        return points;
    }

    const router = useRouter();


    function handleSubmit(event) {
        event.preventDefault();
        console.log("submitted");
        verifyResults()
        // redirect to success page

        router.push('/submit?points=' + verifyResults());
    }

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
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center min-h-screen py-2">

                        <Question imgNo="1" imgPath="/ai-img-1.png" aiYesNo="AI" setResult={setResult1} result={result1} />

                        <Question imgNo="2" imgPath="/human-img-1.png" aiYesNo="Human" setResult={setResult2} result={result2} />

                        <Question imgNo="3" imgPath="/human-img-2.png" aiYesNo="Human" setResult={setResult3} result={result3} />

                        <Question imgNo="4" imgPath="/ai-img-2.png" aiYesNo="AI" setResult={setResult4} result={result4} />

                        <Question imgNo="5" imgPath="/ai-img-3.png" aiYesNo="AI" setResult={setResult5} result={result5} />

                        <Question imgNo="6" imgPath="/ai-img-4.png" aiYesNo="AI" setResult={setResult6} result={result6} />

                        <Question imgNo="7" imgPath="/human-img-3.png" aiYesNo="Human" setResult={setResult7} result={result7} />

                        <Question imgNo="8" imgPath="/human-img-4.png" aiYesNo="Human" setResult={setResult8} result={result8} />

                        <Question imgNo="9" imgPath="/ai-img-5.png" aiYesNo="AI" setResult={setResult9} result={result9} />

                        <Question imgNo="10" imgPath="/human-img-5.png" aiYesNo="Human" setResult={setResult10} result={result10} />

                        <Question imgNo="11" imgPath="/ai-img-6.png" aiYesNo="AI" setResult={setResult11} result={result11} />

                        <Question imgNo="12" imgPath="/human-img-6.png" aiYesNo="Human" setResult={setResult12} result={result12} />

                        <Question imgNo="13" imgPath="/ai-img-7.png" aiYesNo="AI" setResult={setResult13} result={result13} /> 

                        <button type='submit' className='btn'>Submit</button>


                    </div>
                </form>



            </div>




        </main>
    )
}
