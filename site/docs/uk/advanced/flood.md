---
prev: ./reliability.md
next: ./transformers.md
---

# Масштабування IV: дотримання лімітів

Telegram обмежує кількість повідомлень, які ваш бот може надсилати за секунду: дивіться [часті питання про ботів](https://core.telegram.org/bots/faq#my-bot-is-hitting-limits-how-do-i-avoid-this).
Ви завжди повинні стежити за тим, щоб не перевищувати ці ліміти, інакше ваш бот буде обмежений у швидкості.
Якщо ви проігноруєте ці помилки, ваш бот може бути заблокований.

## Просте рішення

:::warning Насправді, це не вирішення проблеми
Цей розділ вирішує вашу проблему в короткостроковій перспективі, але якщо ви створюєте бота, який насправді має добре масштабуватися, прочитайте [наступний підрозділ](#реальне-рішення-рекомендовано) замість цього.
:::

Існує дуже просте рішення для боротьби з лімітом швидкості: якщо запит API не вдається виконати через ліміт швидкості, просто зачекайте стільки, скільки попросить Telegram, і повторіть запит.

Якщо ви хочете це зробити, ви можете скористатися [надпростим плагіном для повторення запитів до API](../plugins/auto-retry.md).
Це [функція-перетворювач API](./transformers.md), яка робить саме це.

Однак, якщо трафік вашого бота швидко зростає, наприклад, коли його додають до великої групи, він може зіткнутися з великою кількістю помилок, що обмежують швидкість, перш ніж сплеск трафіку вщухне.
Це може призвести до блокування.
Ба більше, оскільки запити можуть виконуватися кілька разів, ваш сервер буде споживати більше оперативної памʼяті та пропускної здатності, ніж потрібно.
Замість того, щоб виправляти проблему постфактум, набагато краще поставити в чергу всі запити API і відправляти їх тільки з дозволеною швидкістю:

## Реальне рішення (рекомендовано)

grammY надає вам [плагін для обмеження запитів до API](../plugins/transformer-throttler.md), який автоматично змушує вашого бота дотримуватися всіх обмежень швидкості, ставлячи в чергу вихідні запити вашого бота.
Цей плагін так само простий у налаштуванні, але набагато краще бореться з надмірною кількістю запитів.
Насправді немає жодної вагомої причини використовувати [плагін для повторення запитів (`auto-retry`)](../plugins/auto-retry.md) замість [плагіну для обмеження запитів (`transformer-throttler`)](../plugins/transformer-throttler.md).
У деяких випадках може мати сенс використовувати обидва плагіни.