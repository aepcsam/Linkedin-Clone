import React from 'react';
import "./Widget.css"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoOutlinedIcon />
            </div>
            {newsArticle("Elon Musk is now the richest person in the world", "Top news - 4296 readers")}
            {newsArticle("Study suggests Pfizer vaccine works against virus variant", "Top news - 3126 readers")}
            {newsArticle("YouTube Suspends Trump’s Channel for at Least Seven Days", "Top news - 2926 readers")}
            {newsArticle("EHang’s passenger-carrying drone a key step in Urban Air Mobility", "Top news - 4231 readers")}

            <img src="https://www.cpapei.ca/-/media/provinces/pei/members/images/rsz_pract_portal.png?h=532&la=en&w=803&hash=60B9EA06CF219F5E528EB0749C37A3AA98FCBA2C" alt="ad"/>
        </div>
    )
}

export default Widgets