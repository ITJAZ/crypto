import { useWeb3React } from "@web3-react/core";
import {injected} from './connector';

import {useConfirmationDialog} from './WarnLoseDialog'
export default function WalletTool(){
    const {active, account, library, connector, activate, deactivate} = useWeb3React();
    const { getConfirmation } = useConfirmationDialog();
    async function connect(){
      try{
        if (typeof window.ethereum) {
          await getConfirmation(true);
        }else{
          alert('y')
        }
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
        <a key='connect' className={`btn custom-nav-link`} onClick={connect}> Connect</a>
        :      
        <a key='disconnect' className={`btn custom-nav-link`} onClick={disConnect}> Disconnect</a>
        }
        {active ? <span> Connecter is: {account}</span> : <span>no body</span>}
      </li>
    );
}