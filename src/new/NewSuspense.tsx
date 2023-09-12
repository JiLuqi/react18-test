import {Suspense, useEffect, useState} from "react";

function MyTest(){
    const [data, setData] = useState('');

    const getData = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('123')
            }, 3000)
        })
    }
    useEffect(() => {
       getData().then((res: any) => {
           setData(res);
       })
    }, [])
    return (
      <div>
          {data}
      </div>
    )
}

export default function OldSuspense(){
    return (
      <div>
          <div>正在loading</div>
          <Suspense fallback={'loading data'}>
              <MyTest />
          </Suspense>
      </div>
    )
}
