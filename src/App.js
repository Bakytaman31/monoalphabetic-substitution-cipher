import './App.css';
import React, {useState} from "react";

const App = () => {
  let letters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', 'ң', 'ө', 'ү', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я', 'Ң', 'Ө', 'Ү'];
  let key =     ['я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'ң', 'ө', 'п', 'р', 'с', 'т', 'ү', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'н', 'о', 'у', 'Я', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Ң', 'Ө', 'П', 'Р', 'С', 'Т', 'Ү', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Н', 'О', 'У']
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");


  const changer = (e) => {
    setInput(e.target.value);
  }

const decrypt = () => {
  let text = input;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < key.length; j++) {
      if (text[i] === key[j]) {
        setAnswer((answer) => answer + letters[j])
        break
      }
       else if (text[i] === ' ' || text[i] === ',' || text[i] === ';' || text[i] === '\n') {
        setAnswer((answer) => answer + text[i])
        break
      }
    }
  }
}
  
  return (
    <div className="App">
      <textarea
       value={input}
       onChange={e => changer(e)}
       rows={20}
          cols={20}
      />
      
      <p style={{whiteSpace: "pre-wrap"}}>{input}</p>
      <button onClick={decrypt}>Decrypt</button>
      <h2 style={{whiteSpace: "pre-wrap"}}>{answer}</h2>
    </div>
  );
}

export default App;
