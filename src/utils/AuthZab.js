import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"
import { withRouter } from 'react-router';
class AuthZab {
    // constructor() {
    //   this.historyMethod = "history.get";
    //   this.userMethod = "user.login";
    //   this.itemMethod = "item.get";
    //   this.hostMethod = "host.get";      
    //   this.URL = "http://194.58.94.47/zabbix/api_jsonrpc.php";
    //   this.request = new XMLHttpRequest();
    // }

    // Client_Stanislav
    // 6'E4+~B3Rvf-*wup

    // Admin
    // 4st-hT4-GYN-9rQ


    static getToken(){
      let token = Cookies.get("auth");
      if (token) {
        return token;
      } else {
        if (window.location.pathname !== '/login') {
          window.location.replace("/login")          
        }
      }
    }

    static async getAuthApi(l,p){
      let q = this.getResponse("user.login", { username: l, password: p })
      .then((responseData) => {
          return(responseData);
      }).catch((error) => {});
      // console.log(q);
      return q;   
    }

    //     params: {
        //         output: "extend",
        //         hostids: hostId
        //     },
// const requestData = {
//     jsonrpc: '2.0',
//     method: 'host.get',
//     params: {
//         output: ['hostid', 'host'],
//         filter: {
//             host: [name]
//         }
//     },
//     auth: this.API,
//     id: 1
// };

    static async getHosts(){
      let q = this.getResponse("host.get", {
        output: ["hostid", "host"]
      })
      .then((responseData) => {
          return(responseData);
      }).catch((error) => {});
      return q;   
    }
    static async getItems(hostid){
      let q = this.getResponse("item.get", {
        output: "extend",
        hostids: hostid
      })
      .then((responseData) => {
        return(responseData);
      }).catch((error) => {});
      return q;   
    }
    static async getHistory(type, id, from, to){
      let q = this.getResponse("history.get", {
        output: "extend",//["clock", "value"],
        history: type,
        itemids: id,
        time_from: from,
        time_till: to,
        sortorder: "ASC"
      })
      .then((responseData) => {
        return(responseData);
      }).catch((error) => {});
      return q;   
    }

    static async getResponse(method, params) {
      let api = this.getToken();
      // this.URL = "http://192.168.0.160/zabbix/api_jsonrpc.php";
      this.URL = "http://194.58.94.47/zabbix/api_jsonrpc.php";
      const requestData = {
        jsonrpc: '2.0',
        method: method,
        params: params,
        id: 1,
        auth: api,
      };
      console.log(requestData);
      const data = await this.getPromis(requestData, this.URL);
      return data.result;
    }
    static async getPromis(data, url) {
      return new Promise((resolve, reject) => {
        this.request = new XMLHttpRequest();
        const requestData = data;
        this.request.open('POST', url, true);
        this.request.setRequestHeader('Content-Type', 'application/json');        
        this.request.onload = () => {
          if (this.request.status === 200) {            
                  console.log("start ",this.request)
                  try {
                    const responseData = JSON.parse(this.request.responseText);
                    resolve(responseData);
                    
                  } catch (error) {
                    resolve({});
                  }
              } else {
                  reject(`HTTP error! Status: ${this.request.status}`);
              }
          };
          this.request.send(JSON.stringify(requestData));
      });
    }
  
}
  
export default AuthZab    