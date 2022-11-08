/* eslint-disable jsx-a11y/anchor-is-valid */
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import Avatar from '../img/eu.jpg'

import '../styles/components/sidebar.sass'

const Siderbar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Roberto Luna" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download Curriculo</a>
    </aside>
  )
}

export default Siderbar