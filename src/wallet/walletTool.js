import { useWeb3React } from "@web3-react/core";
import {injected} from './connector';
import showDialog from './../utils/showDialog'

export default function WalletTool(){
    const {active, account, library, connector, activate, deactivate} = useWeb3React();
   
    const missingTool = () => {
      showDialog(
        'error',
        'MetaMask 元件尚未安裝?',
        '瀏覽器必須安裝MetaMask才可以連結您的帳戶',
        <a href="https://metamask.io/">
          取得MetaMask元件
        </a>,
      );
    };

    async function connect(){
      try{
        if (! typeof window.ethereum) {
          missingTool();
        }else{
          await activate(injected);
        }
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