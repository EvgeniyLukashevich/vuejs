# "Framework Vue.js" homework (vue)
## SEMINAR 5
###### Решение находится в директории `seminar5`

Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием `ProductDetails`. Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности.
- Внутри компонента `ProductDetails` создайте свойство `product` с объектом, представляющим информацию о продукте
- Объект должен иметь свойства `name`, `price` и `available`
- Используя вычисляемое свойство, назовите его `formattedPrice`, которое будет возвращать форматированную цену продукта со знаком валюты
    - Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99".
- В компоненте `ProductDetails` отобразите название продукта, его форматированную цену и статус доступности.
    - Если продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".

##

---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
