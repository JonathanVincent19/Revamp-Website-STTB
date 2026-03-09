Remove-Item -Path "d:\CODINGAN\WEB-STTB\FE\package.json" -Force -ErrorAction SilentlyContinue
cd "d:\CODINGAN\WEB-STTB"
npx -y create-next-app@latest frontend_temp --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
Copy-Item -Path "frontend_temp\*" -Destination "FE" -Recurse -Force
Copy-Item -Path "frontend_temp\.*" -Destination "FE" -Recurse -Force
Remove-Item -Path "frontend_temp" -Recurse -Force
