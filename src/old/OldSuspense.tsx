import {useEffect, useState} from "react";

export default function OldSuspense(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  })

  return (
    <div>
      <div>正在loading</div>
      {!isLoading && <div>加载结束</div>}
    </div>
  )
}
