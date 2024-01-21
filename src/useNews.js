import { useEffect, useState } from 'react';
import axios from 'axios';

const useNews = (term) => {
    const [data, setData] = useState(null);

    const getData = async () => {
        try {
            console.log("term in useNews:",term);
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${term}&from=2023-12-20&sortBy=publishedAt&apiKey=1943664ed24847db8af9eaa374b56567`);
            setData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        getData();
        return () => {
            // Any cleanup code to run when the component unmounts
        };
    }, [term]);

    return { data };
};

export default useNews;
