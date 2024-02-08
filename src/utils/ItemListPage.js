
class ItemListPage{
    constructor(name, type){
        this.NAME = name;

        // 0 - лейбл+кнопка(по умолчанию)
        // 1 - лейбл+кнопка+кнопка
        if (!type) {
            this.TYPE = 0;
        }else{
            this.TYPE = type;
        }
    }
}