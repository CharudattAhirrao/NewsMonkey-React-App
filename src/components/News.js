import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    articles = [
        {
            source: {
                id: "bbc-sport",
                name: "BBC Sport",
            },
            author: null,
            title: "Australia's Finch retires from internationals",
            description:
                "Former Australia white-ball captain Aaron Finch announces his retirement from international cricket.",
            url: "http://www.bbc.co.uk/sport/cricket/64549004",
            urlToImage:
                "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17BDC/production/_128544279_gettyimages-1436441462.jpg",
            publishedAt: "2023-02-07T00:07:21.6469504Z",
            content:
                "Aaron Finch hit 63 in his final international innings against Ireland at the 2022 Men's T20 World Cup\r\nFormer Australia white-ball captain Aaron Finch has announced his retirement from international … [+3324 chars]",
        },
        {
            source: {
                id: "espn-cric-info",
                name: "ESPN Cric Info",
            },
            author: null,
            title: "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            description:
                "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            urlToImage:
                "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            publishedAt: "2020-04-27T11:41:47Z",
            content:
                "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
        },
        {
            source: {
                id: "espn-cric-info",
                name: "ESPN Cric Info",
            },
            author: null,
            title: "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            description:
                "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            urlToImage:
                "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            publishedAt: "2020-03-30T15:26:05Z",
            content:
                "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
        },
    ];
    constructor() {
        super();
        console.log("Hello I am a constructor from News Component");
        this.state = {
            articles: this.articles,
            loading: false,
        };
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=35a149324c814405b5b4cefb07288901"
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey Top Headlines</h2>

                <div className="row">
                    {this.articles.map((news) => {
                        return (
                            <div className="col-md-4" key={news.url}>
                                <NewsItem
                                    title={news.title.slice(0, 45)}
                                    description={news.description.slice(0, 80)}
                                    imageUrl={news.urlToImage}
                                    newsUrl={news.url}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default News;
