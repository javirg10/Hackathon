import React, { useState } from 'react';
import Image from 'next/image';
/*import Image1 from '/Image1.png';
import Image2 from '/Image2.jpg';
import Image3 from '/Image3.jpeg';
import Image4 from '/Image4.png';//*/
//import 'src/app/globals.css';


export default function Home() {

    const [result1, setResult1] = useState("Human");
    const [result2, setResult2] = useState("Human");
    const [result3, setResult3] = useState("Human");
    const [result4, setResult4] = useState("Human");

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

    function verifyResults(){
        let points = 0;
        console.log("points: ", points);
        if(result1 === "AI")
            points++;
        if(result2 === "Human")
            points++;
        if(result3 === "Human")
            points++;
        if(result4 === "AI")
            points++;
        if (points>2)
            console.log("Code Generated");
        console.log("points: ", points);
    }


    function handleSubmit(event){
        event.preventDefault();
        console.log("submitted");
        verifyResults()
    }

    return (
        <main style={{ position: 'relative' }}>
        <img
          src="\Logo_FHJ_rgb.jpg"
          alt="Mi Imagen"
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            maxWidth: '50%',
            maxHeight: '150px'

          }}
        />
        <h1>Quiz: AI vs Human Generated Content</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Image 1</legend>
                    <div className="row">
                        <div className="col-sm-2" ><Image src={'/Image1.png'} alt='Image 1' width={400} height={200} /></div>
                        <div className="col">
                            <div className="form-check" >
                                <input className="form-check-input" 
                                type="radio" 
                                id="Human-1"
                                name="image-1" 
                                value="Human" 
                                checked={result1 === "Human"}
                                onChange={onOptionChange1}/>
                                <label className="form-check-label" htmlFor="Human-1" >Human Generated Content</label>
                            </div>
                            <div className="form-check" >
                                <input className="form-check-input" 
                                type="radio" 
                                id="AI-1" 
                                name="image-1"
                                value="AI" 
                                checked={result1 === "AI"}
                                onChange={onOptionChange1}/>
                                <label className="form-check-label" htmlFor="AI-1">AI-Generated Content</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Image 2</legend>
                    <div className="row">
                        <div className="col-sm-2" ><Image src={'/Image2.jpg'} alt='Image 2' width={400} height={230}/></div>
                        <div className="col" >
                            <div className="form-check" >
                                <input className="form-check-input" 
                                type="radio" 
                                id="Human-2" 
                                name="image-2" 
                                value="Human" 
                                checked={result2 === "Human"}
                                onChange={onOptionChange2}/>
                                <label className="form-check-label" htmlFor="Human-2" >Human Generated Content</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" 
                                type="radio" 
                                id="AI-2" 
                                name="image-2" 
                                value="AI" 
                                checked={result2 === "AI"}
                                onChange={onOptionChange2}/>
                                <label className="form-check-label" htmlFor="AI-2">AI-Generated Content</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Image 3</legend>
                    <div className="row">
                        <div className="col-sm-2" ><Image src={'/Image3.jpeg'} alt='Image 3' width={400} height={230}/></div>
                        <div className="col" >
                            <div className="form-check">
                                <input className="form-check-input" 
                                type="radio" 
                                id="Human-3" 
                                name="image-3" 
                                value="Human" 
                                checked={result3 === "Human"}
                                onChange={onOptionChange3}/>
                                <label className="form-check-label" htmlFor="Human-3" >Human Generated Content</label>
                            </div>
                            <div className="form-check" >
                                <input className="form-check-input" 
                                type="radio" 
                                id="AI-3" 
                                name="image-3" 
                                value="AI" 
                                checked={result3 === "AI"}
                                onChange={onOptionChange3}/>
                                <label className="form-check-label" htmlFor="AI-3">AI-Generated Content</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Image 4</legend>
                    <div className="row">
                        <div className="col-sm-2" ><Image src={'/Image4.png'} alt='Image 4' width={400} height={300}/></div>
                        <div className="col" >
                            <div className="form-check" >
                                <input className="form-check-input" 
                                type="radio" 
                                id="Human-4" 
                                name="image-4" 
                                value="Human" 
                                checked={result4 === "Human"}
                                onChange={onOptionChange4}/>
                                <label className="form-check-label" htmlFor="Human-4" >Human Generated Content</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" 
                                type="radio" 
                                id="AI-4" 
                                name="image-4" 
                                value="AI" 
                                checked={result4 === "AI"}
                                onChange={onOptionChange4}/>
                                <label className="form-check-label" htmlFor="AI-4">AI-Generated Content</label></div>
                        </div>
                    </div>
                </fieldset>
                <div className="text-center"><input className="btn btn-lg btn-primary" type="submit"/></div>
            </form>
        </div>
    </main>
    )
}
