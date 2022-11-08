import Avatar from '../img/eu.jpg'

import '../styles/components/sidebar.sass'

const Siderbar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Roberto Luna" />
      <p className="title">Desenvolvedor Full Stack</p>
      <p>Redes Sociais</p>
      <p>Informações para contato</p>
      <a href="" className="btn">
        Download Curriculo</a>
    </aside>
  )
}

export default Siderbar