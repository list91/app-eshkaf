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
        console.log(responseData)
          return(responseData);
      }).catch((error) => {});
      return q;   
    }

    static async getResponse(method, params) {
      let api = this.getToken();
      this.URL = "http://192.168.0.160/zabbix/api_jsonrpc.php";
      // this.request = new XMLHttpRequest();
      const requestData = {
              jsonrpc: '2.0',
              method: method,
              params: params,
              id: 1,
              auth: api,
      };
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
                  const responseData = JSON.parse(this.request.responseText);
                  resolve(responseData);
              } else {
                  reject(`HTTP error! Status: ${this.request.status}`);
              }
          };
  
          this.request.send(JSON.stringify(requestData));
      });
    }
  
          // if (zabbixData.result && zabbixData.result.length > 0) {
          //     return zabbixData.result;
          //   } else {
          //     console.log('No data found.');
          //     return {};
          //   }
          // } catch (error) {
          //   console.error('Error:', error.message);
          // }
        // const requestData = {
        //     jsonrpc: '2.0',
        //     method: "history.get",
        //     params: {
        //       output: "extend",
        //       history: 0,
        //       itemids: id,
        //       time_from: timeFromFormat-25200,
        //       time_till: timeTillFormat-25200,
        //       sortorder: "ASC"
        //     },
        //     auth: this.API,
        //     id: 1,
        //   };
        // const authData = {
        //     jsonrpc: '2.0',
        //     method: 'user.login',
        //     params: {
        //         username: username,
        //         password: password,
        //     },
        //     id: 1,
        // };
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
        // const requestData = {
        //     jsonrpc: '2.0',
        //     method: 'item.get',
        //     params: {
        //         output: "extend",
        //         hostids: hostId
        //     },
        //     auth: this.API,
        //     id: 1
        // };
    
      async getData(url, data) {
        return new Promise((resolve, reject) => {
            // alert(this.request)
            this.request.open('POST', url, true);
            this.request.setRequestHeader('Content-Type', 'application/json');
    
            this.request.onload = () => {
                console.log(1);
                if (this.request.status === 200) {
                    const responseData = JSON.parse(this.request.responseText);
                    resolve(responseData);
                } else {
                    console.log(1);
                    reject(`HTTP error! Status: ${this.request.status}`);
                }
            };
    
            this.request.onerror = () => {
                console.log(1);
                reject("Network error");
            };
    
            this.request.send(JSON.stringify(data));
        });
    }
    

      processTableData(tableData) {
        if (!tableData || tableData.length === 0) {
          return [];
        }

        const intermediatePointsCount = 5;

        const dataPointsCount = tableData.length;

        const step = Math.floor(dataPointsCount / (intermediatePointsCount + 1));

        const intermediatePoints = [];

        for (let i = 1; i <= intermediatePointsCount; i++) {
          const index = i * step - 1;
          intermediatePoints.push(tableData[index]);
        }

        return intermediatePoints;
      }

      getCurrentDate(date) {
        const currentDate = date || new Date();

        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear().toString();
        const hour = currentDate.getHours().toString().padStart(2, '0');
        const minute = currentDate.getMinutes().toString().padStart(2, '0');
        const second = currentDate.getSeconds().toString().padStart(2, '0');

        return [day, month, year, hour, minute, second];
    }

    getSubtractDates(startDate, endDate) {
      const resultDate = new Date(
        startDate.getFullYear() - endDate[2],
        startDate.getMonth() - endDate[1],
        startDate.getDate() - endDate[0],
        startDate.getHours() - endDate[3],
        startDate.getMinutes() - endDate[4],
        startDate.getSeconds() - endDate[5]
      );
      
      return this.getCurrentDate(resultDate);
    }
        
    getStringFormatDate(list){
      return list[2] + '-'+list[1]+'-'+list[0]+'T'+list[3]+':'+list[4]+':'+list[5]+'Z';
    }
      async getItemsTimeInterval(id, timeFrom, timeTill) {
        const startDate = new Date(this.getStringFormatDate(timeFrom));
        const endDate = new Date(this.getStringFormatDate(timeTill));
        const timeFromFormat = Math.floor(startDate.getTime() / 1000);
        const timeTillFormat = Math.floor(endDate.getTime() / 1000);        
        // alert(id);
        const requestData = {
          jsonrpc: '2.0',
          method: "history.get",
          params: {
            output: "extend",
            history: 0,
            itemids: id,
            time_from: timeFromFormat-25200,
            time_till: timeTillFormat-25200,
            sortorder: "ASC"
          },
          auth: this.API,
          id: 1,
        };
        try {
          const zabbixData = await this.getData('http://192.168.0.160/zabbix/api_jsonrpc.php', requestData);
          if (zabbixData.result && zabbixData.result.length > 0) {
            return zabbixData.result;
          } else {
            console.log('No data found.');
            return {};
            
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      }
      async getItemsTypeTimeInterval(id, timeFrom, timeTill, type) {
        // console.log(timeFrom); TODO перейти на него для граф и табл
        const startDate = new Date(timeFrom[2] + '-'+timeFrom[1]+'-'+timeFrom[0]+'T'+timeFrom[3]+':'+timeFrom[4]+':'+timeFrom[5]+'Z');
        const endDate = new Date(timeTill[2] + '-'+timeTill[1]+'-'+timeTill[0]+'T'+timeTill[3]+':'+timeTill[4]+':'+timeTill[5]+'Z');
        const timeFromFormat = Math.floor(startDate.getTime() / 1000);
        const timeTillFormat = Math.floor(endDate.getTime() / 1000);        
        const requestData = {
          jsonrpc: '2.0',
          method: "history.get",
          params: {
            output: "extend",
            history: parseInt(type, 10),
            itemids: id,
            time_from: timeFromFormat-25200,
            time_till: timeTillFormat-25200,
            sortorder: "ASC"
          },
          auth: this.API,
          id: 1,
        };
        // console.log(requestData);
        try {
          // alert(1);
          const zabbixData = await this.getData('http://192.168.0.160/zabbix/api_jsonrpc.php', requestData);
          if (zabbixData.result && zabbixData.result.length > 0) {
            return zabbixData.result;
          } else {
            console.log('No data found.');
            return {};
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      }
      
      authenticateAndGetAPI(url, username, password) {
        
        this.request.open('POST', url, false);
        this.request.setRequestHeader('Content-Type', 'application/json');
      
        const authData = {
          jsonrpc: '2.0',
          method: 'user.login',
          params: {
            username: username,
            password: password,
          },
          id: 1,
        };
      
        this.request.send(JSON.stringify(authData));
      
        if (this.request.status === 200) {
          const responseData = JSON.parse(this.request.responseText);
            // (responseData);
          if (responseData.result) {
            this.API = responseData.result;
      
          } else {
            console.error('Authentication failed');
          }
        } else {
          console.error(`HTTP error! Status: ${this.request.status}`);
        }
      }

      async getAllItems(itemids) {
        const requestData = {
          jsonrpc: '2.0',
          method: "history.get",
          params: {
            output: "extend",
            history: 0,
            itemids: itemids,
            sortorder: "ASC"
          },
          auth: this.API,
          id: 1,
        };
      
        try {
          const zabbixData = await this.getData(this.URL, requestData);
          // console.log(zabbixData);
          if (zabbixData.result && zabbixData.result.length > 0) {
            // console.log(zabbixData);
            return zabbixData.result;  
          } else {
            console.log('No data found.');
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      }
      spin_yes(){
        document.getElementById("spinnerContainer").classList.remove("hidden")
      }
      spin_no(){
        document.getElementById("spinnerContainer").classList.add("hidden")
      }
      
      create_spin(){
        this.SPIN = document.createElement("div");
        this.SPIN.id = "spinnerContainer";
        this.SPIN.classList.add("spinner-container");

        let spin = document.createElement("div");
        spin.classList.add("spinner");
        this.SPIN.appendChild(spin);
      }

    
      async getItemsByHostName(name) {
    // Формируем данные запроса
    const requestData = {
        jsonrpc: '2.0',
        method: 'host.get',
        params: {
            output: ['hostid', 'host'],
            filter: {
                host: [name]
            }
        },
        auth: this.API,
        id: 1
    };
    console.log(0);
    const data = await this.getData(this.URL, requestData);
    console.log("000");
    // console.log(data);
    return this.getItemsByHostId(data.result[0].hostid)
    
}
async getItemsByHostId(hostId) {
  // Формируем данные запроса для получения элементов (items)
  const requestData = {
      jsonrpc: '2.0',
      method: 'item.get',
      params: {
          output: "extend",
          hostids: hostId
      },
      auth: this.API,
      id: 1
  };
  // console.log(requestData);
  const data = await this.getData(this.URL, requestData);
  // console.log(data);
  return data.result;
}
  
  }
export default AuthZab    