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

    const onOptionChange1 = e => {
        setResult1(e.target.value)
    }

    const onOptionChange2 = e => {
        setResult2(e.target.value)
    }

    const onOptionChange3 = e => {
        setResult3(e.target.value)
    }

    const onOptionChange4 = e => {
        setResult4(e.target.value)
    }

    const onOptionChange5 = e => {
        setResult5(e.target.value)
    }

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

                        <Question imgNo="1" imgPath="/Image1.png" aiYesNo="AI" setResult={setResult1} result={result1} />

                        <Question imgNo="2" imgPath="/Image2.jpg" aiYesNo="Human" setResult={setResult2} result={result2} />

                        <Question imgNo="3" imgPath="/Image3.jpeg" aiYesNo="Human" setResult={setResult3} result={result3} />

                        <Question imgNo="4" imgPath="/Image4.png" aiYesNo="AI" setResult={setResult4} result={result4} />

                        <Question imgNo="5" imgPath="/Image5.png" aiYesNo="AI" setResult={setResult5} result={result5} />

                        <Question imgNo="6" imgPath="/Image6.png" aiYesNo="AI" setResult={setResult6} result={result6} />


                        <button type='submit' className='btn'>Submit</button>


                    </div>
                </form>



            </div>




        </main>
    )
}
