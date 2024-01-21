import React, { useEffect, useState } from 'react';
import './Image.css'
import { useStateValue } from '../StateProvider';
import axios from 'axios';

// 1st - semi-use
// 2nd - fresh
// 3rd - used

const Image = () => {
    const [{ term }, dispatch] = useStateValue();
    const [data, setData] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://duckduckgo-image-search.p.rapidapi.com/search/image',
            params: { q: term },
            headers: {
                'X-RapidAPI-Key': '05cd15f504msh4a50603a34f16c7p16a480jsn5570fc5f5fd7' || '6d8da3e21bmsh3faa1d3b5c531f7p1ee034jsnc295d434bb91' || 'd8dce66f93mshff2a2d1ec659d5cp19694bjsn667eb9481177',
                'X-RapidAPI-Host': 'duckduckgo-image-search.p.rapidapi.com'
            }
        };

        (async () => {
            try {
                console.log('Search term:', term);

                const response = await axios.request(options);
                console.log(response.data);
                setData(response.data.results);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [term]);

    return (
        <div className='Image flex flex-col w-3'>
            <h1 className='title'>Showing results for {term}...</h1>
        <div className='flex w-3'>
            {data && <a href={data[0].url}><img src={data[0].image} alt='Loading...' style={{ height: '240px' }} /></a>}
            <div className='flex flex-col'>
                {data && <a href={data[1].url}><img src={data[1].image} alt='Loading...' style={{ height: '120px' }} /> </a>}
                {data && <a href={data[2].url}><img src={data[2].image} alt='Loading...' style={{ height: '120px' }} /> </a>}
            </div>
            <div className='flex flex-col'>
                {data && <a href={data[3].url}><img src={data[3].image} alt='Loading...' style={{ height: '80px' }} /> </a>}
                {data && <a href={data[4].url}><img src={data[4].image} alt='Loading...' style={{ height: '80px' }} /> </a>}
                {data && <a href={data[5].url}><img src={data[5].image} alt='Loading...' style={{ height: '80px' }} /> </a>}
            </div>
        </div>
    </div>
    )
};

export default Image;
