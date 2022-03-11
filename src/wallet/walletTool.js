import { useWeb3React } from "@web3-react/core";
import {injected} from './connector';

export default function WalletTool(){
    const {active, account, library, connector, activate, deactivate} = useWeb3React();

    async function connect(){
      try{
        debugger;
        await activate(injected);
      }catch(ex){
        console.log(ex);
      }
    }
    function disConnect(){
      try{
         deactivate();
      }catch(ex){
        console.log(ex);
      }
    }

    return (
      <li className="nav-item">
        {! active? 
        <a key='connect' className={`btn custom-link`} onClick={connect}> Connect</a>
        :      
        <a key='disconnect' className={`btn custom-link`} onClick={disConnect}> Disconnect</a>
        }
        {active ? <span> Connecter is: {account}</span> : <span>no body</span>}
      </li>
    );
}