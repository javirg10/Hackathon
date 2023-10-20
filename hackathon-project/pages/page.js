import React from 'react';
import Image from 'next/image';


export default function Home() {

  function handleSubmit(event){
    event.preventDefault();
    console.log("submitted");
  }

  return (
    <main>
        <h1>Quiz: AI vs Human Generated Content</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Image 1</legend>
                    <div className="row">
                        <div className="col-sm-2" ><img/></div>
                        <div className="col">
                            <div className="form-check" ><input className="form-check-input" type="radio" id="formCheck-2"/><label className="form-check-label" htmlFor="formCheck-2" >Human Generated Content</label></div>
                            <div className="form-check" ><input className="form-check-input" type="radio" id="formCheck-1"/><label className="form-check-label" htmlFor="formCheck-1">AI-Generated Content</label></div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Image 2</legend>
                    <div className="row">
                        <div className="col-sm-2" ><img/></div>
                        <div className="col" >
                            <div className="form-check" ><input className="form-check-input" type="radio" id="formCheck-7"/><label className="form-check-label" htmlFor="formCheck-7" >Human Generated Content</label></div>
                            <div className="form-check" ><input className="form-check-input" type="radio" id="formCheck-8"/><label className="form-check-label" htmlFor="formCheck-8">AI-Generated Content</label></div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Image 3</legend>
                    <div className="row">
                        <div className="col-sm-2" ><img/></div>
                        <div className="col" >
                            <div className="form-check" ><input className="form-check-input" type="radio" id="formCheck-5"/><label className="form-check-label" htmlFor="formCheck-5" >Human Generated Content</label></div>
                            <div className="form-check" ><input className="form-check-input" type="radio" id="formCheck-6"/><label className="form-check-label" htmlFor="formCheck-6">AI-Generated Content</label></div>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Image 4</legend>
                    <div className="row">
                        <div className="col-sm-2" ><img/></div>
                        <div className="col" >
                            <div className="form-check" ><input className="form-check-input" type="radio" id="formCheck-3"/><label className="form-check-label" htmlFor="formCheck-3" >Human Generated Content</label></div>
                            <div className="form-check" ><input className="form-check-input" type="radio" id="formCheck-4"/><label className="form-check-label" htmlFor="formCheck-4">AI-Generated Content</label></div>
                        </div>
                    </div>
                </fieldset>
                <div className="text-center"><input className="btn btn-lg btn-primary" type="submit"/></div>
            </form>
        </div>
    </main>
  )
}
