#!/bin/bash

cd "$(dirname "$0")"

echo "Starting game at http://127.0.0.1:8000"

# open browser
open "http://127.0.0.1:8000"

# start server
python3 -m http.server 8000

read -p "Press any key to exit..."