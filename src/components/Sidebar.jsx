/* eslint-disable jsx-a11y/anchor-is-valid */
import SocialNetworksContainer from "./SocialNetworksContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="div-img">
      <img src={Avatar} alt="Roberto Luna" />
      </div>
      <div className="div-content">
        <p className="title">Desenvolvedor Full Stack</p>
        <SocialNetworksContainer />
        <InformationContainer />
        <a href="#" className="btn">
          Download currículo
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;