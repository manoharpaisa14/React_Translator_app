import React, { useState } from 'react'

const Translator = () => {
    const [srcLanguage,setSrcLanguage] = useState('en');
    const [tgtLanguage,setTgtLanguage] = useState('es');
    const [text,setText] = useState('');
    const[translatedText,setTranslatedText] = useState('');

    const translate = async (e) => {
        e.preventDefault()
        const url = 'https://text-translator2.p.rapidapi.com/translate';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': '0f9ef7a2dbmshce3a185136f834ap1234c6jsn400711f5aaf2',
                'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                source_language: srcLanguage,
                target_language: tgtLanguage,
                text: text
            })
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.data.translatedText);
            setTranslatedText(result.data.translatedText);
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div className='container m-5 p-3  rounded border border-black shadow'>
        <h1 className='text-center'>Translator</h1>
        <form onSubmit={translate}>
            <div className="m-3">
             <label className="form-label">Text</label>
             <input type="text" className="form-control" value={text}
             onChange={(m) => setText(m.target.value)}/>
            </div>

            <div className="m-3">
             <label className="form-label">Source Language</label>
               <select className='form-select' value={srcLanguage} onChange={(m) =>
                 setSrcLanguage(m.target.value)}>
                   <option value="te">Telugu</option>
                   <option value="hi">Hindi</option>
                   <option value="en">English</option>
                   <option value="fr">French</option>
                   <option value="es">Spanish</option>
                </select>
            </div>

            <div className="m-3">
             <label className="form-label">Target Language</label>
               <select className='form-select' value={tgtLanguage} onChange={(m) =>
                 setTgtLanguage(m.target.value)}>
                    <option value="hi">Hindi</option>
                   <option value="te">Telugu</option>
                   <option value="en">English</option>
                   <option value="fr">French</option>
                   <option value="es">Spanish</option>
                </select>
            </div>

            <div className="m-3 p-3 bg-light">
             {translatedText ? <p>{translatedText}</p> : <p></p>}
            </div>

            <button type='submit' className='btn btn-success'>Translate</button>
        </form>
    </div>
  )
}

export default Translator
