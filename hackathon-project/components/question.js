import React, { useState } from 'react';
import Image from 'next/image';


export default function Question(props) {
    const imgNo = props.imgNo;
    const imgPath = props.imgPath;
    const aiYesNo = props.aiYesNo;
    const result = props.result;
    const setResult = props.setResult;
    

    const onOptionChange = e => {
        setResult(e.target.value)
    }

    return (
        <>
        <h2 className="text-2xl font-bold ">Question {imgNo}</h2>
        <Image src={imgPath} alt={'image ' + imgNo} width={800} height={400} />
        <div>
            <input
                type="radio"
                aria-label="HUMAN"
                className="btn"
                id={"Human-" + imgNo}
                name={"image-" + imgNo}
                value="Human"
                checked={result === "Human"}
                onChange={onOptionChange} />
            <input
                type="radio"
                aria-label="AI"
                className="btn"
                id={"AI-" + imgNo}
                name={"image-" + imgNo}
                value="AI"
                checked={result === "AI"}
                onChange={onOptionChange} />
        </div>

        <div className='divider'></div>
        </>
    )
}