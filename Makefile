
build: yarn
	rm -rf src/ utils/
	cp -r node_modules/@eccenca/material-lite-one/* .temp
	git clean .temp -Xfd
	cp -r .temp/* .
	git apply react-mdl.patch
	node_modules/.bin/gulp
	rm -rf .temp/*

yarn:
	yarn
