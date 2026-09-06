import './conference.css'


function Conference(){
    return(
        <section id='Section-Conference'>
            <div id="Container-Conference-Bip">
                <div id='Container-PartNumber-conference-search'>
                    <p id='Info-PartNumber-conference-search'>Procurar codigo</p>
                    <input id='PartNumber-conference-search' placeholder='Codigo'/>
                </div>
            </div>
                

            <p id='Title-List-Pendentes-Conference'>Lista de itens pendentes de conferencia</p>
            <div id='List-Conference-Container'>
               
                
                <div id="conference-list-header">
                    <p>Código</p>
                    <p>Descrição</p>
                    <p>Quantidade</p>
                </div>

              
                <div id="conference-list-item">
                    <p>123</p>
                    <p>Pneu de carro Palio 2013</p>
                    <p>123</p>
                </div>

      
                <div id="conference-list-item">
                    <p>456</p>
                    <p>Filtro de óleo</p>
                    <p>50</p>
                </div>

             
                <div id="conference-list-item">
                    <p>789</p>
                    <p>Correia dentada</p>
                    <p>25</p>
                </div>
               
            </div>
        </section>
    
    )
}

export default Conference