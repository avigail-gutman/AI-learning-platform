# AI-learning-platform
A simple platform for generating AI-based lessons by category and tracking user learning history.
# TODO: Update .env with real credentials before deployment!









<!-- # פלטפורמת למידה מונעת AI (Mini MVP)

פרויקט זה הוא MVP קטן לפלטפורמת למידה מונעת בינה מלאכותית.  
המערכת כוללת שרת Backend (Node.js/Express), מסד נתונים PostgreSQL (דרך Docker), וממשק Frontend (React).

## ⚠️ הערה חשובה לגבי Docker/WSL

עקב בעיה טכנית במחשב שלי (Windows 10, שגיאת 0x80073701), לא הצלחתי להפעיל Docker ו-WSL.  
**עם זאת, כל הקוד, קבצי הקונפיגורציה (כולל `docker-compose.yml`) ודוגמת קובץ .env מצורפים ומוכנים להרצה על כל מחשב שבו Docker/WSL פועלים תקין.**

- ה-Backend מוכן ומחובר למסד נתונים PostgreSQL דרך Docker.
- ה-Frontend מוכן וניתן להרצה מקומית.
- כל הלוגיקה העסקית, ה-API, והמודלים פותחו לפי הדרישות.
- יש תיעוד מלא והוראות התקנה.

**אם תריצו את הפרויקט על מחשב עם Docker/WSL פעילים, הכל יעבוד כמצופה.**

## איך מריצים (במחשב עם Docker/WSL)

1. שיכפול (clone) של הריפוזיטורי.
2. העתקת `.env.example` ל-`.env` והשלמת הערכים.
3. הרצת `docker-compose up -d` להפעלת מסד הנתונים.
4. הרצת ה-backend: `npm start`
5. הרצת ה-frontend: `npm start`

## טכנולוגיות

- Node.js (Express)
- PostgreSQL (דרך Docker)
- React
- OpenAI API (מוכן לאינטגרציה)
- Docker Compose

## הנחות

- הפרויקט בנוי להרצה בסביבת Docker.
- אם Docker/WSL לא זמינים, ניתן לעיין בקוד, בלוגיקה ובמבנה.

## דוגמת .env

מצורף קובץ `.env.example` עם כל משתני הסביבה הדרושים.

---

## פתרון בעיות

אם יש בעיות עם Docker/WSL ב-Windows 10, מומלץ לעיין בתיעוד של [WSL במיקרוסופט](https://docs.microsoft.com/he-il/windows/wsl/)  
או לנסות להריץ את הפרויקט על מחשב אחר.

---

## יצירת קשר

לשאלות נוספות: [your-email@example.com] -->

### אתחול הדאטהבייס (Seed)
לאחר הרמת מסד הנתונים (PostgreSQL) עם Docker, יש להריץ:
npm run seed
כדי למלא את הדאטהבייס בנתוני דוגמה.






# AI Learning Platform – Backend

פרויקט זה הוא חלק ממערכת פלטפורמת למידה מונעת AI.  
ה-backend נבנה ב-Node.js (Express) עם מסד נתונים PostgreSQL ומימוש ORM בעזרת Sequelize.

---

## מה כולל הפרויקט?

- API מלא לניהול משתמשים, קטגוריות, תתי-קטגוריות, prompts (היסטוריית למידה) ודשבורד אדמין.
- קבצי seed לאתחול הדאטהבייס בנתוני דוגמה.
- קבצי קונפיגורציה, משתני סביבה, ותיעוד מלא.
- קוד מסודר לפי best practices: הפרדה ל-routes, controllers, services, models.

---

## בעיה עם Docker והמעבר ל-PostgreSQL מקומי

בשלב הראשוני של הפרויקט, תכננתי לעבוד עם מסד נתונים PostgreSQL שרץ ב-Docker, בהתאם להוראות הפרויקט.  
**במהלך העבודה נתקלתי בבעיה טכנית חמורה ב-Docker/WSL במחשב שלי (שגיאת 0x80073701), שלא אפשרה לי להפעיל קונטיינרים של Docker כלל.**

לאחר ניסיונות תיקון רבים (כולל התקנות מחדש, תיקוני מערכת, DISM/SFC, ועוד),  
החלטתי לעבור לפתרון מעשי:  
**התקנתי את PostgreSQL ישירות על המחשב שלי** (ולא בדוקר), ועדכנתי את הגדרות הפרויקט כך שיתחברו ל-DB המקומי.

### למה זה לא פוגע בפרויקט?

- כל הקוד, קבצי הקונפיגורציה, וה-API נשארו תואמים לדרישות.
- כל מי שירצה להריץ את הפרויקט עם Docker – יוכל לעשות זאת בקלות ע"י עדכון משתנה הסביבה `DATABASE_URL`.
- המעבר ל-PostgreSQL מקומי אפשר לי להמשיך לפתח, לבדוק ולדבג את המערכת עם נתונים אמיתיים.

---

## איך מריצים את הפרויקט?

### 1. התקנת PostgreSQL

- התקיני PostgreSQL על המחשב שלך ([הורדה מהאתר הרשמי](https://www.postgresql.org/download/)).
- צרי מסד נתונים חדש בשם `ai_learning`.

### 2. הגדרת משתני סביבה

- העתיקי את הקובץ `.env.example` ל-`.env` ומלאי את הערכים:
  - `DATABASE_URL=postgres://postgres:your_password@localhost:5432/ai_learning`
  - `OPENAI_API_KEY=your_openai_api_key`
  - `PORT=5000`

### 3. התקנת תלויות והרצת השרת
cd backend npm install npm run seed   # לאתחול הדאטהבייס בנתוני דוגמה (פעם אחת) npm start


### 4. בדיקת ה-API

- השתמשי ב-Postman או בכל כלי אחר כדי לבדוק את ה-API (רשימת endpoints ב-README).

---

## איך להפעיל עם Docker (במחשב אחר)

- ניתן להפעיל את מסד הנתונים עם Docker ע"י שימוש ב-`docker-compose.yml` המצורף.
- יש לעדכן את משתנה הסביבה `DATABASE_URL` בהתאם לכתובת ה-DB בדוקר.

---

## הערות חשובות

- כל קוד ה-backend, המודלים, ה-seed, וה-API תואמים לדרישות הפרויקט.
- המעבר ל-PostgreSQL מקומי הוא פתרון זמני טכני בלבד – כל מי שיריץ את הפרויקט עם Docker יקבל תוצאה זהה.
- כל הנתונים ב-seed ניתנים לשינוי/הרחבה בקלות.

---

## שאלות? בעיות?

אם יש שאלה או בעיה – אפשר לפנות אליי במייל:  
[your-email@example.com]

בהצלחה!