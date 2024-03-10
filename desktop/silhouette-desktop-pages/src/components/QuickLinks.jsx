import './QuickLinks.css'
export default function QuickLinks() {
    const imgLink = "https://images.silhouette.band/";
    return (
      <div className={"linksContainer"}>
          <div>
              <ul className={"linksList"}>
                  <a href={"https://silhouette.band/event-info/"}><li>View Upcoming Events></li></a>
                  <br/>
                  <a href={"https://silhouette.band/band-info/"}><li>Get to know the Band></li></a>
                  <br/>
                  <a href={"mailto:contact@silhouette.band"}><li>Contact Us></li></a>
              </ul>
          </div>
          <div className={"socials"}>
              <a href={"https://instagram.com"}><img src={imgLink + "instagramLogo.png"} alt={"Link to Instagram page"}/></a>
              <a href={"https://youtube.com"}><img src={imgLink + "youtubeLogo.png"} alt={"Link to YouTube channel"}/></a>
              <a href={"https://facebook.com"}><img src={imgLink + "facebookLogo.png"} alt={"Link to Facebook page"}/></a>
          </div>
      </div>
    );
}