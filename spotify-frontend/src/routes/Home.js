import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import { Link } from "react-router-dom";
import TextWithhoverAction from "../components/shared/TextWithhowerAction";

const focusCardsData = [
  {
    title: "Peaceful Piano",
    description: "Relax and indulge with beautiful piano pieces",
    imgUrl:
      "https://images.unsplash.com/photo-1453748866136-b1dd97284f49?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Deep Focus",
    description: "Keep calm and focus with this music",
    imgUrl:
      "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80",
  },
  {
    title: "Instrumental Study",
    description: "Focus with soft study music in the background.",
    imgUrl:
      "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Focus Flow",
    description: "Up tempo instrumental hip hop beats",
    imgUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    title: "Beats to think to",
    description: "Focus with deep techno and tech house",
    imgUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];

const spotifyPlaylistsCardData = [
  {
    title: "Hindi",
    description: "Relax and indulge with beautiful piano pieces",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1681423710886-fe39eb0f637b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "English",
    description: "Keep calm and focus with this music",
    imgUrl:
      "https://images.unsplash.com/photo-1582711012153-0ef6ef75d08f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Panjabi",
    description: "Focus with soft study music in the background.",
    imgUrl:
      "https://images.unsplash.com/photo-1553236152-72dd67ab92ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Top 50 this week",
    description: "Up tempo instrumental hip hop beats",
    imgUrl:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Top 50 this month",
    description: "Focus with deep techno and tech house",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1661718622934-04a151eb54d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SoundsOfIndiaCardData = [
    {
        title: "Mumbai",
        description: "City of dreams",
        imgUrl: "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Indore",
        description: "Clean city",
        imgUrl: "https://images.unsplash.com/photo-1427694012323-fb5e8b0c165b?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Delhi",
        description: "Capital of India",
        imgUrl: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Rajasthan",
        description: "Music from heart",
        imgUrl: "https://plus.unsplash.com/premium_photo-1661963050879-c6abd84f0261?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Kolkata",
        description: "City of joy",
        imgUrl: "https://plus.unsplash.com/premium_photo-1697730414399-3d4d9ada98bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const Home = () => {
  return (
    <div className="h-full w-full flex">
      {/* This first div will be the left panel */}
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        <div>
          {/* This div is for logo */}
          <div className="logoDiv p-6">
            <img src={spotify_logo} alt="spotify logo" width={125} />
          </div>
          <div className="py-5">
            <IconText
              iconName={"material-symbols:home"}
              displayText={"Home"}
              active
            />
            <IconText
              iconName={"material-symbols:search-rounded"}
              displayText={"Search"}
            />
            <IconText iconName={"icomoon-free:books"} displayText={"Library"} />
          </div>
          <div className="pt-5">
            <IconText
              iconName={"material-symbols:add-box"}
              displayText={"Create Playlist"}
            />
            <IconText
              iconName={"mdi:cards-heart"}
              displayText={"Liked Songs"}
            />
          </div>
        </div>
        <div className="px-5">
          <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
            <Icon icon="carbon:earth-europe-africa" />
            <div className="ml-2 text-sm font-semibold">English</div>
          </div>
        </div>
      </div>
      {/* This second div will be the right part(main content) */}
      <div className="h-full w-4/5 bg-app-black overflow-auto">
        <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
          <div className="w-1/2 flex h-full">
            <div className="w-3/5 flex justify-around items-center">
              <TextWithHover displayText={"Premium"} />
              <TextWithHover displayText={"Support"} />
              <TextWithHover displayText={"Download"} />
              <div className="h-1/2 border-r border-white"></div>
            </div>
            <div className="w-2/5 flex justify-around h-full items-center space-x-3">
              {/* <TextWithHover displayText={"Sign up"} /> */}
              {/* <div className="bg-white h-2/3 px-5 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                            <Link to="/signup">Sign up</Link>
                            </div> */}
              <TextWithhoverAction displayText={"Sign up"} root={"/signup"} />
              <div className="bg-white h-2/3 px-5 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                <Link to="/login">LOG in</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="content p-8 pt-0 overflow-auto">
          <PlaylistView titleText="Focus" cardsData={focusCardsData} />
          <PlaylistView
            titleText="Spotify Playlists"
            cardsData={spotifyPlaylistsCardData}
          />
          <PlaylistView titleText="Sound of India" cardsData={SoundsOfIndiaCardData} />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-full flex justify-between space-x-4">
        {
          // cardsData will be an array
          cardsData.map((item) => {
            return (
              <Card
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            );
          })
        }
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
      <div className="pb-4 pt-2">
        <img className="w-full rounded-md" src={imgUrl} alt="label" />
      </div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};

export default Home;
