
build: yarn
	rm -rf dist/ src/ utils/
	cp -r node_modules/material-design-lite/* .temp
	git clean .temp -Xfd
	cp -r .temp/* .
	gulp scripts
	rm -rf .temp/*

yarn:
	yarn
