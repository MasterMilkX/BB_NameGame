@echo off
cd /d "%~dp0"
echo Startin game server at http://127.0.0.1:8000...

:: Open browser
start "" http://127.0.0.1:8000

:: Start python server
python -m http.server 8000

pause
