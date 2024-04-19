import './QuickLinks.css'
export default function QuickLinks() {
    const imgLink = "https://images.silhouette.band/";
    return (
        <div className={"linksContainer"}>
            <div>
                <ul className={"linksList"}>
                    <li><a href={"https://silhouette.band/event-info/"}>View Upcoming Events</a></li>
                    <br/>
                    <li><a href={"https://silhouette.band/band-info/"}>Get to know the Band</a></li>
                    <br/>
                    <li><a href={"mailto:contact@silhouette.band"}>Contact Us</a></li>
                </ul>
            </div>
            <div className={"socials"}>
                <a href={"https://instagram.com"}><img src={imgLink + "instagramLogo.png"}
                                                       alt={"Link to Instagram page"}/></a>
                <a href={"https://youtube.com"}><img src={imgLink + "youtubeLogo.png"} alt={"Link to YouTube channel"}/></a>
                <a href={"https://facebook.com"}><img src={imgLink + "facebookLogo.png"} alt={"Link to Facebook page"}/></a>
            </div>
        </div>
    );
}