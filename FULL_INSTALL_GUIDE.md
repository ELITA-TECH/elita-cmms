
# PEŁNA INSTRUKCJA INSTALACJI — ELITA CMMS

========================================
ETAP 1 — GITHUB
========================================

1. Wejdź:
   https://github.com

2. Załóż konto

3. Kliknij:
   New Repository

4. Nazwa repo:
   elita-cmms

5. Ustaw:
   Public

6. Create Repository

========================================
ETAP 2 — SUPABASE
========================================

1. Wejdź:
   https://supabase.com

2. Kliknij:
   Start Project

3. Nazwa:
   elita-cmms

4. Region:
   Europe West

5. Ustaw hasło bazy danych

6. Utwórz projekt

========================================
ETAP 3 — SQL
========================================

1. W Supabase:
   SQL Editor

2. New Query

3. Otwórz:
   sql/database.sql

4. Skopiuj cały kod

5. Kliknij RUN

========================================
ETAP 4 — KLUCZE API
========================================

W Supabase:

Settings
↓
API

Skopiuj:
- Project URL
- anon public key

Otwórz:
js/supabase-config.js

Wklej dane.

========================================
ETAP 5 — WRZUCENIE PLIKÓW
========================================

1. Pobierz ZIP
2. Rozpakuj
3. Wrzuć wszystkie pliki do repo GitHub

========================================
ETAP 6 — VERCEL
========================================

1. Wejdź:
   https://vercel.com

2. Login przez GitHub

3. Add New Project

4. Wybierz:
   elita-cmms

5. Kliknij:
   Deploy

========================================
GOTOWE
========================================

System będzie dostępny globalnie.

Link:
https://twoj-system.vercel.app
