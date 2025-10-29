@echo off
REM Simple local server using Python 3
REM Make sure Python 3 is installed and added to PATH

start /b python -m http.server 8080

echo Server is running on http://localhost:8080
echo Keep this window open to keep the server running.
echo Press Ctrl+C to stop the server.

pause
