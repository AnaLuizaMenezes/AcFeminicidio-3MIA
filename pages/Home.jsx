import NavProjeto from '../components/NavProjeto'
import Carrosel from '../components/Carrosel'
import Mensagem from '../components/Mensagem'
import Cards from '../components/Cards'
import Cabecalho from '../components/Cabecalho'
import TextoSobre from '../components/TextoSobre'
import Cards3 from '../components/Cards3'
import Rodape from '../components/Rodape'
import Espacamento from '../components/Espacamento'

function Home() {
  return (
    <div>
     <Cabecalho/>
     <Mensagem/>
     <NavProjeto />
     <Carrosel />
     <Espacamento />
     <TextoSobre/>
      <Cards3/>
      <Espacamento />
     <Cards />
     <Espacamento />
     <Rodape />

    </div>
  )
} 
 export default Home
