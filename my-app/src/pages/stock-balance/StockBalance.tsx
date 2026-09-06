import { NavLink } from 'react-router-dom';
import './StockBalance.css'


function StockBalance(){
    return(
        <section id="Section-StockBalance">
            <div id="Container-StockBalance-search">
                <p id="Container-StockBalance-search-title">Consultar item</p>
               <input type='text' id='StockBalance-search-input' placeholder='Codigo' />
            </div>

            <div id='List-StockBalance-Container'>
               
                
                <div id="StockBalance-list-header">
                    <p id='StockBalance-list-header-PartNumber'>Código: 123</p>
                    <p id='StockBalance-list-header-Description'>Pneu de carro Palio 2013</p>
                </div>
                
                <div id='StockBalance-status'>
                    <div id='StockBalance-status-box-conference'>
                        <p id='StockBalance-status-box-conference-title'>Total em conferencia</p>
                        <p id='StockBalance-status-box-conference-info'>50</p>
                    </div>

                    <div id='StockBalance-status-box-stock'>
                        <p id='StockBalance-status-box-stock-title'>Total em estoque</p>
                        <p id='StockBalance-status-box-stock-info'>10</p>
                    </div>
                </div>

                <div id='container-info-StockBalance-Header'>
                    <p>Deposito</p>
                    <p>Localização</p>
                    <p>Quantidade</p>
                </div>

                <div id='container-info-StockBalance-Itens'>
                    <p id='info-StockBalance-Itens'>2000</p>
                    <p id='info-StockBalance-Itens'>R01.A5</p>
                    <p id='info-StockBalance-Itens'>10</p>

                    <p id='info-StockBalance-Itens'>2000</p>
                    <p id='info-StockBalance-Itens'>R01.A5</p>
                    <p id='info-StockBalance-Itens'>10</p>

                    <p id='info-StockBalance-Itens'>2000</p>
                    <p id='info-StockBalance-Itens'>R01.A5</p>
                    <p id='info-StockBalance-Itens'>10</p>

                    <p id='info-StockBalance-Itens'>2000</p>
                    <p id='info-StockBalance-Itens'>R01.A5</p>
                    <p id='info-StockBalance-Itens'>10</p>

                    <p id='info-StockBalance-Itens'>2000</p>
                    <p id='info-StockBalance-Itens'>R01.A5</p>
                    <p id='info-StockBalance-Itens'>10</p>

                    <p id='info-StockBalance-Itens'>2000</p>
                    <p id='info-StockBalance-Itens'>R01.A5</p>
                    <p id='info-StockBalance-Itens'>10</p>
                </div>
            </div>

            <div id='container-info-total'>
            <p id='total-itens-StockBalance'>Total disponivel no estoque:</p>
            <p id='total-itens-StockBalance-info'>2000</p>
            </div>
        </section>
    
    )
}

export default StockBalance