import axios from "axios";
import React, {useEffect, useState} from "react";

const Convert = ({text, language}) => {
    const [translated, setTranslated] = useState('hhhhhh');

  useEffect(()=> {
      const doTranslation = async () => {
         const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q:text,
                target:language.value,
                key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        
        })
    
        setTranslated(data.data.translations[0].translatedText)
      }
      const timeOutId = setTimeout(() => {
        doTranslation()
      }, 1000);

      return () => {
          clearTimeout(timeOutId)
      }
   
  }, [language, text])


  return (
       <div className = "ui header">{translated}</div>
     

  )

}

export default Convert;