# Django + React Hybrid Starter

A modern web application boilerplate combining the robustness of Django (Backend) with the interactivity of React (Frontend).

## Features

-   **Django 4**: Powerful backend framework.
-   **React 18**: Frontend UI library.
-   **Vite**: Fast frontend tooling.
-   **Django REST Framework**: API capability.
-   **Hybrid Setup**: React integrated into Django templates.

## Getting Started

### Backend Setup

1.  **Create Virtual Environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate
    ```
2.  **Install Dependencies**:
    ```bash
    pip install -r backend/requirements.txt
    ```
3.  **Run Migrations**:
    ```bash
    cd backend
    python manage.py migrate
    ```
4.  **Start Server**:
    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1.  **Install Dependencies**:
    ```bash
    cd frontend
    npm install
    ```
2.  **Run Dev Server**:
    ```bash
    npm run dev
    ```

## Project Structure

```
├── backend/            # Django project
│   ├── api/            # API App
│   ├── config/         # Project settings
│   └── manage.py
├── frontend/           # React project
│   ├── src/
│   ├── package.json
│   └── vite.config.js
```

## Contact

Developed for Anunzio International by Anzul Aqeel.
Contact +971545822608 or +971585515742.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


---
### 🔗 Part of the "Ultimate Utility Toolkit"
This tool is part of the **[Anunzio International Utility Toolkit](https://github.com/anzulaqeel-anunzio/ultimate-utility-toolkit)**.
Check out the full collection of **180+ developer tools, scripts, and templates** in the master repository.

Developed for Anunzio International by Anzul Aqeel.
