#!/bin/bash
cd "$(dirname "$0")" || exit 1
echo "Installing required packages..."
python -m pip install -r requirements.txt
echo "Creating game data..."
python bb_data_create.py
echo "Setup complete."
read -p "Press any key to continue . . ."