import {injected} from './connector';
import { useWeb3React } from "@web3-react/core";

export default function WalletTool(){
    const {active, account, library, connector, activate, deactivate} = useWeb3React();
    
    function getAccount(){
        return account;
    }
    function isActive(){
        return active;
    }
    async function connect(){
      try{
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
}