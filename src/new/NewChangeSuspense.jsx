import React, {Suspense, useEffect, useState} from 'react';
import {fetchData} from '../utils/changeData.js'

function Albums({ artistId }) {

    const albums = use(fetchData(`/${artistId}/albums`));
    return (
        <div>
            {albums}
        </div>
    );


    // const [data, setData] = useState('');
    // // const [loading, setLoading] = useState(false);
    //
    // const getData = () => {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(123)
    //         }, 2000)
    //     })
    // }
    // useEffect(() => {
    //     getData().then(res => {
    //         setData(res);
    //     })
    // }, [])
    //
    // return (
    //     <div>
    //         <div>123</div>
    //         <div>{data}</div>
    //     </div>
    // )
}

// This is a workaround for a bug to get the demo running.
// TODO: replace with real implementation when the bug is fixed.
function use(promise) {
    console.log(123, promise.status === 'pending');
    if (promise.status === 'fulfilled') {
        console.log('1');
        return promise.value;
    } else if (promise.status === 'rejected') {
        throw promise.reason;
    } else if (promise.status === 'pending') {
        throw promise;
    } else {
        console.log('2');
        promise.status = 'pending';
        promise.then(
            result => {
                console.log('触发1');
                promise.status = 'fulfilled';
                promise.value = result;
            },
            reason => {
                console.log('触发2');
                promise.status = 'rejected';
                promise.reason = reason;
            },
        );
        throw promise;
    }
}
const LoadingAnimation = () => {
    return (
        <div>
            <p>Loading...</p>
        </div>
    );
};

const Test = () => {
    const [artistId, setArtistId] = useState('a')

    const handleChange = (e) => {
        setArtistId(e.target.value)
    }

    return (
        <div style={{marginLeft: 50}}>
            <div>123</div>
            <input value={artistId} onChange={handleChange}/>
            <Suspense fallback={<LoadingAnimation />}>
                <Albums artistId={artistId}/>
            </Suspense>
        </div>
    );
};


export default function NewChangeSuspense() {
    const [show, setShow] = useState(false);
    if (show) {
        return (
            <Test
                artist={{
                    id: 'the-beatles',
                    name: 'The Beatles',
                }}
            />
        );
    } else {
        return (
            <button onClick={() => setShow(true)}>
                Open The Beatles artist page
            </button>
        );
    }
}
