import './App.css';
import Slideshow from './components/Slideshow.jsx';

export default function App() {
    const imageLink = "https://images.silhouette.band/"

    return (
        <>
            <div className={"homepage"}>
                <Slideshow/>
                <div className={"quickLinks"}>
                    <div className={"redirects"}>
                        <a href={"https://desktop.silhouette.band/events/"}>View Upcoming Events</a>
                        <a href={"https://desktop.silhouette.band/members/"}>Meet the Band</a>
                        <a href={"mailto:contact@silhouette.band"}>Contact Us</a>
                    </div>

                    <div className={"socials"}>
                        <a href={"https://instagram.com"}><img src={imageLink + "instagramLogo.png"}
                                                               alt={"Link to Instagram page"}/></a>

                        <a href={"https://youtube.com"}><img src={imageLink + "youtubeLogo.png"}
                                                             alt={"Link to YouTube channel"}/></a>

                        <a href={"https://facebook.com"}><img src={imageLink + "facebookLogo.png"}
                                                              alt={"Link to Facebook page"}/></a>
                    </div>
                </div>
            </div>
        </>
    )
}