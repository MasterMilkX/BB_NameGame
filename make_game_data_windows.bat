@echo off
cd /d "%~dp0"
echo Installing requirements...
python -m pip install --user -r .\requirements.txt
echo Creating game data...
python .\bb_data_conv.py
echo Done!
pause