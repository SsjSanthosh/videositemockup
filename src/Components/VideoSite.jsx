import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import UploaderContent from "./UploaderContent";
import Subvideos from "./Subvideos";
import "./VideoSite.scss";
export default function VideoSite() {
  const lorem =
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam nemo quis tempore nesciunt numquam vitae esse vero ipsum aliquam illo.";
  const data = [
    {
      title: "Star Wars Jedi:Fallen Order Review!",
      src:
        "https://cdn.wccftech.com/wp-content/uploads/2019/11/Star-Wars-Jedi-Fallen-Order.jpg",
      desc: lorem
    },
    {
      title: "The Marvelous Mrs.Maisel is the best thing on Prime!",
      src:
        "https://i1.wp.com/www.socialnews.xyz/wp-content/uploads/2019/08/19/the-marvelous-mrs-maisel-season-3-posters-.jpg?fit=1920%2C1080&quality=90&zoom=1&ssl=1",
      desc: lorem
    },
    {
      title: "Is Blade Runner 2049 the greatest sequel of all time?",
      src:
        "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2017%2F09%2Ftumblr_static_26osk19e9qck84sgcwogsw88w-1200x675.jpg",
      desc: lorem
    },
    {
      title: "Spider-Man PS4 is the gold standard in superhero games!",
      src: "https://i.ytimg.com/vi/xew1WivOfC4/maxresdefault.jpg",
      desc: lorem
    },
    {
      title: "Overwatch 2 announced! Genji wears a sweater!",
      src: "https://i.ytimg.com/vi/GKXS_YA9s7E/maxresdefault.jpg",
      desc: lorem
    },
    {
      title: "248 times everyone related to Bojack",
      src:
        "https://cdn.shopify.com/s/files/1/0043/8471/8938/products/156996225711018765_a328f837-a6e8-4429-8c94-447e2af9aed4_812x.jpg?v=1572022175",
      desc: lorem
    }
  ];
  const videos = data.map(vid => {
    return <Subvideos title={vid.title} src={vid.src} desc={vid.desc} />;
  });
  return (
    <div>
      <Navbar />

      <UploaderContent />
      <div className="Subscriptions-title">Your Subscriptions</div>
      <div className="Subvideo-parent">{videos}</div>
    </div>
  );
}
