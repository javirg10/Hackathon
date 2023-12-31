import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import 'src/app/globals.css';
import { useRouter } from 'next/navigation';
import Question from 'components/question';
import data from '../public/questions.json'

export default function Home() {

    const [result1, setResult1] = useState("Human");
    const [result2, setResult2] = useState("Human");
    const [result3, setResult3] = useState("Human");
    const [result4, setResult4] = useState("Human");
    const [result5, setResult5] = useState("Human");
    const [loading, setLoading] = useState(true)
    const [resutls, setResutls] = useState();
    /*const [result6, setResult6] = useState("Human");
    const [result7, setResult7] = useState("Human");
    const [result8, setResult8] = useState("Human");
    const [result9, setResult9] = useState("Human");
    const [result10, setResult10] = useState("Human");
    const [result11, setResult11] = useState("Human");
    const [result12, setResult12] = useState("Human");
    const [result13, setResult13] = useState("Human"); 
    //*/
    const questions = data.questions;

    useEffect(() => {
        setLoading(true)
        const fetchQuestions = async () => {
          let results = new Array();
          const numbers = generateQuestions();
          console.log(questions)
          numbers.forEach((element) => {
            console.log(questions[element])
            results.push(questions[element]);
          });
          // Set the results and mark loading as false
          console.log(results);
          setResutls(results);
          setLoading(false);
        };
    
        fetchQuestions();
    }, []);

    function generateQuestions(){
        let result = [];

        while (result.length!=5){
            let number = Math.floor(Math.random()*13);
            if(!result.includes(number)){
                result.push(number);
            }
        }
        console.log(result)
        return result;
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
        /*if (result6 === "AI")
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
            points++;//*/
        return points;
    }

    const router = useRouter();


    function handleSubmit(event) {
        event.preventDefault();
        console.log("submitted");
        sessionStorage.setItem("points", verifyResults())
        router.push('/submit');
    }

    if (loading) {
        return <div>Loading...</div>;
      }

    return (
        <main style={{ position: 'relative' }} >


            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <img
                    src="\Logo_FHJ_rgb-removebg.png"
                    alt="Mi Imagen"
                    height={100}
                    width={300}
                    style={{ display: 'inline-block' }}

                />
                <h1 className="text-4xl font-bold">Quiz: AI vs Human Generated Content</h1>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center justify-center min-h-screen py-2">

                        <Question imgNo="1" imgPath={resutls[0].imgPath} aiYesNo="AI" setResult={setResult1} result={result1} />

                        <Question imgNo="2" imgPath={resutls[1].imgPath} aiYesNo="Human" setResult={setResult2} result={result2} />

                        <Question imgNo="3" imgPath={resutls[2].imgPath} aiYesNo="Human" setResult={setResult3} result={result3} />

                        <Question imgNo="4" imgPath={resutls[3].imgPath} aiYesNo="AI" setResult={setResult4} result={result4} />

                        <Question imgNo="5" imgPath={resutls[4].imgPath} aiYesNo="AI" setResult={setResult5} result={result5} />

                        <button type='submit' className='btn'>Submit</button>

                    </div>
                </form>
            </div>
        </main>
    )
}
