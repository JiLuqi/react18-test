import {Suspense} from "react";

function wrapper(promise:any) {
  let status = 'pending'
  let result:any
  let suspender = promise.then(
      (r:any) => {
        status = 'success'
        result = r
      },
      (e:any) => {
        status = 'error'
        result = e
      }
  )
  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    },
  }
}

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(123);
      resolve({
        name: 'Ayou',
        age: 18,
        vocation: 'Program Ape',
      })
    }, 3000)
  })
}

function getArticles() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Ayou',
        age: 18,
        vocation: 'Program Ape',
      })
    }, 4000)
  })
}

const userResource:any  = wrapper(getUser());
function TestUser(){
  const user = userResource.read();
  return (
    <h2>{user.name}</h2>
  )
}

const articlesResource:any  = wrapper(getArticles());
function TestArticles() {
  const user = articlesResource.read();
  return (
    <div>{user.age}</div>
  )
}

// @ts-ignore
export default function NewSuspense(){
  return (
    <div>
      <Suspense fallback={<p>Loading User...</p>}>
        <TestUser />
        <Suspense fallback={<p>Loading articles</p>}>
          <TestArticles />
        </Suspense>
      </Suspense>
    </div>
  )
}


