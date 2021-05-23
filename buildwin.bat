@echo off
rmdir build /S /Q

xcopy data build\data /S /Y /I
xcopy gallery build\gallery /S /Y /I
xcopy images build\images /S /Y /I
xcopy scripts build\scripts /S /Y /I
xcopy styles build\styles /S /Y /I

copy CNAME build\CNAME /Y
copy favicon.ico build\favicon.ico /Y
copy index.html build\index.html /Y

:PROMPT
SET /P PUSHTOSURGE="Push to surge (Y/[N])"?
IF /I "%PUSHTOSURGE%" NEQ "Y" GOTO END
cd build
surge
:END
PAUSE