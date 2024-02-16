class Auth {
    static getResp(pref){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://192.168.0.151' + pref, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    console.log(response); // Обработка ответа
                    return response
                } else {
                    console.error('Ошибка при выполнении запроса. Статус:', xhr.status);
                    // console.error(xhr);
                }
            }
        };

        xhr.send();
    }
    static httpGet(pref)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'http://192.168.0.151' + pref, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    return JSON.parse(xmlHttp.responseText);
}
}
export default Auth;