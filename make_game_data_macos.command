#!/bin/bash
cd "$(dirname "$0")" || exit 1
echo "Installing required packages..."
python3 -m pip install -r requirements.txt
echo "Creating game data..."
python3 bb_data_conv.py
echo "Setup complete."
read -p "Press any key to continue . . ."
