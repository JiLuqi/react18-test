// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.

let cache = new Map();

export function fetchData(url) {
    if (!cache.has(url)) {
        console.log('设置数据')
        cache.set(url, getData(url));
    }
    console.log('拿取数据');
    console.log('ppp', cache.get(url));
    return cache.get(url);
}

async function getData(url) {
    return await getAlbums(url);
}

async function getAlbums(url) {
    // Add a fake delay to make waiting noticeable.
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(url);
        }, 3000);
    });
}
