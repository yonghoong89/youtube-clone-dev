import React from 'react';
import style from './videoItem.module.css'

const numberToString = (number) => {
    const inputNumber  = number < 0 ? false : number;
    const unitWords    = ['', '만', '억', '조', '경'];
    const splitUnit    = 10000;
    const splitCount   = unitWords.length;
    const resultArray  = [];
    let resultString = '';

    for (let i = 0; i < splitCount; i++){
         let unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
        unitResult = Math.floor(unitResult);
        if (unitResult > 0){
            resultArray[i] = unitResult;
        }
    }

    for (let i = 0; i < resultArray.length; i++){
        if(!resultArray[i]) continue;
        resultString = String(resultArray[i]) + unitWords[i];
    }

    return resultString;
}

const beforeDateString = (publishedAt) => {
    //몇년 전 계산
    const nowDate = new Date();
    const videoPublishedDate = new Date(publishedAt);
    const yearDiff = nowDate.getFullYear()-videoPublishedDate.getFullYear()
    const monthDiff = nowDate.getMonth()-videoPublishedDate.getMonth()
    const dayDiff = nowDate.getDate()-videoPublishedDate.getDate()
    const hoursDiff = nowDate.getHours()-videoPublishedDate.getHours()
    const minutes = nowDate.getMinutes()-videoPublishedDate.getMinutes()
    let resultString = ''

    //년도가 차이가 있으면
    if(yearDiff>0){
        resultString = `${yearDiff}년 전`
    }else{
        if(monthDiff>0){
            resultString = `${monthDiff}개월 전`
        }else{
            if(dayDiff>0){
                resultString = `${dayDiff}일 전`
            }else{
                if(hoursDiff>0){
                    resultString = `${hoursDiff}시간 전`
                }else{
                    if(minutes>0){
                        resultString = `${minutes}분 전`
                    }
                }
            }
        }
    }

    return resultString;
}

const PlayListItem = (props) => {
    return(
        <div className={style.listitem}>
            <div className={style.box__item}>
                <a href="" className={style.link__thumnail}>
                    <div className={style.box__thumnail}>
                        <img className={style.image__thumnail} src={props.videoInfo.thumbnails.high.url} />
                    </div>
                </a>
                <div className={style.box__information}>
                    <div className={style.box__detailinformation}>
                        <a href="" className={style.link__channel}>
                            <div className={style.box__channelthumnail}>
                            </div>
                        </a>
                        <a href="" className={style.link__information}>
                            <div className={style.box__title}>
                                {props.videoInfo.title}
                            </div>
                            <div className={style.box__channel}>
                                {props.videoInfo.channelTitle}
                            </div>
                            <div className={style.box__videometa}>
                                <span className={style.text__view}>조회수 {numberToString(props.videoStatistics.viewCount)}회</span>
                                <span className={style.text__date}><span className={style.forA11y}>영상업로드 일자 : </span>{beforeDateString(props.videoInfo.publishedAt)}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayListItem;