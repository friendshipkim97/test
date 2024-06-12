#!/bin/bash

current_date=$(date '+%Y-%m-%d %H:%M:%S')
log_file="/root/workspace/garden/test/garden.txt"
echo "Current Date and Time: $current_date" >> $log_file
