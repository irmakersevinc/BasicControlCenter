# Basit Kontrol Merkezi

Basit Kontrol merkezi projesi içerisinde login sayfası ve login olduktan sonra açılacak olan  sayfada, cihazların harita üzerinde konumlandırıldığı ve cihaz özelliklerinin gösterildiği sayfa yer almaktadır.
Projede login sayfası için Firebase veritabanı kullanılmıştır. Cihazların map üzerinde konumlandırılması kod içerisinde static olarak verilmiştir.

Proje için kullanılan teknolojiler;
 - React Hooks
 - Firebase authantication storage
 - node.js

# Sınıflar


## App.js

**App** sınıfı içerisinde Login ve DeviceStatusMap sınıfları çağırılmaktadır. Firebase integre edilerek kullanıcının sayfaya kayıt ve giriş işlemleri metodları ve giriş yapılırken yapılan kullanıcı hatalarının kontrolü ve ekrana basılması işlemleri sağlanmaktadır.

## Login.js

Kullanıcın girdiği email ve parola ile kullanıcının sisteme giriş yaptığı kısımdır.

## DeviceStatusMap.js

Kullanıcı sisteme giriş yaptıktan sonra gelen ekrandır.. Cihazların üzerinde konumlandırıldığı bir harita açılır. Harita üzerinde bulunan cihazlara tıklandığında cihazların özellikleri için bir pencere açılır.


> **Note:** Haritanın çalıştırılabilmesi için DeviceStatusMap.js içerisinde yer alan googleMapsApiKey:  "YOUR_API_KEY"  tanımlaması gerekmektedir.![login]
![device proporties](https://user-images.githubusercontent.com/32018846/154810222-a269a271-d37f-41bf-9c82-3083dfc34abe.PNG)
![Map](https://user-images.githubusercontent.com/32018846/154810226-cbd5803a-13f7-4404-a06b-dd0b22ad156c.PNG)
