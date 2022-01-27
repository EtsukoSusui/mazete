import { useState, useEffect} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
const baseurl = import.meta.env.REACT_APP_API_BASE_URL;

function Top() {

    useEffect(() => {
        let register_id =  uuidv4();
      
        var data = JSON.stringify({
            "register_id":register_id
        });
        var config = {
            method: 'post',
            url: `${baseurl}/register_id`,
            headers: { 
                'Content-Type': 'application/json'
            },
                data : data,
        };
        axios(config)
        .then((response) => {
            localStorage.setItem("register_id", register_id)
        })
        .catch((error)=>{
           console.log(error)
        })
    });

    return(
        <div className="container">
            <div className="container-wrap">
                <div className="top-header">
                    <h1>マぜて</h1>
                </div>
                <div className="top-banner">
                    <img src="/assets/image/top-banner-img01.png" alt="" className="top-banner01"/>
                    <img src="/assets/image/top-banner-img02.png" alt="" className="top-banner02"/>
                    <img src="/assets/image/top-banner-img03.png" alt="" className="top-banner03"/>
                    <img src="/assets/image/top-banner-img04.png" alt="" className="top-banner04"/>
                    <div className="top-banner-text">
                        ※サービス内容伝わるイラスト外注
                    </div>
                </div>
                <a href="/select" className="start-btn">スタート</a>
                <div className="top-banner-border"></div>
                <div className="top-delusion">
                    <div className="top-delusion-title">
                        みんなの妄想
                    </div>
                    <div className="top-delusion-body">
                        <img src="/assets/image/top-delusion-img01.png" alt="" className="top-delusion-img"/>
                        <img src="/assets/image/top-delusion-img02.png" alt="" className="top-delusion-img"/>
                        <img src="/assets/image/top-delusion-img03.png" alt="" className="top-delusion-img"/>
                        <img src="/assets/image/top-delusion-img04.png" alt="" className="top-delusion-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;