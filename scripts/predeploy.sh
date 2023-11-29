# predeploy.sh

# remove the version hash from our base javascript file for a stable URL
find dist -name "main.*.js" -exec mv '{}' dist/main.js \;