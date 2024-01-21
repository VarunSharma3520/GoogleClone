import React from 'react';
import { useStateValue } from "../StateProvider";
import useNews from '../useNews';
import './NewsPage.css';
import './SearchPage.css';
import { Search } from "../components/Search";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import News from '../components/News';


const NewsPage = () => {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useNews(term);
    console.log("data:", data)
    return (
        <div className='flex flex-col'>
            <div className='flex  m-12'>
                <img
                    className="searchPage__logo"
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt=""
                />
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option blue-highlight">
                                <DescriptionIcon />
                                <Link to="/news" className=''>News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="/maps">maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="/more">more</Link>
                            </div>
                        </div>

                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results (
                        {data?.searchInformation.formattedSearchTime} seconds) for{" "}
                        <strong>{term}</strong>
                    </p>

                    {data?.items.map((item) => (
                        <div className="searchPage__result">
                            <a className="searchPage__resultLink" href={item.url}>
                                {item.pagemap?.cse_image?.length > 0 &&
                                    item.pagemap?.cse_image[0]?.src && (
                                        <img
                                            className="searchPage__resultImage"
                                            src={
                                                item.pagemap?.cse_image?.length > 0 &&
                                                item.pagemap?.cse_image[0]?.src
                                            }
                                            alt=""
                                        />
                                    )}
                                {item.displayLink} ▾
                            </a>
                            <a className="searchPage__resultTitle" href={item.url}>
                                <h2>{item.title}</h2>
                            </a>

                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )} */}
            </div>
            <div className='ml-8'>
                {term && data && 
                    <div className='flex-col'>
                        <News
                            title={data[0].title}
                            body={data[0].description}
                            date={data[0].publishedAt.slice(0, 10)}
                            imageSrc={data[0].urlToImage}
                            link={data[0].url}
                        />
                        <News
                            title={data[1].title}
                            body={data[1].description}
                            date={data[1].publishedAt.slice(0, 10)}
                            imageSrc={data[1].urlToImage}
                            link={data[1].url}
                        />
                        <News
                            title={data[2].title}
                            body={data[2].description}
                            date={data[2].publishedAt.slice(0, 10)}
                            imageSrc={data[2].urlToImage}
                            link={data[2].url}
                        />
                        <News
                            title={data[3].title}
                            body={data[3].description}
                            date={data[3].publishedAt.slice(0, 10)}
                            imageSrc={data[3].urlToImage}
                            link={data[3].url}
                        />
                        <News
                            title={data[4].title}
                            body={data[4].description}
                            date={data[4].publishedAt.slice(0, 10)}
                            imageSrc={data[4].urlToImage}
                            link={data[4].url}
                        />
                        <News
                            title={data[5].title}
                            body={data[5].description}
                            date={data[5].publishedAt.slice(0, 10)}
                            imageSrc={data[5].urlToImage}
                            link={data[5].url}
                        />
                        <News
                            title={data[6].title}
                            body={data[6].description}
                            date={data[6].publishedAt.slice(0, 10)}
                            imageSrc={data[6].urlToImage}
                            link={data[6].url}
                        />
                        <News
                            title={data[7].title}
                            body={data[7].description}
                            date={data[7].publishedAt.slice(0, 10)}
                            imageSrc={data[7].urlToImage}
                            link={data[7].url}
                        />
                        <News
                            title={data[8].title}
                            body={data[8].description}
                            date={data[8].publishedAt.slice(0, 10)}
                            imageSrc={data[8].urlToImage}
                            link={data[8].url}
                        />
                        <News
                            title={data[9].title}
                            body={data[9].description}
                            date={data[9].publishedAt.slice(0, 10)}
                            imageSrc={data[9].urlToImage}
                            link={data[9].url}
                        />
                        <News
                            title={data[10].title}
                            body={data[10].description}
                            date={data[10].publishedAt.slice(0, 10)}
                            imageSrc={data[10].urlToImage}
                            link={data[10].url}
                        />
                        <News
                            title={data[11].title}
                            body={data[11].description}
                            date={data[11].publishedAt.slice(0, 10)}
                            imageSrc={data[11].urlToImage}
                            link={data[11].url}
                        />

                        <News
                            title="Wall Street hits record high following a 2-year round trip scarred by inflation"
                            body="The S&P 500 closed Friday at a record high. Some encouraging data came Friday after a preliminary report from the University of Michigan suggested the mood among U.S. consumers is roaring higher."
                            date="2024-01-20"
                            imageSrc="https://www.shawlocal.com/resizer/lcbPU1YzPuT3a22GAv98CtpFKfk=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/shawmedia/KR2KFVHPWZDO7FIKD7VXD5KFDU.jpg"
                        />
                    </div>
                } 
            </div>
        </div>
    )
}

export default NewsPage
