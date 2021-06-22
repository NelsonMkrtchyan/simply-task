import {api_key} from '../constatnts/constatns'

export async function fetchData(api, setter, target) {
    const response = await fetch(api);
    response.json()
    .then(response => {
        setter(response[target]);
        return response;
    })
    .catch(err => {
        console.log(err);
    })
}

export function generateApi(
    argument,
    sources= undefined,
    q = undefined,
    from = undefined,
    to  = undefined,
    sortBy = undefined,
    country = undefined,
) {
    return `https://newsapi.org/v2/${argument}?${sources && argument==='everything' ? 'sources='+sources : ''}${q ? 'q='+q : ''}${from && to && argument==='everything'  ? 'from='+from+'to='+to : ''}${sortBy && argument==='everything'? 'sortBy='+sortBy : ''}${country && argument==='top-headlines' ? 'country='+country : ''}&apiKey=${api_key}`;
}
