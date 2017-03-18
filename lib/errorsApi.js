'use strict';

/* eslint max-len:0 */

// https://regex101.com/r/tIlqal/1
module.exports = {
  '1000': {
    message: 'Элемент URI не является идентификатором',
    description: 'Вероятнее всего вы пытаетесь обратиться к несуществующему ресурсу. Проверьте указанный вами URI, проверьте правильно ли вы указали ключевое слово сущности и полностью ли вы скопировали ID.'
  },
  '1001': {
    message: 'Не указан идентификатор метаданных',
    description: 'При обращении к пользовательскому справочнику в URI должен быть указан корректный {id} метаданных данного справочника. Его можно уточнить, сделав запрос к метаданным настроек компании companysettings/metadata в массиве customEntities.'
  },
  '1002': {
    message: 'Неопознанный путь: {путь}',
    description: 'Не удалось определить ресурс, по которому был сделан запрос. Проверьте URI по которому совершается запрос.'
  },
  '1003': {
    message: 'Отсутствуют метаданные для типа {тип}',
    description: 'Для данного ресурса нельзя получить метаданные. Ещё раз проверьте документацию по сущности данного типа и убедитесь в наличии ресурса “Метаданные <наименование_сущности>”'
  },
  '1004': {
    message: 'Ошибка при формировании результата: {текст ошибки}',
    description: 'При разборе переданного объекта произошла ошибка. Проверьте корректность переданных данных.'
  },
  '1005': {
    message: 'Неизвестный тип: {тип}',
    description: 'Тип сущности, указанный в URI, не может быть найден. Проверьте корректность ключевого слова.'
  },
  '1006': {
    message: 'Создание объектов с указанным идентификатором запрещено',
    description: 'При создании сущности не нужно указывать в URI запроса id сущности. Запрос на создание должен происходить по тому же URI, по которому происходит запрос на получение списка сущностей данного типа.'
  },
  '1007': {
    message: 'Неизвестное поле: {имя поля}',
    description: 'При обновлении сущности указанное поле не было найдено. Проверьте правильность написания имени поля, а также убедитесь что данное поле присутствует среди атрибутов сущностей этого типа.'
  },
  '1008': {
    message: 'Ошибка при загрузке объекта с типом ‘{тип}’ и идентификатором ‘{id}’',
    description: 'Не удалось загрузить сущность с данным id. Проверьте корректность id. Убедитесь что сущность с данным id присутствует среди списка сущностей данного типа (возможно сущность с данным id была удалена).'
  },
  '1009': {
    message: 'Редактирование объектов типа ‘{тип}’ не поддерживается',
    description: 'Сущность которую вы пытаетесь обновить - только для чтения. Изменение её атрибутов не предусмотрено.'
  },
  '1010': {
    message: 'Удаление объектов типа ‘{тип}’ не поддерживается',
    description: 'Нельзя удалить сущность данного типа. Проверьте, есть ли среди операций данного типа сущностей операция удаления.'
  },
  '1011': {
    message: 'Создание объектов типа ‘{тип}’ не поддерживается',
    description: 'Нельзя создать сущность данного типа. Проверьте, есть ли среди операций данного типа сущностей операция создания.'
  },
  '1012': {
    message: 'Не указан идентификатор объекта',
    description: 'Для операций обновления и удаления необходимо указывать id сущности, над которой производится операция.'
  },
  '1013': {
    message: 'Удаление вложенных объектов не поддерживается',
    description: 'Невозможно удалить вложенные сущности, такие как счета контрагентов. Если вы хотите обнулить значение поля: попробуйте передать null в качестве значения данного поля в запроса не обновление. В случае с позициями документов - вы можете передать пустой массив. Это будет эквивалентно удалению сразу всех позиций из документа.'
  },
  '1014': {
    message: 'Неверное значение ‘{значение}’ параметра фильтрации ‘{имя параметра}’',
    description: 'Вы указали значение неподдерживаемого типа для данного параметра (например передали int вместо boolean). Возможно ошибка в неправильном формате даты и времени.'
  },
  '1015': {
    message: 'Указана неверная версия в url: {url}',
    description: 'Проверьте необходимую версию API в url по которому вы делаете запрос. online.moysklad.ru/api/1.x/... Версии API различаются между собой по количеству доступных ресурсов, а также по способу обработки данных и именно поэтому являются важным элементом идентификации того или иного ресурса.'
  },
  '1016': {
    message: 'Доступ запрещен: у вас нет прав на просмотр данного объекта',
    description: 'Администратор учётной записи ограничил ваши права на просмотр сущностей данного типа. Свяжитесь с ним для выяснения подробностей.'
  },
  '1017': {
    message: 'Доступ запрещен: у вас нет прав на редактирование данного объекта',
    description: 'Администратор учётной записи ограничил ваши права на редактирование сущностей данного типа. Свяжитесь с ним для выяснения подробностей.'
  },
  '1018': {
    message: 'Доступ запрещен: у вас нет прав на удаление данного объекта',
    description: 'Администратор учётной записи ограничил ваши права на удаление сущностей данного типа. Свяжитесь с ним для выяснения подробностей.'
  },
  '1019': {
    message: 'Чтение поля ‘{имя поля}’ не поддерживается',
    description: 'Невозможно чтение поля данного типа.'
  },
  '1020': {
    message: 'Родительский объект с типом ‘{тип}’ и идентификатором ‘{id}’ не существует',
    description: 'Неверный id родительской сущности.'
  },
  '1021': {
    message: 'Объект с типом ‘{тип}’ и идентификатором ‘{id}’ не найден',
    description: 'Не удалось загрузить сущность данного типа с данным id. Проверьте корректность id. Убедитесь что сущность с данным id присутствует среди списка сущностей данного типа (возможно сущность с данным id была удалена)'
  },
  '1022': {
    message: 'Ошибка при создании объекта',
    description: 'Ошибка в процессе создания сущности данного типа.'
  },
  '1023': {
    message: 'Ошибка сохранения объекта: дочерний объект с типом ‘{тип}’ и идентификатором ‘{id}’ уже используется и не может быть удален',
    description: 'Невозможно удалить объект во вложенной коллекции т.к. он уже где-то используется. Например, может возникнуть при удалении позиции из документа, по которому есть возврат, в котором присутствует данная позиция.'
  },
  '1024': {
    message: 'Ошибка сохранения объекта: изменять стандартные объекты запрещено',
    description: 'Вы пытаетесь изменить сущность, которая создаётся по умолчанию в сервисе МойСклад сразу после регистрации учётной записи. Это делать запрещено. (Например изменение стандартных стран и единиц измерения)'
  },
  '1025': {
    message: 'Ошибка удаления объекта: удалять стандартные объекты запрещено',
    description: 'Удаление стандартных объектов, таких как стандартные единицы измерения, валюты, страны и т.п. не поддерживается.'
  },
  '1026': {
    message: 'Обновление объектов типа ‘{тип}’ не поддерживается',
    description: 'Обновление объектов указанного типа не поддерживается в JSON API.'
  },
  '1027': {
    message: 'Запрос не содержит объектов',
    description: 'Тело запросов на создание/обновление должно представляться в виде объекта либо массива JSON.'
  },
  '1028': {
    message: 'Объект уже используется и не может быть удален',
    description: 'Сущность используется где-то ещё. Поэтому её нельзя удалить. Например нельзя удалить товар, который используется в качестве позиции в каком-либо документе.'
  },
  '1029': {
    message: 'Шаблоны для типа ‘{тип}’ не поддерживаются',
    description: 'Невозможно создать предзаполненную сущность данного типа.'
  },
  '1030': {
    message: 'Поле для фильтрации ‘{имя поля}’ может быть указано только один раз',
    description: 'Убедитесь, что каждое поле используется в параметрах фильтрации лишь единожды.'
  },
  '1031': {
    message: 'Ошибка генерации шаблона: невозможно создать шаблон объекта на основе указанных полей',
    description: 'Невозможно создать предзаполненную сущность данного типа на основе другой.'
  },
  '1032': {
    message: 'Ошибка фильтрации: характеристика ‘{имя/id характеристики}’ не существует',
    description: 'У данной модификации нет характеристики с указанным id. Проверьте правильность введённого id и список характеристик для данной модификации.'
  },
  '1033': {
    message: 'Ошибка фильтрации: фильтрация по характеристикам модификаций совместима только с группировкой по модификациями',
    description: 'В отчётах при передаче значения параметра groupBy отличного от variant невозможна фильтрация по характеристикам модификаций.'
  },
  '1034': {
    message: 'Ошибка фильтрации: {текст ошибки}',
    description: 'Ошибка в процессе обработки фильтров. Проверьте переданные фильтры на валидность. Подробнее о параметрах фильтрации вы можете прочесть в соответствующем разделе документации или в документации по сущности, к которой вы пытаетесь применять фильтры.'
  },
  '1035': {
    message: 'Ошибка фильтрации: неверный формат даты параметра фильтрации',
    description: 'Проверьте значение даты и времени. Оно должно соответствовать формату yyyy-MM-dd HH:mm:ss'
  },
  '1036': {
    message: 'Ошибка при формировании метаданных',
    description: 'Внутренняя ошибка сервиса. Попробуйте повторить запрос.'
  },
  '1037': {
    message: 'Неверно указан Content-Type запроса',
    description: 'Возможно ресурс, к которому вы обращаетесь, требует form-data вместо JSON (или наоборот).'
  },
  '1038': {
    message: 'Ошибка в адресе запроса',
    description: 'Проверьте, указываете ли вы валидный адрес запроса.'
  },
  '1039': {
    message: 'Операция {HTTP метод} не поддерживается для данного ресурса',
    description: 'Проверьте метод, с которым вы обращаетесь к ресурсу. Убедитесь, что в документации ресурса этот метод описан и его можно применить.'
  },
  '1040': {
    message: 'Неверно заданы параметры запроса',
    description: 'Один или несколько параметров запроса заданы некорректно. Проверьте формат параметров согласно документации.'
  },
  '1041': {
    message: 'Неверное значение ‘{значение}’ параметра фильтрации ‘{имя параметра}’, допустимые значения: ‘{список допустимых значений}’',
    description: 'Значение параметра должно входить в список допустимых значений.'
  },
  '1043': {
    message: 'Ваш тарифный план не позволяет работать с контактными лицами',
    description: 'Ваш тариф не подходит для работы с контактными лицами.'
  },
  '1044': {
    message: 'Превышен максимальный размер запроса',
    description: 'Максимальный размер запроса 10 МБ.'
  },
  '1045': {
    message: 'Доступ запрещен: у вас нет прав на создание данного объекта',
    description: 'Администратор учётной записи ограничил ваши права на создание сущностей данного типа. Свяжитесь с ним для выяснения подробностей.'
  },
  '1046': {
    message: 'Дочерняя сущность не может изменять свою родительскую сущность',
    description: 'Возможно вы попробовали подставить позицию(и) из одного документа в другой (Попробуйте удалить meta, id, accountId из документа и позиции(й)).'
  },
  '1047': {
    message: 'Вы не можете обновить поле syncId в запросе на обновление сущности',
    description: 'Поле syncId может быть указано только при создании сущности. Его нельзя изменить в запросе на обновление.'
  },
  '1052': {
    message: 'Неверный формат UUID',
    description: 'Проверьте сгенерированные вами UUID на корректность.'
  },
  '1056': {
    message: 'Ошибка аутентификации: {текст ошибки аутентификации}',
    description: 'Проверьте указанные для аутентификации данные. Возможно для данного ресурса требуется другой вид аутентификации.'
  },
  '1058': {
    message: 'Не удалось декодировать параметры запроса из URL',
    description: 'Проверьте запрос. Вероятно, в строке присутствуют параметры, которые не были urlencoded.'
  },
  '1059': {
    message: 'Некорректный сервер в идентификаторе объекта: ‘{идентификатор}’',
    description: 'Идентификатор объекта содержит сервер, отличный от online.moysklad.ru.'
  },
  '1060': {
    message: 'Некорректный тип данных в meta сущности, поле type',
    description: 'Тип данных указанный в поле type метаданных сущности не совпадает с ожидаемым типом.'
  },
  '1061': {
    message: 'Отсутствует доступ к API для данного пользователя',
    description: 'Отсутствует доступ к API для данного пользователя - обратитесь к администратору аккаунта.'
  },
  '1999': {
    message: 'Неизвестная ошибка',
    description: 'Произошла непредвиденная ошибка. Пожалуйста, обратитесь в поддержку сервиса МойСклад подробно изложив условия при которых эта ошибка произошла.'
  },
  '2000': {
    message: 'Ошибка формата: отсутствует начало объекта',
    description: 'В данном месте ожидалось начало объекта. Проверьте тело запроса.'
  },
  '2001': {
    message: 'Ошибка формата: входящий запрос не соответствует формату JSON',
    description: 'Данные должны быть отправлены в формате JSON. Если это так, а ошибка всё-таки возникает - попробуйте добавить Header Content-Type со значением application/json.'
  },
  '2002': {
    message: 'Ошибка формата: неименованное внутреннее поле типа массив',
    description: 'Проверьте указали ли вы наименование поля типа массив. Возможно присутствуют лишние открывающиеся/закрывающиеся скобки в теле запроса.'
  },
  '2003': {
    message: 'Ошибка формата: неименованное внутреннее поле типа объект',
    description: 'Проверьте указали ли вы наименование поля типа “объект”. Возможно присутствуют лишние открывающиеся/закрывающиеся скобки в теле запроса.'
  },
  '2004': {
    message: 'Ошибка формата: вложенные массивы недопустимы',
    description: 'В рамках JSON API не обрабатываются массивы массивов. Проверьте тело запроса на корректность.'
  },
  '2005': {
    message: 'Ошибка формата: входящий JSON должен начинаться либо с объекта, либо с массива',
    description: 'Отсутствует открывающаяся фигурная/квадратная скобка в начале тела запроса.'
  },
  '2006': {
    message: 'Ошибка формата: слишком большая вложенность объектов',
    description: 'Максимальная глубина вложенности в JSON API - 10. Скорректируйте тело запроса и убедитесь, что это ограничение не нарушается.'
  },
  '2007': {
    message: 'Ошибка формата: слишком большое число вложенных объектов',
    description: 'В JSON API в массиве может содержаться не более 100 объектов.'
  },
  '2008': {
    message: 'Ошибка формата: запрос на шаблон не должен содержать массив',
    description: 'С помощью запроса по ресурсу {entity_name}/new можно создать только 1 шаблон. Передача массива значений не поддерживается.'
  },
  '2009': {
    message: 'Ошибка формата: запрос на создание/обновление одной сущности не должен содержать массив',
    description: 'При обновлении отдельной сущности подразумевается, что в теле запроса будет передано её новое представление (одно). В теле запроса должен быть один корневой объект.'
  },
  '2010': {
    message: 'Ошибка формата: отсутствует href для meta поля ‘{доп. сообщение}’',
    description: 'В переданном объекте метаданных отсутствует поле href. Проверьте тело запроса.'
  },
  '2011': {
    message: 'Ошибка формата: отсутствует type для meta поля ‘{доп. сообщение}’',
    description: 'В переданном объекте метаданных отсутствует поле type. Проверьте тело запроса.'
  },
  '2012': {
    message: 'Ошибка формата: неизвестный type для meta поля ‘{доп. сообщение}’',
    description: 'В переданном объекте метаданных указан неизвестный тип. Проверьте тело запроса. Возможно вы указываете неверное ключевое слово для сущности. Проверьте документацию по данной сущности и убедитесь в правильности передаваемого type.'
  },
  '2013': {
    message: 'Ошибка формата: неправильное значение href для meta поля ‘{доп. сообщение}’',
    description: 'Переданный href указывает на несуществующий объект. Убедитесь в корректности ссылки. Ошибка может быть в версии API, типе ресурса (entity/pos/report), ключевом слове сущности/(отчёта), id сущности.'
  },
  '2014': {
    message: 'Ошибка формата: отсутствует meta для поля ‘{имя поля}’',
    description: 'Для полей типа метаданных (ссылок на другие связанные объекты) необходимо значение в виде объекта, содержащего meta.'
  },
  '2015': {
    message: 'Ошибка формата: отсутствует id для поля ‘{имя поля}’',
    description: 'При передаче вложенных сущностей в виде полей необходимо указывать id этих сущностей.'
  },
  '2016': {
    message: 'Ошибка формата: значение поля ‘{имя поля}’ не соответствует типу {тип поля}',
    description: 'Для указанного поле передано значение неверного типа. Исправьте тело запроса.'
  },
  '2017': {
    message: 'Ошибка формата: неизвестная ошибка',
    description: 'Не удалось однозначно классифицировать ошибку. Убедитесь что формат передаваемых вами данных соответствует требуемому. Посмотрите примеры запросов в документации по используемой вами сущности.'
  },
  '2018': {
    message: 'Ошибка формата: отсутствует поле для meta',
    description: 'Вы не указали обязательное поле объекта meta.'
  },
  '2021': {
    message: 'Ошибка формата: в объектах типа ‘<тип>’ полю ‘<наименование поля>’ не может быть присвоен объект типа <тип объекта>',
    description: 'Для сущностей данного типа у указанного поля не может быть выставлено указанное значение. Например, нельзя полю agent отгрузки выставить значение типа employee, тогда как тому же полю входящего платежа можно выставить значение типа employee.'
  },
  '3000': {
    message: 'Ошибка сохранения объекта: поле ‘{имя поля}’ не может быть пустым или отсутствовать',
    description: 'Необходимое поле не может содержать пустого значения или отсутствовать. Все необходимые поля можно посмотреть в документации по сущности, с которой вы работаете, под заголовком “Атрибуты сущности”. Такие поля помечены как Необходимое.'
  },
  '3001': {
    message: 'Ошибка сохранения объекта: поле ‘{имя поля}’ не может быть изменено',
    description: 'Вы пытаетесь изменить поле являющееся полем только для чтения. Все read-only поля можно посмотреть в документации по сущности, с которой вы работаете, под заголовком “Атрибуты сущности”. Такие поля помечены как Только для чтения.'
  },
  '3002': {
    message: 'Ошибка сохранения объекта: поле ‘{имя поля}’ не может иметь отрицательное значение',
    description: 'Данное поле принимает только числовые значения больше либо равные нулю.'
  },
  '3003': {
    message: 'Ошибка сохранения объекта: поле ‘{имя поля}’ должно быть больше нуля',
    description: 'Данное поле принимает только числовые значения больше нуля.'
  },
  '3004': {
    message: 'Ошибка сохранения объекта: поле ‘{имя поля}’ не соответствует полю связанного объекта',
    description: 'Поле возврата не соответствует полю документа-основания. Невозможно изменить значения полей agent, currency, vatIncluded в возвратах на несоответствующие значениям этих же полей в документе-основании.'
  },
  '3005': {
    message: 'Ошибка сохранения объекта: неверное значение ‘{значение}’ поля ‘{имя поля}’. Допустимые значения: {список значений}',
    description: 'Вы пытаетесь присвоить несуществующее значение полю типа “перечисление”(enum). Проверить все возможные значения этого поля вы можете в документации по данной сущности в разделе “Атрибуты сущности”.'
  },
  '3006': {
    message: 'Ошибка сохранения объекта: нарушено ограничение уникальности параметра ‘{имя параметра}’',
    description: 'У указанного поля/параметра должно быть уникальное значение в системе. Например, если включена проверка на уникальность номеров операций, name у разных документов не может быть одинаковым.'
  },
  '3007': {
    message: 'Ошибка валидации сохраняемого объекта: ‘{объект}’',
    description: 'Ошибка при обмене. Проверьте, соблюдает ли все условия передаваемый вами объект.'
  },
  '3008': {
    message: 'Ошибка сохранения объекта: значение поля ‘{имя поля}’ превышает максимально допустимое значение',
    description: 'Значение числового поля превышает максимально допустимое значение: 10 000 000 000.'
  },
  '4000': {
    message: 'Указанная точка продаж не активна',
    description: 'Для выполнения операции необходимо активировать точку продаж.'
  },
  '5000': {
    message: 'Неверный тип договора для отчёта комиссионера. Могут быть использованы только договоры типа ‘Договор комиссии’(Comission).',
    description: 'При создании / обновлении отчёта комиссионера обязательно указывать договор, который принадлежащит указанному контрагенту и имеет тип ‘Договор комиссии’.'
  },
  '5001': {
    message: 'Неверно указан период отчёта комиссионера: конец периода не может быть раньше начала.',
    description: 'Проверьте указанные даты. Дата в поле commissionPeriodStart должна быть раньше даты в поле commissionPeriodEnd.'
  },
  '5002': {
    message: 'Указанный договор заключен с контрагентом, отличным от указанного в поле agent',
    description: 'При создании / обновлении отчёта комиссионера обязательно указывать договор, который принадлежащит указанному контрагенту и имеет тип ‘Договор комиссии’.'
  },
  '5003': {
    message: 'Указанный договор заключен с юрлицом, отличным от указанного в поле organization',
    description: 'Организация должна соответствовать организации, указанной в договоре.'
  },
  '10000': {
    message: 'Ошибка сохранения характеристики модификации: поля ‘id’ и ‘name’ не могут быть пустыми',
    description: 'При обновлении характеристик модификации необходимо указывать вышеуказанные поля. Исправьте тело запроса.'
  },
  '10001': {
    message: 'Ошибка сохранения характеристики модификации: поле ‘id’ ссылается на несуществующую характеристику',
    description: 'По переданному id не удалось найти соответствующую характеристику. Убедитесь в правильности id и повторите запрос.'
  },
  '11000': {
    message: 'Ошибка инициализации статуса: отсутствует информация о родительской сущности',
    description: 'Не удалось найти документ, к которому должен быть привязан данный статус. Проверьте id документа, а также, в случае обновления, убедитесь, что документ с данным id не был удалён.'
  },
  '11001': {
    message: 'Ошибка инициализации статуса: статус с именем ‘{Наименование статуса}’ не найден',
    description: 'Проверьте в метаданных сущностей данного типа, что статус с передаваемым именем существует, и исправьте запрос.'
  },
  '12000': {
    message: 'Ошибка открытия розничной смены: розничная смена находится в корзине',
    description: 'Данный syncId уже был использован для открытия другой смены. Данная смена уже была удалена. Для открытия новой смены сгенерируйте новый syncId.'
  },
  '12001': {
    message: 'Ошибка открытия розничной смены: розничная смена закрыта',
    description: 'Данный syncId уже был использован для открытия другой смены. Данная смена уже была закрыта. Переоткрыть её невозможно. Для открытия новой смены сгенерируйте новый syncId.'
  },
  '12002': {
    message: 'Ошибка закрытия розничной смены: розничная смена удалена',
    description: 'По переданному id смены не было найдено соответствующего объекта. Смена с данным id либо не существовала, либо была удалена. Проверьте правильность переданного id смены.'
  },
  '12003': {
    message: 'Ошибка закрытия розничной смены: розничная смена находится в корзине',
    description: 'Смена с указанным id находится в корзине. Проверьте правильность указанного вами id смены.'
  },
  '12004': {
    message: 'Ошибка закрытия розничной смены: розничная смена закрыта',
    description: 'Смена с указанным id находится уже была закрыта. Повторное закрытие смены невозможно. Проверьте правильность указанного вами id смены.'
  },
  '12005': {
    message: 'Ошибка открытия розничной смены: не найдена точка продаж',
    description: 'При открытии смены не была найдена точка продаж с указанным id. Проверьте id точки продаж, на которой должна быть открыта новая смена.'
  },
  '12006': {
    message: 'Ошибка открытия розничной смены: параметр ‘retailShift’ отсутствует или имеет неверный формат',
    description: 'Убедитесь в наличии параметра ‘retailShift’.'
  },
  '13000': {
    message: 'Пустой идентификатор операции',
    description: 'Вы запросили отчёт Остатки по операции, не указав id операции. Убедитесь что id передаётся в качестве параметра.'
  },
  '13001': {
    message: 'Операция с указанным идентификатором не найдена',
    description: 'Не удалось найти операцию с указанным operation.id. Проверьте передаваемый вами id, а также убедитесь что операция с данным id не была удалена.'
  },
  '13002': {
    message: 'Операция не может быть выполнена для указанного типа ‘{тип документа}’ документа',
    description: 'Отчёт Остатки по операциям доступен только для операций типа Отгрузка, Розничная продажа, Заказ покупателя.'
  },
  '13003': {
    message: 'Отсутствует доступ к отчету Остатки',
    description: 'У пользователя отсутствует доступ к отчету Остатки.'
  },
  '14000': {
    message: 'Ошибка сохранения дополнительного поля: поле ‘{наименование поля}’ не относится к реестру ‘{тип сущности}’',
    description: 'В своём запросе пытаетесь использовать доп.поля другого типа сущности. Сделайте запрос метаданных по данному типу сущности и используйте доп. поля которые придут в ответ.'
  },
  '14001': {
    message: 'Ошибка сохранения дополнительного поля: обновление дополнительных полей типа ‘Файл’ не поддерживается',
    description: 'Поле типа файл обновить нельзя.'
  },
  '14002': {
    message: 'Ошибка сохранения дополнительного поля: родительская сущность не поддерживает дополнительные поля',
    description: 'Сущности данного типа не могут иметь доп. полей. Уточнить список типов сущностей, которые могут иметь доп. поля можно в разделе Работа с дополнительными полями'
  },
  '14003': {
    message: 'Ошибка сохранения дополнительного поля: идентификатор метаданных указывает на несуществующий объект',
    description: 'Не удалось найти доп поле с указанным id. Проверьте список доп полей и их id с помощью ресурса метаданных сущности.'
  },
  '14004': {
    message: 'Ошибка сохранения дополнительного поля: для объекта типа ‘пользовательский справочник’ необходимо указать поле meta или name',
    description: 'Хотя бы одно из вышеуказанных полей не должно быть пустым.'
  },
  '15000': {
    message: 'Ошибка сохранения модификации: модификация с данным набором характеристик уже существует для данного товара',
    description: 'Невозможно иметь 2 модификации товара, у которых наборы значений характеристик будут совпадать. Убедитесь что это условие не нарушается. Иначе: используйте уже существующую модификацию.'
  },
  '15001': {
    message: 'Ошибка сохранения модификации: должны быть заданы характеристики',
    description: 'При создании/обновлении модификации переданный массив характеристик не может отсутствовать или быть пустым.'
  },
  '15002': {
    message: 'Ошибка сохранения модификации: нельзя создать модификацию услуги',
    description: 'Поддерживаются только модификации товаров. Убедитесь в правильности URI по которому происходит запрос.'
  },
  '15003': {
    message: 'Ошибка сохранения модификации: нельзя создать модификацию алкогольного товара',
    description: 'Поддерживаются только модификации обычных товаров. Убедитесь в правильности URI по которому происходит запрос.'
  },
  '15004': {
    message: 'Ваш тарифный план не позволяет работать с модификациями',
    description: 'Работа с модификациями не поддерживается на тарифах Бесплатный и Индивидуальный.'
  },
  '16000': {
    message: 'Ошибка сохранения товара: свойства алкогольной продукции не могут быть отрицательными',
    description: 'Алкогольные поля “код алкогольной продукции”, “крепость” и “объём” должны принимать значение строго большее 0.'
  },
  '16001': {
    message: 'Ошибка сохранения товара: весовой товар не может использовать учет по серийным номерам',
    description: 'Товар не может одновременно быть весовым и использовать учёт по серийным номерам. Это - взаимоисключающие признаки.'
  },
  '16002': {
    message: 'Ошибка сохранения товара: нельзя отключить серийный учёт',
    description: 'Если серийный учет однажды включен, то его уже нельзя отключить. В ином случае вы можете создать новый товар.'
  },
  '16003': {
    message: 'Ошибка сохранения товара: у изображения отсутствует контент',
    description: 'При передаче изображение в составе товара в запросе на создание товара необходимо указывать поле content'
  },
  '16004': {
    message: 'Ошибка сохранения товара: невозможно преобразовать поле content в изображение',
    description: 'Содержимым поля “content” должно быть изображение закодированное в формате base64 с расширением jpg или png.'
  },
  '16005': {
    message: 'Ошибка сохранения товара: Недостаточно места в хранилище.',
    description: 'Место в хранилище, выделенное для вашей учётной записи закончилось.'
  },
  '16006': {
    message: 'Ошибка сохранения товара: размер изображения превышает максимально допустимый(3 мб)',
    description: 'Попробуйте уменьшить размер изображения.'
  },
  '16007': {
    message: 'Ошибка сохранения товара: у изображения отсутствует имя файла',
    description: 'При загрузки изображения необходимо указать непустое имя файла в поле filename.'
  },
  '17000': {
    message: 'Ошибка сохранения документа: счет организации не принадлежит указанной организации',
    description: 'Убедитесь что вы указываете подходящий счёт. Если вы обновляете поле organization вместе с ним также должно обновляться поле organizationAccount.'
  },
  '17001': {
    message: 'Ошибка сохранения документа: счет контрагента не принадлежит указанному контрагенту',
    description: 'Убедитесь что вы указываете подходящий счёт. Если вы обновляете поле agent вместе с ним также должно обновляться поле agentAccount.'
  },
  '17002': {
    message: 'Ошибка сохранения позиции документа: серийный номер не может быть пустым',
    description: 'Серийный номер не может быть пустой строкой.'
  },
  '17003': {
    message: 'Ошибка сохранения позиции документа: количество зарезервированных товаров не может превышать общее количество',
    description: 'Количество зарезервированного товара позиции документа не может превышать общее количество товара по документу.'
  },
  '17004': {
    message: 'Ошибка сохранения позиции документа: количество товаров в ожидании не может превышать общее количество',
    description: 'Количество ожидаемого товара позиции документа не может превышать общее количество товара по документу.'
  },
  '17005': {
    message: 'Ошибка сохранения связанного документа: отсутствует ссылка на документ-основание',
    description: 'При сохранении связанного документа необходима ссылка на документ-основание (например при сохранении возврата необходима ссылка на продажу).'
  },
  '17006': {
    message: 'Ошибка сохранения связанного документа: несовместимые типы документов - ‘<тип1>’ и ‘<тип2>’',
    description: 'В качестве связи вы указали документ несоответствующего типа.'
  },
  '17007': {
    message: 'Ошибка сохранения позиции документа: НДС не может быть больше 100',
    description: 'Процент НДС может принимать значения от 0 до 100.'
  },
  '17008': {
    message: 'Ошибка сохранения позиции документа: скидка не может быть больше 100',
    description: 'Процент скидки может принимать значения от 0 до 100.'
  },
  '17009': {
    message: 'Ошибка сохранения документа: дата ‘{тип документа}’ не попадает в открытый для редактирования период',
    description: 'Данный документ относится к закрытому периоду. Редактирование документа невозможно.'
  },
  '17010': {
    message: 'Ошибка сохранения документа: вы не можете проводить документы со складом-приемником из другого отдела',
    description: 'В метаданных документа запрещено проводить документы со складом-приемником из другого отдела.'
  },
  '17011': {
    message: 'Ошибка сохранения документа: вы не можете проводить документы со складом-источником из другого отдела',
    description: 'В метаданных документа запрещено проводить документы со складом-источником из другого отдела.'
  },
  '17012': {
    message: 'Ошибка сохранения документа: вы не можете сохранять документы со складом-приемником из другого отдела',
    description: 'В метаданных документа запрещено сохранять документы со складом-приемником из другого отдела.'
  },
  '17013': {
    message: 'Ошибка сохранения документа: вы не можете сохранять документы со складом-источником из другого отдела',
    description: 'В метаданных документа запрещено сохранять документы со складом-источником из другого отдела.'
  },
  '17014': {
    message: 'Ошибка сохранения документа: вы не можете снять проведение у документа типа <тип>, по которому был проведен возврат',
    description: 'Нельзя снять проведение у данного документа, поскольку для него уже был проведен возврат.'
  },
  '18000': {
    message: 'Ошибка сохранения продажи: сумма ‘cashSum’ и ‘noCashSum’ не соответствует сумме по документу',
    description: 'Сумма полей cashSum и noCashSum должна быть равна значению поля sum. В случае создания документа и указании вышеупомянутых полей в теле запроса, ответственность за подсчёт sum ложится на пользователя. sum считается как общая сумма по всем позициям документа.'
  },
  '19000': {
    message: 'Ошибка сохранения возврата: розничная смена уже закрыта',
    description: 'Нельзя сохранить возврат в закрытую розничную смену. Убедитесь что используете идентификатор активной смены.'
  },
  '20000': {
    message: 'Ошибка сохранения приемки: нельзя указать накладные расходы с договором комиссии',
    description: 'Если к приёмке привязан договор типа “Договор комиссии”, то нельзя указать какое-либо значение в поле overhead.'
  },
  '21000': {
    message: 'Ошибка сохранения перемещения: нельзя провести перемещение со склада на этот же склад',
    description: 'Убедитесь, что в полях sourceStore и targetStore указываете склады с разными идентификаторами.'
  },
  '22000': {
    message: 'Ошибка сохранения платежа: распределенная сумма превышает сумму платежа',
    description: 'Сумма, указанная в linkedSum больше чем sum платежа.'
  },
  '22001': {
    message: 'Ошибка сохранения платежа: платеж содержит повторяющиеся привязанные документы',
    description: 'Вы пытаетесь привязать платеж к документу более одного раза.'
  },
  '22002': {
    message: 'Ошибка сохранения платежа: некорректная статья расходов: ‘{категория расходов}’',
    description: 'Платежу нельзя присвоить данную статью расходов.'
  },
  '23000': {
    message: 'Ошибка сохранения группы: нельзя указывать в качестве родительской группы саму группу',
    description: 'Группа не может в качестве родительской ссылаться на саму себя.'
  },
  '23001': {
    message: 'Ошибка сохранения группы: нельзя указывать в качестве родительской группы вложенную группу',
    description: 'Группа не может в качестве родительской группы ссылаться на группу, которая является ее дочерней группой.'
  },
  '24001': {
    message: 'Ошибка создания шаблона списания: инвентаризация не требует проведения списания',
    description: 'Инвентаризация не содержит недостачи, либо все необходимые списания уже созданы.'
  },
  '24002': {
    message: 'Ошибка создания шаблона оприходования: инвентаризация не требует проведения оприходования',
    description: 'Инвентаризация не содержит избытка, либо все необходимые оприходования уже созданы.'
  },
  '24003': {
    message: 'Ошибка сохранения инвентаризации: услуга не может быть позицией инвентаризации',
    description: 'Услуга не может быть позицией инвентаризации.'
  },
  '25001': {
    message: 'Ошибка сохранения технологической операции: позиции операции не соответствуют позициям тех. карты',
    description: 'Проверьте соответствие продуктов и материалов тех. операции и тех. карты.'
  },
  '25002': {
    message: 'Ошибка сохранения технологической операции: состав позиций не может быть изменён',
    description: 'Состав продуктов и материалов тех. операции не может быть изменён.'
  },
  '26001': {
    message: 'Ошибка сохранения заказа на производство: материалы заказа не соответствуют материалам тех. карты',
    description: 'Проверьте соответствие материалов заказа на производство и тех. карты.'
  },
  '26002': {
    message: 'Ошибка сохранения заказа на производство: новые товары не могут быть добавлены в заказ',
    description: 'Проверьте заказ на наличие новых товаров.'
  },
  '27000': {
    message: 'Ошибка сохранения описания таблицы, ‘{описание ошибки}’',
    description: 'На создание таблицы Прайс-листа налагаются следующие ограничения: для описанного столбца не может отсутствовать или быть пустым название, в пределах одного Прайс-листа столбцы должны быть уникальные по названию.'
  },
  '27001': {
    message: 'Ошибка сохранения позиции, для указанного имени столбца не найден столбец в описании таблицы',
    description: 'Значение ячеек в позициях Прайс-листа соотносятся со столбцами по названию. Нельзя указывать для ячейки название несуществующих в определении Прайс-листа столбцов.'
  },
  '27002': {
    message: 'Ошибка сохранения позиции, нельзя в прайс-листе указывать повторяющиеся позиции',
    description: 'Нельзя в прайс-листе указывать повторящиеся позиции, например, товар или его модификацию дважды.'
  },
  '27003': {
    message: 'Ошибка сохранения позиции, нельзя в прайс-листе указывать серии',
    description: 'Нельзя в прайс-листе указывать серии, только товары, услуги и модификации.'
  },
  // TODO Дублируется код ошибки
  '27000?': {
    message: 'Ошибка сохранения контрагента: неизвестный тип цены: ‘<Тип цены>’',
    description: 'Неизвестный тип цены. Список допустимых можно запросить в метаданных товаров.'
  },
  '30000': {
    message: 'Ошибка сохранения webhook: неподдерживаемый тип сущности ‘{тип}’',
    description: 'В веб-хуках можно использовать любые типы сущностей, доступные через Remap API, кроме вложенных. Например, product или demand.'
  },
  '30001': {
    message: 'Ошибка сохранения webhook: неизвестный HTTP-метод ‘{метод}’. Допустимый: POST',
    description: 'В веб-хуках можно указывать только поддерживаемые HTTP методы. Допустимым сейчас является POST.'
  },
  '30002': {
    message: 'Ошибка сохранения webhook: неизвестное действие ‘{действие}’. Допустимые: CREATE, UPDATE, DELETE',
    description: 'В веб-хуках можно указывать только доступные действия: CREATE, UPDATE, DELETE.'
  },
  '30003': {
    message: 'Ошибка сохранения webhook: webhook с данным набором параметров уже существует',
    description: 'В веб-хуках на пару (сущность, действие) может быть установлен только один веб-хук.'
  },
  '30004': {
    message: 'Необходимы права администратора для работы с webhook',
    description: 'Управление веб-хуками доступно только пользователям с правами администратора.'
  },
  '30005': {
    message: 'Ошибка сохранения webhook: значение поля url не является корректным адресом запроса',
    description: 'Значение поля url не является корректным адресом запроса. Проверьте адрес запроса на соответствие формату http, https адреса запроса.'
  },
  '30006': {
    message: 'Ваш тарифный план не позволяет работать с веб-хуками',
    description: 'Веб-хуки доступны на всех тарифах кроме бесплатного.'
  },
  '31000': {
    message: 'Валюту учета нельзя удалить',
    description: 'Валюту учета нельзя удалить.'
  }
};
//# sourceMappingURL=errorsApi.js.map