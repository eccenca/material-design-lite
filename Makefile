
build: yarn
	rm -rf dist/ src/ utils/
	cp -r node_modules/material-design-lite/* .temp
	git clean .temp -Xfd
	cp -r .temp/* .
	git apply react-mdl.patch
	node_modules/.bin/gulp
	rm -rf .temp/*

yarn:
	yarn
