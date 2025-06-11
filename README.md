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