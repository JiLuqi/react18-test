import React, { useEffect, useState } from 'react';
interface Props {
  keyword: string;
}

let timer:any = null;
function getWords(keyword:string){
  const words = new Array(10000).fill(0).map((_,index:number)=>keyword+index);
  return Promise.resolve(words);
}
function Suggestions(props: Props) {
  const [words, setWords] = useState<Array<string>>([]);
  useEffect(()=>{
    clearTimeout(timer);
    timer = setTimeout(() => {
      getWords(props.keyword).then((words:Array<string>)=>{
        setWords(words)
      });
    }, 100);
  },[props.keyword]);
  return (
    <ul>
      {
        words.map((word: string) => <li key={word}>{word}</li>)
      }
    </ul>
  )
}
export default function OldStartTransition() {
  const [keyword, setKeyword] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }
  return (
    <div>
      关键字 <input value={keyword} onChange={handleChange} />
      <Suggestions keyword={keyword} />
    </div>
  )
}
