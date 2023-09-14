import React, { useEffect, useState, useTransition } from 'react';
interface Props {
  keyword: string;
}
function getWords(keyword:string){
  const words = new Array(10000).fill(0).map((_,index:number)=>keyword+index);
  return Promise.resolve(words);
}
function Suggestions(props: Props) {
  const [words, setWords] = useState<Array<string>>([]);
  const [isPending, startTransition] = useTransition();
  useEffect(()=>{
    getWords(props.keyword).then((words:Array<string>)=>{
      //开启渐变更新 本质就是低优先级的更新
      startTransition(()=>setWords(words));
    });
  },[props.keyword]);
  return (
    <div>
      {
        isPending? <p>正在渲染</p> :
          <ul>
            {
              words.map((word: string) => <li key={word}>{word}</li>)
            }
          </ul>
      }
    </div>
  )
}
export default function NewStartTransition() {
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
